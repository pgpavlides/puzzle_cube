import * as THREE from "three"
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'
import Experience from "../Experience.js";
import GSAP from "gsap"

export default class Controls {
    constructor() {
        this.experience = new Experience();
        this.camera = this.experience.camera;
        this.canvas = this.experience.canvas;

        this.setOrbitControls();
         
    }

    setOrbitControls(){
        this.controls = new OrbitControls(this.camera.perpectiveCamera, this.canvas); 
        this.controls.enableDamping = true;
        this.controls.enableZoom = true;
        this.controls.enablePan = false;
        this.controls.maxDistance = 8;
        this.controls.minDistance = 6;    
        this.controls.maxPolarAngle = Math.PI / 2;   
     }
    
    
    resize(){

    }

    update(){
        this.controls.update();   
    }

}