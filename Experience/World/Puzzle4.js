import * as THREE from "three"
import Experience from "../Experience.js";
import { EventEmitter} from "events";
import GSAP from "gsap"

export default class Puzzle4 extends EventEmitter   {
    constructor() {

        super();
               
        this.experience = new Experience();
        this.scene = this.experience.scene;
        this.sizes = this.experience.sizes;
        this.resources = this.experience.resources;   
        this.time = this.experience.time;
        this.cube = this.experience.resources.items.cube;
        this.puzzle3 = this.experience.world.puzzle3;

        this.p4lock = []
        this.accessp4 = false;

        this.object = this.cube.scene.children[0].children[17];

        this.puzzle3.on("puzzle3complete", ()=>{
            
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

        if (this.p4lock.length === 15){
            if (this.p4lock[0] === "red" 
                && this.p4lock[1] === "red" 
                && this.p4lock[2] === "red"
                && this.p4lock[3] === "red"
                && this.p4lock[4] === "red"
                && this.p4lock[5] === "red"
                && this.p4lock[6] === "red"
                && this.p4lock[7] === "red"
                && this.p4lock[8] === "red"
                && this.p4lock[9] === "red"
                && this.p4lock[10] === "red"
                && this.p4lock[11] === "red"
                && this.p4lock[12] === "red"
                && this.p4lock[13] === "red"
                && this.p4lock[14] === "red"  ){
                
                setTimeout(() => {
                    this.accessp4 = true;
                    this.resources.items.success.play();
                    this.completeButtons();                                       
                    this.emit("puzzle4complete")
                   }, 1000);
                
            } else {

                setTimeout(() => {
                    this.p4lock.length = 0
                    this.resources.items.error.play(); 
                    this.resetButtons();
                     
                    
                    // console.log("access denied")
                   }, 150);
                
            }
            // console.log(this.p1lock)
        }
        
    }

    openSesame(){        
        this.object.children.forEach((e) => {                              
                    this.timeline.to(e.position, {
                    x: 0,
                    y: 0,
                    z: -0.01,                 
                    ease: "bounce(2.5)",               
                    duration: 2,                                    
              },"same");                                                                        
          })

    }  

    resetButtons(){        
        this.object.children.forEach((e) => {                              
                    this.timeline.to(e.position, {
                    x: -0.01,
                    y: 0,
                    z: 0,                 
                    ease: "sine(2.5)",               
                    duration: 0.05,                                    
              });                                                                        
          })

    }
    
    completeButtons(){        
        this.object.children.forEach((e) => {                              
                    this.timeline.to(e.position, {
                    x: 0,
                    y: 0,
                    z: 0.07,                 
                    ease: "sine(2.5)",               
                    duration: 0.02,                                    
              });                                                                        
          })
    }

    p4_p1(){
        this.object.children.forEach((e) => {
            // console.log(e)
            if (e.name === "puzzle4_b1" && this.accessp4 === false){
                this.resources.items.button_3_s.currentTime = 0;
                this.resources.items.button_3_s.play();                               
                this.timeline.to(e.position, {
                    x: 0,
                    y: 0,
                    z: 0.07,                 
                    ease: "back.inout(2.5)",               
                    duration: 0.1,                     
                })                           
            }                                                           
          }) 
          this.p4lock.push("red")           
    }
    p4_p2(){
        this.object.children.forEach((e) => {
            // console.log(e)
            if (e.name === "puzzle4_b2" && this.accessp4 === false){
                this.resources.items.button_3_s.currentTime = 0;
                this.resources.items.button_3_s.play();                               
                this.timeline.to(e.position, {
                    x: 0,
                    y: 0,
                    z: 0.07,                 
                    ease: "back.inout(2.5)",               
                    duration: 0.1,                     
                })                           
            }                                                           
          }) 
          this.p4lock.push("blue")           
    }
    p4_p3(){
        this.object.children.forEach((e) => {
            if (e.name === "puzzle4_b3" && this.accessp4 === false){
                this.resources.items.button_3_s.currentTime = 0;
                this.resources.items.button_3_s.play();                               
                this.timeline.to(e.position, {
                    x: 0,
                    y: 0,
                    z: 0.07,                 
                    ease: "back.inout(2.5)",               
                    duration: 0.1,                     
                })                           
            }                                                           
          }) 
          this.p4lock.push("red")           
    }
    p4_p4(){
        this.object.children.forEach((e) => {
            if (e.name === "puzzle4_b4" && this.accessp4 === false){
                this.resources.items.button_3_s.currentTime = 0;
                this.resources.items.button_3_s.play();                               
                this.timeline.to(e.position, {
                    x: 0,
                    y: 0,
                    z: 0.07,                 
                    ease: "back.inout(2.5)",               
                    duration: 0.1,                     
                })                           
            }                                                           
          }) 
          this.p4lock.push("blue")           
    }         
    p4_p5(){
        this.object.children.forEach((e) => {
            if (e.name === "puzzle4_b5" && this.accessp4 === false){
                this.resources.items.button_3_s.currentTime = 0;
                this.resources.items.button_3_s.play();                               
                this.timeline.to(e.position, {
                    x: 0,
                    y: 0,
                    z: 0.07,                 
                    ease: "back.inout(2.5)",               
                    duration: 0.1,                     
                })                           
            }                                                           
          }) 
          this.p4lock.push("red")           
    } 
    p4_p6(){
        this.object.children.forEach((e) => {
            if (e.name === "puzzle4_b6" && this.accessp4 === false){
                this.resources.items.button_3_s.currentTime = 0;
                this.resources.items.button_3_s.play();                               
                this.timeline.to(e.position, {
                    x: 0,
                    y: 0,
                    z: 0.07,                 
                    ease: "back.inout(2.5)",               
                    duration: 0.1,                     
                })                           
            }                                                           
          }) 
          this.p4lock.push("yellow")           
    } 
    p4_p7(){
        this.object.children.forEach((e) => {
            if (e.name === "puzzle4_b7" && this.accessp4 === false){
                this.resources.items.button_3_s.currentTime = 0;
                this.resources.items.button_3_s.play();                               
                this.timeline.to(e.position, {
                    x: 0,
                    y: 0,
                    z: 0.07,                 
                    ease: "back.inout(2.5)",               
                    duration: 0.1,                     
                })                           
            }                                                           
          }) 
          this.p4lock.push("blue")           
    }
    p4_p8(){
        this.object.children.forEach((e) => {
            if (e.name === "puzzle4_b8" && this.accessp4 === false){
                this.resources.items.button_3_s.currentTime = 0;
                this.resources.items.button_3_s.play();                               
                this.timeline.to(e.position, {
                    x: 0,
                    y: 0,
                    z: 0.07,                 
                    ease: "back.inout(2.5)",               
                    duration: 0.1,                     
                })                           
            }                                                           
          }) 
          this.p4lock.push("yellow")           
    } 
    p4_p9(){
        this.object.children.forEach((e) => {
            if (e.name === "puzzle4_b9" && this.accessp4 === false){
                this.resources.items.button_3_s.currentTime = 0;
                this.resources.items.button_3_s.play();                               
                this.timeline.to(e.position, {
                    x: 0,
                    y: 0,
                    z: 0.07,                 
                    ease: "back.inout(2.5)",               
                    duration: 0.1,                     
                })                           
            }                                                           
          }) 
          this.p4lock.push("green")           
    } 
    p4_p10(){
        this.object.children.forEach((e) => {
            if (e.name === "puzzle4_b10" && this.accessp4 === false){
                this.resources.items.button_3_s.currentTime = 0;
                this.resources.items.button_3_s.play();                               
                this.timeline.to(e.position, {
                    x: 0,
                    y: 0,
                    z: 0.07,                 
                    ease: "back.inout(2.5)",               
                    duration: 0.1,                     
                })                           
            }                                                           
          }) 
          this.p4lock.push("yellow")           
    } 
    p4_p11(){
        this.object.children.forEach((e) => {
            if (e.name === "puzzle4_b11" && this.accessp4 === false){
                this.resources.items.button_3_s.currentTime = 0;
                this.resources.items.button_3_s.play();                               
                this.timeline.to(e.position, {
                    x: 0,
                    y: 0,
                    z: 0.07,                 
                    ease: "back.inout(2.5)",               
                    duration: 0.1,                     
                })                           
            }                                                           
          }) 
          this.p4lock.push("blue")           
    }  
    p4_p12(){
        this.object.children.forEach((e) => {
            if (e.name === "puzzle4_b12" && this.accessp4 === false){
                this.resources.items.button_3_s.currentTime = 0;
                this.resources.items.button_3_s.play();                               
                this.timeline.to(e.position, {
                    x: 0,
                    y: 0,
                    z: 0.07,                 
                    ease: "back.inout(2.5)",               
                    duration: 0.1,                     
                })                           
            }                                                           
          }) 
          this.p4lock.push("green")           
    }
    p4_p13(){
        this.object.children.forEach((e) => {
            if (e.name === "puzzle4_b13" && this.accessp4 === false){
                this.resources.items.button_3_s.currentTime = 0;
                this.resources.items.button_3_s.play();                               
                this.timeline.to(e.position, {
                    x: 0,
                    y: 0,
                    z: 0.07,                 
                    ease: "back.inout(2.5)",               
                    duration: 0.1,                     
                })                           
            }                                                           
          }) 
          this.p4lock.push("yellow")           
    }   
    p4_p14(){
        this.object.children.forEach((e) => {
            if (e.name === "puzzle4_b14" && this.accessp4 === false){
                this.resources.items.button_3_s.currentTime = 0;
                this.resources.items.button_3_s.play();                               
                this.timeline.to(e.position, {
                    x: 0,
                    y: 0,
                    z: 0.07,                 
                    ease: "back.inout(2.5)",               
                    duration: 0.1,                     
                })                           
            }                                                           
          }) 
          this.p4lock.push("red")           
    } 
    p4_p15(){
        this.object.children.forEach((e) => {
            if (e.name === "puzzle4_b15" && this.accessp4 === false){
                this.resources.items.button_3_s.currentTime = 0;
                this.resources.items.button_3_s.play();                               
                this.timeline.to(e.position, {
                    x: 0,
                    y: 0,
                    z: 0.07,                 
                    ease: "back.inout(2.5)",               
                    duration: 0.1,                     
                })                           
            }                                                           
          }) 
          this.p4lock.push("blue")           
    } 
    p4_p16(){
        this.object.children.forEach((e) => {
            if (e.name === "puzzle4_b16" && this.accessp4 === false){
                this.resources.items.button_3_s.currentTime = 0;
                this.resources.items.button_3_s.play();                               
                this.timeline.to(e.position, {
                    x: 0,
                    y: 0,
                    z: 0.07,                 
                    ease: "back.inout(2.5)",               
                    duration: 0.1,                     
                })                           
            }                                                           
          }) 
          this.p4lock.push("red")           
    } 
    p4_p17(){
        this.object.children.forEach((e) => {
            if (e.name === "puzzle4_b17" && this.accessp4 === false){
                this.resources.items.button_3_s.currentTime = 0;
                this.resources.items.button_3_s.play();                               
                this.timeline.to(e.position, {
                    x: 0,
                    y: 0,
                    z: 0.07,                 
                    ease: "back.inout(2.5)",               
                    duration: 0.1,                     
                })                           
            }                                                           
          }) 
          this.p4lock.push("red")           
    }
    p4_p18(){
        this.object.children.forEach((e) => {
            if (e.name === "puzzle4_b18" && this.accessp4 === false){
                this.resources.items.button_3_s.currentTime = 0;
                this.resources.items.button_3_s.play();                               
                this.timeline.to(e.position, {
                    x: 0,
                    y: 0,
                    z: 0.07,                 
                    ease: "back.inout(2.5)",               
                    duration: 0.1,                     
                })                           
            }                                                           
          }) 
          this.p4lock.push("green")           
    }      
    p4_p19(){
        this.object.children.forEach((e) => {
            if (e.name === "puzzle4_b19" && this.accessp4 === false){
                this.resources.items.button_3_s.currentTime = 0;
                this.resources.items.button_3_s.play();                               
                this.timeline.to(e.position, {
                    x: 0,
                    y: 0,
                    z: 0.07,                 
                    ease: "back.inout(2.5)",               
                    duration: 0.1,                     
                })                           
            }                                                           
          }) 
          this.p4lock.push("red")           
    }
    p4_p20(){
        this.object.children.forEach((e) => {
            if (e.name === "puzzle4_b20" && this.accessp4 === false){
                this.resources.items.button_3_s.currentTime = 0;
                this.resources.items.button_3_s.play();                               
                this.timeline.to(e.position, {
                    x: 0,
                    y: 0,
                    z: 0.07,                 
                    ease: "back.inout(2.5)",               
                    duration: 0.1,                     
                })                           
            }                                                           
          }) 
          this.p4lock.push("yellow")           
    }
    p4_p21(){
        this.object.children.forEach((e) => {
            if (e.name === "puzzle4_b21" && this.accessp4 === false){
                this.resources.items.button_3_s.currentTime = 0;
                this.resources.items.button_3_s.play();                               
                this.timeline.to(e.position, {
                    x: 0,
                    y: 0,
                    z: 0.07,                 
                    ease: "back.inout(2.5)",               
                    duration: 0.1,                     
                })                           
            }                                                           
          }) 
          this.p4lock.push("red")           
    }
    p4_p22(){
        this.object.children.forEach((e) => {
            if (e.name === "puzzle4_b22" && this.accessp4 === false){
                this.resources.items.button_3_s.currentTime = 0;
                this.resources.items.button_3_s.play();                               
                this.timeline.to(e.position, {
                    x: 0,
                    y: 0,
                    z: 0.07,                 
                    ease: "back.inout(2.5)",               
                    duration: 0.1,                     
                })                           
            }                                                           
          }) 
          this.p4lock.push("yellow")           
    }
    p4_p23(){
        this.object.children.forEach((e) => {
            if (e.name === "puzzle4_b23" && this.accessp4 === false){
                this.resources.items.button_3_s.currentTime = 0;
                this.resources.items.button_3_s.play();                               
                this.timeline.to(e.position, {
                    x: 0,
                    y: 0,
                    z: 0.07,                 
                    ease: "back.inout(2.5)",               
                    duration: 0.1,                     
                })                           
            }                                                           
          }) 
          this.p4lock.push("green")           
    }
    p4_p24(){
        this.object.children.forEach((e) => {
            if (e.name === "puzzle4_b24" && this.accessp4 === false){
                this.resources.items.button_3_s.currentTime = 0;
                this.resources.items.button_3_s.play();                               
                this.timeline.to(e.position, {
                    x: 0,
                    y: 0,
                    z: 0.07,                 
                    ease: "back.inout(2.5)",               
                    duration: 0.1,                     
                })                           
            }                                                           
          }) 
          this.p4lock.push("yellow")           
    }
    p4_p25(){
        this.object.children.forEach((e) => {
            if (e.name === "puzzle4_b25" && this.accessp4 === false){
                this.resources.items.button_3_s.currentTime = 0;
                this.resources.items.button_3_s.play();                               
                this.timeline.to(e.position, {
                    x: 0,
                    y: 0,
                    z: 0.07,                 
                    ease: "back.inout(2.5)",               
                    duration: 0.1,                     
                })                           
            }                                                           
          }) 
          this.p4lock.push("green")           
    }
    p4_p26(){
        this.object.children.forEach((e) => {
            if (e.name === "puzzle4_b26" && this.accessp4 === false){
                this.resources.items.button_3_s.currentTime = 0;
                this.resources.items.button_3_s.play();                               
                this.timeline.to(e.position, {
                    x: 0,
                    y: 0,
                    z: 0.07,                 
                    ease: "back.inout(2.5)",               
                    duration: 0.1,                     
                })                           
            }                                                           
          }) 
          this.p4lock.push("green")           
    }
    p4_p27(){
        this.object.children.forEach((e) => {
            if (e.name === "puzzle4_b27" && this.accessp4 === false){
                this.resources.items.button_3_s.currentTime = 0;
                this.resources.items.button_3_s.play();                               
                this.timeline.to(e.position, {
                    x: 0,
                    y: 0,
                    z: 0.07,                 
                    ease: "back.inout(2.5)",               
                    duration: 0.1,                     
                })                           
            }                                                           
          }) 
          this.p4lock.push("yellow")           
    }
    p4_p28(){
        this.object.children.forEach((e) => {
            if (e.name === "puzzle4_b28" && this.accessp4 === false){
                this.resources.items.button_3_s.currentTime = 0;
                this.resources.items.button_3_s.play();                               
                this.timeline.to(e.position, {
                    x: 0,
                    y: 0,
                    z: 0.07,                 
                    ease: "back.inout(2.5)",               
                    duration: 0.1,                     
                })                           
            }                                                           
          }) 
          this.p4lock.push("green")           
    }
    p4_p29(){
        this.object.children.forEach((e) => {
            if (e.name === "puzzle4_b29" && this.accessp4 === false){
                this.resources.items.button_3_s.currentTime = 0;
                this.resources.items.button_3_s.play();                               
                this.timeline.to(e.position, {
                    x: 0,
                    y: 0,
                    z: 0.07,                 
                    ease: "back.inout(2.5)",               
                    duration: 0.1,                     
                })                           
            }                                                           
          }) 
          this.p4lock.push("blue")           
    }
    p4_p30(){
        this.object.children.forEach((e) => {
            if (e.name === "puzzle4_b30" && this.accessp4 === false){
                this.resources.items.button_3_s.currentTime = 0;
                this.resources.items.button_3_s.play();                               
                this.timeline.to(e.position, {
                    x: 0,
                    y: 0,
                    z: 0.07,                 
                    ease: "back.inout(2.5)",               
                    duration: 0.1,                     
                })                           
            }                                                           
          }) 
          this.p4lock.push("red")           
    }
    p4_p31(){
        this.object.children.forEach((e) => {
            if (e.name === "puzzle4_b31" && this.accessp4 === false){
                this.resources.items.button_3_s.currentTime = 0;
                this.resources.items.button_3_s.play();                               
                this.timeline.to(e.position, {
                    x: 0,
                    y: 0,
                    z: 0.07,                 
                    ease: "back.inout(2.5)",               
                    duration: 0.1,                     
                })                           
            }                                                           
          }) 
          this.p4lock.push("green")           
    }
    p4_p32(){
        this.object.children.forEach((e) => {
            if (e.name === "puzzle4_b32" && this.accessp4 === false){
                this.resources.items.button_3_s.currentTime = 0;
                this.resources.items.button_3_s.play();                               
                this.timeline.to(e.position, {
                    x: 0,
                    y: 0,
                    z: 0.07,                 
                    ease: "back.inout(2.5)",               
                    duration: 0.1,                     
                })                           
            }                                                           
          }) 
          this.p4lock.push("blue")           
    }
    p4_p33(){
        this.object.children.forEach((e) => {
            if (e.name === "puzzle4_b33" && this.accessp4 === false){
                this.resources.items.button_3_s.currentTime = 0;
                this.resources.items.button_3_s.play();                               
                this.timeline.to(e.position, {
                    x: 0,
                    y: 0,
                    z: 0.07,                 
                    ease: "back.inout(2.5)",               
                    duration: 0.1,                     
                })                           
            }                                                           
          }) 
          this.p4lock.push("red")           
    }
    p4_p34(){
        this.object.children.forEach((e) => {
            if (e.name === "puzzle4_b34" && this.accessp4 === false){
                this.resources.items.button_3_s.currentTime = 0;
                this.resources.items.button_3_s.play();                               
                this.timeline.to(e.position, {
                    x: 0,
                    y: 0,
                    z: 0.07,                 
                    ease: "back.inout(2.5)",               
                    duration: 0.1,                     
                })                           
            }                                                           
          }) 
          this.p4lock.push("green")           
    }
    p4_p35(){
        this.object.children.forEach((e) => {
            if (e.name === "puzzle4_b35" && this.accessp4 === false){
                this.resources.items.button_3_s.currentTime = 0;
                this.resources.items.button_3_s.play();                               
                this.timeline.to(e.position, {
                    x: 0,
                    y: 0,
                    z: 0.07,                 
                    ease: "back.inout(2.5)",               
                    duration: 0.1,                     
                })                           
            }                                                           
          }) 
          this.p4lock.push("blue")           
    }
    p4_p36(){
        this.object.children.forEach((e) => {
            if (e.name === "puzzle4_b36" && this.accessp4 === false){
                this.resources.items.button_3_s.currentTime = 0;
                this.resources.items.button_3_s.play();                               
                this.timeline.to(e.position, {
                    x: 0,
                    y: 0,
                    z: 0.07,                 
                    ease: "back.inout(2.5)",               
                    duration: 0.1,                     
                })                           
            }                                                           
          }) 
          this.p4lock.push("red")           
    }
    p4_p37(){
        this.object.children.forEach((e) => {
            if (e.name === "puzzle4_b37" && this.accessp4 === false){
                this.resources.items.button_3_s.currentTime = 0;
                this.resources.items.button_3_s.play();                               
                this.timeline.to(e.position, {
                    x: 0,
                    y: 0,
                    z: 0.07,                 
                    ease: "back.inout(2.5)",               
                    duration: 0.1,                     
                })                           
            }                                                           
          }) 
          this.p4lock.push("green")           
    }
    p4_p38(){
        this.object.children.forEach((e) => {
            if (e.name === "puzzle4_b38" && this.accessp4 === false){
                this.resources.items.button_3_s.currentTime = 0;
                this.resources.items.button_3_s.play();                               
                this.timeline.to(e.position, {
                    x: 0,
                    y: 0,
                    z: 0.07,                 
                    ease: "back.inout(2.5)",               
                    duration: 0.1,                     
                })                           
            }                                                           
          }) 
          this.p4lock.push("yellow")           
    }
    p4_p39(){
        this.object.children.forEach((e) => {
            if (e.name === "puzzle4_b39" && this.accessp4 === false){
                this.resources.items.button_3_s.currentTime = 0;
                this.resources.items.button_3_s.play();                               
                this.timeline.to(e.position, {
                    x: 0,
                    y: 0,
                    z: 0.07,                 
                    ease: "back.inout(2.5)",               
                    duration: 0.1,                     
                })                           
            }                                                           
          }) 
          this.p4lock.push("yellow")           
    }
    p4_p40(){
        this.object.children.forEach((e) => {
            if (e.name === "puzzle4_b40" && this.accessp4 === false){
                this.resources.items.button_3_s.currentTime = 0;
                this.resources.items.button_3_s.play();                               
                this.timeline.to(e.position, {
                    x: 0,
                    y: 0,
                    z: 0.07,                 
                    ease: "back.inout(2.5)",               
                    duration: 0.1,                     
                })                           
            }                                                           
          }) 
          this.p4lock.push("blue")           
    }
    p4_p41(){
        this.object.children.forEach((e) => {
            if (e.name === "puzzle4_b41" && this.accessp4 === false){
                this.resources.items.button_3_s.currentTime = 0;
                this.resources.items.button_3_s.play();                               
                this.timeline.to(e.position, {
                    x: 0,
                    y: 0,
                    z: 0.07,                 
                    ease: "back.inout(2.5)",               
                    duration: 0.1,                     
                })                           
            }                                                           
          }) 
          this.p4lock.push("red")           
    }
    p4_p42(){
        this.object.children.forEach((e) => {
            if (e.name === "puzzle4_b42" && this.accessp4 === false){
                this.resources.items.button_3_s.currentTime = 0;
                this.resources.items.button_3_s.play();                               
                this.timeline.to(e.position, {
                    x: 0,
                    y: 0,
                    z: 0.07,                 
                    ease: "back.inout(2.5)",               
                    duration: 0.1,                     
                })                           
            }                                                           
          }) 
          this.p4lock.push("yellow")           
    }
    p4_p43(){
        this.object.children.forEach((e) => {
            if (e.name === "puzzle4_b43" && this.accessp4 === false){
                this.resources.items.button_3_s.currentTime = 0;
                this.resources.items.button_3_s.play();                               
                this.timeline.to(e.position, {
                    x: 0,
                    y: 0,
                    z: 0.07,                 
                    ease: "back.inout(2.5)",               
                    duration: 0.1,                     
                })                           
            }                                                           
          }) 
          this.p4lock.push("yellow")           
    }
    p4_p44(){
        this.object.children.forEach((e) => {
            if (e.name === "puzzle4_b43" && this.accessp4 === false){
                this.resources.items.button_3_s.currentTime = 0;
                this.resources.items.button_3_s.play();                               
                this.timeline.to(e.position, {
                    x: 0,
                    y: 0,
                    z: 0.07,                 
                    ease: "back.inout(2.5)",               
                    duration: 0.1,                     
                })                           
            }                                                           
          }) 
          this.p4lock.push("blue")           
    }
    p4_p45(){
        this.object.children.forEach((e) => {
            if (e.name === "puzzle4_b45" && this.accessp4 === false){
                this.resources.items.button_3_s.currentTime = 0;
                this.resources.items.button_3_s.play();                               
                this.timeline.to(e.position, {
                    x: 0,
                    y: 0,
                    z: 0.07,                 
                    ease: "back.inout(2.5)",               
                    duration: 0.1,                     
                })                           
            }                                                           
          }) 
          this.p4lock.push("red")           
    }
    p4_p46(){
        this.object.children.forEach((e) => {
            if (e.name === "puzzle4_b46" && this.accessp4 === false){
                this.resources.items.button_3_s.currentTime = 0;
                this.resources.items.button_3_s.play();                               
                this.timeline.to(e.position, {
                    x: 0,
                    y: 0,
                    z: 0.07,                 
                    ease: "back.inout(2.5)",               
                    duration: 0.1,                     
                })                           
            }                                                           
          }) 
          this.p4lock.push("red")           
    }
    p4_p47(){
        this.object.children.forEach((e) => {
            if (e.name === "puzzle4_b47" && this.accessp4 === false){
                this.resources.items.button_3_s.currentTime = 0;
                this.resources.items.button_3_s.play();                               
                this.timeline.to(e.position, {
                    x: 0,
                    y: 0,
                    z: 0.07,                 
                    ease: "back.inout(2.5)",               
                    duration: 0.1,                     
                })                           
            }                                                           
          }) 
          this.p4lock.push("blue")           
    }
    p4_p48(){
        this.object.children.forEach((e) => {
            if (e.name === "puzzle4_b48" && this.accessp4 === false){
                this.resources.items.button_3_s.currentTime = 0;
                this.resources.items.button_3_s.play();                               
                this.timeline.to(e.position, {
                    x: 0,
                    y: 0,
                    z: 0.12,                 
                    ease: "back.inout(2.5)",               
                    duration: 0.1,                     
                })                           
            }                                                           
          }) 
          this.p4lock.push("blue")           
    }
    p4_p49(){
        this.object.children.forEach((e) => {
            if (e.name === "puzzle4_b49" && this.accessp4 === false){
                this.resources.items.button_3_s.currentTime = 0;
                this.resources.items.button_3_s.play();                               
                this.timeline.to(e.position, {
                    x: 0,
                    y: 0,
                    z: 0.07,                 
                    ease: "back.inout(2.5)",               
                    duration: 0.1,                     
                })                           
            }                                                           
          }) 
          this.p4lock.push("red")           
    }

    update(){       
        // console.log(this.object)

    }
} 