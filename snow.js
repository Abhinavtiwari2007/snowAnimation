class snow{
    constructor(x,y){
    var options = {
        restitution : 0.1,
        friction : 0.1
    }

    this.body = Bodies.circle(x,y,3,options)
    World.add(world,this.body)

}
display (){
    fill("white")
    circle(this.body.position.x,this.body.position.y,6)
}
resetsnow(){

    if(this.body.position.y>hight){
    Matter.Body.setPosition(this.body,{x:random(0,400),y:random(0,400)})

    }
}
} 