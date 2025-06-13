

//createElement=create a element using javascript

const input=document.getElementById("my-input")


function addpara(){
const para=document.createElement("p");

para.innerHTML= input.value;

//appendChild= adding element using js

const parent=document.getElementById("box");

parent.appendChild(para);// add new element then we use append or appendChild otherwise we use innerHTML

}


function deletepara(){
    const parent=document.getElementById("box");
    const lastpara=parent.lastElementChild;
    if(lastpara)
    parent.removeChild(lastpara);
}
//remove=to remove single element
//removeChild=to remove child element