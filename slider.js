const getImage = document.querySelector("#image");
const getBtnLeft = document.querySelector("#btn-left");
const getBtnRight = document.querySelector("#btn-right");

const reviews = [
    {
        image: "./assets/images/slide2.png",
    },
    {
        image: "./assets/images/slide3.png",
    },
    {
        image: "./assets/images/slide4.jpg",
    },
    {
        image: "./assets/images/sticker.png",
    },
    {
        image: "./assets/images/lunch.jpg",
    },
    {
        image: "./assets/images/imgi_19_HoldingBottles.png",
    },
    {
        image: "./assets/images/imgi_17_packaging-contents-ES.png",
    },
    {
        image: "./assets/images/tummy-time.png",
    },
];
let currentId = 0;
function showReviews(id) {
    const review = reviews[id]
    getImage.src = review.image

}
getBtnLeft.addEventListener("click", () => {
    currentId++ 
    if (currentId > reviews.length - 1) {
        currentId = 0;
    }
    showReviews(currentId)
   
})
getBtnRight.addEventListener("click", () => {
    currentId--
    if (currentId < 0) {
        currentId = reviews.length - 1;
       

    }
    showReviews(currentId)
});