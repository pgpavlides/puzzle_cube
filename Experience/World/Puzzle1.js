import * as THREE from "three"
import Experience from "../Experience.js";
import { EventEmitter} from "events";
import GSAP from "gsap"

export default class Puzzle1 extends EventEmitter  {
    constructor() {
        
        super();
        
        this.experience = new Experience();
        this.scene = this.experience.scene;
        this.sizes = this.experience.sizes;
        this.resources = this.experience.resources;   
        this.time = this.experience.time;
        this.cube = this.experience.resources.items.cube

        this.p1lock = []
        this.accessp1 = false;

        this.setAnimation();

        this.object = this.cube.scene.children[0];
    
       
    }
    
    lockCheck(){

        if (this.p1lock.length === 5){
            if (this.p1lock[0] === 'red' && this.p1lock[1] === 'green' && this.p1lock[2] === 'blue' && this.p1lock[3] === 'yellow' && this.p1lock[4] === 'cross'){
                
                setTimeout(() => {
                    this.accessp1 = true;
                    this.resources.items.success.play(); 
                    // console.log("access granted")
                    this.emit("puzzle1complete")
                   }, 1000);
                
            } else {

                setTimeout(() => {
                    this.p1_resetAll();
                    this.p1lock.length = 0 
                    this.resources.items.error.play(); 
                    // console.log("access denied")
                   }, 500);
                
            }
            // console.log(this.p1lock)
        }
        
    }

    p1_resetAll(){
        
        this.object.children.forEach((e) => {

            // console.log(e)
            if (e.name === "puzzle_1_red_b"){                               
                GSAP.to(e.position, {
                    x: 0,
                    y: 0,
                    z: 0,
                    delay: 0.15,                 
                    ease: "expo.easeOut",                   
                    duration: 0.9,                     
                }) 
            } 
            if (e.name === "puzzle_1_green_b"){                               
                GSAP.to(e.position, {
                    x: 0,
                    y: 0,
                    z: 0,
                    delay: 0.15,                 
                    ease: "expo.easeOut",                   
                    duration: 0.9,                     
                }) 
            }
            if (e.name === "puzzle_1_blue_b"){                               
                GSAP.to(e.position, {
                    x: 0,
                    y: 0,
                    z: 0,
                    delay: 0.15,                 
                    ease: "expo.easeOut",                   
                    duration: 0.9,                     
                }) 
            }
            if (e.name === "puzzle_1_yellow_b"){                               
                GSAP.to(e.position, {
                    x: 0,
                    y: 0,
                    z: 0,
                    delay: 0.15,                 
                    ease: "expo.easeOut",                   
                    duration: 0.9,                     
                }) 
            } 
            if (e.name === "puzzle_1_cross"){                               
                GSAP.to(e.position, {
                    x: 0,
                    y: 0,
                    z: 0,
                    delay: 0.15,                 
                    ease: "expo.easeOut",                   
                    duration: 0.9,                     
                }) 
            }            
          })     
    }

    p1_Red(){
        
            this.object.children.forEach((e) => {

                // console.log(e)
                if (e.name === "puzzle_1_red_b" && this.accessp1 === false){
                    this.resources.items.button_2.currentTime = 0;
                    this.resources.items.button_2.play();                               
                    GSAP.to(e.position, {
                        x: -0.03,
                        y: 0,
                        z: 0,                 
                        ease: "back.inout(2.5)",               
                        duration: 0.25,                     
                    }) 
                }                                                                
              })
              this.p1lock.push("red")    
        

            
    }
    
    p1_Green(){
            this.object.children.forEach((e) => {

                // console.log(e)
                if (e.name === "puzzle_1_green_b" && this.accessp1 === false){
                    this.resources.items.button_1.currentTime = 0;
                    this.resources.items.button_1.play();                               
                    GSAP.to(e.position, {
                        x: -0.03,
                        y: 0,
                        z: 0,                 
                        ease: "back.inout(2.5)",               
                        duration: 0.25,                     
                    }) 
                }                                                                
              })
              this.p1lock.push("green")
        
        
    }
    
    p1_Blue(){
            this.object.children.forEach((e) => {

                if (e.name === "puzzle_1_blue_b" && this.accessp1 === false){
                    this.resources.items.button_2.currentTime = 0;
                    this.resources.items.button_2.play();                               
                    GSAP.to(e.position, {
                        x: -0.03,
                        y: 0,
                        z: 0,                 
                        ease: "back.inout(2.5)",               
                        duration: 0.25,                     
                    }) 
                }                                                                
              })
              this.p1lock.push("blue") 
        
        
    }
    
    p1_Yellow(){
            this.object.children.forEach((e) => {

                // console.log(e)
                if (e.name === "puzzle_1_yellow_b" && this.accessp1 === false){
                    this.resources.items.button_3.currentTime = 0;
                    this.resources.items.button_3.play();                               
                    GSAP.to(e.position, {
                        x: -0.03,
                        y: 0,
                        z: 0,                 
                        ease: "back.inout(2.5)",               
                        duration: 0.25,                     
                    }) 
                }                                                                
              })
              this.p1lock.push("yellow")
        
        
    }
    p1_Cross(){
        
            this.object.children.forEach((e) => {

                // console.log(e)
                if (e.name === "puzzle_1_cross" && this.accessp1 === false){
                    this.resources.items.button_2.currentTime = 0;
                    this.resources.items.button_2.play();                               
                    GSAP.to(e.position, {
                        x: -0.03,
                        y: 0,
                        z: 0,                 
                        ease: "back.inout(2.5)",               
                        duration: 0.25,                     
                    }) 
                }                                                                
              })
              this.p1lock.push("cross")  
        
        
    }


    setAnimation(){
        
        // console.log(this.cube.scene.children[0].children)
            
    }        

            
    

    update(){
        
        // console.log(this.access)
        // console.log(this.p1lock.length)
        // console.log(this.access)
        
         //else if (this.p1lock.length > 5) {
        //     // this.p1lock.length = 0;
        // }
        
        
    }
} 