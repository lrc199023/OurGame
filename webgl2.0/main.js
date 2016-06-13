var CGE = {VERSION:'01'};
CGE.AttribTypeCount = 0;
CGE.MapTypeCount = 0;
CGE.UniformCount = 0;
CGE.materialCount = 0;
Object.assign( CGE, {
    AttribType : {
        POSITION            : CGE.AttribTypeCount++,
        NORMAL              : CGE.AttribTypeCount++,
        TANGENT             : CGE.AttribTypeCount++,
        BINORMAL            : CGE.AttribTypeCount++,
        COLOR               : CGE.AttribTypeCount++,
        TEXCOORD0           : CGE.AttribTypeCount++,
        TEXCOORD1           : CGE.AttribTypeCount++,
        TEXCOORD2           : CGE.AttribTypeCount++,
        TEXCOORD3           : CGE.AttribTypeCount++,
        TEXCOORD4           : CGE.AttribTypeCount++,
    },

    MapType : {
        DIFFUSE             : CGE.MapTypeCount++,
        NORMAL              : CGE.MapTypeCount++,
        SPECULAR            : CGE.MapTypeCount++,
        BUMP                : CGE.MapTypeCount++,
        DEPTH               : CGE.MapTypeCount++,
        OTHER0              : CGE.MapTypeCount++,
        OTHER1              : CGE.MapTypeCount++,
        OTHER2              : CGE.MapTypeCount++,
        OTHER3              : CGE.MapTypeCount++,
        OTHER4              : CGE.MapTypeCount++,
    },

    UniformType : {
        //W : world, 
        //M : model, 
        //V : view, 
        //P : projection
        WMatrix                     : CGE.UniformCount++,
        MVMatrix                    : CGE.UniformCount++,
        MVPMatrix                   : CGE.UniformCount++,
        NormalWMatrix               : CGE.UniformCount++,
        NormalMVMatrix              : CGE.UniformCount++,
        NormalMVPMatrix             : CGE.UniformCount++,
        LightPosition               : CGE.UniformCount++,
        OTHER0                      : CGE.UniformCount++,
        OTHER1                      : CGE.UniformCount++,
        OTHER2                      : CGE.UniformCount++,
    },

    ZERO                           : 0,
    ONE                            : 1,
    SRC_COLOR                      : 0x0300,
    ONE_MINUS_SRC_COLOR            : 0x0301,
    SRC_ALPHA                      : 0x0302,
    ONE_MINUS_SRC_ALPHA            : 0x0303,
    DST_ALPHA                      : 0x0304,
    ONE_MINUS_DST_ALPHA            : 0x0305,

    DST_COLOR                      : 0x0306,
    ONE_MINUS_DST_COLOR            : 0x0307,
    SRC_ALPHA_SATURATE             : 0x0308,

    FUNC_ADD                       : 0x8006,
    BLEND_EQUATION                 : 0x8009,
    BLEND_EQUATION_RGB             : 0x8009,
    BLEND_EQUATION_ALPHA           : 0x883D,

    FUNC_SUBTRACT                  : 0x800A,
    FUNC_REVERSE_SUBTRACT          : 0x800B,

    BLEND_DST_RGB                  : 0x80C8,
    BLEND_SRC_RGB                  : 0x80C9,
    BLEND_DST_ALPHA                : 0x80CA,
    BLEND_SRC_ALPHA                : 0x80CB,
    ONE_MINUS_CONSTANT_COLOR       : 0x8002,
    CONSTANT_ALPHA                 : 0x8003,
    ONE_MINUS_CONSTANT_ALPHA       : 0x8004,
    BLEND_COLOR                    : 0x8005,

    BYTE                           : 0x1400,
    UNSIGNED_BYTE                  : 0x1401,
    SHORT                          : 0x1402,
    UNSIGNED_SHORT                 : 0x1403,
    INT                            : 0x1404,
    UNSIGNED_INT                   : 0x1405,
    FLOAT                          : 0x1406,


    DEPTH_ATTACHMENT               : 0x8D00,
    STENCIL_ATTACHMENT             : 0x8D20,
    DEPTH_STENCIL_ATTACHMENT       : 0x821A,
    COLOR_ATTACHMENT0              : 0x8CE0,
    COLOR_ATTACHMENT1              : 0x8CE1,
    COLOR_ATTACHMENT2              : 0x8CE2,
    COLOR_ATTACHMENT3              : 0x8CE3,
    COLOR_ATTACHMENT4              : 0x8CE4,
    COLOR_ATTACHMENT5              : 0x8CE5,
    COLOR_ATTACHMENT6              : 0x8CE6,
    COLOR_ATTACHMENT7              : 0x8CE7,
    COLOR_ATTACHMENT8              : 0x8CE8,
    COLOR_ATTACHMENT9              : 0x8CE9,
    COLOR_ATTACHMENT10             : 0x8CEA,
    COLOR_ATTACHMENT11             : 0x8CEB,
    COLOR_ATTACHMENT12             : 0x8CEC,
    COLOR_ATTACHMENT13             : 0x8CED,
    COLOR_ATTACHMENT14             : 0x8CEE,
    COLOR_ATTACHMENT15             : 0x8CEF,

    POINTS                         : 0x0000,
    LINES                          : 0x0001,
    LINE_LOOP                      : 0x0002,
    LINE_STRIP                     : 0x0003,
    TRIANGLES                      : 0x0004,
    TRIANGLE_STRIP                 : 0x0005,
    TRIANGLE_FAN                   : 0x0006,

    STREAM_DRAW                    : 0x88E0,
    STATIC_DRAW                    : 0x88E4,
    DYNAMIC_DRAW                   : 0x88E8,

    FLOAT_VEC2                     : 0x8B50,
    FLOAT_VEC3                     : 0x8B51,
    FLOAT_VEC4                     : 0x8B52,
    INT_VEC2                       : 0x8B53,
    INT_VEC3                       : 0x8B54,
    INT_VEC4                       : 0x8B55,
    BOOL                           : 0x8B56,
    BOOL_VEC2                      : 0x8B57,
    BOOL_VEC3                      : 0x8B58,
    BOOL_VEC4                      : 0x8B59,
    FLOAT_MAT2                     : 0x8B5A,
    FLOAT_MAT3                     : 0x8B5B,
    FLOAT_MAT4                     : 0x8B5C,
    FLOAT_MAT2x3                   : 0x8B65,
    FLOAT_MAT2x4                   : 0x8B66,
    FLOAT_MAT3x2                   : 0x8B67,
    FLOAT_MAT3x4                   : 0x8B68,
    FLOAT_MAT4x2                   : 0x8B69,
    FLOAT_MAT4x3                   : 0x8B6A,
    SAMPLER_2D                     : 0x8B5E,
    SAMPLER_3D                     : 0x8B5F,
    SAMPLER_CUBE                   : 0x8B60,
    SAMPLER_2D_SHADOW              : 0x8B62,

    DEPTH_COMPONENT                : 0x1902,
    ALPHA                          : 0x1906,
    RGB                            : 0x1907,
    RGBA                           : 0x1908,

    NEAREST                        : 0x2600,
    LINEAR                         : 0x2601,
    NEAREST_MIPMAP_NEAREST         : 0x2700,
    LINEAR_MIPMAP_NEAREST          : 0x2701,
    NEAREST_MIPMAP_LINEAR          : 0x2702,
    LINEAR_MIPMAP_LINEAR           : 0x2703,

    REPEAT                         : 0x2901,
    CLAMP_TO_EDGE                  : 0x812F,
    MIRRORED_REPEAT                : 0x8370,

    UNSIGNED_SHORT_4_4_4_4         : 0x8033,
    UNSIGNED_SHORT_5_5_5_1         : 0x8034,
    UNSIGNED_SHORT_5_6_5           : 0x8363,

    bufferGeometryCount : 0,
    materialCount : 0,
    textureCount : 0,
    shaderCount : 0,
});

