const wrapper = document.querySelector(".sliderWrapper")
const menuItems = document.querySelectorAll('.menuItem')

const products=[
    {
        id:1,
        title:"Jordan",
        price: 1119 ,
        colors :[
            {
                code:"white",
                img: "./img/jordan.png",
            },
            {
                code:"black",
                img: "./img/jordan3.png",
            },
        ],

    },
    {
        id:2,
        title:"Blazer",
        price: 1008 ,
        colors :[
            {
                code:"white",
                img: "./img/blazer.png",
            },
            {
                code:"red",
                img: "./img/blazer2.png",
            },
        ],

    },
    {
        id:3,
        title:"Air Force",
        price: 1229 ,
        colors :[
            {
                code:"Black",
                img: "./img/air1.png",
            },
            {
                code:"white",
                img: "./img/AIR4.png",
            },
        ],

    },
    {
        id:4,
        title:"Carter",
        price: 1222 ,
        colors :[
            {
                code:"black",
                img: "./img/carter.png",
            },
            {
                code:"white",
                img: "./img/carter2.png",
            },
        ],

    },
    {
        id:5,
        title:"Hippie",
        price: 2239 ,
        colors :[
            {
                code:"orange",
                img: "./img/hippie1.png",
            },
            {
                code:"gray",
                img: "./img/hippie2.png",
            },
        ],

    },
    
]
let choosenProduct = products[0]

const currentProductImg = document.querySelector(".productImg");
const currentProductTitle = document.querySelector(".productTitle");
const currentProductPrice = document.querySelector(".productPrice");
const currentProductColors = document.querySelectorAll(".color");
const currentProductSizes = document.querySelectorAll(".size");


menuItems.forEach((item,index)=> {
    item.addEventListener('click',()=> {
        //chnage the current slide
        wrapper.style.transform =`translatex(${-100 *index}vw)` ;
        //change the choosen product
        choosenProduct = products[index]

        //change text of CurrentProduct
        currentProductTitle.textContent = choosenProduct.title;
        currentProductPrice.textContent = "RS"+ choosenProduct.price +"/-";
        currentProductImg.src = choosenProduct.colors[0].img

        //assing new colors
        currentProductColors.forEach((colors,index)=>{
            colors.style.backgroundColor =choosenProduct.colors[index].code;
        });
             
      });
})

currentProductColors.forEach((color,index)=>{
    color.addEventListener("click",()=>
    {
        currentProductImg.src= choosenProduct.colors[index].img
    })
})
currentProductSizes.forEach((size,index)=>{
    size.addEventListener("click",()=>{
        currentProductSizes.forEach(size =>{
            size.style.backgroundColor= "white";
            size.style.color= "black"
        });
       
        size.style.backgroundColor= "black";
        size.style.color= "white"
    });
})
const productButton =document.querySelector(".productButton");
const payment = document.querySelector(".payment");
const close = document.querySelector(".close");

productButton.addEventListener("click",()=>{
    payment.style.display="flex"
})
close.addEventListener("click",()=>{
    payment.style.display="none"
})