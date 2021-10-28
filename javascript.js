const AddtodoButton = document.getElementById("Addtodo");
const todocontainer = document.getElementById("todocontainer");
const inputfield = document.getElementById("inputfield");



  
AddtodoButton.onclick= function (){
    const key = inputfield.value;
 

    console.log(key);

  
    localStorage.setItem(key, key);
    
    
}


AddtodoButton.addEventListener("click", function(){
    var paragraph = document.createElement("p");
    paragraph.classList.add("paragraph-styling");
    paragraph.innerText = inputfield.value;
    
        
        if(document.getElementById("inputfield").value.length <= 3) {
        
        
    
        alert("Teksti on liian lyhyt!")
        document.getElementById("inputfield").style.borderColor = "red";
        string.replace('inputfield', '');

    } else { document.getElementById("inputfield").style.borderColor = "black";
    
}






    todocontainer.appendChild(paragraph);
    inputfield.value = "";
    paragraph.addEventListener("click", function(){
        paragraph.style.textDecoration = "line-through";
        paragraph.style.textDecorationColor= "red";
        
        



    })
    paragraph.addEventListener("dblclick", function(){
        todocontainer.removeChild(paragraph);

    })
 
    
        

    
  
})
