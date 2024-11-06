import { Canvas } from "@react-three/fiber";
import { OrbitControls, PerspectiveCamera } from "@react-three/drei";
import { useState, Suspense } from 'react';
import Oldpc from '../../../public/3Dmodels/OldPc/Oldpc.jsx';
import "./Model.css"

export function Model() {
    const [count, setCount] = useState(0);

    return (
        <>
            <Canvas>
                <PerspectiveCamera
                    makeDefault
                    position={[0, 0, 75]}
                    zoom={1}
                />
                <ambientLight />
                <OrbitControls minDistance={45} maxDistance={100}/>
                <Suspense fallback={null}>
                    <Oldpc />
                </Suspense>
            </Canvas>
        </>
    );
}

