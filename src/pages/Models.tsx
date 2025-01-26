import { useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Environment, useGLTF } from '@react-three/drei';

function SupraModel() {
  const { scene } = useGLTF('/src/assets/supra_by_rogerharsh.glb');
  return <primitive object={scene} scale={0.5} />;
}

export default function Models() {
  const arr = [
    { name: 'Stratosphere', color: 'rgb(16, 12, 86)' },
    { name: 'Absolute Zero', color: 'rgb(235, 234, 229)' },
    { name: 'Nocturnal', color: 'rgb(22, 22, 23)' },
    { name: 'Renaissance Red', color: 'rgb(182, 30, 13)' },
  ];

  const [selectedColor, setSelectedColor] = useState(null);

  return (
    <div className="flex w-full h-full bg-white">
      {/* Left section */}
      <div className="w-2/3">
        <Canvas
          camera={{
            position: [0, 2, 10], // Set the starting camera position: x, y, z
            fov: 50, // Field of view for a natural perspective
          }}
        >
          {/* Lighting */}
          <ambientLight intensity={0.3} />
          <directionalLight position={[5, 5, 5]} intensity={1} />
          <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={1.5} castShadow />

          {/* 3D Model */}
          <SupraModel />

          {/* Camera Controls */}
          <OrbitControls enableZoom={true} />
          {/* Environment */}
          <Environment preset="sunset" />
        </Canvas>
      </div>

      {/* Right section */}
      <div className="flex flex-col w-1/3 p-4 border border-black">
        <div className="p-4">
          <p className="text-4xl text-black font-bold mb-6">Colors</p>
          <p className="text-2xl text-gray-600 mb-2">EXTERIOR</p>
          <div className="flex flex-col gap-3 ">
            {/* Loop through colors */}
            {arr.map((color, index) => (
              <button
                key={index}
                onClick={() => setSelectedColor(index)}
                className={`flex items-center p-4 text-lg text-black font-bold rounded-lg shadow-md border transition-colors ${
                  selectedColor === index
                    ? 'border-red-500'
                    : 'border-gray-400 hover:bg-gray-200'
                }`}
                // className=" flex items-center p-4 text-lg text-black font-bold border border-gray-400 rounded-lg shadow-md hover:bg-gray-200"
              >
                {/* Circle */}
                <span
                  className="w-13 h-13 rounded-full mr-3"
                  style={{
                    backgroundColor: color.color,
                  }}
                ></span>
                {/* Color Name */}

                {color.name}
              </button>
            ))}
          </div>
          <p className="text-2xl text-gray-600 my-2">INTERIOR</p>
        </div>
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
