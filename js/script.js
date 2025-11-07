jQuery(function ($) {
  // この中であればWordpressでも「$」が使用可能になる
  // op
  gsap.set('.header', {
    opacity: 0,
    y: -100,
  });

  gsap.set('.mv__slider-wrap', {
    opacity: 0,
  });

  const op = gsap.timeline();

  gsap.set('.mv__text', {
    scale: 0.6,
  });
  // gsap.set('.mv__title', {
  //   scale: 0.4,
  // });

  // テキスト順番に
  op.fromTo(
    '.mv__text .text-right',
    {
      opacity: 0,
      filter: 'blur(10px)',
    },
    {
      opacity: 1,
      filter: 'blur(0px)',
      ease: 'power3.inOut',
      duration: 0.7,
      stagger: 0.2,
    }
  )
    .fromTo(
      '.mv__text .text-left',
      {
        opacity: 0,
        filter: 'blur(10px)',
      },
      {
        opacity: 1,
        filter: 'blur(0px)',
        ease: 'power3.inOut',
        duration: 0.7,
        stagger: 0.2,
      },
      '-=0.4'
    )
    .fromTo(
      '.mv__title',
      {
        scale: 1,
        opacity: 0,
        filter: 'blur(5px)',
      },
      {
        scale: 0.6,
        opacity: 1,
        filter: 'blur(0px)',
        ease: 'power2.inOut',
        duration: 1.8,
      },
      '-=0.7'
    )
    .fromTo(
      '.mv__title-yuge',
      {
        scale: 0.95,
        opacity: 0,
        y: 0,
      },
      {
        scale: 1.1,
        opacity: 1,
        y: -120,
        ease: 'none',
        duration: 1.7,
        stagger: 0.14,
      },
      '-=1.3'
    )
    .to(
      '.mv__title-yuge',
      {
        opacity: 0,
        duration: 1.2,
        stagger: 0.2,
      },
      '-=1.4'
    )
    .to(
      'mv__title , .mv__text',
      {
        opacity: 0,
        duration: 1,
      },
      '-=0.5'
    )
    .fromTo(
      '.mv__main-img',
      {
        scale: 0,
        opacity: 0,
      },
      {
        scale: 1,
        opacity: 1,
        duration: 1.2,
        ease: 'back.out(1.7)',
      },
      '-=0.7'
    )
    .to(
      '.mv__title , .mv__text',
      {
        opacity: 1,
        duration: 1.2,
      },
      '<'
    )
    .to(
      '.mv__title',
      {
        scale: 1,
        duration: 1.2,
        ease: 'back.out(1.7)',
      },
      '<'
    )
    .to(
      '.mv__text',
      {
        scale: 1,
        duration: 1.2,
        ease: 'back.out(1.7)',
      },
      '<'
    )
    .to(
      '.onigiri',
      {
        y: 0,
        x: 0,
        rotate: 0,
        duration: 2,
        ease: 'power3.out',
      },
      '-=1.1'
    )

    .fromTo(
      '.mv__dec',

      {
        opacity: 0,
      },
      {
        opacity: 1,
        duration: 1.5,
        ease: 'power3.inOut',
      },
      '<'
    )
    .to(
      '.mv__slider-wrap',
      {
        opacity: 1,
        duration: 0.8,
        ease: 'power3.inOut',
      },
      '-=1.5'
    )
    .fromTo(
      '.mv__slider--top-wrap',
      {
        clipPath: 'inset(0% 0% 100% 0%)',
        yPercent: 100,
        opacity: 0,
      },
      {
        clipPath: 'inset(0% 0% 0% 0%)',
        yPercent: 0,
        opacity: 1,
        duration: 1.6,
        ease: 'power3.inOut',
      },
      '<'
    )
    .fromTo(
      '.mv__slider--bottom-wrap',
      {
        clipPath: 'inset(100% 0% 0% 0%)',
        yPercent: -100,
        opacity: 0,
      },
      {
        clipPath: 'inset(0% 0% 0% 0%)',
        yPercent: 0,
        opacity: 1,
        duration: 1.6,
        ease: 'power3.inOut',
      },
      '<'
    )
    .to(
      '.header',
      {
        opacity: 1,
        y: 0,
        duration: 1.6,
        ease: 'power3.inOut',
      },
      '<'
    );
});
