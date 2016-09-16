CGE.CubeGeometry = function() {
    CGE.BufferGeometry.call(this);
};

CGE.CubeGeometry.prototype = Object.assign(Object.create(CGE.VersionObject.prototype), {
    constructor: CGE.CubeGeometry,

    _initData: function() {
        
    },
});

// ================================ CubeMaterial ======================================

CGE.CubeMaterial = function() {
    CGE.Material.call(this);
    Object.assign(this, {
       _cubeMap: undefined,
       _normalMap: undefined,
    });
    let shader = CGE.CubeMaterial.getShader();
    Object.defineProperty(this, "_shader", { value:shader, writable:false });
};

Object.assign(CGE.CubeMaterial, {
    getShader: function() {
        let shader = undefined;
        return function getShader() {
            if (shader === undefined) {
                let vertexShaderText = `#version 100
                attribute vec4 Position;
                attribute vec3 Normal;
                attribute vec2 UV;
                attribute vec3 Tangent;
                varying vec2 o_uv;
                varying vec3 tangentToView0;
                varying vec3 tangentToView1;
                varying vec3 tangentToView2;
                varying vec4 o_position;
                uniform mat4 MVPMatrix;
                uniform mat4 MVMatrix;
                void main()
                {
                    vec3 Binormal = normalize(cross(Tangent, Normal));
                    mat3 normalMatrix = mat3(Tangent, Binormal, Normal);
                    mat3 MVMatrix3 = mat3(
                        MVMatrix[0].xyz, 
                        MVMatrix[1].xyz, 
                        MVMatrix[2].xyz
                    );
                    mat3 tangentToView = MVMatrix3 * normalMatrix;
                    tangentToView0 = tangentToView[0];
                    tangentToView1 = tangentToView[1];
                    tangentToView2 = tangentToView[2];
                    o_uv = UV;
                    o_position = MVMatrix * Position;
                    vec4 position = MVPMatrix * Position;
                    gl_Position = position;
                    // gl_Position.z = gl_Position.w;
                }`;

                let fragmentShaderText = `#version 100
                #extension GL_EXT_draw_buffers : require
                precision highp float;
                varying vec2 o_uv; 
                varying vec3 tangentToView0;
                varying vec3 tangentToView1;
                varying vec3 tangentToView2;
                varying vec4 o_position;
                uniform samplerCube cube;
                uniform sampler2D normalMap;
                uniform mat4 VMatrix;
                uniform mat4 InverseVMatrix;
                vec4 DIR_LIGHT = vec4(1.0, -1.0, 1.0, 0.0);
                vec3 CAMERA = vec3(100.0, 100.0, 100.0);

                void main()
                {
                    vec3 normalTex = texture2D(normalMap, o_uv).xyz;
                    vec3 normal = (normalTex - vec3(0.5)) * 2.0;
                    mat3 normalMatrix = mat3(
                        normalize(tangentToView0), 
                        normalize(tangentToView1), 
                        normalize(tangentToView2)
                    );
                    normal = normalize(normalMatrix * normal);
                    vec3 light = normalize((VMatrix * DIR_LIGHT).xyz);
                    vec3 viewDir = normalize(o_position.xyz);
                    vec3 outDir =  2.0 * dot(viewDir, normal) * normal - viewDir;
                    vec3 o_dir = (InverseVMatrix * vec4(outDir, 0.0)).xyz;
                    vec3 texcoord = vec3(o_dir.x, -o_dir.z, o_dir.y);
                    vec4 color = textureCube(cube, texcoord);
                    gl_FragData[0] = max(dot(light, normal)*0.5 + 0.5, 0.0) * color;
                    normal = normal * 0.5 + vec3(0.5);
                    gl_FragData[1] = vec4(normal, 0.0);
                    // gl_FragColor = color; //vec4(normalTex, 1.0); //color;
                    // gl_FragColor.w = 1.0;
                }`;

                shader = new CGE.Shader();
                shader.setShaderText(vertexShaderText, fragmentShaderText);
                shader.addAttribName(CGE.AttribType.POSITION, 'Position');
                shader.addAttribName(CGE.AttribType.NORMAL, 'Normal');
                shader.addAttribName(CGE.AttribType.TANGENT, 'Tangent');
                shader.addAttribName(CGE.AttribType.UV0, 'UV');
                shader.addTextureName(CGE.MapType.AMBIENT, 'cube');
                shader.addTextureName(CGE.MapType.NORMAL, 'normalMap');
                shader.addMatrixName(CGE.MatrixType.VMatrix, 'VMatrix');
                shader.addMatrixName(CGE.MatrixType.MVMatrix, 'MVMatrix');
                shader.addMatrixName(CGE.MatrixType.InverseVMatrix, 'InverseVMatrix');
                shader.addMatrixName(CGE.MatrixType.MVPMatrix, 'MVPMatrix');
                shader.addMatrixName(CGE.MatrixType.NormalWMatrix, 'NormalWMatrix');
                shader.addMatrixName(CGE.MatrixType.NormalMVMatrix, 'NormalMVMatrix');
            }
            return shader;
        };
    }(),
});

