import * as THREE from "three"
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'
import Experience from "./Experience.js";
import GSAP from "gsap"

export default class Particles {
    constructor() {
        this.experience = new Experience();
        this.camera = this.experience.camera;
        this.canvas = this.experience.canvas;
        this.scene = this.experience.scene;

        // this.setParticles();
         
    }

    setParticles(){
            
            
            // Geometry
            const particlesGeometry = new THREE.BufferGeometry()
            const particlesMaterial = new THREE.PointsMaterial()
                particlesMaterial.transparent = true
                // particlesMaterial.alphaMap = particleTexture
                particlesMaterial.size = 0.03
                particlesMaterial.sizeAttenuation = true
                particlesMaterial.depthWrite = false;
                particlesMaterial.blending = THREE.AdditiveBlending
            const count = 500

            const positions = new Float32Array(count * 3) // Multiply by 3 because each position is composed of 3 values (x, y, z)

            for(let i = 0; i < count * 3; i++) // Multiply by 3 for same reason
            {
                positions[i] = (Math.random() - 0.5) * 20 // Math.random() - 0.5 to have a random value between -0.5 and +0.5
            }

            particlesGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3))
            this.particles = new THREE.Points(particlesGeometry, particlesMaterial)
            
            this.scene.add(this.particles)// Create the Three.js BufferAttribute and specify that each information is composed of 3 values
     }
    
    
    resize(){

    }

    update(){
        this.controls.update();   
    }

}