const swiper = new Swiper('.swiper', {
    autoplay: {
       delay: 3000, 
       disableOnInteraction: false,
    },
  loop: true,
  pagination: {
    el: '.swiper-pagination',
  },

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  effect: "fade",
});


// fetch ("photos.json")
// .then (Response => Response.json())
// .then (data => {
//   const colorBoxes = document.getElementById("colors");
//   let selectedBox = null;

//   data.forEach(colorObject => {
//     const box = document.createElement("button");
//     box.style.backgroundColor = colorObject.color;
//     box.classList.add("colors");

//     box.addEventListener("click", () => {
//       if (selectedBox) {
//         selectedBox.classList.remove("selected");
//       }

//       selectedBox = box;
//       box.classList.add("selected");
//     });
//     colorBoxes.appendChild(box);
//   });

//   document.getElementById("submit-button").addEventListener("click", () => {
//     if (selectedBox) {
//       const colorName = selectedBox.style.backgroundColor;
//       console.log(colorName)
//     }
//   });
// })
// .catch(error => console.error("error fetching data", error));

fetch('photos.json')
      .then(response => response.json())
      .then(data => {
        const imageContainer = document.getElementById('image-container');
        let selectedImage = null; 
    
        data.forEach(imageObj => {
          const image = document.createElement('img');
          image.src = imageObj.url;
          image.classList.add('clickable-image');
          image.style.marginRight = ("10px")
          image.style.cursor = ("pointer")
          image.addEventListener('click', () => {
            if (selectedImage) {
              selectedImage.classList.remove('selected');
            }

            selectedImage = image;
            image.classList.add('selected');
          });
    
          imageContainer.appendChild(image);
        });
    
        // Event listener for the submit button
        document.getElementById('submit-button').addEventListener('click', () => {
          if (selectedImage) {
            const imageUrl = selectedImage.src;
            console.log(imageUrl);
          }
        });
      })
      .catch(error => console.error('Error fetching images.json:', error));

const images = [
  "images/1tyre-img.jpeg",
  "images/2tyre-img.jpeg",
  "images/3tyre-img.jpeg",
  "images/4tyre-img.jpeg",
  "images/5tyre-img.jpeg",
  "images/6tyre-img.jpeg",
  "images/7tyre-img.jpeg",
];
const imageGallery = document.getElementById("image-gallery");

images.forEach((imagePath) => {
  const imageContainer = document.createElement("div");
  imageContainer.classList.add("image");
  imageContainer.style.width = ("100px")
  imageContainer.style.display = ("flex")
  

  const imageElement = document.createElement("img");
  imageElement.src = imagePath;
  imageElement.alt = "Image";

  imageContainer.appendChild(imageElement);
  imageGallery.appendChild(imageContainer);
});

