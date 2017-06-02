// sources:
// https://www.youtube.com/playlist?list=PL08jItIqOb2qyMOhtEUoLh100KpccQiRf
// http://i.imgur.com/rCr9A.png

  var renderer = new THREE.WebGLRenderer({canvas: document.getElementById('jsCanvas'), antialias: true});
  renderer.setClearColor(0x000000);
  renderer.setPixelRatio(window.devicePixelRatio);
  renderer.setSize(window.innerWidth, window.innerHeight);

  //CAMERA
  var camera = new
  // field of view, aspect ratio
  THREE.PerspectiveCamera(
    35,
    window.innerWidth / window.innerHeight,
    300,
    10000
  );

  //SCENE
  var scene = new THREE.Scene();

  //LIGHTS
  var light = new THREE.DirectionalLight( 0xffffbb, 0.5 )
// scene.add( light );
  scene.add(light);
  // scene.add(light);
  var light1 = new THREE.PointLight(0x9933ff, .8);
  scene.add(light1);
  // var light2 = new THREE.AmbientLight(0xffaaff, 1);
  // scene.add(light2);




  // material
  // var material = new THREE.MeshBasicMaterial({
  //   color: 0x0000ff,
  //   transparent: true,
  //   opacity: 0.8,
  //   wireframe: true,
  // });
  cubes = [];
  for (let i=0; i<100; i++) {
    var material = new THREE.MeshStandardMaterial({
      color: 0xac99ff,
      metalness: 0.9,
      roughness: 0.2
    });
    // GEOMETRY
    var dimension = 10 + 90*Math.random();
    var geometry = new THREE.BoxGeometry(dimension, dimension, dimension);
    var mesh = new THREE.Mesh(geometry, material);
    mesh.position.z = -700 - 500*Math.random();
    mesh.position.x = -window.innerWidth+2*window.innerWidth*Math.random();
    mesh.position.y = window.innerHeight*Math.random();
    scene.add(mesh);
    cubes.push(mesh);
  }
  //
  // var geometry2 = new THREE.SphereGeometry(50, 20, 20);
  // var mesh2 = new THREE.Mesh(geometry2, material);
  // mesh2.position.z = -1000;
  // mesh2.position.x = 100;
  // scene.add(mesh2);

  // var geometry3 = new THREE.PlaneGeometry(10000,10000,100,100);
  // var mesh3 = new THREE.Mesh(geometry3, material);
  // var mesh3.position.x = -90 * Math.PI / 180;
  //
  // mesh3.rotation.x = -90 * Math.PI / 180;
  // mesh3.position.y = -100;
  // scene.add(mesh3);



  render();

  function render() {
    cubes.forEach(function(mesh) {
      var direction = new THREE.Vector3(Math.random(), -Math.random(), -Math.random());
      mesh.rotation.x += 0.005;
      mesh.rotation.y += 0.01;
      mesh.position.add(direction);
    })
    renderer.render(scene, camera);
    requestAnimationFrame(render);
  }
