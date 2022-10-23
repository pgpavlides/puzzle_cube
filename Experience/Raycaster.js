import * as THREE from "three";
import Experience from "./Experience.js";
import { EventEmitter } from "events";
import GSAP from "gsap";

export default class Raycaster extends EventEmitter {
  constructor() {
    super();

    this.experience = new Experience();
    this.scene = this.experience.scene;
    this.sizes = this.experience.sizes;
    this.resources = this.experience.resources;

    this.camera = this.experience.camera;
    this.world = this.experience.world;
    this.device = this.sizes.device;
    this.cube = this.resources.experience.scene;
    this.device = this.sizes.device;
    // this.animation = this.world.animations;
    // this.player = this.experience.audioplayer

    this.raycaster = new THREE.Raycaster();
    this.mouse = new THREE.Vector2();
    this.hover = new THREE.Vector2();

    this.currentIntersect = null;

    this.onPointerMove();
    this.onPointerClick();
    this.onPointerHover();
    
    
  }

  onPointerHover() {
    window.addEventListener("pointerdown", (event) => {
      this.hover.x = (event.clientX / this.sizes.width) * 2 - 1;
      this.hover.y = -(event.clientY / this.sizes.height) * 2 + 1;
    });
  }

  onPointerMove() {
    window.addEventListener("mousemove", (event) => {
      this.mouse.x = (event.clientX / this.sizes.width) * 2 - 1;
      this.mouse.y = -(event.clientY / this.sizes.height) * 2 + 1;
    });
  }

