import * as THREE from "three"
import Experience from "../Experience.js";
import { EventEmitter} from "events";
import GSAP from "gsap"

export default class Puzzle3 extends EventEmitter   {
    constructor() {

        super();
               
        this.experience = new Experience();
        this.scene = this.experience.scene;
        this.sizes = this.experience.sizes;
        this.resources = this.experience.resources;   
        this.time = this.experience.time;
        this.cube = this.experience.resources.items.cube;
        this.puzzle2 = this.experience.world.puzzle2;

        this.p3lock = []
        this.accessp3 = false;

        this.object = this.cube.scene.children[0].children[16];

        this.puzzle2.on("puzzle2complete", ()=>{
            
            setTimeout(() => {
                this.openSesame();
                this.resources.items.loading.play(); 
                
               }, 1700);
            
            // console.log("PAME LIGOOOOOO")

        });

        // console.log(this.object)
        
        this.timeline = new GSAP.timeline();


        // if(this.experience.world.puzzle1.accessp1 === true) {
        // }
        // console.log(this.object)
       
    }

    lockCheck(){

        if (this.p3lock.length === 7){
            if (this.p3lock.includes(1) 
            && this.p3lock.includes(2)
            && this.p3lock.includes(3)
            && this.p3lock.includes(4)
            && this.p3lock.includes(6)
            && this.p3lock.includes(7)
            && this.p3lock.includes(9)
            ){
                
                setTimeout(() => {
                    this.accessp3 = true;
                    this.resources.items.success.play();                     
                    // console.log("access granted")
                    this.emit("puzzle3complete")
                   }, 1000);
                
            } else {

                setTimeout(() => {
                    this.p3lock.length = 0
                    this.resources.items.error.play(); 
                    this.resetButtons();
                     
                    
                    // console.log("access denied")
                   }, 350);
                
            }
            // console.log(this.p1lock)
        }
        
    }

    openSesame(){        
        this.object.children.forEach((e) => {                              
                    this.timeline.to(e.position, {
                    x: -0.01,
                    y: 0,
                    z: 0,                 
                    ease: "sine(2.5)",               
                    duration: 0.13,                                    
              });                                                                        
          })

    }  

    resetButtons(){        
        this.object.children.forEach((e) => {                              
                    this.timeline.to(e.position, {
                    x: -0.01,
                    y: 0,
                    z: 0,                 
                    ease: "sine(2.5)",               
                    duration: 0.1,                                    
              });                                                                        
          })

    }  

    p3_p1(){
        this.object.children.forEach((e) => {
            if (e.name === "puzzle3_b1" && this.accessp3 === false){
                this.resources.items.button_3_s.currentTime = 0;
                this.resources.items.button_3_s.play();                               
                this.timeline.to(e.position, {
                    x: 0.2,
                    y: 0,
                    z: 0,                 
                    ease: "back.inout(2.5)",               
                    duration: 0.1,                     
                })                           
            }                                                           
          }) 
          this.p3lock.push(1)           
    } 
    p3_p2(){
        this.object.children.forEach((e) => {
            if (e.name === "puzzle3_b2" && this.accessp3 === false){
                this.resources.items.button_3_s.currentTime = 0;
                this.resources.items.button_3_s.play();                               
                this.timeline.to(e.position, {
                    x: 0.2,
                    y: 0,
                    z: 0,                 
                    ease: "back.inout(2.5)",               
                    duration: 0.1,                     
                })                           
            }                                                           
          }) 
          this.p3lock.push(2)           
    }
    p3_p3(){
        this.object.children.forEach((e) => {
            if (e.name === "puzzle3_b3" && this.accessp3 === false){
                this.resources.items.button_3_s.currentTime = 0;
                this.resources.items.button_3_s.play();                               
                this.timeline.to(e.position, {
                    x: 0.2,
                    y: 0,
                    z: 0,                 
                    ease: "back.inout(2.5)",               
                    duration: 0.1,                     
                })                           
            }                                                           
          }) 
          this.p3lock.push(3)           
    }
    p3_p4(){
        this.object.children.forEach((e) => {
            if (e.name === "puzzle3_b4" && this.accessp3 === false){
                this.resources.items.button_3_s.currentTime = 0;
                this.resources.items.button_3_s.play();                               
                this.timeline.to(e.position, {
                    x: 0.2,
                    y: 0,
                    z: 0,                 
                    ease: "back.inout(2.5)",               
                    duration: 0.1,                     
                })                           
            }                                                           
          }) 
          this.p3lock.push(4)           
    }
    p3_p5(){
        this.object.children.forEach((e) => {
            if (e.name === "puzzle3_b5" && this.accessp3 === false){
                this.resources.items.button_3_s.currentTime = 0;
                this.resources.items.button_3_s.play();                               
                this.timeline.to(e.position, {
                    x: 0.2,
                    y: 0,
                    z: 0,                 
                    ease: "back.inout(2.5)",               
                    duration: 0.1,                     
                })                           
            }                                                           
          }) 
          this.p3lock.push(5)           
    }
    p3_p6(){
        this.object.children.forEach((e) => {
            if (e.name === "puzzle3_b6" && this.accessp3 === false){
                this.resources.items.button_3_s.currentTime = 0;
                this.resources.items.button_3_s.play();                               
                this.timeline.to(e.position, {
                    x: 0.2,
                    y: 0,
                    z: 0,                 
                    ease: "back.inout(2.5)",               
                    duration: 0.1,                     
                })                           
            }                                                           
          }) 
          this.p3lock.push(6)           
    }
    p3_p7(){
        this.object.children.forEach((e) => {
            if (e.name === "puzzle3_b7" && this.accessp3 === false){
                this.resources.items.button_3_s.currentTime = 0;
                this.resources.items.button_3_s.play();                               
                this.timeline.to(e.position, {
                    x: 0.2,
                    y: 0,
                    z: 0,                 
                    ease: "back.inout(2.5)",               
                    duration: 0.1,                     
                })                           
            }                                                           
          }) 
          this.p3lock.push(7)           
    }
    p3_p8(){
        this.object.children.forEach((e) => {
            if (e.name === "puzzle3_b8" && this.accessp3 === false){
                this.resources.items.button_3_s.currentTime = 0;
                this.resources.items.button_3_s.play();                               
                this.timeline.to(e.position, {
                    x: 0.2,
                    y: 0,
                    z: 0,                 
                    ease: "back.inout(2.5)",               
                    duration: 0.1,                     
                })                           
            }                                                           
          }) 
          this.p3lock.push(8)           
    }
    p3_p9(){
        this.object.children.forEach((e) => {
            if (e.name === "puzzle3_b9" && this.accessp3 === false){
                this.resources.items.button_3_s.currentTime = 0;
                this.resources.items.button_3_s.play();                               
                this.timeline.to(e.position, {
                    x: 0.2,
                    y: 0,
                    z: 0,                 
                    ease: "back.inout(2.5)",               
                    duration: 0.1,                     
                })                           
            }                                                           
          }) 
          this.p3lock.push(9)           
    }               

    update(){       
        console.log(this.p3lock)
    }
} 