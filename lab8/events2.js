window.addEventListener("load",function(){
  
  let div_copy = function(div){
    div.onclick =function(){
        let copy = div.cloneNode(true);
        div.parentNode.appendChild(copy);
        //make div unclickable
        div.style.pointerEvents ="none";
        // div.classList.add("point");

        div_copy(copy);
    }

  }
  //first div
    let red_div = document.getElementsByTagName("div")[0];
     div_copy(red_div);
   
   //second div
    let green_div = document.getElementsByTagName("div")[1];
      div_copy(green_div);
   //third div
    let blue_div = document.getElementsByTagName("div")[2];
      div_copy(blue_div);







})