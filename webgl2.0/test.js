'use strict';

// import CGE from './main.js'

let vertexShaderText = "#version 300 es\n\
layout(location = 0) in vec4 Position;\n\
layout(location = 1) in vec3 Color;\n\
layout(location = 2) in vec2 UV;\n\
out vec3 o_color;\n\
out vec2 o_uv; \n\
uniform mat4 mvpMatrix; \n\
void main()\n\
{\n\
    o_color = Color;\n\
    o_uv = UV;\n\
    gl_Position = mvpMatrix * Position;\n\
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
    let animationframe = window.requestAnimationFrame
                        ||window.mozRequestAnimationFrame
                        ||window.webkitRequestAnimationFrame
                        ||window.msRequestAnimationFrame
                        ||window.oRequestAnimationFrame
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

let camera = new CGE.Camera(window.innerWidth, window.innerHeight);
camera.setPosition(new CGE.Vector3(3, 2, 4));
camera.lookAt(new CGE.Vector3(0,0,0));
camera.update();

document.body.appendChild(renderer.getCanvas());
window.onresize = function() {
    let width = window.innerWidth;
    let height = window.innerHeight;
    renderer.setSize(width, height);
    camera.resize(width, height);
    camera.update();
    render();
};

window.onmousemove = function(event) {
    // console.log(event);
};

window.onkeydown = function(event) {
    // console.log(event);
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

vertexbuffer.addMultiAttribute(attribs, CGE.FLOAT, vertexPositionData.BYTES_PER_ELEMENT * 7, vertexPositionData);
vertexbuffer.setIndexData(indexData);
vertexbuffer.setDrawParameter(3);


let shader = new CGE.Shader();
shader.setShaderText(vertexShaderText, fragmentShaderText);
shader.addAttribLocation(CGE.AttribType.POSITION, 0);
shader.addAttribLocation(CGE.AttribType.COLOR, 1);
shader.addAttribLocation(CGE.AttribType.UV0, 2);
shader.addTextureName(CGE.MapType.DIFFUSE, 'diffuse');
shader.addUniformName(CGE.UniformType.MVPMatrix, 'mvpMatrix');

let texture = new CGE.Texture2d();
texture.setImageSrc('qiang.jpg');
texture.setFilter(CGE.NEAREST, CGE.NEAREST);

let material = new CGE.BaseMaterial();
material.setDiffuseMap(texture);

let mesh = new CGE.Mesh(vertexbuffer, material);
mesh.transform.setPosition(new CGE.Vector3(1,0,0));

let entity = new CGE.Entity();
entity.addComponent(CGE.Component.CreateGeometryComponent(vertexbuffer));
entity.addComponent(CGE.Component.CreateMaterialComponent(material));
entity.addComponent(CGE.Component.CreateTransfromComponent(new CGE.Transform()));

let rad = 0;

let render = function() {
    rad += 0.01 * Math.PI;
    camera.setPosition(new CGE.Vector3(1*Math.sin(rad), 1*Math.cos(rad), 1));
    camera.update();
    renderer.renderSingle(entity, camera);
};

let test_mat4 = new CGE.Matrix4();

let position = new CGE.Vector3(1, 2, 3);
let rotate = new CGE.Quaternion();
rotate.setAxisAngle(new CGE.Vector3(0, 1, 0), 0.5 * Math.PI);
let scale = new CGE.Vector3(1,1,1);

let test_m1 = new CGE.Matrix4();
test_m1.setPosition(position);

let test_m2 = new CGE.Matrix4();
test_m2.makeForQuaternion(rotate);

test_mat4.copy(test_m1).applyMatrix4(test_m2);

let eye = new CGE.Vector3(-4,0,4);
let center2 = new CGE.Vector3(0,0,0); 
let up = new CGE.Vector3(0,0,1);

let vec_x = center2.clone().sub(eye);
vec_x.normalize();

let vec_y = up.cross(vec_x);
vec_y.normalize();

let vec_z = vec_x.cross(vec_y);
vec_z.normalize();
let m = new CGE.Matrix4();
m.makeBasis(vec_x, vec_y, vec_z);
// m.setPosition(eye);

let test_vx = new CGE.Vector3(1,0,0);
let test_vy = new CGE.Vector3(0,1,0);
let test_vz = new CGE.Vector3(0,0,1);

let xmlHttp = new XMLHttpRequest();

xmlHttp.onreadystatechange = function() {
    if (xmlHttp.readyState === 4 && xmlHttp.status === 200) {
        console.log('test_xmlHttp_ok');
    }
}

xmlHttp.open('GET', './box01.obj', true);
xmlHttp.send(null);

render();
loop();