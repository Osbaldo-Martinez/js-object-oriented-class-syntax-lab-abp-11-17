class BoardMember{
  constructor(x,y,z){
    this.name = x;
    this.homeState = y;
    this.training = z;
  }
}
BoardMember.prototype.veto = function(){
  return 'No, I must disagree'
}
