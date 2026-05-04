const getImage = document.querySelector("#image");
const getBtnLeft = document.querySelector("#btn-left");
const getBtnRight = document.querySelector("#btn-right");

const reviews = [
    { image: "./assets/images/mv grow+thrive.png" },
    { image: "./assets/images/mv packaging.png" },
    { image: "./assets/images/child.webp" },
    { image: "./assets/images/koa cranberry.png" },
    { image: "./assets/images/mv book.webp" },
    { image: "./assets/images/spill coin.png" },
    { image: "./assets/images/mv stickes.png" },
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