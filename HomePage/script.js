// Define the Image class
class Image {
    constructor(imageSrc, description, citeSrc = '') {
        this.imgSrc = imageSrc;
        this.description = description;
        this.citation = `${citeSrc}`;
    }

    getFormattedHTML() {
        const div = document.createElement('div');
        const img = document.createElement('img');
        const caption = document.createElement('div');
        const description = document.createElement('p');
        const citation = document.createElement('p');
        description.textContent = this.description;
        citation.textContent = this.citation;

        caption.appendChild(description);
        caption.appendChild(citation);
        caption.className = 'imageCaption';

        img.src = this.imgSrc;
        div.appendChild(img);
        div.appendChild(caption);
        div.className = 'imageCard';

        return div;
    }
}

// Create an array of images
const images = [
    new Image('AMGGT.png', 'AMG GT Black Series', 'Road & Track'),
    new Image('C7.png', 'C7 GT3-R', 'Registry of Corvette Race Cars'),
    new Image('m4GT3.png', 'BMW M4 GT3', "Auto Addiction"),
    new Image('z3.png', 'BMW Z3 GT3', 'BMW Blog'),
    new Image('650s.png', 'McLaren 650s GT3', 'Sportscar Racing News'),
    new Image('296Ferrari.png', "Ferrari 296 GT3", "Top Gear"),
    new Image('PorscheVsSupra.png', "Porsche 911-R GT3 vs Toyota Supra GT3", "Daily Sport Car"),
    new Image('R8LMS.png', "Audi R8 LMS GT3", "Road and Track"),
    new Image('VantageGT3.png', "Aston Martin Vantage GT3", "Race Department"),
    new Image('HuracanGT3.png', "Lamborghini Huracan GT3 EVO II", "Lamborghini"),
];

const albumDiv = document.getElementById('album');
// Apply sortable to albumDiv
new Sortable(albumDiv, {
    animation: 400,
    ghostClass: 'sortable-ghost',
    onChoose: (evt) => {
        canChangeHover = false;
    },
    onUnchoose: (evt) => {
        canChangeHover = true;
    }
});

// Sorting functions
function sortRandomly(array) {
    // Inspiration for randomization: https://www.geeksforgeeks.org/how-to-shuffle-an-array-using-javascript/#
    array.sort(() => Math.random() - 0.5);
    updateListOnSort();
}

function sortBySource(array) {
    array.sort((image1, image2) => image1.citation.localeCompare(image2.citation));
    updateListOnSort();
}

function sortByFileName(array) {
    array.sort((image1, image2) => image1.imgSrc.localeCompare(image2.imgSrc));
    updateListOnSort();
}

function updateListOnSort() {
    albumDiv.innerHTML = "";
    images.forEach((image) => {
        var imageCard = image.getFormattedHTML();
        // Add events for hovering
        imageCard.addEventListener("mouseover", hoverAdd, false);
        imageCard.addEventListener("mouseout", hoverRemove, false);

        var addDiv = document.createElement('div');
        addDiv.appendChild(imageCard);

        albumDiv.appendChild(addDiv);
    });
}

// Hover events
var canChangeHover = true;
hoverAdd = function (event) {
    if (canChangeHover && !event.target.classList.contains("hovered"))
        event.target.classList.add("hovered");
}

hoverRemove = function (event) {
    if (canChangeHover && event.target.classList.contains("hovered"))
        event.target.classList.remove("hovered");
}

// Activate buttons
var randomBtn = document.getElementById("randomBtn");
var fileNameBtn = document.getElementById("fileNameBtn");
var sourceBtn = document.getElementById("sourceBtn");

randomBtn.addEventListener("click", () => sortRandomly(images), false);
fileNameBtn.addEventListener("click", () => sortByFileName(images), false);
sourceBtn.addEventListener("click", () => sortBySource(images), false);


// Randomize on page startup
sortRandomly(images);


