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

        this.p2lock = []
        this.accessp2 = false;

        this.object = this.cube.scene.children[0];

        this.puzzle1.on("puzzle1complete", ()=>{
            this.openSesame();
            setTimeout(() => {
                
                this.resources.items.loading.play(); 
                
               }, 1700);
            
            // console.log("PAME LIGOOOOOO")

        });
        
        this.timeline = new GSAP.timeline();


        // if(this.experience.world.puzzle1.accessp1 === true) {
        // }
        // console.log(this.object)
       
    }

    lockCheck(){

        if (this.p2lock.length === 3){
            if (this.p2lock[0] === 3 
                && this.p2lock[1] === 1 
                && this.p2lock[2] === 4  ){
                
                setTimeout(() => {
                    this.accessp2 = true;
                    this.resources.items.success.play(); 
                    this.p2_closeDoor();

                    // console.log("access granted")
                    this.emit("puzzle2complete")
                   }, 1000);
                
            } else {

                setTimeout(() => {
                    this.p2lock.length = 0 
                    this.resources.items.error.play(); 
                    // console.log("access denied")
                   }, 250);
                
            }
            // console.log(this.p1lock)
        }
        
    }

    openSesame(){
        
        this.object.children.forEach((e) => {

            // console.log(e)
            if (e.name === "puzzle2_door2" && this.accessp2 === false){
                // this.resources.items.button_1.currentTime = 0;
                
                    // this.resources.items.loading.play();                               
                    this.timeline.to(e.position, {
                    x: 0,
                    y: 0,
                    z: 0.05,                 
                    ease: "sine(2.5)",               
                    duration: 1.90,                     
                
              },"same");
                               
            }

            if (e.name === "puzzle2_phone0"){
                // this.resources.items.button_1.currentTime = 0;
                
                    // this.resources.items.loading.play();                               
                    this.timeline.to(e.position, {
                    x: 0,
                    y: 0,
                    z: 0.05,                 
                    ease: "sine(2.5)",               
                    duration: 1.90,                     
                
              },"same");
                               
            }
            if (e.name === "puzzle2_phone1"){
                // this.resources.items.button_1.currentTime = 0;
                
                    // this.resources.items.loading.play();                               
                    this.timeline.to(e.position, {
                    x: 0,
                    y: 0,
                    z: 0.05,                 
                    ease: "sine(2.5)",               
                    duration: 1.90,                     
                
              },"same");
                               
            }
            if (e.name === "puzzle2_phone2"){
                // this.resources.items.button_1.currentTime = 0;
                
                    // this.resources.items.loading.play();                               
                    this.timeline.to(e.position, {
                    x: 0,
                    y: 0,
                    z: 0.05,                 
                    ease: "sine(2.5)",               
                    duration: 1.90,                     
                
              },"same");
                               
            }
            if (e.name === "puzzle2_phone3"){
                // this.resources.items.button_1.currentTime = 0;
                
                    // this.resources.items.loading.play();                               
                    this.timeline.to(e.position, {
                    x: 0,
                    y: 0,
                    z: 0.05,                 
                    ease: "sine(2.5)",               
                    duration: 1.90,                     
                
              },"same");
                               
            }
            if (e.name === "puzzle2_phone4"){
                // this.resources.items.button_1.currentTime = 0;
                
                    // this.resources.items.loading.play();                               
                    this.timeline.to(e.position, {
                    x: 0,
                    y: 0,
                    z: 0.05,                 
                    ease: "sine(2.5)",               
                    duration: 1.90,                     
                
              },"same");
                               
            }
            if (e.name === "puzzle2_phone5"){
                // this.resources.items.button_1.currentTime = 0;
                
                    // this.resources.items.loading.play();                               
                    this.timeline.to(e.position, {
                    x: 0,
                    y: 0,
                    z: 0.05,                 
                    ease: "sine(2.5)",               
                    duration: 1.90,                     
                
              },"same");
                               
            }
            if (e.name === "puzzle2_phone6"){
                // this.resources.items.button_1.currentTime = 0;
                
                    // this.resources.items.loading.play();                               
                    this.timeline.to(e.position, {
                    x: 0,
                    y: 0,
                    z: 0.05,                 
                    ease: "sine(2.5)",               
                    duration: 1.90,                     
                
              },"same");
                               
            } 
            if (e.name === "puzzle2_phone7"){
                // this.resources.items.button_1.currentTime = 0;
                
                    // this.resources.items.loading.play();                               
                    this.timeline.to(e.position, {
                    x: 0,
                    y: 0,
                    z: 0.05,                 
                    ease: "sine(2.5)",               
                    duration: 1.90,                     
                
              },"same");
                               
            }
            if (e.name === "puzzle2_phone8"){
                // this.resources.items.button_1.currentTime = 0;
                
                    // this.resources.items.loading.play();                               
                    this.timeline.to(e.position, {
                    x: 0,
                    y: 0,
                    z: 0.05,                 
                    ease: "sine(2.5)",               
                    duration: 1.90,                     
                
              },"same");
                               
            }
            if (e.name === "puzzle2_phone9"){
                // this.resources.items.button_1.currentTime = 0;
                
                    // this.resources.items.loading.play();                               
                    this.timeline.to(e.position, {
                    x: 0,
                    y: 0,
                    z: 0.05,                 
                    ease: "sine(2.5)",               
                    duration: 1.90,                     
                
              },"same");
                               
            }           
            if (e.name === "puzzle2_door" && this.accessp2 === false){
                // this.resources.items.button_1.currentTime = 0;
                
                    // this.resources.items.loading.play();                               
                    this.timeline.to(e.position, {
                    x: 0,
                    y: 0,
                    z: -0.5,     
                    // delay: 4,            
                    ease: "sine(2.5)",               
                    duration: 1.5,                     
                })
                              
            }                                                                 
          })

          
          

    }  

    p2_p0(){
        this.object.children.forEach((e) => {
            if (e.name === "puzzle2_phone0" && this.accessp2 === false){
                this.resources.items.button_3_s.currentTime = 0;
                this.resources.items.button_3_s.play();                               
                this.timeline.to(e.position, {
                    x: 0,
                    y: 0,
                    z: -0.03,                 
                    ease: "back.inout(2.5)",               
                    duration: 0.1,                     
                }) 
                this.timeline.to(e.position, {
                    x: 0,
                    y: 0,
                    z: 0.050,                 
                    ease: "back.inout(2.5)",               
                    duration: 0.1,
                    // onComplete:                     
                })                
            }                                                                
          }) 
          this.p2lock.push(0)           
    } 

    p2_p1(){
        this.object.children.forEach((e) => {
            if (e.name === "puzzle2_phone1" && this.accessp2 === false){
                this.resources.items.button_1_s.currentTime = 0;
                this.resources.items.button_1_s.play();                               
                this.timeline.to(e.position, {
                    x: 0,
                    y: 0,
                    z: -0.03,                 
                    ease: "back.inout(2.5)",               
                    duration: 0.1,                     
                }) 
                this.timeline.to(e.position, {
                    x: 0,
                    y: 0,
                    z: 0.050,                 
                    ease: "back.inout(2.5)",               
                    duration: 0.1,                                        
                })                
            }                                                                
          }) 
          this.p2lock.push(1)           
    }  
    p2_p2(){
        this.object.children.forEach((e) => {
            if (e.name === "puzzle2_phone2" && this.accessp2 === false){
                this.resources.items.button_2_s.currentTime = 0;
                this.resources.items.button_2_s.play();                               
                this.timeline.to(e.position, {
                    x: 0,
                    y: 0,
                    z: -0.03,                 
                    ease: "back.inout(2.5)",               
                    duration: 0.1,                     
                }) 
                this.timeline.to(e.position, {
                    x: 0,
                    y: 0,
                    z: 0.050,                 
                    ease: "back.inout(2.5)",               
                    duration: 0.1,                                        
                })                
            }                                                                
          }) 
          this.p2lock.push(2)           
    }
    p2_p3(){
        this.object.children.forEach((e) => {
            if (e.name === "puzzle2_phone3" && this.accessp2 === false){
                this.resources.items.button_3_s.currentTime = 0;
                this.resources.items.button_3_s.play();                               
                this.timeline.to(e.position, {
                    x: 0,
                    y: 0,
                    z: -0.03,                 
                    ease: "back.inout(2.5)",               
                    duration: 0.1,                     
                }) 
                this.timeline.to(e.position, {
                    x: 0,
                    y: 0,
                    z: 0.050,                 
                    ease: "back.inout(2.5)",               
                    duration: 0.1,                                        
                })                
            }                                                                
          }) 
          this.p2lock.push(3)           
    }
    p2_p4(){
        this.object.children.forEach((e) => {
            if (e.name === "puzzle2_phone4" && this.accessp2 === false){
                this.resources.items.button_2_s.currentTime = 0;
                this.resources.items.button_2_s.play();                               
                this.timeline.to(e.position, {
                    x: 0,
                    y: 0,
                    z: -0.03,                 
                    ease: "back.inout(2.5)",               
                    duration: 0.1,                     
                }) 
                this.timeline.to(e.position, {
                    x: 0,
                    y: 0,
                    z: 0.050,                 
                    ease: "back.inout(2.5)",               
                    duration: 0.1,                                        
                })                
            }                                                                
          }) 
          this.p2lock.push(4)           
    }
    p2_p5(){
        this.object.children.forEach((e) => {
            if (e.name === "puzzle2_phone5" && this.accessp2 === false){
                this.resources.items.button_3_s.currentTime = 0;
                this.resources.items.button_3_s.play();                               
                this.timeline.to(e.position, {
                    x: 0,
                    y: 0,
                    z: -0.03,                 
                    ease: "back.inout(2.5)",               
                    duration: 0.1,                     
                }) 
                this.timeline.to(e.position, {
                    x: 0,
                    y: 0,
                    z: 0.050,                 
                    ease: "back.inout(2.5)",               
                    duration: 0.1,                                        
                })                
            }                                                                
          }) 
          this.p2lock.push(5)           
    }
    p2_p6(){
        this.object.children.forEach((e) => {
            if (e.name === "puzzle2_phone6" && this.accessp2 === false){
                this.resources.items.button_1_s.currentTime = 0;
                this.resources.items.button_1_s.play();                               
                this.timeline.to(e.position, {
                    x: 0,
                    y: 0,
                    z: -0.03,                 
                    ease: "back.inout(2.5)",               
                    duration: 0.1,                     
                }) 
                this.timeline.to(e.position, {
                    x: 0,
                    y: 0,
                    z: 0.050,                 
                    ease: "back.inout(2.5)",               
                    duration: 0.1,                                        
                })                
            }                                                                
          }) 
          this.p2lock.push(6)           
    }
    p2_p7(){
        this.object.children.forEach((e) => {
            if (e.name === "puzzle2_phone7" && this.accessp2 === false){
                this.resources.items.button_2_s.currentTime = 0;
                this.resources.items.button_2_s.play();                               
                this.timeline.to(e.position, {
                    x: 0,
                    y: 0,
                    z: -0.03,                 
                    ease: "back.inout(2.5)",               
                    duration: 0.1,                     
                }) 
                this.timeline.to(e.position, {
                    x: 0,
                    y: 0,
                    z: 0.050,                 
                    ease: "back.inout(2.5)",               
                    duration: 0.1,                                        
                })                
            }                                                                
          }) 
          this.p2lock.push(7)           
    }
    p2_p8(){
        this.object.children.forEach((e) => {
            if (e.name === "puzzle2_phone8" && this.accessp2 === false){
                this.resources.items.button_3_s.currentTime = 0;
                this.resources.items.button_3_s.play();                               
                this.timeline.to(e.position, {
                    x: 0,
                    y: 0,
                    z: -0.03,                 
                    ease: "back.inout(2.5)",               
                    duration: 0.1,                     
                }) 
                this.timeline.to(e.position, {
                    x: 0,
                    y: 0,
                    z: 0.050,                 
                    ease: "back.inout(2.5)",               
                    duration: 0.1,                                        
                })                
            }                                                                
          }) 
          this.p2lock.push(8)           
    }
    p2_p9(){
        this.object.children.forEach((e) => {
            if (e.name === "puzzle2_phone9" && this.accessp2 === false){
                this.resources.items.button_1_s.currentTime = 0;
                this.resources.items.button_1_s.play();                               
                this.timeline.to(e.position, {
                    x: 0,
                    y: 0,
                    z: -0.03,                 
                    ease: "back.inout(2.5)",               
                    duration: 0.1,                     
                }) 
                this.timeline.to(e.position, {
                    x: 0,
                    y: 0,
                    z: 0.050,                 
                    ease: "back.inout(2.5)",               
                    duration: 0.1,                                        
                })                
            }                                                                
          }) 
          this.p2lock.push(9)           
    }


