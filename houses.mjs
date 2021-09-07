// // document.getElementById('part').style.border = '2px solid red';
// // document.write('fuck this');

// // document.querySelector('.icons').style.border='3px solid black';

// // document.querySelector('#part').style.border='3px solid black';

// var houseOne = {
//   image: $('body').append($('<img src="./images/house1.jpg" width ="400px" height = "400px"></ img>')),
//   name: $('body').append('<p>Muyenga</p>') , 
//   price: $('body').append('<span>50000</span>'),
//   description: $('body').append('<p>Cosy, four bedroom house, self contained and quiet neighbourhood.</p>'), 
// }

// var houseTwo = {
//   image: $('body').append($('<img src="./images/house2.jpg" width ="400px" height = "400px"></ img>')),
//   name: $('body').append('<p>Muyenga</p>') , 
//   price: $('body').append('<span>50000</span>'),
//   description: $('body').append('<p>Cosy, four bedroom house, self contained and quiet neighbourhood.</p>'), 
// }

// var houseThree = {
//   image: $('body').append($('<img src="./images/house3.jpg" width ="400px" height = "400px"></ img>')),
//   name: $('body').append('<p>Muyenga</p>') , 
//   price: $('body').append('<span>50000</span>'),
//   description: $('body').append('<p>Cosy, four bedroom house, self contained and quiet neighbourhood.</p>'), 
// }


// var newArray = [houseOne, houseTwo, houseThree];
// newArray.push(houseFour);
// // list = [];
// // document.querySelector('newArray').innerHTML = list;
// // $('#part').click (function(){
// //   newArray.push('houseFour')
// // });

// $('.icons').show();

// // $('#part').click (function(){
// //     alert('button clicked')
// // });

// $('span').css('color','purple');
// // $('.partners').append('<p>jazz</p>')
// $('.partners').css('line-height','0.5rem');
// $('#part').css('margin','10px');
// // $('body').append($('<img src="./images/house3.jpg" width ="400px" height = "400px"></ img>'));

// import house1 from "./images/house1.jpg"
// const house1 = require("./images/house1.jpg")

$( document ).ready(function() {
  console.log("Shit is ready")
  const houses = [
    {
      name: 'Muyenga',
      // image: house1,
      price: 4000,
      description: 'cosy four bedroom with a kanye west jacuzzi'
    },
    {
      name: 'Muyenga',
      // image: 'ht',
      price: 4000,
      description: 'cosy four bedroom with a kanye west jacuzzi'
    }
  ]
  
  houses.forEach(house=>{
    $("#housesDiv").append(`
    <div class = "houses-container">
      <h3 class="houses-title">${house.name}</h3>
      <image class="houses-image" src="${house.image}"/>
      <p class= "houses-price">${house.price}</p>
      <p class= "houses-desc">${house.description}</p>
    </div>
    `)
  })
});

