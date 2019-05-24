var mySwiper = new Swiper('.swiper-container',{
    loop : true,
    autoplay : true,

    autoplay: {
    delay: 1000,
    stopOnLastSlide: false,
    disableOnInteraction: false,
    },
  })
/*如果只有一个slide就销毁swiper
  if(mySwiper.slides.length<=3){
    mySwiper.destroy();
  }*/