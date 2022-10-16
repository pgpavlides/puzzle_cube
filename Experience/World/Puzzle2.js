import * as THREE from "three"
import Experience from "../Experience.js";
import { EventEmitter} from "events";
import GSAP from "gsap"

export default class Puzzle2 extends EventEmitter   {
    constructor() {

        super();
               
        this.experience = new Experience();
        this.scene = this.experience.scene;
        this.sizes = this.experience.sizes;
        this.resources = this.experience.resources;   
        this.time = this.experience.time;
        this.cube = this.experience.resources.items.cube;
        this.puzzle1 = this.experience.world.puzzle1;

        this.p1lock = []
        this.accessp2 = false;

        console.log(this.experience.world.puzzle1)

        this.puzzle1.on("puzzle1complete", ()=>{
            
        });

            // console.log("PAME LIGOOOOOO")



        // if(this.experience.world.puzzle1.accessp1 === true) {
        // }
    
       
    }

    openSesame(){
        
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
        this.resources.items.button_1.currentTime = 0;
        this.resources.items.button_1.play();  
        GSAP.to(this.cube.scene.children[0].children[6].position,{
            x: -0.03,
            y: 0,
            z: 0,
            // delay: 0.5,
            ease: "back.inout(2.5)",
            duration: 0.25,
            onComplete: () =>  {
                             
            } 
        })
        this.p1lock.push("red")
        // console.log(this.p1lock)
        // console.log(this.cube.scene.children[0]);
        // this.cube.scene.children[0].children[6].scale.set(2,2,2)
    }
    
    p1_Green(){
        this.resources.items.button_2.currentTime = 0;        
        this.resources.items.button_2.play(); 

        GSAP.to(this.cube.scene.children[0].children[5].position,{
            x: -0.03,
            y: 0,
            z: 0,
            // delay: 0.5,
            ease: "back.inout(2.5)",
            duration: 0.25,
            onComplete: () =>  {
                            
           }
        })
        this.p1lock.push("green")
        // console.log(this.p1lock)

        // console.log(this.cube.scene.children[0]);
    }
    
    p1_Blue(){
        this.resources.items.button_1.currentTime = 0;
        this.resources.items.button_1.play(); 
        GSAP.to(this.cube.scene.children[0].children[3].position,{
            x: -0.03,
            y: 0,
            z: 0,
            // delay: 0.5,
            ease: "back.inout(2.5)",
            duration: 0.25,
            onComplete: () =>  {
                             
           }
        })
        this.p1lock.push("blue")
        // console.log(this.p1lock)

        // console.log(this.cube.scene.children[0]);
    }
    
    p1_Yellow(){
        this.resources.items.button_3.currentTime = 0;                                                
        this.resources.items.button_3.play(); 
        GSAP.to(this.cube.scene.children[0].children[7].position,{
            x: -0.03,
            y: 0,
            z: 0,
            // delay: 0.5,
            ease: "back.inout(2.5)",
            duration: 0.25,
            onComplete: () =>  {
                             
           }
            
        })
        this.p1lock.push("yellow")
        // console.log(this.p1lock)

        // console.log(this.cube.scene.children[0]);
    }
    p1_Cross(){
        this.resources.items.button_2.currentTime = 0;
        this.resources.items.button_2.play();  
        GSAP.to(this.cube.scene.children[0].children[4].position,{
            x: -0.03,
            y: 0,
            z: 0,
            // delay: 0.5,
            ease: "back.inout(2.5)",
            duration: 0.25,
            onComplete: () =>  {
                            
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