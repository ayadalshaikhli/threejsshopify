import { Canvas, useLoader, useFrame } from "@react-three/fiber";
import React, { Suspense, useRef, useState, useEffect } from "react";
import { Html, useGLTF } from "@react-three/drei";
import { Section } from "./section";

import { proxy, useSnapshot } from "valtio";
import { gsap } from "gsap/dist/gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

// const Model = (props) => {
//   const gltf = useGLTF("/bottle3.glb", true);
//   return <primitive object={gltf.scene} dispose={null} />;
// };

const Lights = () => {
  return (
    <>
      {/* Ambient Light illuminates lights for all objects */}
      <ambientLight intensity={0.3} />
      {/* Diretion light */}
      <directionalLight position={[10, 10, 5]} intensity={1.5} />
      <directionalLight
        castShadow
        position={[0, 10, 0]}
        intensity={1.5}
        shadow-mapSize-width={1024}
        shadow-mapSize-height={1024}
        shadow-camera-far={50}
        shadow-camera-left={-10}
        shadow-camera-right={10}
        shadow-camera-top={10}
        shadow-camera-bottom={-10}
      />
      {/* Spotlight Large overhead light */}
      <spotLight intensity={1.5} position={[1000, 0, 0]} castShadow />
    </>
  );
};

const state = proxy({
  current: null,
  items: {
    Green: "#DFEDE0",
    White: "#EBEBEB",
    Pink: "#F2C7B3",
  },
});

// useEffect(() => {
//   ScrollTrigger.create({
//     trigger: ".product",
//     start: "top 50%",
//     end: "bottom 0%",

//     onEnter: () => {
//       gsap.to(".body", {
//         duration: 1.0,
//         backgroundColor: "#F4B4B8",

//       });
//     },

//     onLeaveBack: () => {
//       gsap.to(".body", {
//         duration: 1.0,
//         backgroundColor: "#B7B8BA",
//       });
//     },
//   });
function White() {
  const { nodes, materials } = useGLTF("/white.glb");
  const cup = useRef();

  // for demonstrating first eye is same as second eye
  // Output: false, true

  useEffect((state) => {
    cup.current.rotation.y = 6.2;
    let o = { a: 0 };
    gsap.to(o, {
      a: 1,
      scrollTrigger: {
        trigger: ".wrap",
        markers: true,
        scrub: 5,
        // start: "top top",
        // end: "bottom bottom",
        start: "top top",
        end: "bottom bottom",
        onUpdate: (self) => {
          // ref.current.rotation.y = 1 * Math.PI * self.progress;
          cup.current.rotation.y = 2 * Math.PI * self.progress;
          cup.current.position.x = -11 * self.progress;
          cup.current.position.y = -2 * self.progress;
        },
      },
    });
  });

  return (
    <>
      <group scale={10} position={[-60, 185, 0]} dispose={null}>
        {/* <primitive object={firstGltf.scene} position={[0, 185, 0]} /> */}
        <group ref={cup} position={[0, 5, 0]} rotation={[250, 0, 0]}>
          <mesh
            geometry={nodes.Cylinder.geometry}
            material={materials["gummy 2"]}
            position={[0, 3.76, 0]}
          />
          <mesh
            geometry={nodes.top_cup.geometry}
            material={nodes.top_cup.material}
            position={[0, 3.76, 0]}
          />
          <mesh
            geometry={nodes.bottomcup.geometry}
            material={nodes.bottomcup.material}
            position={[0.04, 3.76, -0.02]}
          />
        </group>
      </group>
    </>
  );
}
function Pink() {
  const { nodes, materials } = useGLTF("/pink.glb");
  const cup = useRef();

  // for demonstrating first eye is same as second eye
  // Output: false, true

  useEffect((state) => {
    cup.current.rotation.y = 6.2;
    let o = { a: 0 };
    gsap.to(o, {
      a: 1,
      scrollTrigger: {
        trigger: ".wrap",
        markers: true,
        scrub: 5,
        // start: "top top",
        // end: "bottom bottom",
        start: "top top",
        end: "bottom bottom",
        onUpdate: (self) => {
          // ref.current.rotation.y = 1 * Math.PI * self.progress;
          cup.current.rotation.y = 2 * Math.PI * self.progress;
          cup.current.position.y = -17 * self.progress;
          cup.current.position.y = -2 * self.progress;
        },
      },
    });
  });

  return (
    <>
      <group scale={10} position={[-20, 185, 0]} dispose={null}>
        {/* <primitive object={firstGltf.scene} position={[0, 185, 0]} /> */}
        <group ref={cup} position={[0, 5, 0]} rotation={[250, 0, 0]}>
          <mesh
            geometry={nodes.Cylinder.geometry}
            material={materials["gummy 2"]}
            position={[0, 3.76, 0]}
          />
          <mesh
            geometry={nodes.top_cup.geometry}
            material={nodes.top_cup.material}
            position={[0, 3.76, 0]}
          />
          <mesh
            geometry={nodes.bottomcup.geometry}
            material={nodes.bottomcup.material}
            position={[0.04, 3.76, -0.02]}
          />
        </group>
      </group>
    </>
  );
}

