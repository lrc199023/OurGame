'use strict';

// import CGE from './main.js'

let noError = true;
window.onerror = function(event) {
    noError = false;
}

let camera = new CGE.Camera(window.innerWidth, window.innerHeight);
camera.setPosition(new CGE.Vector3(100, 100, 100));
camera.lookAt(new CGE.Vector3(0,0,0));
camera.update();

let vertexPositionData = new Float32Array([
    -1.0, 1.0, 0.0,  0.0, 1.0,  0.0, 0.0, 1.0,  1.0, 0.0, 0.0,
    1.0,  1.0, 0.0,  1.0, 1.0,  0.0, 0.0, 1.0,  1.0, 0.0, 0.0,
    1.0, -1.0, 0.0,  1.0, 0.0,  0.0, 0.0, 1.0,  1.0, 0.0, 0.0,
    -1.0, -1.0, 0.0, 0.0, 0.0,  0.0, 0.0, 1.0,  1.0, 0.0, 0.0,
]);

let indexData = new Uint16Array([
    0, 2, 1,
    2, 0, 3, 
]);

let renderTarget = new CGE.RenderTarget();
renderTarget.setFollowScreen(true);
renderTarget.setSize(window.innerWidth, window.innerHeight);
renderTarget.enableDepthStencil();
renderTarget.addTexture(CGE.renderTargetLocation.COLOR);
renderTarget.addTexture(CGE.renderTargetLocation.NORMAL);

let colorTexrure = renderTarget.getTextureFromType(CGE.renderTargetLocation.COLOR);
let normalTexrure = renderTarget.getTextureFromType(CGE.renderTargetLocation.NORMAL);
let depthTexrure = renderTarget.getDepthStencilTexture();

let planeVertexGeometry = new CGE.BufferGeometry();

let attribs = [
    {
        name: 'Position',
        attribute: CGE.AttribType.POSITION, 
        num: 3,
        offset: 0,
    },
    {
        name: 'UV',
        attribute: CGE.AttribType.UV0, 
        num: 2,
        offset: vertexPositionData.BYTES_PER_ELEMENT * 3,
    },
    {
        name: 'Normal',
        attribute: CGE.AttribType.NORMAL, 
        num: 3,
        offset: vertexPositionData.BYTES_PER_ELEMENT * 5,
    },
    {
        name: 'Tangent',
        attribute: CGE.AttribType.TANGENT, 
        num: 3,
        offset: vertexPositionData.BYTES_PER_ELEMENT * 8,
    },
];

planeVertexGeometry.addMultiAttribute(attribs, CGE.FLOAT, vertexPositionData.BYTES_PER_ELEMENT * 11, vertexPositionData);
planeVertexGeometry.setIndexData(indexData);
planeVertexGeometry.setDrawParameter(indexData.length);

let teapotGeometry = new CGE.BufferGeometry();
teapotGeometry.addSingleAttribute('Position', CGE.AttribType.POSITION, 3, CGE.FLOAT, teapotPositions);
teapotGeometry.addSingleAttribute('UV0', CGE.AttribType.UV0, 2, CGE.FLOAT, teapotTexCoords);
teapotGeometry.addSingleAttribute('Normal', CGE.AttribType.NORMAL, 3, CGE.FLOAT, teapotNormals);
teapotGeometry.addSingleAttribute('Binormal', CGE.AttribType.BINORMAL, 3, CGE.FLOAT, teapotBinormals);
teapotGeometry.addSingleAttribute('Tangent', CGE.AttribType.TANGENT, 3, CGE.FLOAT, teapotTangents);
teapotGeometry.setIndexData(teapotIndices);
teapotGeometry.setDrawParameter(teapotIndices.length);

let test_normal_map = CGE.Texture2d.createFromeImage('spnza_bricks_a_ddn.jpg', true);

let material2 = new CGE.ColorMaterial();
material2.setColor(0.5, 0.5, 1.0, 1.0);

// let mesh = new CGE.Mesh(vertexbuffer, material);
// mesh.transform.setPosition(new CGE.Vector3(1,0,0));

let transform = new CGE.Transform();
transform.setPosition(new CGE.Vector3(0.5, 0.5, 1.0));

