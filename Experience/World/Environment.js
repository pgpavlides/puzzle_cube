import * as THREE from "three"

import Experience from "../Experience.js";

export default class Environment {
    constructor() {
        this.experience = new Experience();
        this.scene = this.experience.scene;
        this.resources = this.experience.resources;
 

        this.setSunlight();
        this.setAmbient();
        
    }

    

    setSunlight() {
        this.sunLight = new THREE.DirectionalLight("#fdedad", 2);
        this.sunLight.castShadow = true;
        this.sunLight.shadow.camera.far = 15;
        this.sunLight.shadow.mapSize.set(2048,2048);
        this.sunLight.shadow.normalBias = 0.15;

        this.sunLight2 = new THREE.DirectionalLight("#4b5cc4", 3);
        this.sunLight2.castShadow = true;
        this.sunLight2.shadow.camera.far = 15;
        this.sunLight2.shadow.mapSize.set(2048,2048);
        this.sunLight2.shadow.normalBias = 0.15;

        this.sunLight3 = new THREE.DirectionalLight("#4b5cc4", 3);
        this.sunLight3.castShadow = true;
        this.sunLight3.shadow.camera.far = 15;
        this.sunLight3.shadow.mapSize.set(2048,2048);
        this.sunLight3.shadow.normalBias = 0.15;
        
        
        // this.helper = DirectionalLightHelper(this.sunLight, 6);
        // this.scene.add(this.helper);

        this.sunLight.position.set(-1.5, 5, 2);
        this.sunLight2.position.set(9, 0, 0);
        this.sunLight3.position.set(-1.5, -5, 2);
        this.scene.add(this.sunLight);
        this.scene.add(this.sunLight2);
        this.scene.add(this.sunLight3);

    }

    setAmbient() {
        this.ambientlight = new THREE.AmbientLight( "#ffffff", 0.8 );
       
        this.scene.add(this.ambientlight);

    }

 
    
    resize(){

    }

    update(){
        
    }

}