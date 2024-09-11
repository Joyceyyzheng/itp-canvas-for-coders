import { useLoader } from '@react-three/fiber'
import { FBXLoader } from 'three/examples/jsm/loaders/FBXLoader'

export default function Scene() {
    const fbx = useLoader(FBXLoader, '/cat.fbx')
    return <primitive object={fbx} />
}

