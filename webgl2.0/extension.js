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
                precision mediump float;
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
                    enc_spheremap = enc_spheremap * 0.5 + vec2(0.5);
                    vec2 enc255 = enc_spheremap * 255.0;
                    vec2 residual = floor(fract(enc255) * 16.0);
                    vec3 enc = vec3(floor(enc255), residual.x * 16.0 + residual.y) / 255.0;
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
                    vec3 encodeNorm = normal;// encodeNormal(normal);
                    vec3 color = texture2D(diffuseMap, uv).xyz;
                    float spec = texture2D(specularMap, uv).r;
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

// ================================ FullScreenTextureMaterial ======================================

CGE.FullScreenTextureMaterial = function(diffuse) {
    CGE.Material.call(this);
    Object.assign(this, {
       _diffuseMap: diffuse,
    });
    let shader = CGE.FullScreenTextureMaterial.getShader();
    Object.defineProperty(this, "_shader", { value:shader, writable:false });
};

Object.assign(CGE.FullScreenTextureMaterial, {
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

CGE.FullScreenTextureMaterial.prototype = Object.assign(Object.create(CGE.Material.prototype), {
    constructor: CGE.FullScreenTextureMaterial,

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

// ================================ DepthTextureShowingMaterial ======================================

CGE.DepthTextureShowingMaterial = function(diffuse) {
    CGE.Material.call(this);
    Object.assign(this, {
       _diffuseMap: diffuse,
    });
    let shader = CGE.DepthTextureShowingMaterial.getShader();
    Object.defineProperty(this, "_shader", { value:shader, writable:false });
};

Object.assign(CGE.DepthTextureShowingMaterial, {
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
                    float depth_value = depth.x; // dot(depth.xyz, vec3(1.0, 1.0 / 255.0, 1.0 / 65025.0));
                    gl_FragColor = vec4(vec3(pow(depth_value, 2000.0)), 1.0);
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

CGE.DepthTextureShowingMaterial.prototype = Object.assign(Object.create(CGE.Material.prototype), {
    constructor: CGE.DepthTextureShowingMaterial,

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

// ================================ SpecularTextureShowingMaterial ======================================

CGE.SpecularTextureShowingMaterial = function(diffuse) {
    CGE.Material.call(this);
    Object.assign(this, {
       _diffuseMap: diffuse,
    });
    let shader = CGE.SpecularTextureShowingMaterial.getShader();
    Object.defineProperty(this, "_shader", { value:shader, writable:false });
};

Object.assign(CGE.SpecularTextureShowingMaterial, {
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

CGE.SpecularTextureShowingMaterial.prototype = Object.assign(Object.create(CGE.Material.prototype), {
    constructor: CGE.SpecularTextureShowingMaterial,

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

// ================================ SSAOPostProcessMaterial ======================================

CGE.SSAOPostProcessMaterial = function(colorTexture, normalTexture, depthTexture, randomTexture) {
    CGE.Material.call(this);
    Object.assign(this, {
       _colorTexture: colorTexture,
       _normalTexture: normalTexture,
       _depthTexture: depthTexture,
       _randomTexture: randomTexture,
    });
    let shader = CGE.SSAOPostProcessMaterial.getShader();
    Object.defineProperty(this, "_shader", { value:shader, writable:false });
};

Object.assign(CGE.SSAOPostProcessMaterial, {
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
                #extension GL_OES_standard_derivatives : require
                precision highp float;
                varying vec2 o_uv;
                uniform sampler2D colorTexture;
                uniform sampler2D normalTexture;
                uniform sampler2D depthTexture;
                uniform sampler2D randomTexture;
                uniform mat4 PMatrix;
                uniform mat4 WMatrix;
                uniform mat4 VMatrix;
                uniform mat4 InversePMatrix;

                const float DL = 0.78539816;
                const vec4 light = vec4(-0.6, -0.8, 1.0, 0.0);

                const int samples = 8;
                const float radius = 5.0;

                vec3 decodeNormal(vec3 enc)
                {
                    float nz = floor(enc.z * 255.0) / 16.0;
                    vec2 n = enc.xy + vec2(floor(nz) / 16.0, fract(nz)) / 255.0;
                    
                    // vec4 nn = vec4(n, 1.0, 1.0) * vec4(2.0, 2.0, 0, 0) + vec4(-1, -1, 1, -1);
                    // float l = dot(nn.xyz, -nn.xyw);
                    // return vec3(nn.xy * sqrt(l), l) * 2.0; + vec3(0, 0, -1);

                    n = (n - vec2(0.5)) * 2.0;
                    vec3 normal;
                    normal.z = length(n) * 2.0 - 1.0;
                    normal.xy = normalize(n) * sqrt(1.0 - normal.z * normal.z);
                    return normal;
                }

                vec3 viewPos(vec2 uv, float depth)
                {
                    float vz = -PMatrix[3][2] / (depth + PMatrix[2][2]);
                    vec2 fuv = (uv - vec2(0.5)) * 2.0;
                    vec2 vxy = vec2(-vz / PMatrix[0][0], -vz / PMatrix[1][1]) * fuv;
                    vec3 view_position = vec3(vxy, vz);
                    return view_position;
                }

                float doAmbientOcclusion(vec2 tcoord,vec2 iuv, vec3 p, vec3 cnorm)  
                {  
                    vec2 uv = tcoord + iuv;
                    float depth = texture2D(depthTexture, uv).r;
                    vec3 diff = viewPos(uv, depth) - p;  
                    vec3 v = normalize(diff);  
                    float d = length(diff) * 0.75;  
                    return max(0.0, dot(cnorm, v) - 0.5) * (1.0 / (1.0 + d)) * 10.0;  
                } 

                vec2 getRandom(vec2 uv, vec2 screenSize)  
                {   
                    return normalize(texture2D(randomTexture, screenSize * uv / 64.0).xy * 2.0 - 1.0);  
                }  

                void main()
                {
                    vec4 color = texture2D(colorTexture, o_uv);
                    vec3 normal = texture2D(normalTexture, o_uv).xyz;
                    float depth_z = texture2D(depthTexture, o_uv).r;
                    vec3 v_pos = viewPos(o_uv, depth_z);
                    vec3 view_normal = normal;// normalize(decodeNormal(normal));
                    vec2 offset = vec2(dFdx(o_uv).x, dFdy(o_uv).y);
                    vec2 screenSize = vec2(1.0) / offset;
                    float ao = 0.0;
                    float l = -1.0;
                    float v_light_ness = max(0.0, dot(normalize((VMatrix * light).xyz), view_normal));
                    float dep = 5.0 / depth_z; //pow(depth_z, 2000.0);
                    vec2 rand = getRandom(o_uv, screenSize);
                    for (int i = 0; i < samples; i++) 
                    {
                        vec2 p = vec2(cos(l), sin(l));
                        l += DL;
                        vec2 coord1 = reflect(p, rand) * dep;  
                        vec2 coord2 = vec2(coord1.x*0.707 - coord1.y*0.707, coord1.x*0.707 + coord1.y*0.707) * offset;  
                        ao += doAmbientOcclusion(o_uv, coord1*0.25, v_pos, view_normal);
                        ao += doAmbientOcclusion(o_uv, coord2*0.5, v_pos, view_normal);
                        ao += doAmbientOcclusion(o_uv, coord1*0.75, v_pos, view_normal);
                        ao += doAmbientOcclusion(o_uv, coord2, v_pos, view_normal);
                    } 
                    ao /= float(samples) * 4.0;
                    ao = 1.0 - ao;
                    vec3 lumcoeff = vec3( 0.299, 0.587, 0.114 );
                    float lum = dot( color.rgb, lumcoeff );
                    vec3 luminance = vec3( lum );
                    vec3 fao = mix( vec3( ao ), vec3( 1.0 ), luminance * 0.5 );                    
                    gl_FragColor = vec4(v_light_ness * color.xyz * fao, 1.0);
                    // gl_FragColor = vec4(color.xyz, 1.0);
                }`;
                shader = new CGE.Shader();
                shader.setShaderText(vertexShaderText, fragmentShaderText);
                shader.addAttribName(CGE.AttribType.POSITION, 'Position');
                shader.addAttribName(CGE.AttribType.UV0, 'UV');
                shader.addTextureName(CGE.MapType.DIFFUSE, 'colorTexture');
                shader.addTextureName(CGE.MapType.NORMAL, 'normalTexture');
                shader.addTextureName(CGE.MapType.DEPTH, 'depthTexture');
                shader.addTextureName(CGE.MapType.OTHER0, 'randomTexture');
                shader.addMatrixName(CGE.MatrixType.WMatrix, 'WMatrix');
                shader.addMatrixName(CGE.MatrixType.PMatrix, 'PMatrix');
                shader.addMatrixName(CGE.MatrixType.VMatrix, 'VMatrix');
                shader.addMatrixName(CGE.MatrixType.InversePMatrix, 'InversePMatrix');
            }
            return shader;
        };
    }(),
});

CGE.SSAOPostProcessMaterial.prototype = Object.assign(Object.create(CGE.Material.prototype), {
    constructor: CGE.SSAOPostProcessMaterial,

    getPropertyProvide: function() {
        return [
        ];
    },

    getMapProvide: function() {
        return [
            {
                map: this._colorTexture,
                type: CGE.MapType.DIFFUSE,
            },
            {
                map: this._normalTexture,
                type: CGE.MapType.NORMAL,
            },
            {
                map: this._depthTexture,
                type: CGE.MapType.DEPTH,
            },
            {
                map: this._randomTexture,
                type: CGE.MapType.OTHER0,
            }
        ];
    },
});
