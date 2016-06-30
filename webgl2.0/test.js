let vertexShaderText = "#version 300 es\n\
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

let fragmentShaderText = "#version 300 es\n\
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
    let animationframe = self.requestAnimationFrame
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

let renderer = new CGE.WebGL2Renderer();
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setClearColor(1.0, 0.5, 0.5, 1.0);
renderer.clear(true);

document.body.appendChild(renderer.getCanvas());
window.onresize = function() {
    renderer.setSize(window.innerWidth, window.innerHeight);
};

let vertexPositionData = new Float32Array([
    -0.5, 0.5,  0.8, 0.4, 0.4,  0.0, 0.0,
    0.5,  0.5,  0.4, 0.8, 0.4,  1.0, 0.0,
    0,   -0.5,  0.4, 0.4, 0.8,  0.5, 1.0,
]);

let indexData = new Uint16Array([
    0, 2, 1,
]);

let vertexbuffer = new CGE.BufferGeometry();

let attribs = [
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


let shader = new CGE.Shader();
shader.setShaderText(vertexShaderText, fragmentShaderText);
shader.addAttribLocation(CGE.AttribType.POSITION, 0);
shader.addAttribLocation(CGE.AttribType.COLOR, 1);
shader.addAttribLocation(CGE.AttribType.UV0, 2);
shader.addTextureName(CGE.MapType.DIFFUSE, 'diffuse');

let texture = new CGE.Texture2d();
texture.setImageSrc('qiang.jpg');

let material = new CGE.BaseMaterial();
material.setShader(shader);
material.setDiffuseMap(texture);

let render = function() {
    renderer.renderSingle(vertexbuffer, material);
};
render();
loop();