//======================================= BufferGeometry =========================================

CGE.BufferGeometry = function() {
    Object.defineProperty(this, 'id', {writable: false, value: CGE.bufferGeometryCount++});
    this.needUpdate = 0;
    this.attributeDatas = [];
    this.indexData = undefined;
    this.drawParameter = undefined;

    var updateVersion = 0;
    this.needsUpdate = function() {
        updateVersion++;
    };

    this.getUpdateVersion = function(version) {
        return updateVersion;
    };
};

CGE.BufferGeometry.prototype.createAttributeParam = function() {
    return {
        data : undefined,
        size : 0,
        type : undefined,
        stride : 0,
        attribPointers : [],
    };
};

CGE.BufferGeometry.prototype.addSingleAttribute = function(name, attribute, num, type, data, usage) {
    var attributeData = {
        usage: usage || CGE.STATIC_DRAW,
        data: data,
        size: 1,
        type: type,
        stride: 0,
        attribPointers: [],
    };
    attributeData.attribPointers.push({
        name : name,
        attribute : attribute,
        num : num,
        offset : 0,
    });
    this.attributeDatas.push(attributeData);
};

CGE.BufferGeometry.prototype.addMultiAttribute = function(attributeParameters, type, stride, data, usage) {
    var attributeData = {
        usage: usage || CGE.STATIC_DRAW,
        data: data,
        size: attributeParameters.length,
        type: type,
        stride: stride,
        attribPointers: [],
    };
    attributeParameters.forEach(function(param) {
        attributeData.attribPointers.push({
            name : param.name,
            attribute : param.attribute,
            num : param.num,
            offset : param.offset,
        });
    });
    this.attributeDatas.push(attributeData);
};