p2_closeDoor(){
        
    this.object.children.forEach((e) => {

        console.log(e)
        if (e.name === "puzzle2_door"){                               
            GSAP.to(e.position, {
                x: 0,
                y: 0,
                z: 0,
                delay: 1.0,                 
                ease: "expo.easeOut",                   
                duration: 1.4,                     
            }) 
        }
        if (e.name === "puzzle2_door2"){                               
            GSAP.to(e.position, {
                x: 0,
                y: 0,
                z: -1,
                delay: 0.15,                 
                ease: "expo.easeOut",                   
                duration: 3,                     
            }) 
        }
        if (e.name === "puzzle2_phone0"){                               
            GSAP.to(e.position, {
                x: 0,
                y: 0,
                z: -1,
                delay: 0.15,                 
                ease: "expo.easeOut",                   
                duration: 3,                     
            }) 
        }
        if (e.name === "puzzle2_phone1"){                               
            GSAP.to(e.position, {
                x: 0,
                y: 0,
                z: -1,
                delay: 0.15,                 
                ease: "expo.easeOut",                   
                duration: 3,                     
            }) 
        } 
        if (e.name === "puzzle2_phone2"){                               
            GSAP.to(e.position, {
                x: 0,
                y: 0,
                z: -1,
                delay: 0.15,                 
                ease: "expo.easeOut",                   
                duration: 3,                     
            }) 
        }  
        if (e.name === "puzzle2_phone3"){                               
            GSAP.to(e.position, {
                x: 0,
                y: 0,
                z: -1,
                delay: 0.15,                 
                ease: "expo.easeOut",                   
                duration: 3,                     
            }) 
        }
        if (e.name === "puzzle2_phone4"){                               
            GSAP.to(e.position, {
                x: 0,
                y: 0,
                z: -1,
                delay: 0.15,                 
                ease: "expo.easeOut",                   
                duration: 3,                     
            }) 
        }
        if (e.name === "puzzle2_phone5"){                               
            GSAP.to(e.position, {
                x: 0,
                y: 0,
                z: -1,
                delay: 0.15,                 
                ease: "expo.easeOut",                   
                duration: 3,                     
            }) 
        }
        if (e.name === "puzzle2_phone6"){                               
            GSAP.to(e.position, {
                x: 0,
                y: 0,
                z: -1,
                delay: 0.15,                 
                ease: "expo.easeOut",                   
                duration: 3,                     
            }) 
        } 
        if (e.name === "puzzle2_phone7"){                               
            GSAP.to(e.position, {
                x: 0,
                y: 0,
                z: -1,
                delay: 0.15,                 
                ease: "expo.easeOut",                   
                duration: 3,                     
            }) 
        }  
        if (e.name === "puzzle2_phone8"){                               
            GSAP.to(e.position, {
                x: 0,
                y: 0,
                z: -1,
                delay: 0.15,                 
                ease: "expo.easeOut",                   
                duration: 3,                     
            }) 
        } 
        if (e.name === "puzzle2_phone9"){                               
            GSAP.to(e.position, {
                x: 0,
                y: 0,
                z: -1,
                delay: 0.15,                 
                ease: "expo.easeOut",                   
                duration: 3,                     
            }) 
        }     
      }) 
          
}

            
    

    update(){
        
        // console.log(this.p2lock)
        // console.log(this.access)
        // console.log(this.p1lock.length)
        // console.log(this.access)
        
         //else if (this.p1lock.length > 5) {
        //     // this.p1lock.length = 0;
        // }
        
        
    }
} 