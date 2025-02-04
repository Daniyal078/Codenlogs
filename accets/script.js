$('.autoplay').slick({
    arrows: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    verticalSwiping: true,
    vertical: true,
    dots: true,
});

$('.responsive').slick({
    dots: true,
    infinite: false,
    arrows: false,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                infinite: true,
                dots: true
            }
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }
        // You can unslick at a given breakpoint now by adding:
        // settings: "unslick"
        // instead of a settings object
    ]
});

document.querySelector('.side-nav-tog').addEventListener('click', () => {
    document.querySelector('.side-nav').style.left = 0
})
document.querySelector('.side-nav-close').addEventListener('click', () => {
    document.querySelector('.side-nav').style.left = "-100%"
})