CGE.BufferGeometry.prototype.setIndexData = function(type, data, usage) {
    this.indexData = {
        type : type,
        data : data,
        usage : usage || CGE.STATIC_DRAW,
    };
};

CGE.BufferGeometry.prototype.setDrawParameter = function(mode, count, offset) {
    this.drawParameter = {
        mode : mode,
        count : count,
        offset : offset,
    };
};

//======================================= Shader =========================================

CGE.Shader = function() {
    Object.defineProperty(this, 'id', {writable: false, value: CGE.shaderCount++});
    this.vertexShaderText = '';
    this.fragmentShaderText = '';
    this.requireAttributeLocations = new Map();
    this.requireUniformNames = new Map();
    this.requireTextureNames = new Map();
    this.requireRenderLocarions = new Map();

    var updateVersion = 0;
    this.needsUpdate = function() {
        updateVersion++;
    };

    this.getUpdateVersion = function(version) {
        return updateVersion;
    };
};

CGE.Shader.prototype.setShaderText = function(vs, fs) {
    this.vertexShaderText = vs;
    this.fragmentShaderText = fs;
};

CGE.Shader.prototype.addAttribLocation = function(attribType, location) {
    this.requireAttributeLocations.set(attribType, location);
};

CGE.Shader.prototype.addAttribLocations = function(array) {
    array.forEach(function(object){
        this.requireAttributeLocations.set(object.type, object.location);
    });
};

CGE.Shader.prototype.getAttribLocation = function(attribType) {
    return this.requireAttributeLocations.get(attribType);
};

CGE.Shader.prototype.addUniformName = function(uniformType, name) {
    this.requireUniformNames.set(uniformType, name);
};

CGE.Shader.prototype.addUniformNames = function(array) {
    array.forEach(function(object){
        this.requireUniformNames.set(object.type, object.name);
    });
};

CGE.Shader.prototype.getUniformName = function(uniformType) {
    return this.requireUniformNames.get(uniformType);
};

CGE.Shader.prototype.addTextureName = function(mapType, name) {
    this.requireTextureNames.set(mapType, name);
};

CGE.Shader.prototype.addTextureNames = function(array) {
    array.forEach(function(object){
        this.requireTextureNames.set(object.type, object.name);
    });
};

CGE.Shader.prototype.getTextureName = function(mapType) {
    return this.requireTextureNames.get(mapType);
};

CGE.Shader.prototype.addRenderLocation = function(renderType, location) {
    this.requireRenderLocarions.set(renderType, location);
};

CGE.Shader.prototype.addRenderLocation = function(array) {
    array.forEach(function(object){
        this.requireRenderLocarions.set(object.type, object.location);
    });
};

