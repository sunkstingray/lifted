var $carousel = $('.carousel').flickity({
        prevNextButtons: false,
        pageDots: false,
        wrapAround: true 
});

// next
$('.button--next').on( 'click', function() {
  $carousel.flickity('next');
});
// previous
$('.button--previous').on( 'click', function() {
  $carousel.flickity( 'previous');
});