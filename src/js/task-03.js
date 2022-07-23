const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];

const imagesContainer = document.querySelector(".gallery");

// const creatListOfImages = images.map(function (image) {
//   const newItem = document.createElement("li");
//   const newImage = document.createElement('img');
//   newItem.append(newImage);
//   newImage.alt = image.alt;
//   newImage.src = image.url;

//   return newItem;
// })
//   .join(""); 
// console.log(creatListOfImages);
  
// imagesContainer.insertAdjacentHTML("afterbegin", creatListOfImages); 

// console.log(imagesContainer);

const newimages = images.map((image) => 
  (`<li class = images__item> ${newimages.alt = image.alt}</li>)`)

)
imagesContainer.insertAdjacentHTML("afterbegin", newimages);  

// const newimages = images.map((image) => 
//   `<li class = images__item> ${ images.map(function (image) {
//   const newImage = document.createElement('img');
//   newImage.alt = image.alt;
//   newImage.src = image.url;

//   return newImage;
// })} </li>).join("");`

// )
// imagesContainer.insertAdjacentHTML("afterbegin", newimages);  