function Green() {
  const { nodes, materials } = useGLTF("/dog88.glb");
  const cup = useRef();

  // for demonstrating first eye is same as second eye
  // Output: false, true

  useEffect((state) => {
    cup.current.rotation.y = 6.2;
    let o = { a: 0 };
    gsap.to(o, {
      a: 1,
      scrollTrigger: {
        trigger: ".wrap",
        markers: true,
        scrub: 5,
        // start: "top top",
        // end: "bottom bottom",
        start: "top top",
        end: "bottom bottom",
        onUpdate: (self) => {
          // ref.current.rotation.y = 1 * Math.PI * self.progress;
          cup.current.rotation.y = -2 * Math.PI * self.progress;
          cup.current.position.y = -17 * self.progress;
          cup.current.position.y = -2 * self.progress;
        },
      },
    });
  });

  return (
    <>
      <group scale={10} position={[20, 185, 0]} dispose={null}>
        {/* <primitive object={firstGltf.scene} position={[0, 185, 0]} /> */}
        <group ref={cup} position={[0, 5, 0]} rotation={[250, 0, 0]}>
          <mesh
            geometry={nodes.Cylinder.geometry}
            material={materials["gummy 2"]}
            position={[0, 3.76, 0]}
          />
          <mesh
            geometry={nodes.top_cup.geometry}
            material={nodes.top_cup.material}
            position={[0, 3.76, 0]}
          />
          <mesh
            geometry={nodes.bottomcup.geometry}
            material={nodes.bottomcup.material}
            position={[0.04, 3.76, -0.02]}
          />
        </group>
      </group>
    </>
  );
}

