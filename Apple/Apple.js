/* eslint-disable require-yield, eqeqeq */

import {
    Sprite,
    Trigger,
    Watcher,
    Costume,
    Color,
    Sound
  } from "https://unpkg.com/leopard@^1/dist/index.esm.js";
  
  export default class Apple extends Sprite {
    constructor(...args) {
      super(...args);
  
      this.costumes = [
        new Costume("apple", "./Apple/costumes/apple.svg", { x: 31, y: 31 })
      ];
  
      this.sounds = [new Sound("Chomp", "./Apple/sounds/Chomp.wav")];
  
      this.triggers = [
        new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
        new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked2)
      ];
    }
  
    *whenGreenFlagClicked() {
      this.goto(this.random(-240, 240), this.random(-180, 180));
      this.y = 180;
      while (true) {
        this.y -= 5;
        if (this.compare(this.y, -170) < 0) {
          this.goto(this.random(-240, 240), this.random(-180, 180));
          this.y = 180;
        }
        yield;
      }
    }
  
    *whenGreenFlagClicked2() {
      this.stage.vars.score = 0;
      while (true) {
        if (this.touching(this.sprites["Bowl"].andClones())) {
          yield* this.startSound("Chomp");
          this.stage.vars.score++;
          this.goto(this.random(-240, 240), this.random(-180, 180));
          this.y = 180;
        }
        yield;
      }
    }
  }
  