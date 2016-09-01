'use strict';

// import CGE from './main.js'

let noError = true;
window.onerror = function(event) {
    noError = false;
}

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


let renderTarget = new CGE.RenderTarget();
renderTarget.setSize(512, 512);
renderTarget.addTexture(CGE.renderTargetLocation.COLOR);

let renderTexrure = renderTarget.getTextureFromType(CGE.renderTargetLocation.COLOR);

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

let vertexbuffer_test = new CGE.BufferGeometry();
vertexbuffer_test.addSingleAttribute('Position', CGE.AttribType.POSITION, 3, CGE.FLOAT, teapotPositions);
vertexbuffer_test.addSingleAttribute('UV0', CGE.AttribType.UV0, 2, CGE.FLOAT, teapotTexCoords);
vertexbuffer_test.addSingleAttribute('Normal', CGE.AttribType.NORMAL, 3, CGE.FLOAT, teapotNormals);
vertexbuffer_test.addSingleAttribute('Binormal', CGE.AttribType.BINORMAL, 3, CGE.FLOAT, teapotBinormals);
vertexbuffer_test.addSingleAttribute('Tangent', CGE.AttribType.TANGENT, 3, CGE.FLOAT, teapotTangents);
vertexbuffer_test.setIndexData(teapotIndices);
vertexbuffer_test.setDrawParameter(teapotIndices.length);

let texture = new CGE.Texture2d();
texture.setImageSrc('blue_diff.jpg');
texture.setMipmap(true);
texture.setFilter(CGE.LINEAR_MIPMAP_LINEAR, CGE.LINEAR);

let material = new CGE.BaseMaterial();
material.setDiffuseMap(renderTexrure);

let material2 = new CGE.ColorMaterial();
material2.setColor(0.5, 0.5, 1.0, 1.0);

// let mesh = new CGE.Mesh(vertexbuffer, material);
// mesh.transform.setPosition(new CGE.Vector3(1,0,0));

let transform = new CGE.Transform();
transform.setPosition(new CGE.Vector3(0.5, 0.5, 1.0));

let entity = new CGE.Entity();
entity.addComponent(CGE.Component.CreateGeometryComponent(vertexbuffer_test));
entity.addComponent(CGE.Component.CreateMaterialComponent(material2));
entity.addComponent(CGE.Component.CreateTransfromComponent(transform));

let transform2 = new CGE.Transform();
transform2.setPosition(new CGE.Vector3(0.5, 0, -0.1));
transform2.setScale(new CGE.Vector3(100, 100, 0));

let entity2 = new CGE.Entity();
entity2.addComponent(CGE.Component.CreateGeometryComponent(vertexbuffer));
entity2.addComponent(CGE.Component.CreateMaterialComponent(material));
entity2.addComponent(CGE.Component.CreateTransfromComponent(transform2));

let cameraEntity = new CGE.Entity();
cameraEntity.addComponent(CGE.Component.CreateTransfromComponent(new CGE.Transform()));
cameraEntity.addComponent(CGE.Component.CreateCameraComponent(camera));

let scene = new CGE.Scene();
scene.addEntity(entity);
// scene.addEntity(entity2);
scene.setMainCamera(cameraEntity);

let scene2 = new CGE.Scene();
// scene2.addEntity(entity);
scene2.addEntity(entity2);
scene2.setMainCamera(cameraEntity);

let rad = 0;
let render = function() {
    rad += 0.01 * Math.PI;
    camera.setPosition(new CGE.Vector3(100*Math.sin(rad), 100*Math.cos(rad), 100));
    scene.update();
    scene2.update();
    renderer.renderScene(scene, renderTarget);
    renderer.renderScene(scene2);
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

xmlHttp.open('GET', './teapot.js', true);
xmlHttp.send(null);

render();
render();
if (noError) {
    loop();
}