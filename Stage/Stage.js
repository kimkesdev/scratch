/* eslint-disable require-yield, eqeqeq */

import {
    Stage as StageBase,
    Trigger,
    Watcher,
    Costume,
    Color,
    Sound
  } from "https://unpkg.com/leopard@^1/dist/index.esm.js";
  
  export default class Stage extends StageBase {
    constructor(...args) {
      super(...args);
  
      this.costumes = [
        new Costume("achtergrond1", "./Stage/costumes/achtergrond1.svg", {
          x: 240,
          y: 180
        }),
        new Costume("Forest", "./Stage/costumes/Forest.png", { x: 480, y: 360 })
      ];
  
      this.sounds = [new Sound("plop", "./Stage/sounds/plop.wav")];
  
      this.triggers = [];
  
      this.vars.score = 4;
  
      this.watchers.score = new Watcher({
        label: "score",
        style: "normal",
        visible: true,
        value: () => this.vars.score,
        x: 245,
        y: 175
      });
    }
  }
  