import { Canvas } from '@react-three/fiber';
import { EffectComposer, Bloom } from '@react-three/postprocessing';
import { OrbitControls, Stars } from '@react-three/drei';


const Scene = () => {
    return (
        <div style={{ position: 'relative', width: '100vw', height: '110vh' }}>

            <Canvas
                dpr={[1, 1.5]}
                camera={{ position: [0, 0, 10], fov: 50 }}
                style={{ position: 'relative', zIndex: 0 }}
            >
                <color attach="background" args={['#000000']} />
                <ambientLight intensity={0.2} />
                <pointLight position={[10, 10, 10]} intensity={1} color="#9900ffff" />
                <Stars radius={50} depth={80} count={2000} factor={1} fade />

                <EffectComposer>
                    <Bloom intensity={0.8} kernelSize={3} luminanceThreshold={0.9} />
                </EffectComposer>

                <OrbitControls
                    enableZoom={false}
                    autoRotate
                    autoRotateSpeed={0.05}
                    minPolarAngle={Math.PI / 4}
                    maxPolarAngle={(3 * Math.PI) / 4}

                />
            </Canvas>
        </div>
    );
};

export default Scene;