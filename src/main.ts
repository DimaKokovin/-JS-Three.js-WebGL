import "./style.css"

import { initScene } from "./scene/initScene.js"
import { createShops } from "./scene/createShops.js"
import { placesData } from "./data/placesData.js"
import { setupRaycaster } from "./interaction/raycaster.js"
import { createCameras } from "./scene/cameras.js"
import { setupViewToggle } from "./interaction/viewMode.js"

const container = document.body

const {
    scene,
    renderer,
    labelRenderer,
    controls
} = initScene(container)

const {
    perspectiveCamera,
    orthographicCamera
} = createCameras()

controls.object = perspectiveCamera

const state = {
    perspectiveCamera,
    orthographicCamera,
    activeCamera: perspectiveCamera,
    is2D: false
}

const shops = createShops(scene, placesData)

console.log("shops created:", shops.length)

setupRaycaster(state, shops)
setupViewToggle(state, controls)

function animate() {

    requestAnimationFrame(animate)

    controls.update()

    renderer.render(scene, state.activeCamera)
    labelRenderer.render(scene, state.activeCamera)

}

animate()