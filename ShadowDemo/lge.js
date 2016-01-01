var LGE = {};
    
// LGE.createContext = function(){
//     var _context = {}
//     _context.canvas = document.createElement('canvas');
//     var gl;
    
//     this.initContext = function(){
//         gl = canvas.getContext("webgl");
//         gl.viewportWidth = _context.canvas.width;
//         gl.viewportHeight = _context.canvas.height;
//     }
    
//     this.getContext = function(){
//         return gl;
//     }
    
//     return _context;
// }

LGE.Mesh = function(){
    
}

    var gl = null;
    var canvas;
    var ext = {};

    var POSITION_LOCATION = 0;
    var NORMAL_LOCATION = 1;
    var TEXCOORD_LOCATION = 2;

    var ball_vao = null;
    var plane_vao = null;
    var base_shader = null;
    var shadow_shader = null;

    var base_vs_string = "";

    var VertexBufferObject = {
        create : function(){
            var vertexBufferObject = {};
            vertexBufferObject.handle = null;
            vertexBufferObject.loaction = 0;
            vertexBufferObject.itemSize = 0;
            vertexBufferObject.numItems = 0;
            vertexBufferObject.dataType = gl.FLOAT;
            return vertexBufferObject;
        }

        // copy : function(_vbo){
        //     var vertexBufferObject = create();
        //     vertexBufferObject.handle = _vbo.handle;
        //     vertexBufferObject.loaction = _vbo.loaction;
        //     vertexBufferObject.itemSize = _vbo.itemSize;
        //     vertexBufferObject.numItems = _vbo.numItems;
        //     return vertexBufferObject;
        // }
    };

    var State = {
        STATIC_DRAW : 0,
        STREAM_DRAW : 1,
        DYNAMIC_DRAW : 2,
        
    }

    var Mesh = {
        
        POSITION_LOCATION : 0,
        NORMAL_LOCATION : 1,
        TEXCOORD_LOCATION : 2,

        create : function(){
            var mesh = {};
            mesh.Position = null;
            mesh.Normal = null;
            mesh.Texcoord = null;

            mesh.vao = null;

            mesh.datas = {};
            mesh.index = null;

            mesh.getPositionLocation = function(){ return POSITION_LOCATION; };
            mesh.getNormalLocation = function(){ return NORMAL_LOCATION; };
            mesh.getTexcoordLocation = function(){ return TEXCOORD_LOCATION; };

            mesh.createThis = function(){
                mesh.vao = ext.OES_vertex_array_object.createVertexArrayOES();
            }
            
            mesh.use = function(){
                ext.OES_vertex_array_object.bindVertexArrayOES(mesh.vao);
            }
            
            // mesh.addData = function(data, state, index){
            //     var vbo_handle = gl.createBuffer();
            //     gl.bindBuffer(gl.ARRAY_BUFFER, vbo_handle);
            //     gl.bufferData(gl.ARRAY_BUFFER, data, state);
            // }
            
            mesh.setIndexData = function(){
                
            }
            
            mesh.setDrawStyle = function(){
                
            }

            return mesh;
        }

    };

    var Texture = {
        create : function(){
            var texture = {};
            texture.handle = null;
            texture.active = 0;
            return texture
        },
        
        copy : function(_texture){
            var texture = Texture.create();
            texture.handle = _texture.handle;
            texture.active = _texture.active;
            return texture;
        }
    };

    var VertexArrayObject = {
        vao_cache : null,
        create : function(){
            var vao = {};
            vao.handle = null;
            vao.vbos = [];
            vao.bind = function(){
                if(this.handle != VertexArrayObject.vao_cache){
                    VertexArrayObject.vao_cache = this.handle;
                    ext.OES_vertex_array_object.bindVertexArrayOES(this.handle);   
                }
            }
            vao.addVbo = function(_vbo){
                vao.vbos.push(_vbo)
            }
            return vao;
        }
    };

    var DrawParamter = {
        create : function(){
            var drawParamter = {};

            return drawParamter;
        }
    };

    var DrawAble = {
        create : function(){
            var drawAble = {};
            drawAble.name = "";
            drawAble.vao = null;
            drawAble.shader = null;
            drawAble.texture = [];
            drawAble.begin = 0;
            drawAble.num = 0;
            drawAble.type = gl.ARRAY_BUFFER;
            drawAble.element = gl.UNSIGNED_SHORT;
            return drawAble;
        }
    };

    var Shader = {
        create : function(){
            var shader = {};
            shader.handle = null;
            // shader.use = function(){
            //     gl.useProgram(this.handle);
            // }
            return shader;
        }
    };

    var Node = {
        create : function(){
            var node = {};
            node.drawAble = null;
            node.position = vec3.create();
            node.rotate = quat.create();
            node.scrle = vec3.create();
            // node.
            return node;
        }
    };
    
    var RenderBatch = {
        create : function(){
            var renderBatch = {};
            
            return renderBatch;
        }
    }

    var Camera = {
        create : function(){
            var camera = {};
            camera.viewMatrix = mat4.create();
            camera.perspectiveMatrix = mat4.create();
            camera.viewperspectiveMatrix = mat4.create();
            return camera;
        }
    };

    var StateDepthStencil = {
        create : function(){
            var state = {};
            state.depthTest = true;
            state.depthWrite = true;
            state.depthType = 16;
            
            state.stencilTest = false;
            state.stencilStyle = gl.ZERO;
            state.stencilType = 0;
        }
    }

    var NodeArray = [];

    function initGL(){
        try{
            gl = canvas.getContext("webgl");
            // console.log(canvas.getContext("experimental-webgl2"));
            gl.viewportWidth = canvas.width;
            gl.viewportHeight = canvas.height;
        } catch(e){
        }
        if(!gl)
        {
            alert("Could not initialise WebGL");
        }

        console.log(gl);

        ext.OES_vertex_array_object = gl.getExtension("OES_vertex_array_object");
        console.log(ext.OES_standard_derivatives);
        
        ext.WEBGL_draw_buffers = gl.getExtension("WEBGL_draw_buffers");
        console.log(ext.OES_vertex_array_object);
        
        ext.OES_standard_derivatives = gl.getExtension("OES_standard_derivatives");
        console.log(ext.WEBGL_draw_buffers);
        
        ext.OES_texture_half_float = gl.getExtension("OES_texture_half_float");
        console.log(ext.OES_texture_half_float);
        
        ext.OES_texture_float = gl.getExtension("OES_texture_float");
        console.log(ext.OES_texture_float);
        
        ext.WEBGL_depth_texture = gl.getExtension("WEBGL_depth_texture");
        console.log(ext.WEBGL_depth_texture);
        
        // var __vao1 = ext.OES_vertex_array_object.createVertexArrayOES();

        // console.log(__vao1);
        // console.log(gl.getParameter(ext.WEBGL_draw_buffers.MAX_DRAW_BUFFERS_WEBGL));

        if (gl.checkFramebufferStatus(gl.FRAMEBUFFER) !== gl.FRAMEBUFFER_COMPLETE) 
        {
            // Can't use framebuffer.
            // See http://www.khronos.org/opengles/sdk/docs/man/xhtml/glCheckFramebufferStatus.xml
        }

        // var mesh = Mesh.create();

        // console.log(mesh);

        // var vao = gl.createVertexArrayOES();
    }

    var r = 0.0;

    var animationframe = self.requestAnimationFrame
                        ||self.mozRequestAnimationFrame
                        ||self.webkitRequestAnimationFrame
                        ||self.msRequestAnimationFrame
                        ||self.oRequestAnimationFrame
                        ||function(a){
        setTimeout(a, 1000/30);
    };

    var vbo_position;
    var vbo_index;
    
    var plane_index;

    var root_camera;
    var vao_position;
    var vao_retate;
    
    var fbo;
    var texture_depth;
    var texture_color;
    
    function initFrame(){
        
        texture_depth = gl.createTexture();
        gl.bindTexture(gl.TEXTURE_2D, texture_depth);
        // gl.activeTexture(gl.TEXTURE1);
        gl.texImage2D(gl.TEXTURE_2D, 0, gl.DEPTH_COMPONENT, 512, 512, 0, gl.DEPTH_COMPONENT, gl.UNSIGNED_SHORT, null);
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.NEAREST);
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.NEAREST);
        
        texture_color = gl.createTexture();
        gl.bindTexture(gl.TEXTURE_2D, texture_color);
        gl.activeTexture(gl.TEXTURE0);
        gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, 512, 512, 0, gl.RGBA, gl.UNSIGNED_BYTE, null);
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.NEAREST);
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.NEAREST);
        
        var renderbuffer = gl.createRenderbuffer();
        gl.bindRenderbuffer(gl.RENDERBUFFER, renderbuffer);
        gl.renderbufferStorage(gl.RENDERBUFFER, gl.DEPTH_COMPONENT16, 512, 512);
        
        fbo = gl.createFramebuffer();
        gl.bindFramebuffer(gl.FRAMEBUFFER, fbo);
        
        gl.enable(gl.DEPTH_TEST);
        // gl.framebufferTexture2D(gl.FRAMEBUFFER, gl.DEPTH_ATTACHMENT, gl.TEXTURE_2D, texture_depth, 0);
        
        gl.framebufferTexture2D(gl.FRAMEBUFFER, gl.COLOR_ATTACHMENT0, gl.TEXTURE_2D, texture_color, 0);
        gl.framebufferRenderbuffer(gl.FRAMEBUFFER,  gl.DEPTH_ATTACHMENT, gl.RENDERBUFFER, renderbuffer);
        
        gl.bindFramebuffer(gl.FRAMEBUFFER, null);
    }

    function initBuffer(){

        var latitudeBands = 30;
        var longitudeBands = 30;
        var radius = 1;

        var vertexPositionData = [];
        var normalData = [];
        var textureCoordData = [];
        for (var latNumber=0; latNumber <= latitudeBands; latNumber++) {
            var theta = latNumber * Math.PI / latitudeBands;
            var sinTheta = Math.sin(theta);
            var cosTheta = Math.cos(theta);

            for (var longNumber = 0; longNumber <= longitudeBands; longNumber++) {
                var phi = longNumber * 2 * Math.PI / longitudeBands;
                var sinPhi = Math.sin(phi);
                var cosPhi = Math.cos(phi);

                var x = cosPhi * sinTheta;
                var y = cosTheta;
                var z = sinPhi * sinTheta;
                var u = 1 - (longNumber / longitudeBands);
                var v = 1 - (latNumber / latitudeBands);

                normalData.push(x);
                normalData.push(y);
                normalData.push(z);
                textureCoordData.push(u);
                textureCoordData.push(v);
                vertexPositionData.push(radius * x);
                vertexPositionData.push(radius * y);
                vertexPositionData.push(radius * z);
            }
        }

        var indexData = [];
        for (var latNumber = 0; latNumber < latitudeBands; latNumber++) {
            for (var longNumber = 0; longNumber < longitudeBands; longNumber++) {
                var first = (latNumber * (longitudeBands + 1)) + longNumber;
                var second = first + longitudeBands + 1;
                indexData.push(first);
                indexData.push(second);
                indexData.push(first + 1);

                indexData.push(second);
                indexData.push(second + 1);
                indexData.push(first + 1);
            }
        }

        // var vertexPositionData = [
        //     -0.5,  0.5,
        //     -0.5, -0.5,
        //      0.5, -0.5,
        //      0.5,  0.5
        // ];

        // var indexData = [
        //     0, 1, 2,
        //     2, 3, 0
        // ];

        vbo_position = gl.createBuffer();
        gl.bindBuffer(gl.ARRAY_BUFFER, vbo_position);
        gl.bufferData(gl.ARRAY_BUFFER, teapotPositions, gl.STATIC_DRAW);
        
        // gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertexPositionData), gl.STATIC_DRAW);
        
        gl.bindBuffer(gl.ARRAY_BUFFER, null);

        var vbo_normal = gl.createBuffer();
        gl.bindBuffer(gl.ARRAY_BUFFER, vbo_normal);
        gl.bufferData(gl.ARRAY_BUFFER, teapotNormals, gl.STATIC_DRAW);
        
        // gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(normalData), gl.STATIC_DRAW);
        gl.bindBuffer(gl.ARRAY_BUFFER, null);

        var vbo_texcoord = gl.createBuffer();
        gl.bindBuffer(gl.ARRAY_BUFFER, vbo_texcoord);
        gl.bufferData(gl.ARRAY_BUFFER, teapotTexCoords, gl.STATIC_DRAW);
        // gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(textureCoordData), gl.STATIC_DRAW);
        gl.bindBuffer(gl.ARRAY_BUFFER, null);

        vbo_index = gl.createBuffer();
        gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, vbo_index);
        gl.bufferData(gl.ELEMENT_ARRAY_BUFFER, teapotIndices, gl.STATIC_DRAW);
        // gl.bufferData(gl.ELEMENT_ARRAY_BUFFER, new Uint16Array(indexData), gl.STATIC_DRAW);
        gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, null);
        // vbo_index.numItems = indexData.length;
        vbo_index.numItems = teapotIndices.length;

        ball_vao = VertexArrayObject.create();

        ball_vao.handle = ext.OES_vertex_array_object.createVertexArrayOES();
        ext.OES_vertex_array_object.bindVertexArrayOES(ball_vao.handle);

        gl.bindBuffer(gl.ARRAY_BUFFER, vbo_position);
        gl.enableVertexAttribArray(POSITION_LOCATION);
        gl.vertexAttribPointer(POSITION_LOCATION, 3, gl.FLOAT, false, 0, 0);

        gl.bindBuffer(gl.ARRAY_BUFFER, vbo_normal);
        gl.enableVertexAttribArray(NORMAL_LOCATION);
        gl.vertexAttribPointer(NORMAL_LOCATION, 3, gl.FLOAT, false, 0, 0);

        gl.bindBuffer(gl.ARRAY_BUFFER, vbo_texcoord);
        gl.enableVertexAttribArray(TEXCOORD_LOCATION);
        gl.vertexAttribPointer(TEXCOORD_LOCATION, 2, gl.FLOAT, false, 0, 0);
        
        gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, vbo_index);

        ext.OES_vertex_array_object.bindVertexArrayOES(null);

        gl.bindBuffer(gl.ARRAY_BUFFER, null);
        gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, null);

        ball_vao.addVbo(vbo_position);
        
        
        var planeVertexPositionData = [
            -80.5,  80.5,
            -80.5, -80.5,
             80.5, -80.5,
             80.5,  80.5
        ];
        
        var planeVertexTexcoordData = [
             0.0,  0.0,
             0.0,  1.0,
             1.0,  1.0,
             1.0,  0.0
        ];

        var planeIndexData = [
            0, 1, 2,
            2, 3, 0
        ];
        
        var planePosition = gl.createBuffer();
        gl.bindBuffer(gl.ARRAY_BUFFER, planePosition);
        gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(planeVertexPositionData), gl.STATIC_DRAW);
        
        var planeTexcoord = gl.createBuffer();
        gl.bindBuffer(gl.ARRAY_BUFFER, planeTexcoord);
        gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(planeVertexTexcoordData), gl.STATIC_DRAW);
        
        var planeIndex = gl.createBuffer();
        gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, planeIndex);
        gl.bufferData(gl.ELEMENT_ARRAY_BUFFER, new Uint16Array(planeIndexData), gl.STATIC_DRAW);
        
        plane_index = planeIndexData.length;
        
        plane_vao = VertexArrayObject.create();
        plane_vao.handle = ext.OES_vertex_array_object.createVertexArrayOES();
        
        ext.OES_vertex_array_object.bindVertexArrayOES(plane_vao.handle);
        gl.bindBuffer(gl.ARRAY_BUFFER, planePosition);
        gl.enableVertexAttribArray(POSITION_LOCATION);
        gl.vertexAttribPointer(POSITION_LOCATION, 2, gl.FLOAT, false, 0, 0);
        
        gl.bindBuffer(gl.ARRAY_BUFFER, planeTexcoord);
        gl.enableVertexAttribArray(TEXCOORD_LOCATION);
        gl.vertexAttribPointer(TEXCOORD_LOCATION, 2, gl.FLOAT, false, 0, 0);

        gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, planeIndex);

        ext.OES_vertex_array_object.bindVertexArrayOES(null);
        gl.bindBuffer(gl.ARRAY_BUFFER, null);
        gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, null);
    }

    function getShader(gl, id) {
        var shaderScript = document.getElementById(id);
        if (!shaderScript) {
            return null;
        }

        var str = "";
        var k = shaderScript.firstChild;
        while (k) {
            if (k.nodeType == 3) {
                str += k.textContent;
            }
            k = k.nextSibling;
        }

        var shader;
        if (shaderScript.type == "x-shader/x-fragment") {
            shader = gl.createShader(gl.FRAGMENT_SHADER);
        } else if (shaderScript.type == "x-shader/x-vertex") {
            shader = gl.createShader(gl.VERTEX_SHADER);
        } else {
            return null;
        }

        gl.shaderSource(shader, str);
        gl.compileShader(shader);

        if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
            alert(gl.getShaderInfoLog(shader));
            return null;
        }

        return shader;
    }

    function initShader(){
        base_shader = Shader.create();
        var fragmentShader = getShader(gl, "base_vs");
        var vertexShader = getShader(gl, "base_fs");

        base_shader.handle = gl.createProgram();
        gl.attachShader(base_shader.handle, vertexShader);
        gl.attachShader(base_shader.handle, fragmentShader);

        // gl.linkProgram(base_shader.handle);

        gl.bindAttribLocation(base_shader.handle, POSITION_LOCATION, "Position");
        gl.bindAttribLocation(base_shader.handle, NORMAL_LOCATION, "nNormal");
        gl.bindAttribLocation(base_shader.handle, TEXCOORD_LOCATION, "Texcoord");

        gl.linkProgram(base_shader.handle);

        // POSITION_LOCATION = gl.getAttribLocation(base_shader.handle, "Position");
        // NORMAL_LOCATION = gl.getAttribLocation(base_shader.handle, "nNormal");
        // TEXCOORD_LOCATION = gl.getAttribLocation(base_shader.handle, "Texcoord");

        console.log(POSITION_LOCATION);
        console.log(NORMAL_LOCATION);
        console.log(TEXCOORD_LOCATION);

        base_shader.depthMvpMatrixUniform = gl.getUniformLocation(base_shader.handle, "depthMvpMatrix");
        base_shader.mvpMatrixUniform = gl.getUniformLocation(base_shader.handle, "mvpMatrix");
        base_shader.texUniform = gl.getUniformLocation(base_shader.handle, "texture");

        if (!gl.getProgramParameter(base_shader.handle, gl.LINK_STATUS)) {
            alert("Could not initialise shaders base_shader");
        }
        gl.deleteShader(fragmentShader);
        gl.deleteShader(vertexShader);
        
        shadow_shader = Shader.create();
        var vvShader = getShader(gl, "shadow_vs");
        var ffShader = getShader(gl, "shadow_fs");
        
        shadow_shader.handle = gl.createProgram();
        gl.attachShader(shadow_shader.handle, vvShader);
        gl.attachShader(shadow_shader.handle, ffShader);
        
        gl.bindAttribLocation(shadow_shader.handle, POSITION_LOCATION, "Position");
        //gl.bindAttribLocation(shadow_shader.handle, NORMAL_LOCATION, "nNormal");
        
        gl.linkProgram(shadow_shader.handle);
        
        shadow_shader.mvpMatrixUniform = gl.getUniformLocation(shadow_shader.handle, "mvpMatrix");
        
        if (!gl.getProgramParameter(shadow_shader.handle, gl.LINK_STATUS)) {
            alert("Could not initialise shaders shadow_shader");
        }
        gl.deleteShader(ffShader);
        gl.deleteShader(vvShader);
        
        
        gl.frontFace(gl.CCW);
        gl.enable(gl.DEPTH_TEST);
    }

    function initCamera(){
        root_camera = Camera.create();

        var eye = [-5, -5, 5];
        var center = [0, 0, 0];
        var up = [0, 0, 1];

        mat4.lookAt(root_camera.viewMatrix, eye, center, up);
        mat4.perspective(root_camera.perspectiveMatrix, 45, gl.viewportWidth / gl.viewportHeight, 0.1, 500.0);  
        mat4.multiply(root_camera.viewperspectiveMatrix, root_camera.perspectiveMatrix, root_camera.viewMatrix);
    }

    
    var center = [0, 0, 20];
    var up = [0, 0, 1];

    var x = 0;
    var y = 0;

    var s_camera = Camera.create();
    
    var eye = [-5, -5, 5];
    var center = [0, 0, 0];
    var up = [0, 0, 1];

    mat4.lookAt(s_camera.viewMatrix, eye, center, up);
    // mat4.perspective(s_camera.perspectiveMatrix, 45, 1, 0.1, 150.0);  
    mat4.ortho(s_camera.perspectiveMatrix, -80, 80, -80, 80, 0.1, 500);
    mat4.multiply(s_camera.viewperspectiveMatrix, s_camera.perspectiveMatrix, s_camera.viewMatrix);

    function tick(){
        animationframe(tick);
        // drawScene();
        // animate();

        x+=0.010;
        // y -= 0.015;
        
        var _size = 75;
        
        var eye = [Math.sin(x) * _size, Math.cos(x) * _size, _size];
        var eye3 = [_size, _size, _size];
        var eye2 = [_size, _size, _size];
        
        // var eye4 = [Math.sin(y) * _size, Math.cos(y) * _size, _size];
        
        var center2 = [0, 0, 0];
        

        // ext.OES_vertex_array_object.bindVertexArrayOES(ball_vao.handle);
        // ext.OES_vertex_array_object.bindVertexArrayOES(ball_vao.handle);
        
        // gl.bindBuffer(gl.ARRAY_BUFFER, vbo_position);
        // gl.enableVertexAttribArray(POSITION_LOCATION);
        // gl.vertexAttribPointer(POSITION_LOCATION, 2, gl.FLOAT, false, 0, 0);
        // gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, vbo_index);
        gl.bindFramebuffer(gl.FRAMEBUFFER, fbo);
        gl.viewport(0, 0, 512, 512);
        
        gl.clearColor(1.0, 1.0, 1.0, 1.0);
        gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);
        
        gl.useProgram(shadow_shader.handle);
        mat4.lookAt(s_camera.viewMatrix, eye, center, up);
        mat4.multiply(s_camera.viewperspectiveMatrix, s_camera.perspectiveMatrix, s_camera.viewMatrix);
        
        gl.uniformMatrix4fv(shadow_shader.mvpMatrixUniform, false, s_camera.viewperspectiveMatrix);
        
        // gl.cullFace(gl.FRONT);
        gl.disable(gl.CULL_FACE);
        plane_vao.bind()
        gl.drawElements(gl.TRIANGLES, plane_index, gl.UNSIGNED_SHORT, 0);
        ball_vao.bind();
        gl.drawElements(gl.TRIANGLES, vbo_index.numItems, gl.UNSIGNED_SHORT, 0);
        
        gl.bindFramebuffer(gl.FRAMEBUFFER, null);
        gl.viewport(0, 0, canvas.width, canvas.height);
        
        gl.clearColor(0.0, 0.0, 0.0, 1.0);
        gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);
        
        mat4.lookAt(root_camera.viewMatrix, eye2, center2, up);
        mat4.multiply(root_camera.viewperspectiveMatrix, root_camera.perspectiveMatrix, root_camera.viewMatrix);
        gl.useProgram(base_shader.handle);
        
        //depthMvpMatrixUniform
        gl.bindTexture(gl.TEXTURE_2D, texture_color);
        gl.activeTexture(gl.TEXTURE0);
        
        gl.uniformMatrix4fv(base_shader.depthMvpMatrixUniform, false, s_camera.viewperspectiveMatrix);
        gl.uniformMatrix4fv(base_shader.mvpMatrixUniform, false, root_camera.viewperspectiveMatrix);
        gl.uniform1i(base_shader.texUniform, 0);
        
        // gl.cullFace(gl.BACK);
        
        plane_vao.bind()
        gl.drawElements(gl.TRIANGLES, plane_index, gl.UNSIGNED_SHORT, 0);
        
        ball_vao.bind();
        gl.drawElements(gl.TRIANGLES, vbo_index.numItems, gl.UNSIGNED_SHORT, 0);
        
    }

    function webGLStart(){
        // canvas = document.getElementById(20);
        
        canvas = document.createElement( 'canvas' );
        document.body.appendChild(canvas);
        console.log(canvas);
        canvas.width = 800;
        canvas.height = 600;
        initGL();
        initShader();
        initBuffer();
        initFrame();
        initCamera();
        // gl.clearColor(1.0, 0.5, 0.5, 1.0);
        tick();
    }
    
    webGLStart();
