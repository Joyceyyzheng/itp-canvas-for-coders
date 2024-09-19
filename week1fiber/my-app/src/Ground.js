

import './App.css';


import { DoubleSide } from "three";


export default function Ground() {


    return (


        <mesh position={[0, 0, 0]} rotation={[Math.PI / 2, 0, 0]} scale={[3, 3, 3]}>
            {/* <boxGeometry /> */}
            <planeGeometry />
            <meshStandardMaterial color="green" side={DoubleSide} />
        </mesh>




    );
}