let entity = new CGE.Entity();
entity.addComponent(CGE.Component.CreateGeometryComponent(teapotGeometry));
entity.addComponent(CGE.Component.CreateMaterialComponent(material2));
entity.addComponent(CGE.Component.CreateTransfromComponent(transform));

let fullScreenMaterial = new CGE.FullScreenTextureMatrial();
fullScreenMaterial.setDiffuseMap(colorTexrure);

let fullScreenTransform = new CGE.Transform();
fullScreenTransform.setPosition(new CGE.Vector3(0, 0, 0.0));
fullScreenTransform.setScale(new CGE.Vector3(1.0, 1.0, 1.0));

let fullScreenEntity = new CGE.Entity();
fullScreenEntity.addComponent(CGE.Component.CreateGeometryComponent(planeVertexGeometry));
fullScreenEntity.addComponent(CGE.Component.CreateMaterialComponent(fullScreenMaterial));
fullScreenEntity.addComponent(CGE.Component.CreateTransfromComponent(fullScreenTransform));

let normalShowingMaterial = new CGE.FullScreenTextureMatrial();
normalShowingMaterial.setDiffuseMap(normalTexrure);

let normalShowingTransform = new CGE.Transform();
normalShowingTransform.setPosition(new CGE.Vector3(0.6, -0.8, -0.1));
normalShowingTransform.setScale(new CGE.Vector3(0.2, 0.2, 1));

let normalShowingEntity = new CGE.Entity();
normalShowingEntity.addComponent(CGE.Component.CreateGeometryComponent(planeVertexGeometry));
normalShowingEntity.addComponent(CGE.Component.CreateMaterialComponent(normalShowingMaterial));
normalShowingEntity.addComponent(CGE.Component.CreateTransfromComponent(normalShowingTransform));

let depthShowingMaterial = new CGE.DepthTextureShowingMatrial();
depthShowingMaterial.setDiffuseMap(depthTexrure);

let depthShowingTransform = new CGE.Transform();
depthShowingTransform.setPosition(new CGE.Vector3(0.1, -0.8, -0.1));
depthShowingTransform.setScale(new CGE.Vector3(0.2, 0.2, 1));

let depthShowingEntity = new CGE.Entity();
depthShowingEntity.addComponent(CGE.Component.CreateGeometryComponent(planeVertexGeometry));
depthShowingEntity.addComponent(CGE.Component.CreateMaterialComponent(depthShowingMaterial));
depthShowingEntity.addComponent(CGE.Component.CreateTransfromComponent(depthShowingTransform));

let cameraEntity = new CGE.Entity();
cameraEntity.addComponent(CGE.Component.CreateTransfromComponent(new CGE.Transform()));
cameraEntity.addComponent(CGE.Component.CreateCameraComponent(camera));

let renderTargetCamera = new CGE.Camera(window.innerWidth, window.innerHeight);
renderTargetCamera.setPosition(new CGE.Vector3(200, 200, 200));
renderTargetCamera.lookAt(new CGE.Vector3(0,0,0));
renderTargetCamera.update();

let renderTargetCameraEntity = new CGE.Entity();
renderTargetCameraEntity.addComponent(CGE.Component.CreateTransfromComponent(new CGE.Transform()));
renderTargetCameraEntity.addComponent(CGE.Component.CreateCameraComponent(renderTargetCamera));

let cubeTexture = new CGE.TextureCube();
cubeTexture.setMipmap(true);
cubeTexture.setFilter(CGE.LINEAR_MIPMAP_LINEAR, CGE.LINEAR);
cubeTexture.setTexture2ds(
    CGE.Texture2d.createFromeImage('./skybox/px.jpg'),
    CGE.Texture2d.createFromeImage('./skybox/nx.jpg'),
    CGE.Texture2d.createFromeImage('./skybox/py.jpg'),
    CGE.Texture2d.createFromeImage('./skybox/ny.jpg'),
    CGE.Texture2d.createFromeImage('./skybox/pz.jpg'),
    CGE.Texture2d.createFromeImage('./skybox/nz.jpg')
);

let cubeMaterial = new CGE.CubeMaterial();
cubeMaterial.setCubeMap(cubeTexture);
cubeMaterial.setNormalMap(test_normal_map);

