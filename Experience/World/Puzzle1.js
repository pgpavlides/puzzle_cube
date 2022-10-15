import * as THREE from "three"
import Experience from "../Experience.js";
import { EventEmitter} from "events";
import GSAP from "gsap"

export default class Puzzle1  {
    constructor() {
               
        this.experience = new Experience();
        this.scene = this.experience.scene;
        this.sizes = this.experience.sizes;
        this.resources = this.experience.resources;   
        this.time = this.experience.time;
        this.cube = this.experience.resources.items.cube

        this.p1lock = {}

        this.setAnimation();
       
    } 

    p1_Red(){
        GSAP.to(this.cube.scene.children[0].children[6].position,{
            x: -0.03,
            y: 0,
            z: 0,
            // delay: 0.5,
            ease: "back.inout(2.5)",
            duration: 0.5,
        })
        console.log(this.cube.scene.children[0]);
        // this.cube.scene.children[0].children[6].scale.set(2,2,2)
    }
    
    p1_Green(){
        GSAP.to(this.cube.scene.children[0].children[5].position,{
            x: -0.03,
            y: 0,
            z: 0,
            // delay: 0.5,
            ease: "back.inout(2.5)",
            duration: 0.5,
        })
        console.log(this.cube.scene.children[0]);
    }
    
    p1_Blue(){
        GSAP.to(this.cube.scene.children[0].children[3].position,{
            x: -0.03,
            y: 0,
            z: 0,
            // delay: 0.5,
            ease: "back.inout(2.5)",
            duration: 0.5,
        })
        console.log(this.cube.scene.children[0]);
    }
    
    p1_Yellow(){
        GSAP.to(this.cube.scene.children[0].children[7].position,{
            x: -0.03,
            y: 0,
            z: 0,
            // delay: 0.5,
            ease: "back.inout(2.5)",
            duration: 0.5,
        })
        console.log(this.cube.scene.children[0]);
    }
    p1_Cross(){
        GSAP.to(this.cube.scene.children[0].children[4].position,{
            x: -0.03,
            y: 0,
            z: 0,
            // delay: 0.5,
            ease: "back.inout(2.5)",
            duration: 0.5,
        })
        console.log(this.cube.scene.children[0]);
    }


    setAnimation(){
        
        // console.log(this.cube.scene.children[0].children)
            
    }        

            
    

    update(){
        
    }
} 