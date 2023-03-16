const photo = document.querySelector('.photo-ring')
const photoOne = document.querySelector('.photo-ring-one')
const photoTwo = document.querySelector('.photo-ring-two')

photoOne.addEventListener('click', changePhoto=()=>{
    photoOne.style.opacity = "100%";
    photoOne.style.zIndex= "3";
    photo.style.opacity = "70%";
    photo.style.zIndex= "2";
    photoTwo.style.opacity = "70%";
    photoTwo.style.zIndex= "1";
    
});

photo.addEventListener('click', changePhoto=()=>{
    photoOne.style.opacity = "70%";
    photoOne.style.zIndex= "2";
    photo.style.opacity = "100%";
    photo.style.zIndex= "3";
    photoTwo.style.opacity = "70%";
    photoTwo.style.zIndex= "1";
    
    
});

photoTwo.addEventListener('click', changePhoto=()=>{
    photoOne.style.opacity = "70%";
    photoOne.style.zIndex= "1";
    photo.style.opacity = "70%";
    photo.style.zIndex= "2";
    photoTwo.style.opacity = "100%";
    photoTwo.style.zIndex= "3";

});
