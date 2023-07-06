let navbar = document.querySelector('.nav');
document.querySelector('#menu-btn').onclick = () => {
  navbar.classList.toggle('active');
  searchform.classList.remove('active');

}
let searchform = document.querySelector('.search_form');
document.querySelector('#search_box').onclick = () => {
  searchform.classList.toggle('active');
  navbar.classList.remove('active');

}

window.scroll = () => {
  navbar.classList.remove('active');
  searchform.classList.remove('active');

}


//comment
// products

//1
var xhr = new XMLHttpRequest();
//2
xhr.open("GET", "product.json")
// xhr.open("GET","https://api.sampleapis.com/coffee/hot")
// xhr.open("GET","https://fakestoreapi.com/products")
// xhr.open("GET","https://api.sampleapis.com/coffee/iced")
// xhr.open("GET","https://dummyjson.com/products")
// xhr.open("GET",'https://jsonplaceholder.ir/users')
// xhr.open("GET","product.json")

//3
xhr.send()

//4
// JSON.parse()  {"name":"noha","salary":1000}  >>  {name:"noha",salary:1000}
// JSON.stringify()  {name:"noha",salary:1000}   >>  {"name":"noha","salary":1000}
var data;
xhr.addEventListener("load", function () {

  data = JSON.parse(xhr.response)
  //  console.log(xhr.response);
  console.log(data);//array
  let product_curd = [];

  for (let i = 0; i < data.length; i++) {

    let title = data[i].title;
    let ingredients = data[i].ingredients;
    let price = data[i].price;
    // let category =data[i].category;
    let img = data[i].image;
    // let rating = data[i].rating;
    let description = data[i].description;


    // console.log(img);
    // <p class="card-text"> ${rating.rate}</p>
    // <p class="card-text"> ${category}</p>
    //  <p class="card-text"> $${price}</p>

    product_curd +=
      ` 
       <div id="product_curd" class="card" style="width: 18rem;">
       <div id="img">
       <img src=${img} id=${id} class="card-img-top" alt="..."></div>
       <div class="card-body">
         <h2 class="card-title">${title}</h2>
         <p class="card-text"> ${ingredients}</p>
         <i class="fas fa-star"></i>
         <i class="fas fa-star"></i>
         <i class="fas fa-star"></i>
         <i class="fas fa-star"></i>
         <i class="fas fa-star-half-alt"></i>
         <div class="price">$${price} <span>20.99</span>

         <a href="#" class="btn btn-primary">
         <i class="fa-solid fa-cart-shopping"></i></a></div>
       </div>
     </div>`

  }
  let main = document.getElementById('main');

  main.innerHTML = product_curd;
})




// search // JavaScript


var cities = []
var searchInput = document.getElementsByClassName("search")[0]
var suggestions = document.getElementsByClassName("suggestions")[0]

console.log(searchInput);

searchInput.addEventListener("keydown", displayMatchedVals)
cities = data;

function filterCities() {
  var text = searchInput.value
  var regex = new RegExp(text, "i")

  var filteredData = cities.filter((element) => {

    return element.title.match(regex)
  })

  return filteredData;

}

function displayMatchedVals() {
  suggestions.innerHTML = ""
  var filteredData = filterCities()

  // for (var item of filteredData) {
  //   suggestions.innerHTML += `
  //   <li>${item.state} , ${item.city}</li>
  //   `
  // }

  var newFilteredData = filteredData.map((obj) => {
    return `<li>${obj.title} </li>`
  })
  var liArr = newFilteredData.join('')
  suggestions.innerHTML = liArr
}


//map()

//   var arr=[10,20,30,40]
//  var newArr= arr.map((num)=>{

//   return `<li>${num}</li>`
//  })

//  console.log(newArr.join(''));



// Show Cart
document.addEventListener('DOMContentLoaded', function () {
  var cartModal = document.getElementById('cartModal');
  cartModal.classList.add('show');
});










// about

const images = ['imgs/1.jpg', 'imgs/2.jpg', 'imgs/3.jpg', 'imgs/4.jpg', 'imgs/5.jpg', 'imgs/6.jpg', 'imgs/7.jpg'];
const sliderImage = document.getElementById('slider-image');
let currentPosition = 0;

function changeImage() {
  currentPosition++;
  if (currentPosition >= images.length) {
    currentPosition = 0;
  }
  sliderImage.src = images[currentPosition];
}

setInterval(changeImage, 1000);

//review
// let box1=`<div class="box-container">
// <div class="box">
//     <img src="imgs/person1.jpg"  class="quote" alt="" srcset="">
//     <p>Lorem ipsum dolor sit, amet consectetur adipisic praesentium illum libero? Rerum tempore placeat consequatur errm!</p>
//     <img src="imgs/1.jpg"  class="user" alt="" srcset="">
//     <h3>Esraa Fathy</h3>
//     <div class="stars">
//         <i class="fas fa-star"></i>
//         <i class="fas fa-star"></i>
//         <i class="fas fa-star"></i>
//         <i class="fas fa-star"></i>
//         <i class="fas fa-star-half-alt"></i>

//     </div>
// </div>

// <div class="box">
//     <img src="imgs/person2.jpg"  class="quote" alt="" srcset="">
//     <p>Lorem ipsum dolor sit, amet con praesentium illum libero? Rerum tem laboriosam!</p>
//     <img src="imgs/1.jpg"  class="user" alt="" srcset="">
//     <h3>Esraa Fathy</h3>
//     <div class="stars">
//         <i class="fas fa-star"></i>
//         <i class="fas fa-star"></i>
//         <i class="fas fa-star"></i>
//         <i class="fas fa-star"></i>
//         <i class="fas fa-star-half-alt"></i>

