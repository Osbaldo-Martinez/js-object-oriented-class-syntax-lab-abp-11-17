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
  return 'No, I must disagree'
}
BoardMember.prototype.sayHi = function(){
  return "You will see great things from Scuber."
}
BoardMember.prototype.veto = function(){
  return 'No, I must disagree'
}
BoardMember.prototype.veto = function(){
  return 'No, I must disagree'
}