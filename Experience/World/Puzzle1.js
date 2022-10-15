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

        this.p1lock = []
        this.access = false;

        this.setAnimation();
    
       
    }
    
    lockCheck(){

        if (this.p1lock.length === 5){
            if (this.p1lock[0] === 'red' && this.p1lock[1] === 'green' && this.p1lock[2] === 'blue' && this.p1lock[3] === 'yellow' && this.p1lock[4] === 'cross'){
                this.access = true;
                this.experience.audioplayer.stopAudio();
                this.resources.items.success.play(); 
                console.log("access granted")
            } else {
                this.p1_resetAll();
                this.p1lock.length = 0 
                this.experience.audioplayer.stopAudio();
                this.resources.items.error.play(); 
                console.log("access denied")
            }
            console.log(this.p1lock)
        }
        
    }

    p1_resetAll(){
        
        GSAP.to(this.cube.scene.children[0].children[6].position,{
            x: 0,
            y: 0,
            z: 0,
            delay: 0.15,
            ease: "back.inout(2.5)",
            duration: 0.5,
        })

        GSAP.to(this.cube.scene.children[0].children[5].position,{
            x: 0,
            y: 0,
            z: 0,
            delay: 0.15,
            ease: "back.inout(2.5)",
            duration: 0.5,
        })
        GSAP.to(this.cube.scene.children[0].children[3].position,{
            x: 0,
            y: 0,
            z: 0,
            delay: 0.15,
            ease: "back.inout(2.5)",
            duration: 0.5,
        })
        GSAP.to(this.cube.scene.children[0].children[7].position,{
            x: 0,
            y: 0,
            z: 0,
            delay: 0.15,
            ease: "back.inout(2.5)",
            duration: 0.5,
            
        })
        GSAP.to(this.cube.scene.children[0].children[4].position,{
            x: 0,
            y: 0,
            z: 0,
            delay: 0.15,
            ease: "back.inout(2.5)",
            duration: 0.5,
        })
    }

    p1_Red(){
        GSAP.to(this.cube.scene.children[0].children[6].position,{
            x: -0.03,
            y: 0,
            z: 0,
            // delay: 0.5,
            ease: "back.inout(2.5)",
            duration: 0.25,
            onComplete: () =>  {
                 this.resources.items.button_1.play();              
            } 
        })
        this.p1lock.push("red")
        // console.log(this.p1lock)
        // console.log(this.cube.scene.children[0]);
        // this.cube.scene.children[0].children[6].scale.set(2,2,2)
    }
    
    p1_Green(){
        GSAP.to(this.cube.scene.children[0].children[5].position,{
            x: -0.03,
            y: 0,
            z: 0,
            // delay: 0.5,
            ease: "back.inout(2.5)",
            duration: 0.25,
            onComplete: () =>  {
                this.resources.items.button_2.play();              
           }
        })
        this.p1lock.push("green")
        // console.log(this.p1lock)

        // console.log(this.cube.scene.children[0]);
    }
    
    p1_Blue(){
        GSAP.to(this.cube.scene.children[0].children[3].position,{
            x: -0.03,
            y: 0,
            z: 0,
            // delay: 0.5,
            ease: "back.inout(2.5)",
            duration: 0.25,
            onComplete: () =>  {
                this.resources.items.button_1.play();              
           }
        })
        this.p1lock.push("blue")
        // console.log(this.p1lock)

        // console.log(this.cube.scene.children[0]);
    }
    
    p1_Yellow(){
        GSAP.to(this.cube.scene.children[0].children[7].position,{
            x: -0.03,
            y: 0,
            z: 0,
            // delay: 0.5,
            ease: "back.inout(2.5)",
            duration: 0.25,
            onComplete: () =>  {
                this.resources.items.button_3.play();              
           }
            
        })
        this.p1lock.push("yellow")
        console.log(this.p1lock)

        // console.log(this.cube.scene.children[0]);
    }
    p1_Cross(){
        GSAP.to(this.cube.scene.children[0].children[4].position,{
            x: -0.03,
            y: 0,
            z: 0,
            // delay: 0.5,
            ease: "back.inout(2.5)",
            duration: 0.25,
            onComplete: () =>  {
                this.resources.items.button_2.play();              
           }
        })
        this.p1lock.push("cross")
        // console.log(this.p1lock)

        // console.log(this.cube.scene.children[0]);
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