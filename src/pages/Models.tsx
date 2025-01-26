import { useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Environment, useGLTF } from '@react-three/drei';

function SupraModel() {
  const { scene } = useGLTF('/src/assets/supra_by_rogerharsh.glb');
  return <primitive object={scene} scale={0.5} />;
}

import { useNavigate } from "react-router-dom";
import { FaArrowLeftLong } from "react-icons/fa6";
import { BiSolidChevronRight } from "react-icons/bi";
import { NavLink } from "react-router-dom";
import Modal from "@mui/material/Modal"

export default function Models() {
    const navigate = useNavigate();

    const handleGoBack = () => {
      navigate(-1); // Go back one step in history
    };

    const [openModal, setOpenModal] = useState(false);
    const [modalMsg, setModalMsg] = useState("");

    const exteriorColor = [
        { name: 'Stratosphere', color: 'rgb(16, 12, 86)', price: 425 },
        { name: 'Absolute Zero', color: 'rgb(235, 234, 229)', price: 0},
        { name: 'Nocturnal', color: 'rgb(22, 22, 23)', price: 0 },
        { name: 'Renaissance Red', color: 'rgb(182, 30, 13)', price: 0},
    ];
    const interiorColor = [{name: "Black Alcantara/Leather-trimmed", src: "/alcantara.png", price: 0}]
    const engine = ["3.0L Inline 6-Cyl. Turbo Engine"]
    const drivetrain = ["Rear-Wheel Drive"]
    const transmission = ["8-Speed Automatic Transmission with paddle shifters", "6-Speed intelligent Manual Transmission(iMT)"]
    const packages = [{name: "Safety & Technology Package Plus JBL (For AT only)", price: 3155}]

    const [activeExteriorColor, setActiveExteriorColor] = useState<number>(0);
    const [activeInteriorColor, setActiveInteriorColor] = useState<number>(0);
    const [activeEngine, setActiveEngine] = useState<number>(0);
    const [activeDrivetrain, setActiveDrivetrain] = useState<number>(0);
    const [activeTransmission, setActiveTransmission] = useState<number>(0);
    const [activePkg, setActivePkg] = useState<number | null>(null);

    const [price, setPrice] = useState(56250);

    const cardStyle = "cursor-pointer w-full flex items-center p-4 text-black font-bold rounded-lg shadow-md border transition-colors gap-x-3"

  return (
    <div className="relative flex w-full h-full bg-white text-black">

        <button type="button" onClick={handleGoBack} className="z-100 fixed top-4 left-4 bg-black text-white rounded-md cursor-pointer px-3 py-2">
            <FaArrowLeftLong />
        </button>

        <div className="fixed bottom-4 left-4 rounded-md px-3 py-2 bg-black text-white">
            Total Amount as Built: <b>${price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</b>
        </div>

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

      <div className="flex flex-col w-1/3 px-4 mr-4 py-6 border border-black">
        <div className="flex flex-col">
          <p className="text-2xl text-black font-bold mb-4">Colors</p>
          <p className="text-lg text-gray-600 mb-4">EXTERIOR</p>
          <div className="flex flex-col gap-y-2 mb-6">
            {exteriorColor.map((color, index) => (
              <button
                key={index}
                onClick={() => setActiveExteriorColor(index)}
                className={`cursor-pointer flex items-center p-4 text-black font-bold rounded-lg shadow-md border transition-colors ${
                  activeExteriorColor === index
                    ? 'border-red-500'
                    : 'border-gray-400 hover:bg-gray-200'
                }`}
              >
                <span
                  className="w-8 h-8 rounded-full mr-3"
                  style={{
                    backgroundColor: color.color,
                  }}
                ></span>
                  {color.name}
              </button>
            ))}
          </div>
          <p className="text-lg text-gray-600 mb-4">INTERIOR</p>
          <div className="flex flex-col gap-y-2 mb-6">
            {interiorColor.map((color, i) => (
                <button key={i} onClick={() => setActiveInteriorColor(i)} className={`${cardStyle} ${(i === activeInteriorColor) ? "border-red-500" : ""}`}>
                    <img src={color.src} className="w-8 h-8 object-cover rounded-full"/>
                    {color.name}
                </button>
            ))}
          </div>
        </div>

        <div className="flex flex-col mt-8">
          <p className="text-2xl text-black font-bold mb-4">Powertrain</p>
          <p className="text-lg text-gray-600 mb-4">ENGINE</p>
          <div className="flex flex-col gap-y-2 mb-6">
            {engine.map((desc, i) => (
                <button key={i} onClick={() => setActiveEngine(i)} className={`${cardStyle} ${(i === activeEngine) ? "border-red-500" : ""}`}>
                    {desc}
                </button>
            ))}
          </div>
          <p className="text-lg text-gray-600 mb-4">DRIVETRAIN</p>
          <div className="flex flex-col gap-y-2 mb-6">
            {drivetrain.map((desc, i) => (
                <button key={i} onClick={() => setActiveDrivetrain(i)} className={`${cardStyle} ${(i === activeDrivetrain) ? "border-red-500" : ""}`}>
                    {desc}
                </button>
            ))}
          </div>
          <p className="text-lg text-gray-600 mb-4">TRANSMISSION</p>
          <div className="flex flex-col gap-y-2 mb-6">
            {transmission.map((desc, i) => (
                <button key={i} onClick={() => setActiveTransmission(i)} className={`${cardStyle} ${(i === activeTransmission) ? "border-red-500" : ""}`}>
                    {desc}
                </button>
            ))}
          </div>
        </div>

        <div className="flex flex-col mt-8">
          <p className="text-2xl text-black font-bold mb-4">Packages</p>
          <div className="flex flex-col gap-y-2 mb-6">
            {packages.map((p, i) => (
                <button key={i} onClick={() => {setActivePkg((activePkg != i) ? i : null); setPrice((prev) => (activePkg === i) ? 56250 : prev+p.price)}} className={`${cardStyle} flex-col items-start ${(i === activePkg) ? "border-red-500" : ""}`}>
                    <p>
                        {p.name}
                    </p>
                    <p className="text-green-700">${p.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</p>
                    <button type="button" onClick={() => {setOpenModal(true); setModalMsg("Full-Speed Dynamic Radar Cruise Control, * Blind Spot Monitor (BSM), * Rear Cross-Traffic Alert (RCTA), * Parking Sensors * with Emergency Braking function. Technology included: 8.8-in. touchscreen display with navigation, * 12-speaker 500W JBL® * audio system with amplifier, touchpad rotary control, wireless Apple CarPlay® * compatible (iOS only), Speed Limit Information, * Supra Connected Services * with trial: includes Remote Services, * Remote Maintenance, * Automatic Emergency Calling, * Real-Time Traffic Information, * Stolen Vehicle Recovery, * Map Updates. *")}} className="flex gap-x-1 cursor-pointer font-medium items-center">
                        See Details
                        <BiSolidChevronRight/>
                    </button>
                </button>
            ))}
        </div>
        </div>

        <NavLink to="/checkout" className="w-full text-center px-4 py-3 rounded-md bg-red-400 font-bold text-white hover:bg-red-600 transition-all duration-300">
            Checkout
        </NavLink>
        
      </div>
      
      <Modal
      open={openModal}
      onClose={() => setOpenModal(false)}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
      >
      <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 p-4 rounded-md bg-neutral-700 min-w-80'>
        {modalMsg}
      </div>
      </Modal>


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
