import * as THREE from "three";
import Experience from "../Experience.js";
import { EventEmitter } from "events";
import GSAP from "gsap";

export default class Puzzle4 extends EventEmitter {
  constructor() {
    super();

    this.experience = new Experience();
    this.scene = this.experience.scene;
    this.sizes = this.experience.sizes;
    this.resources = this.experience.resources;
    this.time = this.experience.time;
    this.cube = this.experience.resources.items.cube;
    this.puzzle3 = this.experience.world.puzzle3;

    this.p4lock = [];
    this.accessp4 = true;

    this.object = this.cube.scene.children[1].children[20].children;
    this.object2 = this.cube.scene.children[1].children

    this.puzzle3.on("puzzle3complete", () => {
      setTimeout(() => {
        this.openSesame();
        this.accessp4 = false;
        
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

  lockCheck() {
    if (this.p4lock.length === 20) {
      if (this.p4lock[19] === 5) {
        setTimeout(() => {
          this.accessp4 = true;
          this.resources.items.success.play();
          // this.completeButtons();
          this.object2.forEach((e) => {
            if (e.name === "puzzle5_topdoor_lock_4"){  
                                           
                GSAP.to(e.position, {
                    x: 0,
                    y: -0.13,
                    z: 0,
                    delay: 0.15,                 
                    ease: "expo.easeOut",                   
                    duration: 2,                     
                }) 
            } 
        })
          this.emit("puzzle4complete");
        }, 1000);
      } else {
        setTimeout(() => {
          this.p4lock.length = 0;
          this.resources.items.error.play();
          // this.resetButtons();

          // console.log("access denied")
        }, 150);
      }
      // console.log(this.p1lock)
    }
  }

  openSesame() {
    this.object.forEach((e) => {
      this.timeline.to(
        e.position,
        {
          x: 0,
          y: 0,
          z: -0.01,
          ease: "bounce(2.5)",
          duration: 2,
        },
        "same"
      );
    });
  }

  resetButtons() {
    this.object.forEach((e) => {
      this.timeline.to(e.position, {
        x: -0.01,
        y: 0,
        z: 0,
        ease: "sine(2.5)",
        duration: 0.05,
      });
    });
  }

  completeButtons() {
    this.object.forEach((e) => {
      this.timeline.to(e.position, {
        x: 0,
        y: 0,
        z: 0.07,
        ease: "sine(2.5)",
        duration: 0.02,
      });
    });
  }

  p4_p1() {
    this.object.forEach((e) => {
      // console.log(e)
      if (e.name === "puzzle4_door_button" && this.accessp4 === false) {
        this.resources.items.button_3_s.currentTime = 0;
        this.resources.items.button_3_s.play();
        this.timeline.to(e.position, {
          x: 0,
          y: 0,
          z: 0.07,
          ease: "back.inout(2.5)",
          duration: 0.1,
        });
        this.timeline.to(e.position, {
          x: 0,
          y: 0,
          z: 0,
          ease: "back.inout(2.5)",
          duration: 0.1,
        });
      }
    });
    this.p4lock.push(5);
  }
  

  update() {
    // console.log(this.object)
  }
}
