import * as THREE from "three"
import { CSS2DObject } from "three/examples/jsm/renderers/CSS2DRenderer.js"

export function createShops(scene, data) {

    const shops = []

    const gridSize = 10
    const spacing = 8

    data.forEach((place, i) => {

        const geometry = new THREE.BoxGeometry(
            place.width,
            2,
            place.depth
        )

        const material = new THREE.MeshStandardMaterial({
            color: place.color
        })

        const mesh = new THREE.Mesh(geometry, material)

        const row = Math.floor(i / gridSize)
        const col = i % gridSize

        mesh.position.set(
            col * spacing,
            1,
            row * spacing
        )

        mesh.userData = place

        const label = document.createElement("div")
        label.textContent = place.name

        label.style.fontSize = "12px"
        label.style.background = "white"
        label.style.padding = "2px 6px"
        label.style.borderRadius = "4px"
        label.style.color = "black"

        const labelObject = new CSS2DObject(label)

        labelObject.position.set(0, 2.5, 0)

        mesh.add(labelObject)

        scene.add(mesh)

        shops.push(mesh)

    })

    return shops
}