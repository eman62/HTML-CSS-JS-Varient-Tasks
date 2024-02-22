//create new element function
 
 let createNewElement = function(elementobject,element,propertyValue,parent,style){
    elementobject=document.createElement(element);
    elementobject.innerText=propertyValue;
    elementobject.classList.add(style);
    parent.append(elementobject);
 }


//create card function
const createCard = function(objects){ 
   let cardDiv =document.createElement("div");
    let imgObject,h1Object,h2Object,h3Object;
    for(let object of objects)
    {
          for(let property in object){
             if(property== "flags"){
                imgObject=document.createElement("img");
                imgObject.src=object[property]["png"];
                cardDiv.append(imgObject);
             }
             else if(property=="name"){
                createNewElement(h1Object,"h1",object["name"],cardDiv)

             }
             else if(property=="region"){
                createNewElement(h2Object,"h2",object["region"],cardDiv)
             }
             else if (property =="population"){
                createNewElement(h3Object,"h3",(object["population"]/1000000).toFixed(2),cardDiv,"firstH3");
             }
             else if (property == "languages"){
                createNewElement(h3Object,"h3",object["languages"][0]["name"],cardDiv,"secondH3");
             }
             else if(property =="currencies"){
                createNewElement(h3Object,"h3",object["currencies"][0]["name"],cardDiv,"thirdH3");

             }
          }
        return cardDiv; 
    }
    
}


///////////////////////////////