  onPointerClick() {
    console.log(this.device);
    if (this.device === "desktop") {
      window.addEventListener("click", () => {
        this.timeline = new GSAP.timeline();

        if (this.currentIntersect)
          // console.log(this.currentIntersect)
          this.object = this.currentIntersect.object.name;
        {
          // console.log(this.currentIntersect)
          if (this.object === "pyramid_button") {
            this.world.animations.firstStep();
            // console.log("test")
            
          }

          //--------Red Button
          if (this.object === "Cube008") {
            this.world.puzzle1.p1_Red();
            this.world.puzzle1.lockCheck();
            // console.log("test")
          }
          //--------Green Button
          if (this.object === "Cube009") {
            this.world.puzzle1.p1_Green();
            this.world.puzzle1.lockCheck();
          }
          //--------Blue Button
          if (this.object === "Cube010") {
            this.world.puzzle1.p1_Blue();
            this.world.puzzle1.lockCheck();
          }
          //--------Yellow Button
          if (this.object === "Cube011") {
            this.world.puzzle1.p1_Yellow();
            this.world.puzzle1.lockCheck();
          }

          //--------Phone 0
          if (this.object === "Cube022_1") {
            this.world.puzzle2.p2_p0();
            this.world.puzzle2.lockCheck();
          }
          //--------Phone 9
          if (this.object === "Cube021_1") {
            this.world.puzzle2.p2_p9();
            this.world.puzzle2.lockCheck();
          }
          //--------Phone 8
          if (this.object === "Cube020_1") {
            this.world.puzzle2.p2_p8();
            this.world.puzzle2.lockCheck();
          }
          //--------Phone 7
          if (this.object === "Cube019_1") {
            this.world.puzzle2.p2_p7();
            this.world.puzzle2.lockCheck();
          }
          //--------Phone 6
          if (this.object === "Cube018_1") {
            this.world.puzzle2.p2_p6();
            this.world.puzzle2.lockCheck();
          }
          //--------Phone 5
          if (this.object === "Cube017_1") {
            this.world.puzzle2.p2_p5();
            this.world.puzzle2.lockCheck();
          }
          //--------Phone 4
          if (this.object === "Cube016_1") {
            this.world.puzzle2.p2_p4();
            this.world.puzzle2.lockCheck();
          }
          //--------Phone 3
          if (this.object === "Cube015_1") {
            this.world.puzzle2.p2_p3();
            this.world.puzzle2.lockCheck();
          }
          //--------Phone 2
          if (this.object === "Cube014_1") {
            this.world.puzzle2.p2_p2();
            this.world.puzzle2.lockCheck();
          }
          //--------Phone 1
          if (this.object === "Cube013_1") {
            this.world.puzzle2.p2_p1();
            this.world.puzzle2.lockCheck();
          }
          //--------Puzzle_3_b1
          if (this.object === "puzzle3_b1a") {
            this.world.puzzle3.p3_p1();
            this.world.puzzle3.lockCheck();
          }
          //--------Puzzle_3_b2
          if (this.object === "puzzle3_b2a") {
            this.world.puzzle3.p3_p2();
            this.world.puzzle3.lockCheck();
          }
          //--------Puzzle_3_b3
          if (this.object === "puzzle3_b3a") {
            this.world.puzzle3.p3_p3();
            this.world.puzzle3.lockCheck();
          }
          //--------Puzzle_3_b4
          if (this.object === "puzzle3_b4a") {
            this.world.puzzle3.p3_p4();
            this.world.puzzle3.lockCheck();
          }
          //--------Puzzle_3_b4
          if (this.object === "puzzle3_b5a") {
            this.world.puzzle3.p3_p5();
            this.world.puzzle3.lockCheck();
          }
          //--------Puzzle_3_b4
          if (this.object === "puzzle3_b6a") {
            this.world.puzzle3.p3_p6();
            this.world.puzzle3.lockCheck();
          }
          //--------Puzzle_3_b7
          if (this.object === "puzzle3_b7a") {
            this.world.puzzle3.p3_p7();
            this.world.puzzle3.lockCheck();
          }
          //--------Puzzle_3_b8
          if (this.object === "puzzle3_b8a") {
            this.world.puzzle3.p3_p8();
            this.world.puzzle3.lockCheck();
          }
          //--------Puzzle_3_b9
          if (this.object === "puzzle3_b9a") {
            this.world.puzzle3.p3_p9();
            this.world.puzzle3.lockCheck();
          }
        }
      });
    } else if (this.device === "mobile") {
      window.addEventListener("pointerup", (event) => {
        // this.hover.x = (event.clientX / this.sizes.width) * 2 - 1;
        // this.hover.y = -(event.clientY / this.sizes.height) * 2 + 1;
        // console.log(this.currentIntersect)
        this.timeline = new GSAP.timeline();

        if (this.currentIntersect)
          this.object = this.currentIntersect.object.name;
        console.log(this.currentIntersect)

        {
          // console.log(this.currentIntersect)
          if (this.object === "pyramid_button") {
            this.world.animations.firstStep();
            // console.log("test")
          }

          //--------Red Button
          if (this.object === "Cube008") {
            this.world.puzzle1.p1_Red();
            this.world.puzzle1.lockCheck();
            // console.log("test")
          }
          //--------Green Button
          if (this.object === "Cube009") {
            this.world.puzzle1.p1_Green();
            this.world.puzzle1.lockCheck();
          }
          //--------Blue Button
          if (this.object === "Cube010") {
            this.world.puzzle1.p1_Blue();
            this.world.puzzle1.lockCheck();
          }
          //--------Yellow Button
          if (this.object === "Cube011") {
            this.world.puzzle1.p1_Yellow();
            this.world.puzzle1.lockCheck();
          }

          //--------Phone 0
          if (this.object === "Cube022_1") {
            this.world.puzzle2.p2_p0();
            this.world.puzzle2.lockCheck();
          }
          //--------Phone 9
          if (this.object === "Cube021_1") {
            this.world.puzzle2.p2_p9();
            this.world.puzzle2.lockCheck();
          }
          //--------Phone 8
          if (this.object === "Cube020_1") {
            this.world.puzzle2.p2_p8();
            this.world.puzzle2.lockCheck();
          }
          //--------Phone 7
          if (this.object === "Cube019_1") {
            this.world.puzzle2.p2_p7();
            this.world.puzzle2.lockCheck();
          }
          //--------Phone 6
          if (this.object === "Cube018_1") {
            this.world.puzzle2.p2_p6();
            this.world.puzzle2.lockCheck();
          }
          //--------Phone 5
          if (this.object === "Cube017_1") {
            this.world.puzzle2.p2_p5();
            this.world.puzzle2.lockCheck();
          }
          //--------Phone 4
          if (this.object === "Cube016_1") {
            this.world.puzzle2.p2_p4();
            this.world.puzzle2.lockCheck();
          }
          //--------Phone 3
          if (this.object === "Cube015_1") {
            this.world.puzzle2.p2_p3();
            this.world.puzzle2.lockCheck();
          }
          //--------Phone 2
          if (this.object === "Cube014_1") {
            this.world.puzzle2.p2_p2();
            this.world.puzzle2.lockCheck();
          }
          //--------Phone 1
          if (this.object === "Cube013_1") {
            this.world.puzzle2.p2_p1();
            this.world.puzzle2.lockCheck();
          }
          //--------Puzzle_3_b1
          if (this.object === "puzzle3_b1a") {
            this.world.puzzle3.p3_p1();
            this.world.puzzle3.lockCheck();
          }
          //--------Puzzle_3_b2
          if (this.object === "puzzle3_b2a") {
            this.world.puzzle3.p3_p2();
            this.world.puzzle3.lockCheck();
          }
          //--------Puzzle_3_b3
          if (this.object === "puzzle3_b3a") {
            this.world.puzzle3.p3_p3();
            this.world.puzzle3.lockCheck();
          }
          //--------Puzzle_3_b4
          if (this.object === "puzzle3_b4a") {
            this.world.puzzle3.p3_p4();
            this.world.puzzle3.lockCheck();
          }
          //--------Puzzle_3_b4
          if (this.object === "puzzle3_b5a") {
            this.world.puzzle3.p3_p5();
            this.world.puzzle3.lockCheck();
          }
          //--------Puzzle_3_b4
          if (this.object === "puzzle3_b6a") {
            this.world.puzzle3.p3_p6();
            this.world.puzzle3.lockCheck();
          }
          //--------Puzzle_3_b7
          if (this.object === "puzzle3_b7a") {
            this.world.puzzle3.p3_p7();
            this.world.puzzle3.lockCheck();
          }
          //--------Puzzle_3_b8
          if (this.object === "puzzle3_b8a") {
            this.world.puzzle3.p3_p8();
            this.world.puzzle3.lockCheck();
          }
          //--------Puzzle_3_b9
          if (this.object === "puzzle3_b9a") {
            this.world.puzzle3.p3_p9();
            this.world.puzzle3.lockCheck();
          }
        }
      });
      //   window.addEventListener("touchstart", () => {

      //   })
    }
  }

