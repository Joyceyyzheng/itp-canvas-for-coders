import logo from './logo.svg';
import './App.css';
import { createRoot } from 'react-dom/client'
import { Canvas } from '@react-three/fiber'
import Scene from './Cat';
import { AmbientLight } from 'three';
import { OrbitControls } from '@react-three/drei'

function App() {
  return (
    <div className="App">
      <div id="canvas-container">
        <Canvas>
          <ambientLight intensity={8.0} />
          <mesh>

            <boxGeometry />
            <Scene />

            <meshStandardMaterial />
          </mesh>
          <OrbitControls />
        </Canvas>


      </div>
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
    </div>
  );
}

export default App;

