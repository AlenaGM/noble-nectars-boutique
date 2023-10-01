/* eslint-disable no-undef */
window.addEventListener("DOMContentLoaded", () => {
  anim();

  // eslint-disable-next-line no-undef
  //const swiper = new Swiper(".swiper", {
  //  loop: true,
  //  autoplay: {
  //    delay: 2000,
  //    disableOnInteraction: false,
  //  },
  //  breakpoints: {
  //    320: {
  //      slidesPerView: 1.1,
  //      spaceBetween: 20,
  //      centeredSlides: false,
  //    },
  //    450: {
  //      slidesPerView: 1.4,
  //      spaceBetween: 30,
  //      centeredSlides: true,
  //      initialSlide: 1,
  //    },
  //  },
  //});
});

function anim() {
  const mediaAnimation = gsap.matchMedia();

  // Header, preview image & promo title animation
  mediaAnimation.add("(min-width: 1025px)", () => {
    gsap.set(".header", {
      height: "100vh",
    });

    gsap.set(".preview__bg", {
      yPercent: 10,
      scale: 1.2,
    });

    const tlHeader = gsap.timeline({
      onComplete: () => {
        ScrollTrigger.refresh();
      },
    });

    tlHeader
      .from(".header__logo img", {
        duration: 0.7,
        autoAlpha: 0,
        yPercent: -100,
        stagger: 0.2,
      })
      .to(".header", {
        duration: 0.8,
        height: "auto",
        delay: 0.3,
      })
      .to(
        ".header__logo",
        {
          duration: 0.8,
          scale: 1,
        },
        "<"
      )
      .from(
        ".preview",
        {
          duration: 1.3,
          autoAlpha: 0,
        },
        "<"
      )
      .from(
        ".promo__title",
        {
          duration: 1,
          autoAlpha: 0,
          yPercent: 50,
        },
        "-=0.7"
      );

    gsap.to(".preview__bg", {
      yPercent: -10,
      scrollTrigger: {
        trigger: ".preview",
        start: "top 150px",
        end: "bottom top",
        scrub: 1,
      },
    });

    gsap.set(".promo__title", {
      opacity: 1,
    });

    // Promo section animation
    const tlPromoTitle = gsap.timeline({
      scrollTrigger: {
        trigger: ".promo__info",
        start: "top 80%",
        end: "top 40%",
        scrub: true,
      },
    });

    tlPromoTitle
      .to(".promo__title", {
        opacity: 0.1,
      })
      .from(
        ".promo__info",
        {
          opacity: 0.1,
        },
        "<"
      )
      .from(
        ".promo__img",
        {
          opacity: 0.1,
        },
        "<"
      );

    gsap.set(".promo__left-inner", {
      yPercent: 120,
    });

    const tlPromo = gsap.timeline({
      scrollTrigger: {
        trigger: ".promo__wrapper",
        start: "top top",
        end: "bottom+=100%",
        scrub: true,
        pin: true,
      },
    });

    tlPromo
      .to(".promo__left-inner", {
        yPercent: 0,
      })
      .to(
        ".promo__img",
        {
          y: "-100vh",
        },
        "<"
      );

    // Features, country, tradition and story titles fade-away
    const opacityTitles = document.querySelectorAll(".opacity-title");

    opacityTitles.forEach((item) => {
      gsap.set(item, {
        opacity: 1,
      });

      gsap.to(item, {
        opacity: 0.1,
        scrollTrigger: {
          trigger: item,
          start: "top 15%",
          end: "bottom 10%",
          scrub: true,
          markers: true,
        },
      });
    });

    // Features section animation
    tlFeatures = gsap.timeline({
      scrollTrigger: {
        trigger: ".features__wrapper",
        start: "top 85%",
        end: "top 40%",
        scrub: true,
      },
    });

    tlFeatures.from(
      ".features__item",
      {
        opacity: 0.1,
        yPercent: "random([20, 30, 40])",
        stagger: {
          from: "center",
          each: 0.1,
        },
      },
      "<"
    );

    // Tradition section animation
    gsap.set(".tradition", {
      background: "#100F0D",
    });

    gsap.set(".tradition__title", {
      color: "#EDEAE2",
    });

    const tlBg = gsap.timeline({
      scrollTrigger: {
        trigger: ".tradition",
        start: "top 50%",
        end: "bottom 50%",
        duration: 0.7,
        toggleActions: "play reverse play reverse",
      },
    });

    tlBg
      .to("body", {
        background: "#EDEAE2",
      })
      .to(
        ".features__name",
        {
          color: "#BB9930",
        },
        "<"
      )
      .to(
        ".tradition",
        {
          background: "#EDEAE2",
        },
        "<"
      )
      .to(
        ".tradition__title",
        {
          color: "#BB9930",
        },
        "<"
      );

    gsap.set(".parallax img", {
      scale: 1.3,
      yPercent: 15,
    });

    const parallaxBlocks = document.querySelectorAll(".parallax");

    parallaxBlocks.forEach((block) => {
      const img = block.querySelector("img");

      gsap.to(img, {
        yPercent: -15,
        scrollTrigger: {
          trigger: block,
          start: "top 80%",
          end: "bottom 20%",
          scrub: 1,
        },
      });
    });

    const tlCountry = gsap.timeline({
      scrollTrigger: {
        trigger: ".country__right",
        start: "bottom 80%",
        end: "bottom 10%",
        scrub: true,
      },
    });

    tlCountry.from(
      ".country__right",
      {
        opacity: 0.1,
      },
      "<"
    );

    gsap.set(".story", {
      background: "#100F0D",
    });

    gsap.set(".story", {
      background: "#100F0D",
    });

    gsap.set(".story__title", {
      color: "#EDEAE2",
    });

    const tlStory = gsap.timeline({
      scrollTrigger: {
        trigger: ".story",
        start: "top 50%",
        end: "bottom 50%",
        duration: 0.7,
        toggleActions: "play reverse play reverse",
      },
    });

    tlStory
      .to("body", {
        background: "#EDEAE2",
      })
      .to(
        ".country__right",
        {
          color: "#100F0D",
        },
        "<"
      )
      .to(
        ".story",
        {
          background: "#EDEAE2",
        },
        "<"
      )
      .to(
        ".story__title",
        {
          color: "#BB9930",
        },
        "<"
      );

    const tlFooter = gsap.timeline({
      scrollTrigger: {
        trigger: ".footer",
        start: "90% bottom",
      },
    });

    tlFooter
      .from(".footer__bottom", {
        autoAlpha: 0,
      })
      .from(".footer__logo", {
        autoAlpha: 0,
        scale: 0.6,
        ease: "bounce.out",
      });
  });

  mediaAnimation.add("(max-width: 1024px)", () => {
    //Header, preview image & promo title animation
    gsap.set(".header", {
      height: "100vh",
    });

    gsap.set(".preview__bg", {
      yPercent: 10,
      scale: 1.2,
    });

    const tlHeader = gsap.timeline({
      onComplete: () => {
        ScrollTrigger.refresh();
      },
    });

    tlHeader
      .from(".header__logo img", {
        duration: 0.7,
        autoAlpha: 0,
        yPercent: -100,
        stagger: 0.2,
      })
      .to(".header", {
        duration: 0.8,
        height: "auto",
        delay: 0.3,
      })
      .from(
        ".preview",
        {
          autoAlpha: 0,
          duration: 1.3,
        },
        "<"
      )
      .from(
        ".promo__title",
        {
          duration: 1,
          yPercent: 50,
          autoAlpha: 0,
        },
        "-=0.7"
      );

    gsap.set(".promo__title", {
      opacity: 1,
    });

    gsap.to(".preview__bg", {
      yPercent: -10,
      scrollTrigger: {
        trigger: ".preview",
        start: "top 150px",
        end: "bottom top",
        scrub: 1,
      },
    });

    // Promo section animation
    const tlPromoTitle = gsap.timeline({
      scrollTrigger: {
        trigger: ".promo__info",
        start: "top 80%",
        end: "top 40%",
        scrub: true,
      },
    });

    tlPromoTitle
      .to(".promo__title", {
        opacity: 0.1,
      })
      .from(
        ".promo__info",
        {
          opacity: 0.1,
        },
        "<"
      );

    // Features and country titles animation
    const opacityTitles = document.querySelectorAll(".opacity-title");

    opacityTitles.forEach((item) => {
      gsap.set(item, {
        opacity: 1,
      });

      gsap.to(item, {
        opacity: 0.1,
        scrollTrigger: {
          trigger: item,
          start: "top 40%%",
          end: "bottom 10%",
          scrub: true,
          markers: true,
        },
      });
    });

    // Features section animation
    const items = document.querySelectorAll(".features__item");

    items.forEach((item) => {
      gsap.from(item, {
        opacity: 0.1,
        scrollTrigger: {
          trigger: item,
          start: "top 90%",
          end: "bottom 80%",
          scrub: true,
        },
      });
    });

    // Tradition section animation
    gsap.set(".tradition", {
      background: "#100F0D",
    });

    gsap.set(".tradition__title", {
      color: "#EDEAE2",
    });

    const tlBg = gsap.timeline({
      scrollTrigger: {
        trigger: ".tradition",
        start: "top 35%",
        end: "90% bottom",
        duration: 0.7,
        toggleActions: "play reverse play reverse",
      },
    });

    tlBg
      .to("body", {
        background: "#EDEAE2",
      })
      .to(
        ".features__name",
        {
          color: "#BB9930",
        },
        "<"
      )
      .to(
        ".tradition",
        {
          background: "#EDEAE2",
        },
        "<"
      )
      .to(
        ".tradition__title",
        {
          color: "#BB9930",
        },
        "<"
      );

    gsap.set(".parallax img", {
      scale: 1.3,
      yPercent: 15,
    });

    const parallaxBlocks = document.querySelectorAll(".parallax");

    parallaxBlocks.forEach((block) => {
      const img = block.querySelector("img");

      gsap.to(img, {
        yPercent: -15,
        scrollTrigger: {
          trigger: block,
          start: "top 80%",
          end: "bottom 20%",
          scrub: 1,
        },
      });
    });

    const tlCountry = gsap.timeline({
      scrollTrigger: {
        trigger: ".country__right",
        start: "top 40%",
        end: "top 5%",
        scrub: true,
      },
      onComplete: () => {
        ScrollTrigger.refresh();
      },
    });

    tlCountry
      .to(".country__title", {
        opacity: 0.1,
      })
      .from(
        ".country__right",
        {
          opacity: 0.1,
        },
        "<"
      );

    gsap.set(".story", {
      background: "#100F0D",
    });

    gsap.set(".story", {
      background: "#100F0D",
    });

    gsap.set(".story__title", {
      color: "#EDEAE2",
    });

    const tlStory = gsap.timeline({
      scrollTrigger: {
        trigger: ".story",
        start: "top 50%",
        end: "bottom 50%",
        duration: 0.7,
        toggleActions: "play reverse play reverse",
      },
    });

    tlStory
      .to("body", {
        background: "#EDEAE2",
      })
      .to(
        ".country__right",
        {
          color: "#100F0D",
        },
        "<"
      )
      .to(
        ".story",
        {
          background: "#EDEAE2",
        },
        "<"
      )
      .to(
        ".story__title",
        {
          color: "#BB9930",
        },
        "<"
      );

    const tlFooter = gsap.timeline({
      scrollTrigger: {
        trigger: ".footer",
        start: "90% bottom",
      },
    });

    tlFooter
      .from(".footer__bottom", {
        autoAlpha: 0,
      })
      .from(".footer__logo", {
        autoAlpha: 0,
        scale: 0.6,
        ease: "bounce.out",
      });
  });
}
