import {
    Project,
    Sprite
  } from "https://unpkg.com/leopard@^1/dist/index.esm.js";
  
  import Stage from "./Stage/Stage.js";
  import Apple from "./Apple/Apple.js";
  import Bowl from "./Bowl/Bowl.js";
  
  const stage = new Stage({ costumeNumber: 2 });
  
  const sprites = {
    Apple: new Apple({
      x: -112,
      y: -50,
      direction: 90,
      rotationStyle: Sprite.RotationStyle.ALL_AROUND,
      costumeNumber: 1,
      size: 100,
      visible: true,
      layerOrder: 1
    }),
    Bowl: new Bowl({
      x: 107,
      y: -133,
      direction: 90,
      rotationStyle: Sprite.RotationStyle.ALL_AROUND,
      costumeNumber: 1,
      size: 140,
      visible: true,
      layerOrder: 2
    })
  };
  
  const project = new Project(stage, sprites, {
    frameRate: 30 // Set to 60 to make your project run faster
  });
  export default project;
  