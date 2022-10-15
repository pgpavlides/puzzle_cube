import * as THREE from "three"

import Experience from "../Experience.js";

import GSAP from "gsap"


export default class Room {
    constructor() {
        this.experience = new Experience();
        this.scene = this.experience.scene;
        this.resources = this.experience.resources;
        this.cube = this.resources.items.cube.scene;

        this.text1 = document.querySelector(".introtext");
        this.text2 = document.querySelector(".introtext2");
        this.text3 = document.querySelector(".introtext3");
        
        

        this.setModel();
        // this.setFirststep();
                
    }

    setModel() {

        // console.log(this.cube)

        
     
        this.timeline = new GSAP.timeline();

        

        this.cube.scale.set(0,0,0)
        this.scene.add(this.cube)

        

        this.timeline.to(this.cube.scale, {
            x: 1,
            y: 1,
            z: 1,
            delay: 0.5,
            ease: "back.inout(2.5)",
            
            duration: 1.7,  
            
        },"same")

        this.timeline.to(this.text1, {
            // fontSize: 35,
            opacity: 1,
            delay: 1,
            ease: "Sine.easeInOut",
            duration: 1,  
            
        },"same")
        this.timeline.to(this.text2, {
            // fontSize: 15,
            delay: 1,
            opacity: 1,
            ease: "Sine.easeInOut",
            duration: 1,  
            
        },"same")
        this.timeline.to(this.text3, {
            // fontSize: 15,
            delay: 1,
            opacity: 1,
            ease: "Sine.easeInOut",
            duration: 1,  
            
        },"same")


        
        // console.log(this.cube)
        
    }

    setFirststep() {
        // this.mixer = new THREE.AnimationMixer(this.cube);
        // this.action = this.mixer.clipAction(this.cube.animations[0])
    //     this.swim = this.mixer.clipAction(this.room.animations[0]);
                
    //     this.swim.play();
        
    // //   
        // console.log(this.cube);
    }   
    
    resize(){

    }

    update(){
        
    }

}