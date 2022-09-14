let icosahedron;
let camera, scene, renderer, composer, spotlight;

init();
window.addEventListener( 'resize', onWindowResize, false );
animate();

function init() {
    // Setup scene

    scene = new THREE.Scene();
    camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(renderer.domElement);
    composer = new THREE.EffectComposer(renderer);

    // Space background

    const starGeo = new THREE.BufferGeometry();

    const positions = new Float32Array(3000 * 3);
    for (let i = 0; i < 3000; i++) {
        let position = new THREE.Vector3 (
            Math.random() * 600 - 300,
            Math.random() * 600 - 300,
            Math.random() * 600 - 300
        );
        positions[i * 3] = position.x;
        positions[i * 3 + 1] = position.y;
        positions[i * 3 + 2] = position.z;
    }

    starGeo.setAttribute("position", new THREE.BufferAttribute(positions, 3));

    let sprite = new THREE.TextureLoader().load("/assets/img/star.png");
    let starMaterial = new THREE.PointsMaterial({
        color: 0xaaaaaa,
        size: 0.3,
        map: sprite
    });

    let stars = new THREE.Points(starGeo, starMaterial);
    scene.add(stars);


    // Icosahedron

    const icosehedronGeo = new THREE.IcosahedronGeometry(1.3, 1);
    const icosahedronMat = new THREE.MeshPhongMaterial({ 
        color: 0x004A91,
        flatShading: true,
    });
    icosahedron = new THREE.Mesh(icosehedronGeo, icosahedronMat);
    scene.add(icosahedron);


    // Tetrahedron ring

    const ringRadius = 4;
    const defaultSize = .2;

    const tetrahedronMat = new THREE.MeshPhongMaterial({
        color: 0x004A91,
        flatShading: true
    });
    for (let i = 0; i < 100; i++) {
        let size = (Math.random() * defaultSize) + 0.05;

        let tetrahedronGeo = new THREE.TetrahedronGeometry(size);
        let tetrahedron = new THREE.Mesh(tetrahedronGeo, tetrahedronMat);

        let a = Math.random() * 2 * Math.PI; // Angle;
        let r = (Math.random() * 2) + ringRadius-1; // Distance

        // x, y and z coordinates of the tetrahedron
        let x = r * Math.cos(a);
        let z = r * Math.sin(a);
        let y = (Math.random() * 2) - 1;

        // random rotation
        let rx = Math.random() * 2 * Math.PI;
        let ry = Math.random() * 2 * Math.PI;
        let rz = Math.random() * 2 * Math.PI;

        tetrahedron.position.set(x, y, z);
        tetrahedron.rotation.set(rx, ry, rz);

        scene.add(tetrahedron);
    }

    
    // Lights

    pl1 = new THREE.PointLight(0xffffff, 2);
    pl1.position.set(3, 0, 0);
    scene.add(pl1);

    pl2 = new THREE.PointLight(0xffffff, 2);
    pl2.position.set(-3, 0, 0);
    scene.add(pl2);

    // const plh1 = new THREE.PointLightHelper( pl1, .5 );
    // scene.add( plh1 );

    // const plh2 = new THREE.PointLightHelper( pl2, .5 );
    // scene.add( plh2 );

    // Update camera
    camera.position.z = 5;
    const controls = new THREE.OrbitControls(camera, renderer.domElement);

    // Post processing 

    composer.addPass(new THREE.RenderPass(scene, camera));
    const bokehPass = new THREE.BokehPass( scene, camera, {
        focus: 100.0,
        aperture: 0.00003,
        maxblur: 0.005,
    } );
    bokehPass.needsSwap = true;
    composer.addPass(bokehPass);
     
    const filmPass = new THREE.FilmPass(0.35, 0.5, 2048, true);
    filmPass.uniforms["grayscale"] = 5;
    composer.addPass(filmPass);

    // const glitchPass = new THREE.GlitchPass();
    // composer.addPass(glitchPass);
}

// Update scene
var i = 0;
function animate() {
    requestAnimationFrame(animate);
    camera.position.x = -Math.cos(i) * 5;
    camera.position.z = Math.sin(i) * 5;
    camera.lookAt(0, 0, 0);
    camera.rotation.z += 0.4;

    pl1.position.x = Math.cos(i*3) * 4;
    pl1.position.z = Math.sin(i*3) * 4;

    pl2.position.x = -Math.cos(i*3) * 4;
    pl2.position.z = -Math.sin(i*3) * 4;

    i -= 0.001;

    composer.render(scene, camera);
}

function onWindowResize() {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize( window.innerWidth, window.innerHeight );
    composer.setSize( window.innerWidth, window.innerHeight );
}