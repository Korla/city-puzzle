var THREE = require('three');

var scene = new THREE.Scene();
var width = window.innerWidth;
var height = window.innerHeight;
var camera = new THREE.PerspectiveCamera(70, width / height, 1, 10);
camera.position.set(0, 3.5, 5);
camera.lookAt(scene.position);
var light = new THREE.AmbientLight(0xffffff);
scene.add(light);
var renderer = new THREE.WebGLRenderer();
renderer.setSize(width, height);
document.body.appendChild(renderer.domElement);

var loadFn = loader => url => new Promise((resolve, rej) => loader.load(url, (geometry, materials) => resolve([geometry, materials])));
var load = loadFn(new THREE.JSONLoader());

var roads = ['2-way straight', '2-way turn', '3-way', '4-way', 'No-way'];

var create = piece => (rotation = 0) => ([x, z]) => {
  let [geometry, materials] = piece;
  let material = new THREE.MeshFaceMaterial(materials);
  var mesh = new THREE.Mesh(geometry.clone(), material);
  mesh.position.add(new THREE.Vector3(x * 2, 0, z * 2));
  mesh.rotation.y = rotation;
  return mesh;
}

var createFunctions = roads.map(r => load('assets/' + r + '.json').then(create));
Promise.all(createFunctions).then(
  ([rotateStraight, rotate2Way, rotate3Way, rotate4Way, rotateNoWay]) => {
    var no = rotateNoWay();

    var UR = rotate2Way(2*Math.PI/2);
    var UD = rotateStraight();
    var UL = rotate2Way(3*Math.PI/2);

    var RD = rotate2Way(Math.PI/2);
    var RL = rotateStraight(Math.PI/2);
    var DL = rotate2Way();

    var URD = rotate3Way();
    var URL = rotate3Way(Math.PI/2);
    var UDL = rotate3Way(2*Math.PI/2);
    var RDL = rotate3Way(3*Math.PI/2);

    var URDL = rotate4Way();

    scene.add(no([-1,-1]));
    scene.add(RD([0,-1]));
    scene.add(DL([1,-1]));
    scene.add(RD([-1,0]));
    scene.add(URDL([0,0]));
    scene.add(UDL([1,0]));
    scene.add(UL([-1,1]));
    scene.add(UR([0,1]));
    scene.add(URL([1,1]));

    animate();
  }
)

var animate = () => {
  requestAnimationFrame(animate);
  renderer.render(scene, camera);
}