  update() {
    if (this.device === "desktop") {
      
      this.raycaster.setFromCamera(this.mouse, this.camera.perpectiveCamera);

      this.objectsToTest = [this.cube];
      this.intersects = this.raycaster.intersectObjects(this.objectsToTest);

      if (this.intersects.length) {
        if (!this.currentIntersect) {
          // console.log(this.cube.children[4].children)
          // if(this.currentIntersect.object.name === "Button_1")
          //     {
          //     }
        }

        this.currentIntersect = this.intersects[0];
      } else {
        if (this.currentIntersect) {
          // console.log('mouse leave')
        }

        this.currentIntersect = null;
      }
    } else if (this.device === "mobile") {
      // console.log(this.intersects)

      // console.log(this.cube.children)
      // console.log(this.hover.y);
      this.raycaster.setFromCamera(this.hover, this.camera.perpectiveCamera);
      // this.currentIntersect = null;

      this.objectsToTest = [this.cube];
      this.intersects = this.raycaster.intersectObjects(this.objectsToTest);

      if (this.intersects.length) {
        if (!this.currentIntersect) {
        }

        this.currentIntersect = this.intersects[0];
        // console.log(this.currentIntersect)
      } else {
        if (this.currentIntersect) {
        }

        this.currentIntersect = null;
      }
    }
  }
}
