let btn = document.querySelector("button");
let div = document.querySelector(".parent");
btn.addEventListener("click",()=>{
console.log('button clicked')
    const newDiv = document.createElement("div");
    const textArea = document.createElement("textarea")
    const deletebtn = document.createElement("button");
    deletebtn.innerText = "delete";
    // deletebtn.setAttribute("id","delete");
    deletebtn.className = "delete"
    textArea.className ="textarea";
    newDiv.className = "child";
    newDiv.appendChild(textArea)
    newDiv.appendChild(deletebtn);
    div.appendChild(newDiv)

});
//event delegation
div.addEventListener("click",(event)=>{
    if(event.target.classList.contains("delete")){
    // console.log("btn clicked delete")
    const div = event.target.parentElement; //getting parent element of btn
                                            // i.e div of respected btn
    div.remove(); 

}
})

