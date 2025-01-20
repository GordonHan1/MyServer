// Model.tsx
import { Canvas } from "@react-three/fiber";
import { OrbitControls, PerspectiveCamera } from "@react-three/drei";
import { useState, useEffect, useRef, Suspense } from 'react';
import Oldpc from '../../../public/3Dmodels/OldPc/Oldpc.jsx';
import classes from "./Model.module.css";

// Define the type for props, including the callback function
interface ModelProps {
    onInteractionComplete: () => void;
}



export function Model({ onInteractionComplete }: ModelProps) {
    const [interactionCount, setInteractionCount] = useState(0);
    const canvasRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        const handleResize = () => {
            if (canvasRef.current) {
                canvasRef.current.style.width = '100%';
                canvasRef.current.style.height = '60vh';
            }
        };

        window.addEventListener('resize', handleResize);
        handleResize();

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    const handleInteraction = () => {
        setInteractionCount(prev => {
            const newCount = prev + 1;
            if (newCount >= 5) { // Trigger after 5 interactions
                setTimeout(() => {
                    onInteractionComplete();
                }, 5000); // 5-second delay
            }
            return newCount;
        });
    };

    return (
        <div className={classes.divclass} ref={canvasRef}>
            <Canvas onPointerDown={handleInteraction}>
                <PerspectiveCamera makeDefault position={[0, 0, 75]} zoom={1} />
                <ambientLight />
                <OrbitControls minDistance={45} maxDistance={100} onChange={handleInteraction} />
                <Suspense fallback={null}>
                    <Oldpc />
                </Suspense>
            </Canvas>
        </div>
    );
}
