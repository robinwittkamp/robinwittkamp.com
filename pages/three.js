// import Head from '../components/Head';
// import Layout from '../components/Layout';
import { Canvas } from '@react-three/fiber';

import Box from '../components/Three/Box';

const Three = () => (
  <main>
    <Canvas
      style={{ height: '100vh', width: '100vw' }}
      // className="w-screen h-screen"
    >
      <ambientLight intensity={0.5} />
      <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
      <pointLight position={[-10, -10, -10]} />
      <Box position={[-1.2, 0, 0]} />
      <Box position={[1.2, 0, 0]} />
    </Canvas>
  </main>
);

export default Three;