CGE.CubeMaterial.prototype = Object.assign(Object.create(CGE.Material.prototype), {
    constructor: CGE.CubeMaterial,

    setCubeMap: function(cubeTexture) {
        this._cubeMap = cubeTexture;
    },

    setNormalMap: function(normalTexture) {
        this._normalMap = normalTexture;
    },

    getMapProvide: function() {
         return [
            {
                map: this._cubeMap,
                type: CGE.MapType.AMBIENT,
            },
            {
                map: this._normalMap,
                type: CGE.MapType.NORMAL,
            },
        ];
    },
});

// ================================ DeferredMaterial ======================================

CGE.DeferredMaterial = function() {
    CGE.Material.call(this);
    Object.assign(this, {
       _diffuseMap: undefined,
       _normalMap: undefined,
       _specularMap: undefined,
       _roughness: 0,
    });
    let shader = CGE.DeferredMaterial.getShader();
    Object.defineProperty(this, "_shader", { value:shader, writable:false });
};

Object.assign(CGE.DeferredMaterial, {
    getShader: function() {
        let shader = undefined;
        return function getShader() {
            if (shader === undefined) {
                let vertexShaderText = `#version 100
                attribute vec4 Position;
                attribute vec3 Normal;
                attribute vec3 Tangent;
                attribute vec2 UV;
                varying vec2 uv;
                varying vec3 tangentToView0;
                varying vec3 tangentToView1;
                varying vec3 tangentToView2;
                uniform mat4 MVMatrix;
                uniform mat4 MVPMatrix;
                void main()
                {
                    vec3 Binormal = normalize(cross(Tangent, Normal));
                    mat3 normalMatrix = mat3(Tangent, Binormal, Normal);
                    mat3 MVMatrix3 = mat3(
                        MVMatrix[0].xyz, 
                        MVMatrix[1].xyz, 
                        MVMatrix[2].xyz
                    );
                    mat3 tangentToView = MVMatrix3 * normalMatrix;
                    tangentToView0 = tangentToView[0];
                    tangentToView1 = tangentToView[1];
                    tangentToView2 = tangentToView[2];
                    uv = UV;
                    gl_Position = MVPMatrix * Position;
                }`;

                let fragmentShaderText = `#version 100
                #extension GL_EXT_draw_buffers : require
                precision highp float;
                varying vec2 uv;
                varying vec3 tangentToView0;
                varying vec3 tangentToView1;
                varying vec3 tangentToView2;
                uniform sampler2D diffuseMap;
                uniform sampler2D normalMap;
                uniform sampler2D specularMap;

                vec3 encodeNormal(vec3 normal)
                {
                    vec2 enc_spheremap = normalize(normal.xy) * sqrt(normal.z * 0.5 + 0.5);
                    vec2 enc255 = enc_spheremap * 255.0;
                    vec2 residual = floor(fract(enc255) * 16.0);
                    vec3 enc = vec3(floor(enc255), residual.x * 16.0 + residual.y) * (1.0 / 255.0);
                    return enc;
                }

                vec4 encodeDepth(float z)
                {
                    vec4 enc = vec4(1.0, 255.0, 65025.0, 16581375.0) * z;
                    enc = fract(enc);
                    enc -= enc.yzww * vec4(1.0 / 255.0, 1.0 / 255.0, 1.0 / 255.0, 0);
                    return enc;
                }

                void main()
                {
                    vec3 normalTex = texture2D(normalMap, uv).xyz;
                    vec3 normal = (normalTex - vec3(0.5)) * 2.0;
                    mat3 normalMatrix = mat3(
                        normalize(tangentToView0), 
                        normalize(tangentToView1), 
                        normalize(tangentToView2)
                    );
                    normal = normalize(normalMatrix * normal);
                    vec3 color = texture2D(diffuseMap, uv).xyz;
                    float spec = texture2D(specularMap, uv).r;
                    vec3 encodeNorm = encodeNormal(normal);
                    gl_FragData[0] = vec4(color, spec);
                    gl_FragData[1] = vec4(encodeNorm, 0.0);
                }`;
                shader = new CGE.Shader();
                shader.setShaderText(vertexShaderText, fragmentShaderText);
                shader.addAttribName(CGE.AttribType.POSITION, 'Position');
                shader.addAttribName(CGE.AttribType.NORMAL, 'Normal');
                shader.addAttribName(CGE.AttribType.TANGENT, 'Tangent');
                shader.addAttribName(CGE.AttribType.UV0, 'UV');
                shader.addTextureName(CGE.MapType.DIFFUSE, 'diffuseMap');
                shader.addTextureName(CGE.MapType.NORMAL, 'normalMap');
                shader.addTextureName(CGE.MapType.SPECULAR, 'specularMap');
                shader.addMatrixName(CGE.MatrixType.MVPMatrix, 'MVPMatrix');
                shader.addMatrixName(CGE.MatrixType.MVMatrix, 'MVMatrix');
                shader.addMatrixName(CGE.MatrixType.NormalMVMatrix, 'NormalMVMatrix');
            }
            return shader;
        };
    }(),
});


