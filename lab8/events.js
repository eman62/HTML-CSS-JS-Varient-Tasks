
window.addEventListener("load",function(){

let image_sources =["images/1.jpg","images/2.jpg","images/3.jpg","images/4.jpg","images/5.jpg"];

   
  let next_button= document.getElementsByTagName("button")[0];
  let index =1;
  let changed_images = document.images[0];
  
          next_button.onclick= function(){
            
              if( index < image_sources.length){
                 changed_images.src= image_sources[index];
                 index++; 
              }
              else {
                 index =0;
              }
            
             }
        


  let previous_button= document.getElementsByTagName("button")[1];
      previous_button.onclick = function (){
              index--;
              if( index >= 0){
               changed_images.src= image_sources[index];
                    
              }
              else {
               index= image_sources.length-1;
              }
     }
   
  let change_image = function(){
   changed_images.src= image_sources[index];
   index = (index +1) % image_sources.length;
  }
  
  let interval_function;
  let slide_show=  document.getElementsByTagName("button")[2];

      slide_show.onclick = function(){
       
       interval_function=  setInterval(change_image,1000);
       slide_show.setAttribute("disabled","");
          
      }
      

  let stop_button= document.getElementsByTagName("button")[3];

       stop_button.onclick =function(){
       clearInterval(interval_function);
       slide_show.removeAttribute("disabled","");
       }
})