//     </div>
// </div>


// <div class="box">
//     <img src="imgs/person3.jpg"  class="quote" alt="" srcset="">
//     <p>Lorem ipsum  A quod maiores praesentium illum necessitatibus,
//          praesentium quod, numquam laboriosam!</p>
//     <img src="imgs/1.jpg"  class="user" alt="" srcset="">
//     <h3>Esraa Fathy</h3>
//     <div class="stars">
//         <i class="fas fa-star"></i>
//         <i class="fas fa-star"></i>
//         <i class="fas fa-star"></i>
//         <i class="fas fa-star"></i>
//         <i class="fas fa-star-half-alt"></i>

//     </div>
// </div>

// </div>

// `
// let box2=`<div class="box-container">
// <div class="box">
//     <img src="imgs/person1.jpg"  class="quote" alt="" srcset="">
//     <p>Lorem ipsum dolor sit, amet consectetur adipisic praesentium illum libero? Rerum tempore placeat consequatur errm!</p>
//     <img src="imgs/1.jpg"  class="user" alt="" srcset="">
//     <h3>Esraa Fathy</h3>
//     <div class="stars">
//         <i class="fas fa-star"></i>
//         <i class="fas fa-star"></i>
//         <i class="fas fa-star"></i>
//         <i class="fas fa-star"></i>
//         <i class="fas fa-star-half-alt"></i>

//     </div>
// </div>

// <div class="box">
//     <img src="imgs/person1.jpg"  class="quote" alt="" srcset="">
//     <p>Lorem ipsum dolor sit, amet con praesentium illum libero? Rerum tem laboriosam!</p>
//     <img src="imgs/1.jpg"  class="user" alt="" srcset="">
//     <h3>Esraa Fathy</h3>
//     <div class="stars">
//         <i class="fas fa-star"></i>
//         <i class="fas fa-star"></i>
//         <i class="fas fa-star"></i>
//         <i class="fas fa-star"></i>
//         <i class="fas fa-star-half-alt"></i>

//     </div>
// </div>


// <div class="box">
//     <img src="imgs/person1.jpg"  class="quote" alt="" srcset="">
//     <p>Lorem ipsum  A quod maiores praesentium illum necessitatibus,
//          praesentium quod, numquam laboriosam!</p>
//     <img src="imgs/1.jpg"  class="user" alt="" srcset="">
//     <h3>Esraa Fathy</h3>
//     <div class="stars">
//         <i class="fas fa-star"></i>
//         <i class="fas fa-star"></i>
//         <i class="fas fa-star"></i>
//         <i class="fas fa-star"></i>
//         <i class="fas fa-star-half-alt"></i>

//     </div>
// </div>





// </div>

// `


// // let reviewarray = [box1,box2]
// const reviewSlider = document.querySelector('.review .box-container ');
// const prevButton = document.querySelector('.prev-button');
// const nextButton = document.querySelector('.next-button');
// let currentPosition1 = 0;
// // let i;
// // for( i=0; i<reviewarray.length;i++)
// //{

// function slide(direction) {
//   currentPosition1 += direction * 100;
//   if (currentPosition1 > 0) {
//     currentPosition1 = -200;
//   } else if (currentPosition1 < -200) {
//     currentPosition1 = 0;
//   }
//   reviewSlider.style.transform = `translateX(${currentPosition1}%)`;
// }

// prevButton.addEventListener('click', () => slide(-1));
// nextButton.addEventListener('click', () => slide(1));

// setInterval(() => slide(1), 3000);


//}
// let reviewcontainer = document.querySelector('.review-container');

// reviewcontainer.innerHTML= reviewarray[i];


function sendID(target) {
  console.log(target);
  if (target.tagName == "IMG") {
    console.log("img", target.id);
    var url = "sigleProduct.html?id=" + target.id
    open(url, "_blank")

  }

}

var arr=[1,2,3,4,5,6]
var i=0
var j=0
var l
var k=0
var n
var v=3
var m
count=3
function croseler() {
  if(j>5){
    console.log("reset");
    j=0
    i=0
    k=0
    v=3
  }
    for(i;i<arr.length;i++){
      document.getElementById(arr[i]).setAttribute("hidden","true")
    }
    i=0
    console.log("i",i);
    for(j;j<arr.length-v;j++){
      document.getElementById(arr[j]).removeAttribute("hidden")
    }
    console.log("j",j);
    v--
    for(k;k<=j-3;k++){
      document.getElementById(arr[k]).removeAttribute("hidden")
      document.getElementById(arr[k+1]).removeAttribute("hidden")
    }
    console.log("k",k);
    console.log("v",v);
    count=j-1
    console.log(count);


  }
  setInterval(croseler(),3000)

  
function croselerback() {
  if(count>2){
    console.log("j",j);
      for(i;i<arr.length;i++){
        document.getElementById(arr[i]).setAttribute("hidden","true")
      }
      i=0
    document.getElementById(arr[count-1]).removeAttribute("hidden")
    document.getElementById(arr[count-2]).removeAttribute("hidden")
    document.getElementById(arr[count-3]).removeAttribute("hidden")
    count--
    console.log(count);
    j=count+1
    v++
    k--
    console.log("j after",j);
  }
    if(count==2){
      count=6
      j=0
      i=0
      k=0
      v=3
      for(i;i<arr.length;i++){
        document.getElementById(arr[i]).setAttribute("hidden","true")
      }
      i=0
    document.getElementById(arr[count-1]).removeAttribute("hidden")
    document.getElementById(arr[count-2]).removeAttribute("hidden")
    document.getElementById(arr[count-3]).removeAttribute("hidden")
    count--
  
  
    }
  }

