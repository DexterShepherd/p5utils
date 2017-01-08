class ShiffmanParticle {
  constructor(renderer, loc, renderer, params) {
    this.loc = loc;
    this.acc = params.acc || this.renderer.createVector(0, 0);
    this.vel = params.vel || this.renderer.createVector(0, 0);
  }
  
  // attract the particle towards a point and
  // returns the new particle location
  //
  // target: p5.Vector
  // params: {
  //   acc_scale: number,
  //   vel_limit: number
  // }
  //
  attract(target, params) {
    this.acc = target.sub(this.loc);
    this.acc.normalize();
    this.acc.mult(params.acc_scale || 0.5);

    this.vel.add(this.acc);
    this.vel.limit(params.vel_limit || 9);
    this.loc.add(this.vel);
    return this.loc;
  }

  // repels the particle away from a point and
  // return the new particle location
  //
  // target: p5.Vector
  // params: {
  //   acc_scale: number,
  //   vel_limit: number
  // }
  //
  repel(target, params) {
    this.acc = this.loc.sub(target);
    this.acc.normalize();
    this.acc.mult(params.acc_scale || 0.5);

    this.vel.add(this.acc);
    this.vel.limit(params.vel_limit || 9);
    this.loc.add(this.vel);
    return this.loc;
  }

  display() {
    this.renderer.stroke(255);
    this.renderer.ellipse(this.loc.x, this.loc.y)
  }
} 

module.exports = {
  ShiffmanParticle: ShiffmanParticle
}
