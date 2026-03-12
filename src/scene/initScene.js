import * as THREE from "three"
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js"
import { CSS2DRenderer } from "three/examples/jsm/renderers/CSS2DRenderer.js"

export function initScene(container) {

    const scene = new THREE.Scene()
    scene.background = new THREE.Color(0xf2f2f2)

    const renderer = new THREE.WebGLRenderer({ antialias: true })
    renderer.setSize(window.innerWidth, window.innerHeight)

    container.appendChild(renderer.domElement)

    const labelRenderer = new CSS2DRenderer()
    labelRenderer.setSize(window.innerWidth, window.innerHeight)

    labelRenderer.domElement.style.position = "absolute"
    labelRenderer.domElement.style.top = "0"
    labelRenderer.domElement.style.pointerEvents = "none"

    container.appendChild(labelRenderer.domElement)

    const camera = new THREE.PerspectiveCamera()

    const controls = new OrbitControls(camera, renderer.domElement)

    controls.enableDamping = true
    controls.target.set(40, 0, 40)
    controls.update()

    const light = new THREE.DirectionalLight(0xffffff, 1)
    light.position.set(20, 30, 10)
    scene.add(light)

    const ambient = new THREE.AmbientLight(0xffffff, 0.6)
    scene.add(ambient)

    const floorGeometry = new THREE.PlaneGeometry(200, 200)

    const floorMaterial = new THREE.MeshStandardMaterial({
        color: 0xe8e8e8,
        side: THREE.DoubleSide
    })

    const floor = new THREE.Mesh(floorGeometry, floorMaterial)

    floor.rotation.x = -Math.PI / 2

    scene.add(floor)

    const grid = new THREE.GridHelper(200, 20)
    scene.add(grid)

    console.log("scene initialized")

    return {
        scene,
        renderer,
        labelRenderer,
        controls
    }

}