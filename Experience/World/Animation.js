import * as THREE from "three"
import Experience from "../Experience.js";
import { EventEmitter} from "events";
import GSAP from "gsap"



export default class Animation  {
    constructor() {
        
        
        this.experience = new Experience();
        this.scene = this.experience.scene;
        this.sizes = this.experience.sizes;
        this.resources = this.experience.resources;  
        this.camera = this.experience.camera.perpectiveCamera; 
        
        this.cube = this.experience.resources.items.cube
       
    
        this.time = this.experience.time;
        

        
        this.mixer = new THREE.AnimationMixer(this.cube.scene);
        
        // this.animation.actions.idle = this.animation.mixer.clipAction(this.resource.cube)
        // this.actions.idle = this.animation.mixer.clipAction(this.cube.animations[0])
       
        // this.firstStep();
        
        
    //    this.p1_Red();
       
        

        
    } 


    firstStep() {
        // this.mixer = new THREE.AnimationMixer(this.cube.scene);
        this.action = this.mixer.clipAction(this.cube.animations[0]);
        this.action2 = this.mixer.clipAction(this.cube.animations[1]);
        this.action3 = this.mixer.clipAction(this.cube.animations[2]);
        this.action4 = this.mixer.clipAction(this.cube.animations[3]);
        this.action5 = this.mixer.clipAction(this.cube.animations[4]);
        
        this.action.setLoop(THREE.LoopOnce)
        this.action.clampWhenFinished = true;
        this.action.enable = true;

        this.action2.setLoop(THREE.LoopOnce)
        this.action2.clampWhenFinished = true;
        this.action2.enable = true;
        
        this.action3.setLoop(THREE.LoopOnce)
        this.action3.clampWhenFinished = true;
        this.action3.enable = true;

        this.action4.setLoop(THREE.LoopOnce)
        this.action4.clampWhenFinished = true;
        this.action4.enable = true;

        this.action5.setLoop(THREE.LoopOnce)
        this.action5.clampWhenFinished = true;
        this.action5.enable = true;

        this.action.play();
        this.action2.play();
        this.action3.play();
        this.action4.play();
        this.action5.play();
        this.setAnimation();
        // this.arm1 = this.mixer.clipAction(this.room.animations[1]);
        // this.arm2 = this.mixer.clipAction(this.room.animations[2]);
        // this.arm3 = this.mixer.clipAction(this.room.animations[3]);

        // console.log(this.cube.animations[4])
        
        
        
        // this.arm1.play();
        // this.arm2.play();
        // this.arm3.play(); 
          
    }

   


    setAnimation(){
        
        console.log(this.camera)
        this.timeline = new GSAP.timeline();
        
        this.timeline.to(this.camera.position, {
            x: 1,
            y: 1,
            z: 1,                 
            ease: "sine(2.5)",               
            duration: 3,                     
        
        });
        this.timeline.to(this.camera.position, {
            x: 0.2,
            y: 0.8,
            z: -1,                 
            ease: "cir(2.5)",               
            duration: 4,                     
        
        },"same");
        this.timeline.to(this.camera.position, {
            x: 0.7,
            y: 0.8,
            z: -1,                 
            ease: "cir(2.5)",               
            duration: 4,                     
        
        },"same");
        

        
        
        
        
            
    }        

            
    

    update(){
        this.mixer.update(this.time.delta * 0.001) 
    }
} 