let cubeMapTransform = new CGE.Transform();
cubeMapTransform.setPosition(new CGE.Vector3(100, 0, 0));
cubeMapTransform.setScale(new CGE.Vector3(1, 1, 1));

let teapotMatrial = CGE.DeferredMaterial.createFromParameter(
    'spnza_bricks_a_ddn.jpg', true,
    'spnza_bricks_a_ddn.jpg', true,
    'spnza_bricks_a_spec.jpg', true);

let cubeMapEntity = new CGE.Entity();
cubeMapEntity.addComponent(CGE.Component.CreateGeometryComponent(teapotGeometry));
cubeMapEntity.addComponent(CGE.Component.CreateMaterialComponent(teapotMatrial));
// cubeMapEntity.addComponent(CGE.Component.CreateMaterialComponent(cubeMaterial));
cubeMapEntity.addComponent(CGE.Component.CreateTransfromComponent(cubeMapTransform));

let bigPlaneTransform = new CGE.Transform();
bigPlaneTransform.setPosition(new CGE.Vector3(0, 0, 0));
bigPlaneTransform.setScale(new CGE.Vector3(150, 150, 1));

let bigPlaneMatrial = CGE.DeferredMaterial.createFromParameter(
    'spnza_bricks_a_diff.jpg', true,
    'spnza_bricks_a_ddn.jpg', true,
    'spnza_bricks_a_spec.jpg', true);

let bigPlaneEntity = new CGE.Entity();
bigPlaneEntity.addComponent(CGE.Component.CreateGeometryComponent(planeVertexGeometry));
bigPlaneEntity.addComponent(CGE.Component.CreateMaterialComponent(bigPlaneMatrial));
bigPlaneEntity.addComponent(CGE.Component.CreateTransfromComponent(bigPlaneTransform));

let renderTargetScene = new CGE.Scene();
renderTargetScene.addEntity(entity);
renderTargetScene.addEntity(cubeMapEntity);
renderTargetScene.addEntity(bigPlaneEntity);
renderTargetScene.setMainCamera(renderTargetCameraEntity);

let mainScene = new CGE.Scene();
mainScene.addEntity(fullScreenEntity);
mainScene.addEntity(normalShowingEntity);
mainScene.addEntity(depthShowingEntity);
mainScene.setMainCamera(cameraEntity);

let quater = new CGE.Quaternion();
quater.setAxisAngle(new CGE.Vector3(0, 0, 1), 0.01 * Math.PI);
let testMat4 = new CGE.Matrix4();
testMat4.makeForQuaternion(quater);

let renderer = new CGE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.enableDepthTest();
renderer.setClearColor(1.0, 0.5, 0.5, 1.0);
renderer.clear(true, true);

document.body.appendChild(renderer.getCanvas());

let rad = 0;
let render = function() {
    // camera.setPosition(new CGE.Vector3(100*Math.sin(rad), 100*Math.cos(rad), 100));
    rad += 0.01 * Math.PI;
    renderTargetScene.update();
    mainScene.update();
    transform.applyMatrix4(testMat4);
    cubeMapTransform.applyMatrix4(testMat4);
    renderer.renderScene(renderTargetScene, renderTarget);
    renderer.renderScene(mainScene);
};

function loop() {
    let animationframe = window.requestAnimationFrame
                        ||window.mozRequestAnimationFrame
                        ||window.webkitRequestAnimationFrame
                        ||window.msRequestAnimationFrame
                        ||window.oRequestAnimationFrame
                        ||function(a){
        setTimeout(a, 1000/30);
    };
	animationframe(loop);
	render();
};

let xmlHttp = new XMLHttpRequest();

xmlHttp.onreadystatechange = function() {
    if (xmlHttp.readyState === 4 && xmlHttp.status === 200) {
        console.log('test_xmlHttp_ok');
    }
}

xmlHttp.open('GET', './teapot.js', true);
xmlHttp.send(null);

window.onresize = function() {
    let width = window.innerWidth;
    let height = window.innerHeight;
    renderer.setSize(width, height);
    camera.resize(width, height);
    camera.update();
    renderTargetCamera.resize(width, height);
    renderTargetCamera.update();
    render();
};

window.onmousemove = function(event) {
    // console.log(event);
};

window.onkeydown = function(event) {
    // console.log(event);
};

render();
render();
if (noError) {
    // loop();
}