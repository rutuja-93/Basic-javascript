// //DOM[document object miodel]= tree like structure of content of our website
// //


// //how to select 
// //1 using id selector= single element
// const selectidH1= document.getElementById("my=h1");

// //2 using class= HTML collection-->array
// const para=document.getElementsByClassName("para");

// //3 tag selector= HTML collection-->array

// const paracollection= document.getElementsByTagName("p");

// //4 Query Selector= element

// const para1=document.querySelector(".my-h1");
// //console.log(para1);

// //5 QuerySelectorAll= nodelist
// const paras=document.querySelectorAll(".para");
// console.log(paras);


// //Dom Manipulation = change

// // change content

// const selectedH1=document.getElementById("my")

// // 1 innerHTML= add elment

// console.log(selectedH1.innerHTML);
// selectedH1.innerHTML="DOM 2"

// // 2 textContent= add text

// console.log(selectedH1.textContent);

// //3 innerText= add text

// console.log(selectedH1.innerText);


// when we click on button then html content will be change
const selectedH1=document.getElementById("my1")
function ChangeContent(){
    const chnage=prompt("enter ");
    selectedH1.innerHTML="This is first dom manipulation"
}