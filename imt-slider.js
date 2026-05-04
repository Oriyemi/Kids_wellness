const getImage = document.querySelector("#image");
const getBtnLeft = document.querySelector("#btn-left");
const getBtnRight = document.querySelector("#btn-right");

const reviews = [
    { image: "./assets/images/boost starter.jpg" },
    { image: "./assets/images/boost packaging.webp" },
    { image: "./assets/images/boost child.webp" },
    { image: "./assets/images/boost flavour.webp" },
    { image: "./assets/images/boost book.webp" },
    { image: "./assets/images/boost coin.webp" },
    { image: "./assets/images/boost stickers.webp" },
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