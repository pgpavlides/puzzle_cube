import Experience from "./Experience.js";
import { EventEmitter} from "events";
import GSAP from "gsap"



export default class Audioplayer extends EventEmitter {
    constructor() {
        super();
        
        this.experience = new Experience();
          
        this.resources = this.experience.resources;       

    } 

    startAudio() {
        
        this.stop = document.querySelector("audio")
        this.stop.currentTime = 0;
        this.stop.play()
        
        // Object.keys(this.resources.items).forEach(key => {
        //     // this.resources.items[key].play();
        //     // console.log(key);        // the name of the current key.
        //     console.log(this.resources.items[key]); // the value of the current key.
        //     // this.resources.items.audio_1.play(); // the value of the current key.
        //   });


        
    }

    stopAudio() {
        this.test = document.querySelectorAll("audio")
        this.test.forEach(function(key){
            
            key.pause();
            key.currentTime = 0;
        })
    }
    

                                

                    
    update(){
        
        
    }
} 