CGE.Shader.prototype.getRenderLocation = function(renderType) {
    return this.requireRenderLocarions.get(renderType);
};

//======================================= Texture2d =========================================

CGE.Texture = function() {
    Object.defineProperty(this, 'id', {writable: false, value: CGE.textureCount++});
    Object.assign(this, {
        minFilter : CGE.LINEAR,
        magFilter : CGE.LINEAR,
    });
    var updateVersion = 0;
    this.needsUpdate = function() {
        updateVersion++;
    };

    this.getUpdateVersion = function(version) {
        return updateVersion;
    };
};

CGE.Texture2d = function() {
    CGE.Texture.call(this);
    Object.assign(this, {
        wrapS : CGE.CLAMP_TO_EDGE,
        wrapT : CGE.CLAMP_TO_EDGE,
    });
    this.src = undefined;
    this.format = CGE.RGB;
    this.internalformat = CGE.RGB;
    this.type = CGE.UNSIGNED_BYTE;
    this.width = 0;
    this.height = 0;
};

CGE.Texture2d.prototype = new CGE.Texture();

CGE.Texture2d.prototype.setImageSrc = function(src) {
    this.src = src;
};

CGE.Texture2d.prototype.setSize = function(width, height) {
    this.width = width;
    this.height = height;
};

//======================================= Material =========================================

CGE.Material = function() {
    Object.defineProperty(this, 'id', {writable: false, value: CGE.materialCount++});
    Object.assign(this, {
        shaderData : undefined,
    });
};

CGE.Material.prototype.setShader = function(shaderData) {
    this.shaderData = shaderData;
};

CGE.Material.prototype.getMapRequests = function() {
    return [];
};

CGE.BaseMaterial = function() {
    CGE.Material.call(this);
    Object.assign(this, {
       diffuseMap : undefined,
    });
};

CGE.BaseMaterial.prototype = new CGE.Material();

CGE.BaseMaterial.prototype.setDiffuseMap = function(map) {
    this.diffuseMap = map;
};

CGE.BaseMaterial.prototype.getMapRequests = function() {
    return [
        {
            map: this.diffuseMap,
            mapType: CGE.MapType.DIFFUSE,
        },
    ];
};

//======================================= Camera =========================================

CGE.Camera = function() {
    
};

//======================================= WebGL2Renderer =========================================