CGE.DeferredMaterial.prototype = Object.assign(Object.create(CGE.Material.prototype), {
    constructor: CGE.DeferredMaterial,

    setDiffuseMap: function(map) {
        this._diffuseMap = map;
    },

    setNormalMap: function(map) {
        this._normalMap = map;
    },

    setSpecularMap: function(map) {
        this._specularMap = map;
    },

    getMapProvide: function() {
        return [
            {
                map: this._diffuseMap,
                type: CGE.MapType.DIFFUSE,
            },
            {
                map: this._normalMap,
                type: CGE.MapType.NORMAL,
            },
            {
                map: this._specularMap,
                type: CGE.MapType.SPECULAR,
            },
        ];
    },

    getPropertyProvide: function() {
        return [
            {
            },
        ];
    },
});

Object.assign(CGE.DeferredMaterial, {
    createFromParameter: function(
        diffuseMapUrl, dMipmap,
        normalMapUrl, nMipmap,
        specularMapUrl, sMipmap
    ) {
        let material = new CGE.DeferredMaterial();
        material.setDiffuseMap(CGE.Texture2d.createFromeImage(diffuseMapUrl, dMipmap));
        material.setNormalMap(CGE.Texture2d.createFromeImage(normalMapUrl, nMipmap));
        let specularMap = CGE.Texture2d.createFromeImage(specularMapUrl, sMipmap);
        material.setSpecularMap(specularMap);
        return material;
    },
});

// ================================ FullScreenTextureMatrial ======================================

CGE.FullScreenTextureMatrial = function(diffuse) {
    CGE.Material.call(this);
    Object.assign(this, {
       _diffuseMap: diffuse,
    });
    let shader = CGE.FullScreenTextureMatrial.getShader();
    Object.defineProperty(this, "_shader", { value:shader, writable:false });
};

Object.assign(CGE.FullScreenTextureMatrial, {
    getShader: function() {
        let shader = undefined;
        return function getShader() {
            if (shader === undefined) {
                let vertexShaderText = "#version 100\n\
                attribute vec4 Position;\n\
                attribute vec2 UV;\n\
                varying vec2 o_uv; \n\
                uniform mat4 WMatrix; \n\
                void main()\n\
                {\n\
                    o_uv = UV;\n\
                    gl_Position = WMatrix * Position;\n\
                }";

                let fragmentShaderText = "#version 100\n\
                precision mediump float;\n\
                varying vec2 o_uv; \n\
                uniform sampler2D diffuse;\n\
                \n\
                void main()\n\
                {\n\
                    vec4 color = texture2D(diffuse, o_uv); \n\
                    gl_FragColor = vec4(color.xyz, 1.0);\n\
                }";
                shader = new CGE.Shader();
                shader.setShaderText(vertexShaderText, fragmentShaderText);
                shader.addAttribName(CGE.AttribType.POSITION, 'Position');
                shader.addAttribName(CGE.AttribType.UV0, 'UV');
                shader.addTextureName(CGE.MapType.DIFFUSE, 'diffuse');
                shader.addMatrixName(CGE.MatrixType.WMatrix, 'WMatrix');
            }
            return shader;
        };
    }(),
});

