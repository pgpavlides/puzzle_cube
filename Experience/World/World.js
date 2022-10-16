import * as THREE from "three"

import Experience from "../Experience.js";

import Room from "./Room.js"
import Buttons from "./Buttons.js"
import Controls from "./Controls.js"
import Environment from "./Environment.js"
import Animation from "./Animation.js"
import Puzzle1 from "./Puzzle1.js"
import Puzzle2 from "./Puzzle2.js"

export default class World {
    constructor() {
        this.experience = new Experience();
        this.sizes = this.experience.sizes;
        this.scene = this.experience.scene;
        this.canvas = this.experience.canvas;
        this.camera = this.experience.camera;
        this.resources = this.experience.resources;

        this.resources.on("ready", ()=>{
            this.environment = new Environment();
            this.room = new Room();
            this.buttons = new Buttons(); 
            this.controls = new Controls();
            this.animations = new Animation();
            this.puzzle1 = new Puzzle1();
            this.puzzle2 = new Puzzle2();
        });

        

    }

    resize(){ 
        
    }

    update(){
        if (this.room) {
            this.room.update();
        }
        if (this.controls) {
            this.controls.update();
        }
        if (this.animations) {
            this.animations.update();
        }
        if (this.puzzle1) {
            this.puzzle1.update();
        }
        if (this.puzzle2) {
            this.puzzle2.update();
        }
    }

}
     

    
