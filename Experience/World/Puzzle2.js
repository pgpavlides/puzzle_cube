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

        this.object = this.cube.scene.children[0];

        this.puzzle1.on("puzzle1complete", ()=>{
            this.openSesame();
            console.log("PAME LIGOOOOOO")

        });
        



        // if(this.experience.world.puzzle1.accessp1 === true) {
        // }
        console.log(this.object)
       
    }

    openSesame(){
        
        this.object.children.forEach((e) => {

            // console.log(e)
            if (e.name === "puzzle2_door"){
                // this.resources.items.button_1.currentTime = 0;
                this.resources.items.loading.play();                               
                GSAP.to(e.position, {
                    x: 0,
                    y: 0,
                    z: -1.3,                 
                    ease: "sine(2.5)",               
                    duration: 4,                     
                }) 
            }                                                                
          })

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