const HTMLContent = ({ products }) => {
  const group = useRef();
  const ref = useRef();
  const cup = useRef();
  const bottom = useRef();
  const top = useRef();
  const middle = useRef();
  // const snap = useSnapshot(state);
  const { nodes, materials } = useGLTF("/yellow.glb");

  // const [hovered, set] = useState(null);
  // useEffect(() => {
  //   const cursor = `<svg width="64" height="64" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0)"><path fill="rgba(255, 255, 255, 0.5)" d="M29.5 54C43.031 54 54 43.031 54 29.5S43.031 5 29.5 5 5 15.969 5 29.5 15.969 54 29.5 54z" stroke="#000"/><g filter="url(#filter0_d)"><path d="M29.5 47C39.165 47 47 39.165 47 29.5S39.165 12 29.5 12 12 19.835 12 29.5 19.835 47 29.5 47z" fill="${snap.items[hovered]}"/></g><path d="M2 2l11 2.947L4.947 13 2 2z" fill="#000"/><text fill="#000" style="white-space:pre" font-family="Inter var, sans-serif" font-size="10" letter-spacing="-.01em"><tspan x="35" y="63">${hovered}</tspan></text></g><defs><clipPath id="clip0"><path fill="#fff" d="M0 0h64v64H0z"/></clipPath><filter id="filter0_d" x="6" y="8" width="47" height="47" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feColorMatrix in="SourceAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/><feOffset dy="2"/><feGaussianBlur stdDeviation="3"/><feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.15 0"/><feBlend in2="BackgroundImageFix" result="effect1_dropShadow"/><feBlend in="SourceGraphic" in2="effect1_dropShadow" result="shape"/></filter></defs></svg>`;
  //   const auto = `<svg width="64" height="64" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill="rgba(255, 255, 255, 0.5)" d="M29.5 54C43.031 54 54 43.031 54 29.5S43.031 5 29.5 5 5 15.969 5 29.5 15.969 54 29.5 54z" stroke="#000"/><path d="M2 2l11 2.947L4.947 13 2 2z" fill="#000"/></svg>`;
  //   if (hovered) {
  //     document.body.style.cursor = `url('data:image/svg+xml;base64,${btoa(
  //       cursor
  //     )}'), auto`;
  //     return () =>
  //       (document.body.style.cursor = `url('data:image/svg+xml;base64,${btoa(
  //         auto
  //       )}'), auto`);
  //   }
  // }, [hovered]);

  useEffect((state) => {
    // const t = state.clock.getElapsedTime();
    // ref.current.rotation.z = 0;
    // ref.current.rotation.x = 5;
    cup.current.rotation.y = 6.2;
    // ref.current.position.y = (1 + Math.sin(t / 1.5)) / 10;
    let o = { a: 0 };
    gsap.to(o, {
      a: 1,
      scrollTrigger: {
        trigger: ".wrap",
        markers: true,
        scrub: 5,
        // start: "top top",
        // end: "bottom bottom",
        start: "top top",
        end: "bottom bottom",
        onUpdate: (self) => {
          // ref.current.rotation.y = 1 * Math.PI * self.progress;
          cup.current.rotation.y = -2 * Math.PI * self.progress;
          cup.current.position.x = 10 * self.progress;
          cup.current.position.y = 2 * self.progress;
          // top.current.position.z = 2 * Math.PI * self.progress;
          // top.current.position.y = 1 * Math.PI * self.progress;
          // middle.current.position.z = 2 * Math.PI * self.progress;
          // middle.current.position.y = 1 * Math.PI * self.progress;
          // bottom.current.position.z = 2 * Math.PI * self.progress;
          // bottom.current.position.y = 1 * Math.PI * self.progress;

          // ref.current.position.z = 2 * Math.PI * self.progress;
          // ref.current.position.z = 2 * Math.PI * self.progress;

          // camera.rotation.z = -13.6 * Math.sin(3.14);
        },
      },
    });
  });

  return (
    <Section factor={1.5} offset={1}>
      <group
        ref={ref}
        scale={10}
        position={[60, 185, 0]}
        dispose={null}
        // onPointerOver={(e) => (
        //   e.stopPropagation(), set(e.object.material.name)
        // )}
        // onPointerOut={(e) => e.intersections.length === 0 && set(null)}
        // onPointerMissed={() => (state.current = null)}
        // onClick={(e) => (
        //   e.stopPropagation(), (state.current = e.object.material.name)
        // )}
      >
        {/* <group position={[0.06, 9.41, -0.23]} rotation={[0, 0.87, 0]}>
          <mesh
            geometry={nodes.Plane.geometry}
            material={materials.MatPadren}
            position={[-0.06, -9.35, 0.39]}
            rotation={[0, -1.57, 0]}
            scale={20.84}
          />
        </group> */}
        <group ref={cup} position={[0, 5, 0]} rotation={[250, 0, 0]}>
          <mesh
            ref={middle}
            geometry={nodes.Cylinder.geometry}
            material={materials["gummy 2"]}
            position={[0, 3.76, 0]}
          />
          <mesh
            ref={top}
            geometry={nodes.top_cup.geometry}
            material={nodes.top_cup.material}
            position={[0, 3.76, 0]}
          />
          <mesh
            ref={bottom}
            geometry={nodes.bottomcup.geometry}
            material={nodes.bottomcup.material}
            position={[0.04, 3.76, -0.02]}
          />
        </group>
      </group>
      {/* <mesh scale={25} position={[0, -18, 0]}>
          <Model />
          <meshMatcapMaterial map={colorMap} attachArray="material" />
        </mesh> */}
      <Green />
      <Pink />
      <White />
      <Html fullscreen></Html>
    </Section>
  );
};

// function Picker() {
//   const snap = useSnapshot(state);
//   return (
//     <div>
//       <HexColorPicker
//         className="picker"
//         color={snap.items[snap.current]}
//         onChange={(color) => (state.items[snap.current] = color)}
//       />
//       <h1>{snap.current}</h1>
//     </div>
//   );
// }

export default function Hero({ products }) {
  return (
    <>
      {/* <Picker /> */}

      <Canvas
        style={{
          width: "100%",
          height: "100%",
          position: "fixed",
        }}
        linear
        colorManagment
        camera={{ position: [0, 380, 30], fov: 25, far: 500 }}
      >
        <Lights />
        <Suspense fallback={null}>
          <HTMLContent products={products} />
        </Suspense>
      </Canvas>
    </>
  );
}
useGLTF.preload("/yellow.glb");