CGE.WebGL2Renderer = function() {
    /// TODO: The Function name MUST use '_' inital that all called _gl function;

    var _canvas = document.createElement('canvas');
    let _gl = _canvas.getContext('webgl2');

    if (_gl === undefined) {
        alert('Can not use webgl 2.0');
    }

    var max_fps = 60;
    var isClearColor = true;
    var isClearDepth = true;
    var isClearStencil = false;

    var initializedBufferMap = new Map();
    var initialisedShaderMap = new Map();
    var initialisedTextureMap = new Map();

    this.setSize = function(width, height) {
        _canvas.width = width;
        _canvas.height = height;
        _gl.viewport(0, 0, width, height);
    };

    this.setOffset = function(offsetX, offsetY) {
        _gl.viewport(offsetX, offsetY, _canvas.width, _canvas.height);
    };

    this.setClearColor = function(r, g, b, a) {
        _gl.clearColor(r, g, b, a);
    };

    this.getCanvas = function() {
        return _canvas;
    };

    this.clear = function(color, depth, stencil) {
        _gl.clear(
            (color ? _gl.COLOR_BUFFER_BIT : 0) |
            (depth ? _gl.DEPTH_BUFFER_BIT : 0) |
            (stencil ? _gl.STENCIL_BUFFER_BIT : 0)
        );
    };

    var vertexBufferData = function() {
        Object.assign(this, {

        });
    };

    var GeometryDraw = function(mode, offset, count, type) {
        Object.assign(this, {
            mode: mode,
            offset: offset,
            count: count,
            type: type,
        });
    };
    GeometryDraw.prototype.apply = function() {
        _gl.drawArrays(this.mode, this.offset, this.count);
    };

    var GeometryDrawWithIndex = function(mode, offset, count, type) {
        GeometryDraw.call(this, mode, offset, count, type);
    };
    GeometryDrawWithIndex.prototype = new GeometryDraw();

    GeometryDrawWithIndex.prototype.apply = function() {
        _gl.drawElements(this.mode, this.count, this.type, this.offset);
    };

    this.loadVertexData = function(vertexData) {
        var data = initializedBufferMap.get(vertexData.id);
        if (data !== undefined && data.localVersion === vertexData.getUpdateVersion()) 
            return data.buffer;
        if (vertexData.attributeDatas.length === 0) 
            return undefined;

        var vbos = [];
        var ibo = undefined;
        var draw = undefined;

        var drawParameter = vertexData.drawParameter;
        vertexData.attributeDatas.forEach(function(attribute){
            var vbo = _gl.createBuffer();
            _gl.bindBuffer(_gl.ARRAY_BUFFER, vbo);
            _gl.bufferData(_gl.ARRAY_BUFFER, attribute.data, attribute.usage);
            _gl.bindBuffer(_gl.ARRAY_BUFFER, null);
            vbos.push(vbo);
        });
        if (vertexData.indexData) {
            ibo = _gl.createBuffer();
            _gl.bindBuffer(_gl.ELEMENT_ARRAY_BUFFER, ibo);
            _gl.bufferData(_gl.ELEMENT_ARRAY_BUFFER, vertexData.indexData.data, vertexData.indexData.usage);
            _gl.bindBuffer(_gl.ELEMENT_ARRAY_BUFFER, null);
            draw = new GeometryDrawWithIndex(drawParameter.mode, drawParameter.offset, drawParameter.count, vertexData.indexData.type);
        } else {
            draw = new GeometryDraw(drawParameter.mode, drawParameter.offset, drawParameter.count, 0);
        }

        var bufferData = {
            vbos: vbos,
            ibo: ibo,
            vao: undefined,
            draw: draw,
            vertexData: vertexData,
        };
        initializedBufferMap.set(vertexData.id, {buffer:bufferData, localVersion:vertexData.getUpdateVersion()});
        return bufferData;
    };

    this.bufferGeometryDraw = function(bufferData, shader) {
        if (bufferData.vao === undefined) {
            var vao = _gl.createVertexArray();
            _gl.bindVertexArray(vao);
            for (var i = 0; i < bufferData.vbos.length; i++) {
                var attribute = bufferData.vertexData.attributeDatas[i];
                var vbo = bufferData.vbos[i];
                _gl.bindBuffer(_gl.ARRAY_BUFFER, vbo);
                attribute.attribPointers.forEach(function(param){
                    var location = shader.shaderData.getAttribLocation(param.attribute);
                    if (location === undefined) 
                        return; 
                    _gl.enableVertexAttribArray(location);
                    _gl.vertexAttribPointer(location, param.num, attribute.type, false, attribute.stride, param.offset);
                });
            }
            if (bufferData.ibo) {
                _gl.bindBuffer(_gl.ELEMENT_ARRAY_BUFFER, bufferData.ibo);
            }
            _gl.bindVertexArray(null);
            bufferData.vao = vao;
        }

        /// TODO: remove _gl
        _gl.bindVertexArray(bufferData.vao);
        bufferData.draw.apply();
    };

    var shaderProgram = function(shader, shaderData) {
        this.program = shader;
        this.shaderData = shaderData;
    };

    shaderProgram.prototype.useShaderProgram = function() {
        _gl.useProgram(this.program);
    };

    shaderProgram.prototype.getShaderProgram = function() {
        return this.program;
    };

    this.loadShaderData = function(shaderData) {
        var data = initialisedShaderMap.get(shaderData.id);
        if (data !== undefined && data.localVersion === shaderData.getUpdateVersion()) 
            return data.shader;

        var vs = _gl.createShader(_gl.VERTEX_SHADER);
        _gl.shaderSource(vs, shaderData.vertexShaderText);
        _gl.compileShader(vs);
        if (_gl.getShaderParameter(vs, _gl.COMPILE_STATUS) == 0) {
            console.error(shaderData.vertexShaderText);
            console.error(_gl.getShaderInfoLog(vs));
            _gl.deleteShader(vs);
            return undefined;
        }
          
        var fs = _gl.createShader(_gl.FRAGMENT_SHADER);
        _gl.shaderSource(fs, shaderData.fragmentShaderText);
        _gl.compileShader(fs);
        if (_gl.getShaderParameter(fs, _gl.COMPILE_STATUS) == 0) {
            console.error(shaderData.fragmentShaderText);
            console.error(_gl.getShaderInfoLog(fs));
            _gl.deleteShader(vs);
            _gl.deleteShader(fs);
            return undefined;
        }

        var program = _gl.createProgram();
        _gl.attachShader(program, vs);
        _gl.attachShader(program, fs);

        _gl.linkProgram(program);

        if (!_gl.getProgramParameter(program, _gl.LINK_STATUS)) {
            console.error("Could not initialise shaders shader " + _gl.getProgramInfoLog(shader));
        }

        _gl.deleteShader(vs);
        _gl.deleteShader(fs);

        var sProgram = new shaderProgram(program, shaderData);
        initialisedShaderMap.set(shaderData.id, {
            shader: sProgram, 
            localVersion: shaderData.getUpdateVersion(),
        });
        return sProgram;
    };

    this.loadTexture2DData = function(textureData) {
        let data = initialisedTextureMap.get(textureData.id);
        if (data !== undefined && data.localVersion === textureData.getUpdateVersion()) 
            return data;
        let format = textureData.format;
        let internalformat = textureData.internalformat;
        let type = textureData.type;
        let texture = undefined;
        if (textureData.src !== undefined) {
            texture = _gl.createTexture();
            texture.isLoad = false;
            let img = new Image();
            img.onload = function() {
                _gl.bindTexture(_gl.TEXTURE_2D, texture);
                _gl.texImage2D(_gl.TEXTURE_2D, 0, internalformat, format, type, img);
                texture.isLoad = true;
                // TODO: cull image size;
            };
            img.src = textureData.src;
        } else if (textureData.width !== 0 && textureData.height !== 0) {
            texture = _gl.createTexture();
            _gl.bindTexture(_gl.TEXTURE_2D, texture);
            _gl.texImage2D(gl.TEXTURE_2D, 0, internalformat, textureData.width, textureData.height, 0, format, type, img);
        } else {
            return undefined;
        }

        let textureObj = {
            texture: texture,
            localVersion: textureData.getUpdateVersion(),
            minFilter: textureData.minFilter,
            magFilter: textureData.magFilter,
            wrapS: textureData.wrapS,
            wrapT: textureData.wrapT,
        };

        initialisedTextureMap.set(textureData.id, textureObj);
        return textureObj;
    };

    this.applyMaterial = function(materialData) {
        let shader = this.loadShaderData(materialData.shaderData);
        if (!shader) {
            return undefined;
        }
        shader.useShaderProgram();
        let maps = [];
        let requestsMapTypes = materialData.getMapRequests();
        for (let i = 0; i < requestsMapTypes.length; i++) {
            let texture = this.loadTexture2DData(requestsMapTypes[i].map);
            let mapType = requestsMapTypes[i].mapType;
            let shaderTextuerName = shader.shaderData.getTextureName(mapType);
            if (shaderTextuerName === undefined) {
                console.warn("can not find MapType:" + mapType);
                continue;
            }
            let location = _gl.getUniformLocation(shader.getShaderProgram(), shaderTextuerName);

            if (texture.texture.isLoad) {
                _gl.activeTexture(_gl.TEXTURE0 + i);
                _gl.bindTexture(_gl.TEXTURE_2D, texture.texture);
                _gl.texParameteri(_gl.TEXTURE_2D, _gl.TEXTURE_MIN_FILTER, texture.minFilter);
                _gl.uniform1i(location, i);
            } else {
                return undefined;
            }
            
            let object = {
                active: i,
                texture: texture,
                location: location,
            }
            maps.push(object);
        }

        return {
            shader: shader,
            maps: maps,
        }
    };

    this.renderSingle = function(vertexData, materialData) {
        this.clear(isClearColor, isClearDepth, isClearStencil);
        var material = this.applyMaterial(materialData);
        if (!material) {
            return;
        }
        var buffer = this.loadVertexData(vertexData);
        if (!buffer) {
            return;
        }
        this.bufferGeometryDraw(buffer, material.shader);
    };

    this.render = function(vertexData, shaderData) {

    };
};

