var projects = require('./../projects.json'),
  icons = projects.projectRectangleIcons;

var Matter = require('matter-js');
// Matter module aliases
var Engine = Matter.Engine,
  World = Matter.World,
  Body = Matter.Body,
  Bodies = Matter.Bodies,
  Constraint = Matter.Constraint,
  Composites = Matter.Composites,
  MouseConstraint = Matter.MouseConstraint;
  Mouse = Matter.Mouse,
  Runner = Matter.Runner;

//Remove mouse wheel events 
Mouse.clearSourceEvents = function(mouse) {
  mouse.element.removeEventListener("mousewheel", mouse.mousewheel);
  mouse.element.removeEventListener("DOMMouseScroll", mouse.mousewheel);
};


var homeAnimation = function(DOMelement, stop) {
  
  // create a Matter.js engine
  var engine = Engine.create(DOMelement, {
    render: {
      options: {
        height: 500,
        width: 1100,
        wireframes: false,
        background: 'transparent'
      }
    }
  });

  engine.world.bounds.min.x = -Infinity;
  engine.world.bounds.min.y = -Infinity;
  engine.world.bounds.max.x = Infinity;
  engine.world.bounds.max.y = Infinity;

  // add a mouse controlled constraint
  var mouseConstraint = MouseConstraint.create(engine, {
    constraint: {
      render: {
        visible: true,
        lineWidth: 2,
        strokeStyle: '#999'
      }
    }
  });
  
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
    Bodies.rectangle(400, -offset, 1400 + 2 * offset, 50, wallOptions),
    Bodies.rectangle(400, 500 + offset, 1400 + 2 * offset, 50, wallOptions),
    Bodies.rectangle(1100 + offset, 300, 50, 550 + 2 * offset, wallOptions),
    Bodies.rectangle(-offset, 300, 50, 550 + 2 * offset, wallOptions)
  ]);

  // create a stack of textured boxes and beach balls
  var stack = Composites.stack(300, 0, icons[0].length, icons.length, 0, 0, function(x, y, column, row) {

    var icon = icons[row][column];

    if (icon.type === 'rectangle') {
      return Bodies.rectangle(x, y, icon.width, icon.height, {
        render: {
          sprite: {
            texture: icon.url
          }
        }
      });
    } else {
      //icon.type === 'circle' 
      return Bodies.circle(x, y, icon.radius, {
        render: {
          sprite: {
            texture: icon.url
          }
        }
      });
    }
  });

  // add the stack to the world
  World.add(engine.world, stack);

  // run the engine
  Engine.run(engine);

  return engine;
}

module.exports = homeAnimation;