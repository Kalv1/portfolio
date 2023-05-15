<template>
    <div ref="container" class="w-full h-full">
        <canvas ref="threejs" />
    </div>
</template>
<script setup>
import * as THREE from 'three'
import { onMounted, ref } from 'vue'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'

const threejs = ref(undefined)
const container = ref(undefined)

const sizes = {}

onMounted(() => {

    // Canvas
    const canvas = threejs.value


    console.log(container.value)
    // Sizes
    const sizes = {
        width: container.value.offsetWidth,
        height: container.value.offsetHeight
    }

    // Scene
    const scene = new THREE.Scene()

    const gltfLoader = new GLTFLoader()
    gltfLoader.load('computer/scene.gltf', (gltf) => {
        console.log(gltf)
        gltf.scene.scale.set(0.30, 0.30, 0.30)
        scene.add(gltf.scene)
    })

    const ambientLight = new THREE.AmbientLight('0xfff', 1)
    scene.add(ambientLight)

    // Camera
    const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height, 0.1, 100)

    /**
     * Controls
     */
    const controls = new OrbitControls(camera, canvas)
    controls.enableZoom = false
    controls.enableDamping = true

    camera.position.z = 3
    camera.position.y = 2
    scene.add(camera)

    // Renderer
    const renderer = new THREE.WebGLRenderer({
        canvas: canvas,
        alpha: true
    })
    renderer.setSize(sizes.width, sizes.height)

    // Handle Resize
    window.addEventListener('resize', () => {
        // Update sizes
        sizes.width = container.value.offsetWidth
        sizes.height = container.value.offsetHeight

        // Update camera
        camera.aspect = sizes.width / sizes.height
        camera.updateProjectionMatrix()

        // Update renderer
        renderer.setSize(sizes.width, sizes.height)
        renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
    })



    // Animate
    const clock = new THREE.Clock()


    const tick = () => {
        const elapsedTime = clock.getElapsedTime()


        // update controls
        controls.update()

        // Render
        renderer.render(scene, camera)

        // Call tick again on the next frame
        window.requestAnimationFrame(tick)
    }

    tick()
})


</script>