var gl = undefined;

var vertexBufferObject = undefined;
var indexBufferObject = undefined;

var shader = undefined;

var animationframe = self.requestAnimationFrame
                        ||self.mozRequestAnimationFrame
                        ||self.webkitRequestAnimationFrame
                        ||self.msRequestAnimationFrame
                        ||self.oRequestAnimationFrame
                        ||function(a){
        setTimeout(a, 1000/60);
};

function initGL(canvas) {
	try{
            gl = canvas.getContext("webgl");
            // console.log(canvas.getContext("experimental-webgl2"));
            gl.viewportWidth = canvas.width;
            gl.viewportHeight = canvas.height;
    } catch(e) {
    }

    if(!gl) {
        alert("Could not initialise WebGL");
    }
    gl.viewport(0, 0, 800, 600);
    gl.clearColor(0.0, 0.0, 0.0, 1.0);
};

function initShader() {
	var vertexShaderText = '						\n\
	#version 100 									\n\
    attribute vec4 Position; 						\n\
    void main()										\n\
    {												\n\
    	gl_Position = Position;						\n\
    }';

    var fragmentShaderText = '						\n\
	#version 100 									\n\
    void main()										\n\
    {												\n\
    	gl_FragColor = vec4(1.0, 1.0, 1.0, 1.0);	\n\
    }';

    var vs = gl.createShader(gl.VERTEX_SHADER);
    gl.shaderSource(vs, vertexShaderText);
    gl.compileShader(vs);

    var fs = gl.createShader(gl.FRAGMENT_SHADER);
    gl.shaderSource(fs, fragmentShaderText);
    gl.compileShader(fs);

    shader = gl.createProgram();
    gl.attachShader(shader, vs);
    gl.attachShader(shader, fs);

    gl.bindAttribLocation(shader, 0, "Position");

    gl.linkProgram(shader);

    if (!gl.getProgramParameter(shader, gl.LINK_STATUS)) {
        alert("Could not initialise shaders shader");
    }
};

function initBuffer() {
	var vertexPositionData = [
        -0.5,  0.5,
        0.5, 0.5,
        0, -0.5,
    ];

    var indexData = [
        0, 2, 1,
    ];

    vertexBufferObject = gl.createBuffer();
    indexBufferObject = gl.createBuffer();

    gl.bindBuffer(gl.ARRAY_BUFFER, vertexBufferObject);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertexPositionData), gl.STATIC_DRAW);

    gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, indexBufferObject);
    gl.bufferData(gl.ELEMENT_ARRAY_BUFFER, new Uint16Array(indexData), gl.STATIC_DRAW);
};

function render() {
    gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);
	gl.bindBuffer(gl.ARRAY_BUFFER, vertexBufferObject);
    gl.enableVertexAttribArray(0);
    gl.vertexAttribPointer(0, 2, gl.FLOAT, false, 0, 0);

    gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, indexBufferObject);

    gl.useProgram(shader);
    gl.drawElements(gl.TRIANGLES, 3, gl.UNSIGNED_SHORT, 0);
}

function loop() {
	animationframe(loop);
	render();
}

function webGLStart() {
	var canvas = document.createElement( 'canvas' );
    document.body.appendChild(canvas);
    canvas.className = 'canvas-3d';
    console.log(canvas);
    canvas.width = 800;
    canvas.height = 600;

    initGL(canvas);
    initShader();
    initBuffer();

    loop();
};

webGLStart();