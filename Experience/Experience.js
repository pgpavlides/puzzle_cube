import * as THREE from "three"

import Sizes from "./Utils/Sizes.js";
import Time from "./Utils/Time.js";
import Resources from "./Utils/Resources.js";
import assets from "./Utils/assets.js";

import Camera from "./Camera.js";
import Renderer from "./Renderer.js";
import Preloader from "./Preloader.js";
import Raycaster from "./Raycaster.js";
import Particles from "./Particles.js";
import Animation from "./World/Animation.js";

import Audioplayer from "./Audioplayer.js";
import World from "./World/World.js"


export default class Experience{
    static instance
    constructor(canvas){
        
        if(Experience.instance){
            return Experience.instance
        }

        Experience.instance = this
        this.canvas = canvas;
        this.scene = new THREE.Scene();
        this.scene.background = new THREE.Color(0x4F0000)
        this.time = new Time();
        this.sizes = new Sizes();
        this.camera = new Camera();
        this.renderer = new Renderer();
        this.resources = new Resources(assets);
        // this.animation = new Animation();
        
        this.world = new World();
        this.particles = new Particles();
        this.preloader = new Preloader();
        this.raycaster = new Raycaster();
        this.audioplayer = new Audioplayer();

        this.preloader.on('enablecontrols', ()=>{
            this.controls = new Controls();
        })

        this.sizes.on("resize", ()=>{
            this.resize();
        });
        
        this.time.on("update", ()=>{
            this.update();
        });
        
        

    }

    resize(){
        this.camera.resizeCamera();
        this.world.resize();
        this.renderer.resize();
    }

    update(){
        // this.room.update();
        this.camera.update();
        this.world.update();
        this.renderer.update();
        this.preloader.update();
        this.raycaster.update();
        // this.animation.update();
    }
   
}