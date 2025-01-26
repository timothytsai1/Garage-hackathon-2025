export default function Models() {
  return (
    <div className="flex w-full h-full ">
      <div className="w-2/3">
        <img src="" alt="" />
      </div>

      <div className="w-1/3">
        
      </div>
    </div>
  );
}

// import React, { useEffect, useRef } from 'react';
// import * as THREE from 'three';
// import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader';
// import { MTLLoader } from 'three/examples/jsm/loaders/MTLLoader';

// export default function Models() {
//   const mountRef = useRef<HTMLDivElement | null>(null); // Explicitly typing the reference

//   useEffect(() => {
//     // Scene setup
//     const scene = new THREE.Scene();
//     // scene.background = new THREE.Color(0xffffff);

//     // Camera setup
//     const camera = new THREE.PerspectiveCamera(
//       45,
//       window.innerWidth / window.innerHeight,
//       0.1,
//       1000
//     );
//     camera.position.set(0, 10, 50);
//     // camera.lookAt(0, 0, 0);

//     const renderer = new THREE.WebGLRenderer();
//     renderer.setClearColor(0xffffff, 1);
//     renderer.setSize(window.innerWidth, window.innerHeight);
//     if (mountRef.current) {
//       mountRef.current.appendChild(renderer.domElement);
//     }

//     const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
//     directionalLight.position.set(0, 20, 10);
//     scene.add(directionalLight);

//     const spotLight = new THREE.SpotLight(0xffffff, 1); // White color, intensity
//     spotLight.position.set(0, 15, 0); // Position the light
//     spotLight.target.position.set(0, 0, 0); // Position the spotlight target
//     scene.add(spotLight);
//     // const lightHelper = new THREE.DirectionalLightHelper(directionalLight, 5);
//     // scene.add(lightHelper);

//     // const ambientLight = new THREE.AmbientLight(0xffffff, 2);
//     // scene.add(ambientLight);

//     const mtlLoader = new MTLLoader();
//     mtlLoader.load('/src/assets/Toyota_RAV4_LE_2019.mtl', (materials) => {
//       materials.preload(); // Preload the materials
//       const objLoader = new OBJLoader();
//       objLoader.setMaterials(materials); // Apply the materials to the OBJLoader
//       objLoader.load('/src/assets/Toyota_RAV4_LE_2019.obj', (object) => {
//         object.scale.set(0.1, 0.1, 0.1); // Adjust the scale
//         object.position.set(0, 0, 0); // Adjust the position

//         scene.add(object);
//       });
//     });

//     const animate = () => {
//       requestAnimationFrame(animate);
//       // Example: Add rotation
//       scene.rotation.y += 0.01;
//       renderer.render(scene, camera);
//     };

//     animate();

//     return () => {
//       if (mountRef.current) {
//         mountRef.current.removeChild(renderer.domElement);
//       }
//     };
//   });

//   return <div ref={mountRef} style={{ width: '100vw', height: '100vh' }} />;
// }
