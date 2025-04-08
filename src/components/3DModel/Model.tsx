// Model.tsx
import { Canvas } from "@react-three/fiber";
import { OrbitControls, PerspectiveCamera } from "@react-three/drei";
import { useState, useEffect, useRef, Suspense } from 'react';
import Oldpc from '../../../public/3Dmodels/OldPc/Oldpc.jsx';
import Cafe from '../../../public/3Dmodels/Cafe/Cafe.jsx';  // Add this import
import classes from "./Model.module.css";

// Define the type for props, including the callback function
interface ModelProps {
    onInteractionComplete: () => void;
}



export function Model({ onInteractionComplete }: ModelProps) {
    const [interactionCount, setInteractionCount] = useState(0);
    const [currentModel, setCurrentModel] = useState<'oldpc' | 'cafe'>('oldpc');  // Add this state
    const [showCode, setShowCode] = useState(false);
    const [message, setMessage] = useState("Drag and Scroll around ↓");
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
                    setMessage("Click to see something different!");
                    onInteractionComplete();
                }, 5000); // 5-second delay
            }
            return newCount;
        });
    };

    const handleModelClick = (event: any) => {
        event.stopPropagation();  // Prevent the click from triggering other handlers
        setCurrentModel(prev => prev === 'oldpc' ? 'cafe' : 'oldpc');
        handleInteraction();
    };

    const toggleCodeView = () => {
        setShowCode(prev => !prev);
    };

    // Sample code snippets for demonstration
    const codeSnippet = currentModel === 'oldpc' 
        ? `// 3D Model: Old PC
import { useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";

export default function Oldpc({ onClick }) {
  const { nodes, materials } = useGLTF("/models/oldpc.glb");
  
  useFrame((state) => {
    // Animation logic
  });

  return (
    <group onClick={onClick}>
      {/* Model mesh components */}
    </group>
  );
}`
        : `// 3D Model: Cafe
import { useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";

export default function Cafe({ onClick }) {
  const { nodes, materials } = useGLTF("/models/cafe.glb");
  
  useFrame((state) => {
    // Animation logic
  });

  return (
    <group onClick={onClick}>
      {/* Model mesh components */}
    </group>
  );
}`;

    return (
        <div className={classes.divclass} ref={canvasRef}>
            <div className={classes.toggleContainer}>
                <label className={classes.switch}>
                    <input 
                        type="checkbox" 
                        checked={showCode}
                        onChange={toggleCodeView}
                    />
                    <span className={classes.slider}></span>
                    <span className={classes.toggleLabel}>
                        {showCode ? 'View Model' : 'View Code'}
                    </span>
                </label>
            </div>
            
            {showCode ? (
                <div className={classes.codeView}>
                    <pre>{codeSnippet}</pre>
                </div>
            ) : (
                <Canvas onPointerDown={handleInteraction}>
                    <PerspectiveCamera makeDefault position={[0, 0, 75]} zoom={1} />
                    <ambientLight />
                    <OrbitControls minDistance={45} maxDistance={100} onChange={handleInteraction} />
                    <Suspense fallback={null}>
                        {currentModel === 'oldpc' ? (
                            <Oldpc onClick={handleModelClick} />
                        ) : (
                            <Cafe onClick={handleModelClick} />
                        )}
                    </Suspense>
                </Canvas>
            )}
        </div>
    );
}
