class Form{
    constructor(){


    }
display(){
    var title=createElement("h4")
title.html("CAR RASING GAME!")
title.position(300,100)

var box=createInput("ENTER YOUR NAME...")
box.position(350,150)
var button=createButton("LETS GO..")
button.position(350,200);
button.mousePressed(function(){
    box.hide();
    button.hide();
    title.hide();
    var name=box.value();
    var greeting=createElement("h2");
    greeting.html("WELCOME:"+name);
    greeting.position(390,390)
})



}
}