var vertexShaderText = "#version 300 es\n\
layout(location = 0) in vec4 Position;\n\
layout(location = 1) in vec3 Color;\n\
layout(location = 2) in vec2 UV;\n\
out vec3 o_color;\n\
out vec2 o_uv; \n\
uniform MatrixBlock \n\
{ \n\
  mat4 projection; \n\
  mat4 modelview; \n\
}; \n\
void main()\n\
{\n\
    o_color = Color;\n\
    o_uv = UV;\n\
    vec4 pos = Position * projection * modelview; \n\
    gl_Position = Position;\n\
}";

var fragmentShaderText = "#version 300 es\n\
precision mediump float;\n\
in vec3 o_color; \n\
in vec2 o_uv; \n\
layout(location = 0) out vec4 fragColor;\n\
uniform sampler2D diffuse;\n\
\n\
void main()\n\
{\n\
    vec4 color = texture(diffuse, o_uv);\n\
    fragColor = vec4(color.xyz, 1.0);\n\
}";

function loop() {
    var animationframe = self.requestAnimationFrame
                        ||self.mozRequestAnimationFrame
                        ||self.webkitRequestAnimationFrame
                        ||self.msRequestAnimationFrame
                        ||self.oRequestAnimationFrame
                        ||function(a){
        setTimeout(a, 1000/60);
    };
	animationframe(loop);
	render();
};