CGE.FullScreenTextureMatrial.prototype = Object.assign(Object.create(CGE.Material.prototype), {
    constructor: CGE.FullScreenTextureMatrial,

    setDiffuseMap: function(map) {
        this._diffuseMap = map;
    },

    getMapProvide: function() {
        return [
            {
                map: this._diffuseMap,
                type: CGE.MapType.DIFFUSE,
            },
        ];
    },
});

// ================================ DepthTextureShowingMatrial ======================================

CGE.DepthTextureShowingMatrial = function(diffuse) {
    CGE.Material.call(this);
    Object.assign(this, {
       _diffuseMap: diffuse,
    });
    let shader = CGE.DepthTextureShowingMatrial.getShader();
    Object.defineProperty(this, "_shader", { value:shader, writable:false });
};

Object.assign(CGE.DepthTextureShowingMatrial, {
    getShader: function() {
        let shader = undefined;
        return function getShader() {
            if (shader === undefined) {
                let vertexShaderText = "#version 100\n\
                attribute vec4 Position;\n\
                attribute vec2 UV;\n\
                varying vec2 o_uv; \n\
                uniform mat4 WMatrix; \n\
                void main()\n\
                {\n\
                    o_uv = UV;\n\
                    gl_Position = WMatrix * Position;\n\
                }";

                let fragmentShaderText = `#version 100
                precision mediump float;
                varying vec2 o_uv;
                uniform sampler2D diffuse;

                void main()
                {
                    vec4 depth = texture2D(diffuse, o_uv);
                    float depth_value = depth.x;
                    gl_FragColor = vec4(vec3(pow(depth_value, 2000.0)), 1.0);
                    // gl_FragColor = depth;
                }`;
                shader = new CGE.Shader();
                shader.setShaderText(vertexShaderText, fragmentShaderText);
                shader.addAttribName(CGE.AttribType.POSITION, 'Position');
                shader.addAttribName(CGE.AttribType.UV0, 'UV');
                shader.addTextureName(CGE.MapType.DIFFUSE, 'diffuse');
                shader.addMatrixName(CGE.MatrixType.WMatrix, 'WMatrix');
            }
            return shader;
        };
    }(),
});

CGE.DepthTextureShowingMatrial.prototype = Object.assign(Object.create(CGE.Material.prototype), {
    constructor: CGE.DepthTextureShowingMatrial,

    setDiffuseMap: function(map) {
        this._diffuseMap = map;
    },

    getMapProvide: function() {
        return [
            {
                map: this._diffuseMap,
                type: CGE.MapType.DIFFUSE,
            },
        ];
    },
});

// ================================ SpecularTextureShowingMatrial ======================================

CGE.SpecularTextureShowingMatrial = function(diffuse) {
    CGE.Material.call(this);
    Object.assign(this, {
       _diffuseMap: diffuse,
    });
    let shader = CGE.SpecularTextureShowingMatrial.getShader();
    Object.defineProperty(this, "_shader", { value:shader, writable:false });
};

Object.assign(CGE.SpecularTextureShowingMatrial, {
    getShader: function() {
        let shader = undefined;
        return function getShader() {
            if (shader === undefined) {
                let vertexShaderText = "#version 100\n\
                attribute vec4 Position;\n\
                attribute vec2 UV;\n\
                varying vec2 o_uv; \n\
                uniform mat4 WMatrix; \n\
                void main()\n\
                {\n\
                    o_uv = UV;\n\
                    gl_Position = WMatrix * Position;\n\
                }";

                let fragmentShaderText = `#version 100
                precision mediump float;
                varying vec2 o_uv;
                uniform sampler2D diffuse;

                void main()
                {
                    float color = texture2D(diffuse, o_uv).a;
                    gl_FragColor = vec4(vec3(color), 1.0);
                }`;
                shader = new CGE.Shader();
                shader.setShaderText(vertexShaderText, fragmentShaderText);
                shader.addAttribName(CGE.AttribType.POSITION, 'Position');
                shader.addAttribName(CGE.AttribType.UV0, 'UV');
                shader.addTextureName(CGE.MapType.DIFFUSE, 'diffuse');
                shader.addMatrixName(CGE.MatrixType.WMatrix, 'WMatrix');
            }
            return shader;
        };
    }(),
});

CGE.SpecularTextureShowingMatrial.prototype = Object.assign(Object.create(CGE.Material.prototype), {
    constructor: CGE.SpecularTextureShowingMatrial,

    setDiffuseMap: function(map) {
        this._diffuseMap = map;
    },

    getMapProvide: function() {
        return [
            {
                map: this._diffuseMap,
                type: CGE.MapType.DIFFUSE,
            },
        ];
    },
});
