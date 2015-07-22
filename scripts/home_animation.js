  var Matter = require('matter-js');
  // Matter module aliases
  var Engine = Matter.Engine,
    World = Matter.World,
    Body = Matter.Body,
    Bodies = Matter.Bodies,
    Constraint = Matter.Constraint,
    Composites = Matter.Composites,
    MouseConstraint = Matter.MouseConstraint;


  var homeAnimation = function(DOMelement) {

    // create a Matter.js engine
    var engine = Engine.create(DOMelement, {
      render: {
        options: {
          wireframes: false,
          background: 'http://brm.io/matter-js-demo/img/wall-bg.jpg'
        }
      }
    });

    // add a mouse controlled constraint
    var mouseConstraint = MouseConstraint.create(engine);
    World.add(engine.world, mouseConstraint);

    // some settings
    var offset = 10,
      wallOptions = {
        isStatic: true,
        render: {
          visible: false
        }
      };

    // add some invisible some walls to the world
    World.add(engine.world, [
      Bodies.rectangle(400, -offset, 800 + 2 * offset, 50, wallOptions),
      Bodies.rectangle(400, 600 + offset, 800 + 2 * offset, 50, wallOptions),
      Bodies.rectangle(800 + offset, 300, 50, 600 + 2 * offset, wallOptions),
      Bodies.rectangle(-offset, 300, 50, 600 + 2 * offset, wallOptions)
    ]);

    // create a stack of textured boxes and beach balls
    var stack = Composites.stack(20, 20, 15, 4, 0, 0, function(x, y, column, row) {

      // randomly create a box or beachball at this position in the stack
      if (Math.random() > 0.35) {
        return Bodies.rectangle(x, y, 64, 64, {
          render: {
            sprite: {
              texture: 'http://brm.io/matter-js-demo/img/box.png'
            }
          }
        });
      } else {
        return Bodies.circle(x, y, 46, {
          density: 0.0005,
          frictionAir: 0.06,
          restitution: 0.3,
          friction: 0.01,
          render: {
            sprite: {
              texture: 'http://brm.io/matter-js-demo/img/ball.png'
            }
          }
        });
      }
    });

    // add the stack to the world
    World.add(engine.world, stack);

    // run the engine
    Engine.run(engine);
  }

  module.exports = homeAnimation;
