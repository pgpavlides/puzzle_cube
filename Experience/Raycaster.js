import * as THREE from "three"
import Experience from "./Experience.js";
import { EventEmitter} from "events";
import GSAP from "gsap"



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
        // this.animation = this.world.animations;
        // this.player = this.experience.audioplayer
        
        
        this.raycaster = new THREE.Raycaster();
        this.mouse = new THREE.Vector2();

        this.currentIntersect = null;

        this.onPointerMove();
        this.onPointerClick();
        // this.onPointerHover();

        

    } 

    onPointerMove() {
    
        window.addEventListener("mousemove", (event) =>{
        
            this.mouse.x = event.clientX / this.sizes.width * 2 - 1
            this.mouse.y = - (event.clientY / this.sizes.height) * 2 + 1  
            
            });        
        }

        onPointerClick(){
            
            window.addEventListener('click', () =>
            {
    
                this.timeline = new GSAP.timeline();
    
                
    
                if(this.currentIntersect)
                // console.log(this.currentIntersect)
                this.object = this.currentIntersect.object.name
                {
                    // console.log(this.currentIntersect)
                    if(this.object === "pyramid_button") {
                        this.world.animations.firstStep();
                        // console.log("test")
                    }

                    //--------Red Button
                    if(this.object === "Cube008") {
                        this.world.puzzle1.p1_Red();
                        this.world.puzzle1.lockCheck();
                        // console.log("test")
                    }
                    //--------Green Button
                    if(this.object === "Cube009") {
                        this.world.puzzle1.p1_Green();
                        this.world.puzzle1.lockCheck();

                    }
                    //--------Blue Button
                    if(this.object === "Cube010") {
                        this.world.puzzle1.p1_Blue();
                        this.world.puzzle1.lockCheck();

                    }
                    //--------Yellow Button
                    if(this.object === "Cube011") {
                        this.world.puzzle1.p1_Yellow();
                        this.world.puzzle1.lockCheck();

                    }

                    //--------Cross
                    // if(this.object === "puzzle_1_cross") {
                    //     this.world.puzzle1.p1_Cross();
                    //     this.world.puzzle1.lockCheck();
                        

                    // }

                    //--------Phone 0
                    if(this.object === "Cube022_1") {
                        this.world.puzzle2.p2_p0();
                        this.world.puzzle2.lockCheck();                        
                    }
                    //--------Phone 9
                    if(this.object === "Cube021_1") {
                        this.world.puzzle2.p2_p9();
                        this.world.puzzle2.lockCheck();                        
                    }
                    //--------Phone 8
                    if(this.object === "Cube020_1") {
                        this.world.puzzle2.p2_p8();
                        this.world.puzzle2.lockCheck();                        
                    }
                    //--------Phone 7
                    if(this.object === "Cube019_1") {
                        this.world.puzzle2.p2_p7();
                        this.world.puzzle2.lockCheck();                        
                    }
                    //--------Phone 6
                    if(this.object === "Cube018_1") {
                        this.world.puzzle2.p2_p6();
                        this.world.puzzle2.lockCheck();                        
                    }
                    //--------Phone 5
                    if(this.object === "Cube017_1") {
                        this.world.puzzle2.p2_p5();
                        this.world.puzzle2.lockCheck();                        
                    }
                    //--------Phone 4
                    if(this.object === "Cube016_1") {
                        this.world.puzzle2.p2_p4();
                        this.world.puzzle2.lockCheck();                        
                    }
                    //--------Phone 3
                    if(this.object === "Cube015_1") {
                        this.world.puzzle2.p2_p3();
                        this.world.puzzle2.lockCheck();                        
                    }
                    //--------Phone 2
                    if(this.object === "Cube014_1") {
                        this.world.puzzle2.p2_p2();
                        this.world.puzzle2.lockCheck();                        
                    }
                    //--------Phone 1
                    if(this.object === "Cube013_1") {
                        this.world.puzzle2.p2_p1();
                        this.world.puzzle2.lockCheck();                        
                    }
                    //--------Puzzle_3_b1
                    if(this.object === "puzzle3_b1a") {
                        this.world.puzzle3.p3_p1();
                        this.world.puzzle3.lockCheck();  
                    }
                    //--------Puzzle_3_b2
                    if(this.object === "puzzle3_b2a") {
                        this.world.puzzle3.p3_p2();
                        this.world.puzzle3.lockCheck();  
                    }
                    //--------Puzzle_3_b3
                    if(this.object === "puzzle3_b3a") {
                        this.world.puzzle3.p3_p3();
                        this.world.puzzle3.lockCheck();  
                    }
                    //--------Puzzle_3_b4
                    if(this.object === "puzzle3_b4a") {
                        this.world.puzzle3.p3_p4();
                        this.world.puzzle3.lockCheck();  
                    }
                    //--------Puzzle_3_b4
                    if(this.object === "puzzle3_b5a") {
                        this.world.puzzle3.p3_p5();
                        this.world.puzzle3.lockCheck();  
                    }
                    //--------Puzzle_3_b4
                    if(this.object === "puzzle3_b6a") {
                        this.world.puzzle3.p3_p6();
                        this.world.puzzle3.lockCheck();  
                    }
                    //--------Puzzle_3_b7
                    if(this.object === "puzzle3_b7a") {
                        this.world.puzzle3.p3_p7();
                        this.world.puzzle3.lockCheck();  
                    }
                    //--------Puzzle_3_b8
                    if(this.object === "puzzle3_b8a") {
                        this.world.puzzle3.p3_p8();
                        this.world.puzzle3.lockCheck();  
                    }
                    //--------Puzzle_3_b9
                    if(this.object === "puzzle3_b9a") {
                        this.world.puzzle3.p3_p9();
                        this.world.puzzle3.lockCheck();  
                    }
                    //--------Puzzle_4_b1
                    if(this.object === "puzzle4_b1") {
                        this.world.puzzle4.p4_p1();
                        this.world.puzzle4.lockCheck(); 
                        // console.log("reach") 
                    }
                    //--------Puzzle_4_b2
                    if(this.object === "puzzle4_b2") {
                        this.world.puzzle4.p4_p2();
                        this.world.puzzle4.lockCheck();  
                    }
                    //--------Puzzle_4_b3
                    if(this.object === "puzzle4_b3") {
                        this.world.puzzle4.p4_p3();
                        this.world.puzzle4.lockCheck();  
                    }
                    //--------Puzzle_4_4
                    if(this.object === "puzzle4_b4") {
                        this.world.puzzle4.p4_p4();
                        this.world.puzzle4.lockCheck();  
                    }
                    //--------Puzzle_4_5
                    if(this.object === "puzzle4_b5") {
                        this.world.puzzle4.p4_p5();
                        this.world.puzzle4.lockCheck();  
                    }
                    //--------Puzzle_4_6
                    if(this.object === "puzzle4_b6") {
                        this.world.puzzle4.p4_p6();
                        this.world.puzzle4.lockCheck();  
                    }
                    //--------Puzzle_4_7
                    if(this.object === "puzzle4_b7") {
                        this.world.puzzle4.p4_p7();
                        this.world.puzzle4.lockCheck();  
                    }
                    //--------Puzzle_4_8
                    if(this.object === "puzzle4_b8") {
                        this.world.puzzle4.p4_p8();
                        this.world.puzzle4.lockCheck();  
                    }
                    //--------Puzzle_4_9
                    if(this.object === "puzzle4_b9") {
                        this.world.puzzle4.p4_p9();
                        this.world.puzzle4.lockCheck();  
                    }
                    //--------Puzzle_4_10
                    if(this.object === "puzzle4_b10") {
                        this.world.puzzle4.p4_p10();
                        this.world.puzzle4.lockCheck();  
                    }
                    //--------Puzzle_4_11
                    if(this.object === "puzzle4_b11") {
                        this.world.puzzle4.p4_p11();
                        this.world.puzzle4.lockCheck();  
                    }
                    //--------Puzzle_4_12
                    if(this.object === "puzzle4_b12") {
                        this.world.puzzle4.p4_p12();
                        this.world.puzzle4.lockCheck();  
                    }
                    //--------Puzzle_4_13
                    if(this.object === "puzzle4_b13") {
                        this.world.puzzle4.p4_p13();
                        this.world.puzzle4.lockCheck();  
                    }
                    //--------Puzzle_4_14
                    if(this.object === "puzzle4_b14") {
                        this.world.puzzle4.p4_p14();
                        this.world.puzzle4.lockCheck();  
                    }
                    //--------Puzzle_4_15
                    if(this.object === "puzzle4_b15") {
                        this.world.puzzle4.p4_p15();
                        this.world.puzzle4.lockCheck();  
                    }
                    //--------Puzzle_4_16
                    if(this.object === "puzzle4_b16") {
                        this.world.puzzle4.p4_p16();
                        this.world.puzzle4.lockCheck();  
                    }
                    //--------Puzzle_4_17
                    if(this.object === "puzzle4_b17") {
                        this.world.puzzle4.p4_p17();
                        this.world.puzzle4.lockCheck();  
                    }
                    //--------Puzzle_4_18
                    if(this.object === "puzzle4_b18") {
                        this.world.puzzle4.p4_p18();
                        this.world.puzzle4.lockCheck();  
                    }
                    //--------Puzzle_4_19
                    if(this.object === "puzzle4_b19") {
                        this.world.puzzle4.p4_p19();
                        this.world.puzzle4.lockCheck();  
                    }
                    //--------Puzzle_4_20
                    if(this.object === "puzzle4_b20") {
                        this.world.puzzle4.p4_p20();
                        this.world.puzzle4.lockCheck();  
                    }
                    //--------Puzzle_4_21
                    if(this.object === "puzzle4_b21") {
                        this.world.puzzle4.p4_p21();
                        this.world.puzzle4.lockCheck();  
                    }
                    //--------Puzzle_4_22
                    if(this.object === "puzzle4_b22") {
                        this.world.puzzle4.p4_p22();
                        this.world.puzzle4.lockCheck();  
                    }
                    //--------Puzzle_4_23
                    if(this.object === "puzzle4_b23") {
                        this.world.puzzle4.p4_p23();
                        this.world.puzzle4.lockCheck();  
                    }
                    //--------Puzzle_4_24
                    if(this.object === "puzzle4_b24") {
                        this.world.puzzle4.p4_p24();
                        this.world.puzzle4.lockCheck();  
                    }
                    //--------Puzzle_4_25
                    if(this.object === "puzzle4_b25") {
                        this.world.puzzle4.p4_p25();
                        this.world.puzzle4.lockCheck();  
                    }
                    //--------Puzzle_4_26
                    if(this.object === "puzzle4_b26") {
                        this.world.puzzle4.p4_p26();
                        this.world.puzzle4.lockCheck();  
                    }
                    //--------Puzzle_4_27
                    if(this.object === "puzzle4_b27") {
                        this.world.puzzle4.p4_p27();
                        this.world.puzzle4.lockCheck();  
                    }
                    //--------Puzzle_4_28
                    if(this.object === "puzzle4_b28") {
                        this.world.puzzle4.p4_p28();
                        this.world.puzzle4.lockCheck();  
                    }
                    //--------Puzzle_4_29
                    if(this.object === "puzzle4_b29") {
                        this.world.puzzle4.p4_p29();
                        this.world.puzzle4.lockCheck();  
                    }
                    //--------Puzzle_4_30
                    if(this.object === "puzzle4_b30") {
                        this.world.puzzle4.p4_p30();
                        this.world.puzzle4.lockCheck();  
                    }
                    //--------Puzzle_4_31
                    if(this.object === "puzzle4_b31") {
                        this.world.puzzle4.p4_p31();
                        this.world.puzzle4.lockCheck();  
                    }
                    //--------Puzzle_4_32
                    if(this.object === "puzzle4_b32") {
                        this.world.puzzle4.p4_p32();
                        this.world.puzzle4.lockCheck();  
                    }
                    //--------Puzzle_4_33
                    if(this.object === "puzzle4_b33") {
                        this.world.puzzle4.p4_p33();
                        this.world.puzzle4.lockCheck();  
                    }
                    //--------Puzzle_4_34
                    if(this.object === "puzzle4_b34") {
                        this.world.puzzle4.p4_p34();
                        this.world.puzzle4.lockCheck();  
                    }
                    //--------Puzzle_4_35
                    if(this.object === "puzzle4_b35") {
                        this.world.puzzle4.p4_p35();
                        this.world.puzzle4.lockCheck();  
                    }
                    //--------Puzzle_4_36
                    if(this.object === "puzzle4_b36") {
                        this.world.puzzle4.p4_p36();
                        this.world.puzzle4.lockCheck();  
                    }
                    //--------Puzzle_4_37
                    if(this.object === "puzzle4_b37") {
                        this.world.puzzle4.p4_p37();
                        this.world.puzzle4.lockCheck();  
                    }
                    //--------Puzzle_4_38
                    if(this.object === "puzzle4_b38") {
                        this.world.puzzle4.p4_p38();
                        this.world.puzzle4.lockCheck();  
                    }
                    //--------Puzzle_4_39
                    if(this.object === "puzzle4_b39") {
                        this.world.puzzle4.p4_p39();
                        this.world.puzzle4.lockCheck();  
                    }
                    //--------Puzzle_4_40
                    if(this.object === "puzzle4_b40") {
                        this.world.puzzle4.p4_p40();
                        this.world.puzzle4.lockCheck();  
                    }
                    //--------Puzzle_4_41
                    if(this.object === "puzzle4_b41") {
                        this.world.puzzle4.p4_p41();
                        this.world.puzzle4.lockCheck();  
                    }
                    //--------Puzzle_4_42
                    if(this.object === "puzzle4_b42") {
                        this.world.puzzle4.p4_p42();
                        this.world.puzzle4.lockCheck();  
                    }
                    //--------Puzzle_4_43
                    if(this.object === "puzzle4_b43") {
                        this.world.puzzle4.p4_p43();
                        this.world.puzzle4.lockCheck();  
                    }
                    //--------Puzzle_4_44
                    if(this.object === "puzzle4_b44") {
                        this.world.puzzle4.p4_p44();
                        this.world.puzzle4.lockCheck();  
                    }
                    //--------Puzzle_4_45
                    if(this.object === "puzzle4_b45") {
                        this.world.puzzle4.p4_p45();
                        this.world.puzzle4.lockCheck();  
                    }
                    //--------Puzzle_4_46
                    if(this.object === "puzzle4_b46") {
                        this.world.puzzle4.p4_p46();
                        this.world.puzzle4.lockCheck();  
                    }
                    //--------Puzzle_4_47
                    if(this.object === "puzzle4_b47") {
                        this.world.puzzle4.p4_p47();
                        this.world.puzzle4.lockCheck();  
                    }
                    //--------Puzzle_4_48
                    if(this.object === "puzzle4_b48") {
                        this.world.puzzle4.p4_p48();
                        this.world.puzzle4.lockCheck();  
                    }
                    //--------Puzzle_4_49
                    if(this.object === "puzzle4_b49") {
                        this.world.puzzle4.p4_p49();
                        this.world.puzzle4.lockCheck();  
                    }

                    
                    
                }
                

                
               
            })
        }        

    // onPointerHover(){
            
    //     window.addEventListener('mouseover', () => {
                
    //              if(this.currentIntersect)
    //              {
    //                 console.log(this.currentIntersect)
    //                 // if(this.currentIntersect.object.name === "Button_1")
    //                 // {
    //                 //     console.log("AAAAA")
    //                 // }
                    
    //              }
    //          })
    //      }        
    

    update(){
        this.raycaster.setFromCamera(this.mouse,this.camera.perpectiveCamera)
       
        this.objectsToTest = [ this.cube ];
        this.intersects = this.raycaster.intersectObjects(this.objectsToTest)
    
        if(this.intersects.length)
        {
            if(!this.currentIntersect)
            {
                // console.log(this.cube.children[4].children)
                
                // if(this.currentIntersect.object.name === "Button_1")
                //     {
                        
                        
                //     }
            }
    
            this.currentIntersect = this.intersects[0]
        }
        else
        {
            if(this.currentIntersect)
            {
                // console.log('mouse leave')
            }
            
            this.currentIntersect = null
        }
    }
} 