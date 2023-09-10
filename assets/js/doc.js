// Slick Slider1

$('.slick-slider1').slick({
    infinite: false,
    slidesToShow: 3,
    slidesToScroll: 1,
    prevArrow: '.prev',
    nextArrow: '.next',
    responsive: [
        {
            breakpoint: 1400,
            settings: {
                slidesToShow: 2
            }
        },
        {
            breakpoint: 992,
            settings: {
                slidesToShow: 1
            }
        },
        {
            breakpoint: 768,
            settings: {
                dots: true,
                slidesToShow: 1
            }
        },
    ]
});

// Slick Slider2

$('.slick-slider2').slick({
    infinite: false,
    slidesToShow: 2,
    slidesToScroll: 1,
    prevArrow: '.prev2',
    nextArrow: '.next2',
    responsive: [
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 1,
            }
        },
        
    ]
});

// Slick Slider3

$('.slick-slider3').slick({
    infinite: false,
    dots: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    prevArrow: '.prev3',
    nextArrow: '.next3',
    responsive: [
        {
            breakpoint: 1300,
            settings: {
                slidesToShow: 2,
            }
        },
        {
            breakpoint: 850,
            settings: {
                slidesToShow: 1,
            }
        },

    ]
});

