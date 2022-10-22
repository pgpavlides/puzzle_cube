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
        this.p1red = false;
        this.p1green = false;
        this.p1blue = false;
        this.p1yellow = false;

        this.setAnimation();

        this.object = this.cube.scene.children[1];

        // console.log(this.object)
    
       
    }
    
    lockCheck(){

        if (this.p1lock.length === 4){
            if (this.p1lock[0] === 'red' && this.p1lock[1] === 'green' && this.p1lock[2] === 'blue' && this.p1lock[3] === 'yellow'){
                
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
                   }, 50);
                
            }
            // console.log(this.p1lock)
        }
        
    }

    p1_resetAll(){
        
        this.object.children.forEach((e) => {

            // console.log(e)
            if (e.name === "puzzle_1_red_b"){  
                this.p1red = false;                            
                GSAP.to(e.position, {
                    x: 0,
                    y: 0,
                    z: 0,
                    delay: 0.15,                 
                    ease: "expo.easeOut",                   
                    duration: 0.2,                     
                }) 
            } 
            if (e.name === "puzzle_1_green_b"){   
                this.p1green = false;                            
                GSAP.to(e.position, {
                    x: 0,
                    y: 0,
                    z: 0,
                    delay: 0.15,                 
                    ease: "expo.easeOut",                   
                    duration: 0.2,                     
                }) 
            }
            if (e.name === "puzzle_1_blue_b"){   
                this.p1blue = false;                            
                GSAP.to(e.position, {
                    x: 0,
                    y: 0,
                    z: 0,
                    delay: 0.15,                 
                    ease: "expo.easeOut",                   
                    duration: 0.2,                     
                }) 
            }
            if (e.name === "puzzle_1_yellow_b"){ 
                this.p1yellow = false;                              
                GSAP.to(e.position, {
                    x: 0,
                    y: 0,
                    z: 0,
                    delay: 0.15,                 
                    ease: "expo.easeOut",                   
                    duration: 0.2,                     
                }) 
            } 
            // if (e.name === "puzzle_1_cross"){                               
            //     GSAP.to(e.position, {
            //         x: 0,
            //         y: 0,
            //         z: 0,
            //         delay: 0.15,                 
            //         ease: "expo.easeOut",                   
            //         duration: 0.9,                     
            //     }) 
            // }            
          })     
    }

    p1_Red(){
        
            this.object.children.forEach((e) => {

                // console.log(e)
                if (e.name === "puzzle_1_red_b" && this.p1red === false){
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
              if(this.p1red === false){
                this.p1red = true;
                this.p1lock.push("red")
              }
                              
    }
    
    p1_Green(){
            this.object.children.forEach((e) => {

                // console.log(e)
                if (e.name === "puzzle_1_green_b" && this.p1green === false){
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
              if(this.p1green === false){
                this.p1green = true
                this.p1lock.push("green")
              }
        
        
    }
    
    p1_Blue(){
            this.object.children.forEach((e) => {

                if (e.name === "puzzle_1_blue_b" && this.p1blue === false){
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
              if(this.p1blue === false){
                this.p1blue = true;
              this.p1lock.push("blue") 

              }
        
        
    }
    
    p1_Yellow(){
            this.object.children.forEach((e) => {

                // console.log(e)
                if (e.name === "puzzle_1_yellow_b" && this.p1yellow === false){
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
              if(this.p1yellow === false){
                this.p1yellow = true;
                this.p1lock.push("yellow")
              }
        
        
    }


    setAnimation(){
        
        // console.log(this.cube.scene.children[0].children)
            
    }        

            
    

    update(){
        
        // console.log(this.access)
        // console.log(this.p1lock)
        // console.log(this.access)
        
         //else if (this.p1lock.length > 5) {
        //     // this.p1lock.length = 0;
        // }
        
        
    }
} 