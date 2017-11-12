class BoardMember{
  constructor(x,y,z){
    this.name = x;
    this.homeState = y;
    this.training = z;
  }
}
BoardMember.prototype.approve = function(){
  return "You can do that!"
}
BoardMember.prototype.doCharity = function(){
  return "I like to help people."
}
BoardMember.prototype.releasePressStatement = function(){
  return "You will see great things from Scuber."
}
BoardMember.prototype.sayHi = function(){
  return `Hi, my name is ${this.name}. I am from ${this.homeState}, and I was trained in ${this.training}.`
}

class Ceo extends BoardMember{
  
}
