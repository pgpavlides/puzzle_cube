import * as THREE from "three";
import Experience from "../Experience.js";
import { EventEmitter } from "events";
import GSAP from "gsap";

export default class Puzzle3 extends EventEmitter {
  constructor() {
    super();

    this.experience = new Experience();
    this.scene = this.experience.scene;
    this.sizes = this.experience.sizes;
    this.resources = this.experience.resources;
    this.time = this.experience.time;
    this.cube = this.experience.resources.items.cube;
    this.puzzle2 = this.experience.world.puzzle2;

    this.p3lock = [];
    this.accessp3 = false;

    this.b1 = false;
    this.b2 = false;
    this.b3 = false;
    this.b4 = false;
    this.b5 = false;
    this.b6 = false;
    this.b7 = false;
    this.b8 = false;
    this.b9 = false;

    this.object = this.cube.scene.children[1].children[19].children;
    this.object2 = this.cube.scene.children[1].children

    this.puzzle2.on("puzzle2complete", () => {
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

  lockCheck() {
    if (this.p3lock.length === 7) {
      if (
        this.p3lock.includes(1) &&
        this.p3lock.includes(2) &&
        this.p3lock.includes(3) &&
        this.p3lock.includes(4) &&
        this.p3lock.includes(6) &&
        this.p3lock.includes(7) &&
        this.p3lock.includes(9)
      ) {
        setTimeout(() => {
          this.accessp3 = true;
          this.resources.items.success.play();
          this.completeButtons();
          this.object2.forEach((e) => {
            if (e.name === "puzzle5_topdoor_lock_3"){  
                                           
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

          // console.log("access granted")
          this.emit("puzzle3complete");
        }, 1000);
      } else {
        setTimeout(() => {
          this.p3lock.length = 0;
          this.resources.items.error.play();
          this.resetButtons();
          this.resetBooleans();

          // console.log("access denied")
        }, 350);
      }
      // console.log(this.p1lock)
    }
  }

  openSesame() {
    this.object.forEach((e) => {
      this.timeline.to(e.position, {
        x: -0.01,
        y: 0,
        z: 0,
        ease: "sine(2.5)",
        duration: 0.13,
      });
    });
  }

  resetBooleans() {
    this.b1 = false;
    this.b2 = false;
    this.b3 = false;
    this.b4 = false;
    this.b5 = false;
    this.b6 = false;
    this.b7 = false;
    this.b8 = false;
    this.b9 = false;
  }

  resetButtons() {
    this.object.forEach((e) => {
      this.timeline.to(e.position, {
        x: -0.01,
        y: 0,
        z: 0,
        ease: "sine(2.5)",
        duration: 0.1,
      });
    });
  }

  completeButtons() {
    this.object.forEach((e) => {
      this.timeline.to(e.position, {
        x: 0.32,
        y: 0,
        z: 0,
        ease: "sine(2.5)",
        duration: 0.1,
      });
    });
  }

  p3_p1() {
    this.object.forEach((e) => {
      if (e.name === "puzzle3_b1" && this.b1 === false) {
        this.resources.items.button_3_s.currentTime = 0;
        this.resources.items.button_3_s.play();

        this.timeline.to(e.position, {
          x: 0.2,
          y: 0,
          z: 0,
          ease: "back.inout(2.5)",
          duration: 0.1,
        });
      }
    });
    if (this.b1 === false) {
      this.b1 = true;
      this.p3lock.push(1);
    }
  }
  p3_p2() {
    this.object.forEach((e) => {
      if (e.name === "puzzle3_b2" && this.b2 === false) {
        this.resources.items.button_3_s.currentTime = 0;
        this.resources.items.button_3_s.play();
        this.timeline.to(e.position, {
          x: 0.2,
          y: 0,
          z: 0,
          ease: "back.inout(2.5)",
          duration: 0.1,
        });
      }
    });
    if (this.b2 === false) {
      this.b2 = true;
      this.p3lock.push(2);
    }
  }
  p3_p3() {
    this.object.forEach((e) => {
      if (e.name === "puzzle3_b3" && this.b3 === false) {
        this.resources.items.button_3_s.currentTime = 0;
        this.resources.items.button_3_s.play();
        this.timeline.to(e.position, {
          x: 0.2,
          y: 0,
          z: 0,
          ease: "back.inout(2.5)",
          duration: 0.1,
        });
      }
    });
    if (this.b3 === false) {
      this.b3 = true;
      this.p3lock.push(3);
    }
  }
  p3_p4() {
    this.object.forEach((e) => {
      if (e.name === "puzzle3_b4" && this.b4 === false) {
        this.resources.items.button_3_s.currentTime = 0;
        this.resources.items.button_3_s.play();
        this.timeline.to(e.position, {
          x: 0.2,
          y: 0,
          z: 0,
          ease: "back.inout(2.5)",
          duration: 0.1,
        });
      }
    });
    if (this.b4 === false) {
      this.b4 = true;
      this.p3lock.push(4);
    }
  }
  p3_p5() {
    this.object.forEach((e) => {
      if (e.name === "puzzle3_b5" && this.b5 === false) {
        this.resources.items.button_3_s.currentTime = 0;
        this.resources.items.button_3_s.play();
        this.timeline.to(e.position, {
          x: 0.2,
          y: 0,
          z: 0,
          ease: "back.inout(2.5)",
          duration: 0.1,
        });
      }
    });
    if (this.b5 === false) {
      this.b5 = true;
      this.p3lock.push(5);
    }
  }
  p3_p6() {
    this.object.forEach((e) => {
      if (e.name === "puzzle3_b6" && this.b6 === false) {
        this.resources.items.button_3_s.currentTime = 0;
        this.resources.items.button_3_s.play();
        this.timeline.to(e.position, {
          x: 0.2,
          y: 0,
          z: 0,
          ease: "back.inout(2.5)",
          duration: 0.1,
        });
      }
    });
    if (this.b6 === false) {
      this.b6 = true;
      this.p3lock.push(6);
    }
  }
  p3_p7() {
    this.object.forEach((e) => {
      if (e.name === "puzzle3_b7" && this.b7 === false) {
        this.resources.items.button_3_s.currentTime = 0;
        this.resources.items.button_3_s.play();
        this.timeline.to(e.position, {
          x: 0.2,
          y: 0,
          z: 0,
          ease: "back.inout(2.5)",
          duration: 0.1,
        });
      }
    });
    if (this.b7 === false) {
      this.b7 = true;
      this.p3lock.push(7);
    }
  }
  p3_p8() {
    this.object.forEach((e) => {
      if (e.name === "puzzle3_b8" && this.b8 === false) {
        this.resources.items.button_3_s.currentTime = 0;
        this.resources.items.button_3_s.play();
        this.timeline.to(e.position, {
          x: 0.2,
          y: 0,
          z: 0,
          ease: "back.inout(2.5)",
          duration: 0.1,
        });
      }
    });
    if (this.b8 === false) {
      this.b8 = true;
      this.p3lock.push(8);
    }
  }
  p3_p9() {
    this.object.forEach((e) => {
      if (e.name === "puzzle3_b9" && this.b9 === false) {
        this.resources.items.button_3_s.currentTime = 0;
        this.resources.items.button_3_s.play();
        this.timeline.to(e.position, {
          x: 0.2,
          y: 0,
          z: 0,
          ease: "back.inout(2.5)",
          duration: 0.1,
        });
      }
    });
    if (this.b9 === false) {
      this.b9 = true;
      this.p3lock.push(9);
    }
  }

  update() {
    // console.log(this.p3lock)
  }
}
