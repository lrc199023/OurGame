CGE.CubeGeometry = function() {
    CGE.BufferGeometry.call(this);
};

CGE.CubeGeometry.prototype = Object.assign(Object.create(CGE.VersionObject.prototype), {
    constructor: CGE.CubeGeometry,

    _initData: function() {
        
    },
});

CGE.DeferredMaterial = function() {
    CGE.Material.call(this);
    Object.assign(this, {
       _diffuseMap: undefined,
       _normalMap: undefined,
       _specularMap: undefined,
       _roughness: 0,
    });
};

Object.assign(CGE.DeferredMaterial, {
    getShader: function() {
        let shader = undefined;
        return function getShader() {
            if (shader === undefined) {
                let vertexShaderText = "#version 100\n\
                attribute vec4 Position;\n\
                attribute vec3 Normal;\n\
                attribute vec2 UV;\n\
                varying vec2 o_uv; \n\
                varying vec3 o_normal; \n\
                uniform mat4 MVPMatrix; \n\
                uniform mat4 NormalWMatrix; \n\
                void main()\n\
                {\n\
                    o_uv = UV;\n\
                    o_normal = Normal;\n\
                    gl_Position = WMatrix * Position;\n\
                }";

                let fragmentShaderText = "#version 100\n\
                #extension GL_EXT_draw_buffers : require \n\
                precision highp float;\n\
                varying vec2 o_uv; \n\
                varying vec3 o_normal; \n\
                uniform sampler2D diffuse; \n\
                uniform sampler2D normal; \n\
                uniform sampler2D specular; \n\
                \n\
                void main() \n\
                {\n\
                    vec4 color = texture2D(diffuse, o_uv); \n\
                    gl_FragData[0] = vec4(color.xyz, 1.0); \n\
                    gl_FragData[0] = vec4(color.xyz, 1.0); \n\
                }";
                shader = new CGE.Shader();
                shader.setShaderText(vertexShaderText, fragmentShaderText);
                shader.addAttribName(CGE.AttribType.POSITION, 'Position');
                shader.addAttribName(CGE.AttribType.NORMAL, 'Noraml');
                shader.addAttribName(CGE.AttribType.UV0, 'UV');
                shader.addTextureName(CGE.MapType.DIFFUSE, 'diffuse');
                shader.addTextureName(CGE.MapType.NORMAL, 'normal');
                shader.addTextureName(CGE.MapType.SPECULAR, 'specular');
                shader.addMatrixName(CGE.MatrixType.WMatrix, 'MVPMatrix');
                shader.addMatrixName(CGE.MatrixType.NormalWMatrix, 'NormalWMatrix');
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