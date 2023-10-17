var images = [];
// Image class
function Image(imageSrc, desc, citeSrc) {
    this.imgSrc = imageSrc;
    this.description = desc;
    this.citation = "Source: " + citeSrc;
    this.getFormattedHTML = function () {
        var div = document.createElement('div');
        var img = document.createElement('img');
        var caption = document.createElement('div');
        var description = document.createElement('p');
        var citation = document.createElement('p');
        var descTxt = document.createTextNode(this.description);
        var citeTxt = document.createTextNode(this.citation);

        // Attach the caption text to its elements
        description.appendChild(descTxt);
        citation.appendChild(citeTxt);
        caption.appendChild(description);
        caption.appendChild(citation);
        caption.className = "imageCaption";

        // Update the image source
        img.src = this.imgSrc;

        div.appendChild(img);
        div.appendChild(caption);

        div.className = "imageCard";

        return div;
    }
}


// Create an image
images.push(new Image(
    "car.jpg",
    "Hello, World!",
    "Google.com"
));

images.push(new Image(
    "",
    "This is a concept of the home page",
    "Derek Costello"
));

for(let i = 0; i < 8; i++) {
    images.push(new Image(
        "",
        "Test" + i,
        "Test" + i
    ))
}

const albumDiv = document.getElementById("album");
for(let index in images) {
    albumDiv.appendChild(images[index].getFormattedHTML());
}


// NOTES FOR DRAG AND DROP:

// NOTES FOR HOVERING:
//  mouseover: object.class = hoveredCard (changes to larger size)
//  bool isHovering == true -> if(!hoveredCard) { object.class = shrinkCard };
//      Need to learn how to set the transition (probably at class declaration)
//  bool isHovering == false -> object.class = imageCard;