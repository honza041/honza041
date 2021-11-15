$("#btn1").hover(function () {
    $(this).find("img").attr("src", "./img/facebook-white.svg");
    },
    function () {
    $(this).find("img").attr("src", "./img/facebook-black.svg");
    });

    $("#btn2").hover(function () {
    $(this).find("img").attr("src", "./img/twitter-white.svg");
    },
    function () {
    $(this).find("img").attr("src", "./img/twitter-black.svg");
    });

    $("#btn3").hover(function () {
    $(this).find("img").attr("src", "./img/share-white.svg");
    },
    function () {
    $(this).find("img").attr("src", "./img/share-black.svg");
    });


    $('.slider').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,

        arrows:true,
        nextArrow:'.arrow-next',
        prevArrow:false,

        responsive: [
        {
        breakpoint: 1200,
        settings: {
            slidesToShow: 2,
            
           
        }
        },
        {
        breakpoint: 500,
        settings: {
            slidesToShow: 1
      }
    }
    
  ]


});