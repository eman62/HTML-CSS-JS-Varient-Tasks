window.addEventListener("load",function(){

let ball_object = {
    top:20,
    left:20,
    radius:10,
    color:"red",
    caluclateArea:function (){
        const pi =3.14;
        return "ball area is "+ this.radius*this.radius*pi;

    },

    toString(){
        return "top is "+ this.top +"left is "+this.left+"color is "+this.color;
    }
  
}
////1
console.log(ball_object.radius);
console.log(ball_object["left"]);
console.log(ball_object.caluclateArea());
console.log(ball_object.toString());

/////2 add
ball_object["area"] = 314;
console.log(ball_object["area"]);
///delete
delete ball_object["left"];
////3
////arrow function will case an error

let ball_array =[
    {
    top:20,
    left:20,
    radius:10,
    color:"red",
    caluclateArea:function (){
        const pi =3.14;
        return "ball area is "+ this.radius*this.radius*pi
    }
   },
   {
    top:20,
    left:20,
    radius:10,
    color:"red",
    caluclateArea:function (){
        const pi =3.14;
        return "ball area is "+ this.radius*this.radius*pi
    }
   },
//////////////second object
 {
    top:10,
    left:30,
    radius:20,
    color:"black",
    caluclateArea:function (){
        const pi =3.14;
        return "ball area is "+ this.radius*this.radius*pi
    }
   }
]
/////////loop
 for (let i=0; i<ball_array.length;i++){
    console.log("color of ball " +(i+1)+ball_array[i].color);
    console.log(ball_array[i].caluclateArea());
    
 }
////////////////////sort
ball_array.sort((a,b)=>{
 if (a.top == b.top){
    return a.top-b.top;
 }
 else {
    return a.left-b.left;
 }
});
console.table(ball_array);






})
