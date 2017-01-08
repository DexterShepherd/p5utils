const p5 = require('p5');
const util = require('./utils');

new p5(p => {
  let palettes, particles;

  p.setup = function() {
    const canvas = p.createCanvas(800, 800);
    console.log(util);
    particles = [];
    for(let i = 0; i < 100; i++) {
      particles[i] = new util.ParticleBase(p, p.createVector(p.random(800), p.random(800)), {
        vel: p.createVector(p.random(-10, 10), p.random(-10, 10))
      });
    }
  }

  p.draw = function() {
    p.background(240);
    for(let i = 0; i < 100; i++) {
      particles[i].attract(p.createVector(400, 400));
      particles[i].display();
    }
  }
});

