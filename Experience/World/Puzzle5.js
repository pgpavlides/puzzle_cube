import * as THREE from "three";
import Experience from "../Experience.js";
import { EventEmitter } from "events";
import GSAP from "gsap";

export default class Puzzle5 extends EventEmitter {
  constructor() {
    super();

    this.experience = new Experience();
    this.scene = this.experience.scene;
    this.sizes = this.experience.sizes;
    this.resources = this.experience.resources;
    this.time = this.experience.time;
    this.cube = this.experience.resources.items.cube;
    this.puzzle4 = this.experience.world.puzzle4;
    this.counter = 0;

    this.p5lock = [];
    this.accessp5 = false;

    this.object = this.cube.scene.children[0];

    this.puzzle4.on("puzzle4complete", () => {
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
    // this.openSesame();
  }

  lockCheck() {
    if (this.p4lock.length === 15) {
      if (this.p4lock[0] === "red") {
        setTimeout(() => {
          this.accessp4 = true;
          this.resources.items.success.play();
          // this.completeButtons();
          this.emit("puzzle5complete");
        }, 1000);
      } else {
        setTimeout(() => {
          this.p5lock.length = 0;
          this.resources.items.error.play();
          this.resetButtons();

          // console.log("access denied")
        }, 150);
      }
    }
  }

  openSesame() {
    console.log(this.object.children);
    this.object.children.forEach((e) => {
      this.timeline.to(e.position, {
        x: -0.01,
        y: 0,
        z: 0,
        ease: "sine(2.5)",
        duration: 0.7,
      });
    });
  }

  resetButtons() {
    this.object.children.forEach((e) => {
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
    this.object.children.forEach((e) => {
      this.timeline.to(e.position, {
        x: 0,
        y: 0,
        z: 0.07,
        ease: "sine(2.5)",
        duration: 0.02,
      });
    });
  }

  update() {
    // console.log(this.object)
  }
}