var renderer = new CGE.WebGL2Renderer();
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setClearColor(1.0, 0.5, 0.5, 1.0);
renderer.clear(true);

document.body.appendChild(renderer.getCanvas());
window.onresize = function() {
    renderer.setSize(window.innerWidth, window.innerHeight);
};

var vertexPositionData = new Float32Array([
    -0.5, 0.5,  0.8, 0.4, 0.4,  0.0, 0.0,
    0.5,  0.5,  0.4, 0.8, 0.4,  1.0, 0.0,
    0,   -0.5,  0.4, 0.4, 0.8,  0.5, 1.0,
]);

var indexData = new Uint16Array([
    0, 2, 1,
]);

var vertexbuffer = new CGE.BufferGeometry();

var attribs = [
    {
        name: 'Position',
        attribute: CGE.AttribType.POSITION, 
        num: 2,
        offset: 0,
    },
    {
        name: 'Color',
        attribute: CGE.AttribType.COLOR, 
        num: 3,
        offset: vertexPositionData.BYTES_PER_ELEMENT * 2,
    },
    {
        name: 'UV0',
        attribute: CGE.AttribType.UV0, 
        num: 2,
        offset: vertexPositionData.BYTES_PER_ELEMENT * 5,
    },
];

vertexbuffer.addMultiAttribute(attribs, CGE.FLOAT,  vertexPositionData.BYTES_PER_ELEMENT * 7, vertexPositionData);
vertexbuffer.setIndexData(CGE.UNSIGNED_SHORT, indexData);
vertexbuffer.setDrawParameter(CGE.TRIANGLES, 3, 0);


var shader = new CGE.Shader();
shader.setShaderText(vertexShaderText, fragmentShaderText);
shader.addAttribLocation(CGE.AttribType.POSITION, 0);
shader.addAttribLocation(CGE.AttribType.COLOR, 1);
shader.addAttribLocation(CGE.AttribType.UV0, 2);
shader.addTextureName(CGE.MapType.DIFFUSE, 'diffuse');

var texture = new CGE.Texture2d();
texture.setImageSrc('qiang.jpg');

var material = new CGE.BaseMaterial();
material.setShader(shader);
material.setDiffuseMap(texture);

var render = function() {
    renderer.renderSingle(vertexbuffer, material);
};
render();
loop();
