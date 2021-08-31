var slideNumber = 1;

function showSlide(n) {
    slideNumber = n;

    var i;
    var slides = document.getElementsByClassName("slide-image");
    var dots = document.getElementsByClassName("dot");
    var captions = document.getElementsByClassName("detailed-caption");

    if (n > slides.length)
        slideNumber = 1;

    if (n < 1)
        slideNumber = slides.length;

    for (i = 0; i < slides.length; i++)
        slides[i].style.display = "none";

    for (i = 0; i < dots.length; i++)
        dots[i].className = dots[i].className.replace(" active", "");

    for (i = 0; i < captions.length; i++)
        captions[i].style.display = "none";

    slides[slideNumber - 1].style.display = "block";
    dots[slideNumber - 1].className += " active";
    captions[slideNumber - 1].style.display = "block";
}
