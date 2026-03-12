import * as THREE from "three"
import gsap from "gsap"

export function createCameras() {

    const perspectiveCamera = new THREE.PerspectiveCamera(
        60,
        window.innerWidth / window.innerHeight,
        0.1,
        1000
    )

    perspectiveCamera.position.set(60, 60, 60)
    perspectiveCamera.lookAt(40, 0, 40)

    const aspect = window.innerWidth / window.innerHeight
    const size = 60

    const orthographicCamera = new THREE.OrthographicCamera(
        -size * aspect,
        size * aspect,
        size,
        -size,
        0.1,
        1000
    )

    orthographicCamera.position.set(40, 120, 40)
    orthographicCamera.lookAt(40, 0, 40)

    return {
        perspectiveCamera,
        orthographicCamera
    }

}

export function animateCamera(camera, position) {

    gsap.to(camera.position, {
        x: position.x,
        y: position.y,
        z: position.z,
        duration: 1
    })

}