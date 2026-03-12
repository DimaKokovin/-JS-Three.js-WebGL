import { animateCamera } from "../scene/cameras.js"

export function setupViewToggle(state, controls) {

    window.addEventListener("keydown", (e) => {

        if (e.code !== "Space") return

        state.is2D = !state.is2D

        if (state.is2D) {

            state.activeCamera = state.orthographicCamera

            animateCamera(state.activeCamera, {
                x: 40,
                y: 120,
                z: 40
            })

            controls.enabled = false

            console.log("2D mode")

        } else {

            state.activeCamera = state.perspectiveCamera

            animateCamera(state.activeCamera, {
                x: 60,
                y: 60,
                z: 60
            })

            controls.enabled = true

            console.log("3D mode")

        }

    })

}