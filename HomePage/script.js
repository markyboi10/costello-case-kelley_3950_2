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
var image = new Image(
    "car.jpg",
    "Hello, World!",
    "Google.com"
);

var image2 = new Image(
    "Home page concept.png",
    "This is a concept of the home page",
    "Derek Costello"
)

document.body.appendChild(image.getFormattedHTML());
document.body.appendChild(image2.getFormattedHTML());