$(window).on('scroll', () => {
  if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
    $('header').addClass('header-fixed');
  }else{
    $('header').removeClass('header-fixed');
  }
});

$('.nav a').click(function(e) {
  e.preventDefault();
  const target = $(this).attr('href');
  window.scrollTo(0,$(target).offset().top-60);
})

const partnerInner = document.getElementById('partners');

const partnerScroll = (type) => {
  if (type === 'left') {
    partnerInner.scrollBy(-660,0);
  } else if (type === 'right') {
    partnerInner.scrollBy(660,0);
  }
}

let partnerScrollInterval = setInterval(() => {
  setTimeout(() => {
    if (partnerInner.scrollLeft <= 600) {
      partnerScroll('right');
    } else {
      partnerScroll('left');
    }
    console.log(partnerInner.scrollLeft)
  }, 500);
}, 5000);
