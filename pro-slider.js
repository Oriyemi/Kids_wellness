const getImage = document.querySelector("#image");
const getBtnLeft = document.querySelector("#btn-left");
const getBtnRight = document.querySelector("#btn-right");

const reviews = [
    { image: "./assets/images/tummy starter.jpg", alt: "grow" },
    { image: "./assets/images/prob packaging.webp", alt: "pack" },
    { image: "./assets/images/girl sachet.webp", alt: "child" },
    { image: "./assets/images/prob flower.webp", alt: "berry" },
    { image: "./assets/images/prob book.webp", alt: "book" },
    { image: "./assets/images/prob spill.webp", alt: "coin" },
    { image: "./assets/images/sticker.png", alt: "sticker" },
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