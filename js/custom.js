// instacia jquery e evita conflito
$(document).ready(function(){

    $('.owl-carousel').owlCarousel();

    let titulos = $('h4') // tag

    let item = $('.featured-items') //class

    let destaques = $('#featured') // id

    console.log(titulos.first());

    $('.featured-item a').addClass('btn btn-dark stretch-link');

    $('.featured-item:first h4').append('<span class="badge bg-secondary">Novo</span>');





})
