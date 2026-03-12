import * as THREE from "three"

export function setupRaycaster(state, shops) {

    const raycaster = new THREE.Raycaster()
    const mouse = new THREE.Vector2()

    let hovered = null
    let selected = null

    function onMouseMove(event) {

        mouse.x = (event.clientX / window.innerWidth) * 2 - 1
        mouse.y = -(event.clientY / window.innerHeight) * 2 + 1

        raycaster.setFromCamera(mouse, state.activeCamera)

        const intersects = raycaster.intersectObjects(shops)

        if (intersects.length > 0) {

            const object = intersects[0].object

            if (hovered !== object) {

                if (hovered && hovered !== selected)
                    hovered.material.emissive.set(0x000000)

                hovered = object

                if (hovered !== selected)
                    hovered.material.emissive.set(0x333333)

            }

        } else {

            if (hovered && hovered !== selected)
                hovered.material.emissive.set(0x000000)

            hovered = null
        }

    }

    function onClick() {

        raycaster.setFromCamera(mouse, state.activeCamera)

        const intersects = raycaster.intersectObjects(shops)

        if (intersects.length > 0) {

            const object = intersects[0].object

            if (selected)
                selected.material.emissive.set(0x000000)

            selected = object
            selected.material.emissive.set(0xff0000)

            console.log("Shop selected:")
            console.log("ID:", object.userData.id)
            console.log("Name:", object.userData.name)
            console.log("Position:", object.position)

        }

    }

    window.addEventListener("mousemove", onMouseMove)
    window.addEventListener("click", onClick)

}