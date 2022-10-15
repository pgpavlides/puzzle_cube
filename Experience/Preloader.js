import Experience from "./Experience.js";
import { EventEmitter} from "events";
import GSAP from "gsap"



export default class Preloader extends EventEmitter {
    constructor() {
        super();
        
        this.experience = new Experience();
        this.scene = this.experience.scene;
        this.sizes = this.experience.sizes;
        this.resources = this.experience.resources;
        this.cube = this.resources.experience.scene;
        this.camera = this.experience.camera;
        this.world = this.experience.world;
        this.device = this.sizes.device;
        

        
        // this.scale();

        this.sizes.on("switchdevice", (device) => {
            this.device = device;
        })

        this.resources.on("ready", () => {
            this.timeline = new GSAP.timeline();
            
            this.timeline.to(".preloader", {
                opacity: 0,
                
                onComplete: () => {
                    document.querySelector(".preloader").classList.add("hidden")
                } 
                
            })
        })

        

    } 

    

    update(){
        
        if(this.device === "desktop"){
            this.cube.scale.set(0.5,0.5,0.5)
            // console.log("desktop")
           } else if (this.device === "mobile") { 
            this.cube.scale.set(0.3,0.3,0.3)
            // console.log("mobile")
            
           }
        
    }
} 