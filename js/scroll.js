$(window).on('scroll', () => {
  if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
    $('header').addClass('header-fixed');
  }else{
    $('header').removeClass('header-fixed');
  }
});

$('nav a').click(function(e) {
  e.preventDefault();
  const target = $(this).attr('href');
  window.scrollTo(0,$(target).offset().top-60);
})
