export const homeObjOne = {
  lightBg: false,
  primary: true,
  imgStart: "",
  lightTopLine: true,
  lightText: true,
  lightTextDesc: true,
  buttonLabel: "Tìm kiếm",
  description:
    "Chúng tôi là nơi cung cấp cho bạn thông tin về những nhà trọ tốt nhất và là nơi bạn có thể đăng tin về nhà trọ của mình.",
  headline: "Tìm căn nhà trọ mong ước của bạn",
  topLine: "Margeting Agency",
  start: '',
  img: require('../../assets/img/svg-4.svg').default,
  alt: "Image",
  first: true
};

export const homeObjTwo = {
    lightBg: true,
    primary: false,
    imgStart: "start",
    lightTopLine: false,
    lightText: false,
    lightTextDesc: false,
    buttonLabel: "Get Started",
    description:
      "We have business owners increase their revenue. Our team of unique specialist can help you acheive your business goals.",
    headline: "Những căn nhà trọ tốt nhất",
    topLine: "Margeting Agency",
    start: 'true',
    img: require('../../assets/img/info-1.jpg').default,
    alt: "Image",
    first: false
  };

  export const homeObjThree = {
    lightBg: false,
    primary: true,
    imgStart: "",
    lightTopLine: true,
    lightText: true,
    lightTextDesc: true,
    buttonLabel: "Get Started",
    description:
      "We have business owners increase their revenue. Our team of unique specialist can help you acheive your business goals.",
    headline: "Lead Generation Specialist for Online Businesses",
    topLine: "Margeting Agency",
    start: '',
    img: require('../../assets/img/svg-2.svg').default,
    alt: "Image",
  };

  

  export const homeObjFour = {
    lightBg: false,
    primary: true,
    imgStart: "",
    lightTopLine: true,
    lightText: true,
    lightTextDesc: true,
    buttonLabel: "Get Started",
    description:
      "The best place for elit, sed do eiusmod tempor dolor sit amet, conse ctetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et lorna aliquatd minimam, quis nostrud exercitation oris nisi ut aliquip ex ea.",
    headline: "Lead Generation Specialist for Online Businesses",
    topLine: "Welcome to Find House",
    start: 'true',
    img: require('../../assets/img/projects/welcome.jpg').default,
    alt: "Image",
  };

  // welcome section

  export const homeObjFive = {
    lightBg: true,
    primary: true,
    imgStart: "",
    lightTopLine: false,
    lightText: false,
    lightTextDesc: false,
    buttonLabel: "Get Started",
    description:
      "The best place for elit, sed do eiusmod tempor dolor sit amet, conse ctetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et lorna aliquatd minimam, quis nostrud exercitation oris nisi ut aliquip ex ea.",
    headline: "The best place to find the house you want.",
    topLine: "Welcome to ",
    start: 'true',
    img: require('../../assets/img/projects/welcome.jpg').default,
    alt: "Image",
  };

  export const list = {
    time: "recently",
  }

  export const listOne = {
    time: "featured",
  }

  export const settingForCarousel = {
    settings: {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 3,
      autoplay: true,
      autoplaySpeed: 3000,
      responsive: [
        {
          breakpoint: 1200,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 992,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        },
        {
          breakpoint: 576,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
        // You can unslick at a given breakpoint now by adding:
        // settings: "unslick"
        // instead of a settings object
      ]
    }
  }
