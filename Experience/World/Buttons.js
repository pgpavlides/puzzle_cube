import * as THREE from "three"

import Experience from "../Experience.js";

import GSAP from "gsap"

export default class Buttons {
    constructor() {
        this.experience = new Experience();
        this.scene = this.experience.scene;
        this.resources = this.experience.resources;
       
        this.test()
        
    }
    
    test(){
        // console.log("test")
    }

    resize(){

    }

    update(){}
        
     
};
