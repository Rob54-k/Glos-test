$(document).ready(function(){
  let notes = items.slice(0, 5);
  getItem(notes);
    $('.menu-main-item > span').on('click',function() {
        if ($(this).parent().find('ul').length) {
          $(this).toggleClass('menu-active');
          $(this).parent().find('ul').slideToggle(); 
        }
      });
    $('.header-content__number span').on('click',function(){
      $('.navbar').toggleClass('navbar-active');
    });
    $('.header-content__number span').on('click',function(){
      $('.header-content__number span').toggleClass('span-active');
    });

    // Работа с модальным окном
    $("#tel").mask("8(999) 999-9999");
    $('.call-back').on('click',function(e){
      $('.modal__body').offset({top:e.target.offsetTop + 170});
      $('.modal').fadeIn(500).show(400);
    });
    $('.button-callback').on('click',function(e){
      $('.modal__body').offset({top:e.target.offsetTop - 350});
      $('.modal').fadeIn(500).show();
    });
    $('.close-modal').on('click',function(){
      $('.modal__body').offset({top: 0});
      $('.modal').fadeOut().hide();
    });

    //Проверка на пустые поля
    $('.modal__button button').on('click', function(){
      $( ".input_item" ).each(function() {
       if ($( this ).val().length == 0) {
          $(this).addClass('empty');
          $(this).removeClass('ready');
          $(this).parent().find('span').show();
       } else {
         $(this).removeClass('empty')
         $(this).addClass('ready');
         $(this).parent().find('span').hide();
       }
      });
      if($( ".ready" ).length == 3){
        $('.input_item').val('');
        $('.textarea_item').val('');
        alert('Форма отправлена')
       }
      
    });
    
}); 

var items =[
  {id:1,name:'1Самый клевый чайник, который надо купить!',price: '1 900 р.',img:'catalog-image.png',imgBasket:'addtobasket_mini.png'},
  {id:2,name:'2Самый клевый чайник, который надо купить!',price: '1 900 р.',img:'catalog-image.png',imgBasket:'addtobasket_mini.png'},
  {id:3,name:'3Самый клевый чайник, который надо купить!',price: '1 900 р.',img:'catalog-image.png',imgBasket:'addtobasket_mini.png'},
  {id:4,name:'4Самый клевый чайник, который надо купить!',price: '1 900 р.',img:'catalog-image.png',imgBasket:'addtobasket_mini.png'},
  {id:5,name:'5Самый клевый чайник, который надо купить!',price: '1 900 р.',img:'catalog-image.png',imgBasket:'addtobasket_mini.png'},
  {id:6,name:'6Самый клевый чайник, который надо купить!',price: '1 900 р.',img:'catalog-image.png',imgBasket:'addtobasket_mini.png'},
  {id:7,name:'7Самый клевый чайник, который надо купить!',price: '1 900 р.',img:'catalog-image.png',imgBasket:'addtobasket_mini.png'},
  {id:8,name:'8Самый клевый чайник, который надо купить!',price: '1 900 р.',img:'catalog-image.png',imgBasket:'addtobasket_mini.png'},
  {id:9,name:'9Самый клевый чайник, который надо купить!',price: '1 900 р.',img:'catalog-image.png',imgBasket:'addtobasket_mini.png'},
  {id:10,name:'10Самый клевый чайник, который надо купить!',price: '1 900 р.',img:'catalog-image.png',imgBasket:'addtobasket_mini.png'},
  {id:11,name:'11Самый клевый чайник, который надо купить!',price: '1 900 р.',img:'catalog-image.png',imgBasket:'addtobasket_mini.png'},
  {id:12,name:'12Самый клевый чайник, который надо купить!',price: '1 900 р.',img:'catalog-image.png',imgBasket:'addtobasket_mini.png'},
  {id:13,name:'13Самый клевый чайник, который надо купить!',price: '1 900 р.',img:'catalog-image.png',imgBasket:'addtobasket_mini.png'},
  {id:14,name:'14Самый клевый чайник, который надо купить!',price: '1 900 р.',img:'catalog-image.png',imgBasket:'addtobasket_mini.png'},
  {id:15,name:'15Самый клевый чайник, который надо купить!',price: '1 900 р.',img:'catalog-image.png',imgBasket:'addtobasket_mini.png'},
  {id:16,name:'16Самый клевый чайник, который надо купить!',price: '1 900 р.',img:'catalog-image.png',imgBasket:'addtobasket_mini.png'},
  {id:17,name:'17Самый клевый чайник, который надо купить!',price: '1 900 р.',img:'catalog-image.png',imgBasket:'addtobasket_mini.png'},
  {id:18,name:'18Самый клевый чайник, который надо купить!',price: '1 900 р.',img:'catalog-image.png',imgBasket:'addtobasket_mini.png'},
  {id:19,name:'19Самый клевый чайник, который надо купить!',price: '1 900 р.',img:'catalog-image.png',imgBasket:'addtobasket_mini.png'},
  {id:20,name:'20Самый клевый чайник, который надо купить!',price: '1 900 р.',img:'catalog-image.png',imgBasket:'addtobasket_mini.png'},
  {id:21,name:'21Самый клевый чайник, который надо купить!',price: '1 900 р.',img:'catalog-image.png',imgBasket:'addtobasket_mini.png'},
  {id:22,name:'22Самый клевый чайник, который надо купить!',price: '1 900 р.',img:'catalog-image.png',imgBasket:'addtobasket_mini.png'},
  {id:23,name:'23Самый клевый чайник, который надо купить!',price: '1 900 р.',img:'catalog-image.png',imgBasket:'addtobasket_mini.png'},
  {id:24,name:'24Самый клевый чайник, который надо купить!',price: '1 900 р.',img:'catalog-image.png',imgBasket:'addtobasket_mini.png'}
];

//Работа с блоком каталога
let listUl = $('#pagination');
let noteOnPage = 5;

for (let i=1; i<=Math.ceil(items.length/noteOnPage);i++){
  var listLi= $('<li></li>').text(i).appendTo(listUl);
}; 
$(listUl).find('li').first().addClass('li-active')




$('#pagination li').on('click',function(){
  $('html').animate({scrollTop: $('.catalog').offset().top}, 500);
  $('#pagination li.li-active').removeClass();
  $(this).addClass('li-active');
  let pageNum = parseInt($(this).text());
  let start = (pageNum - 1)* noteOnPage;
  let end = start + noteOnPage;
  let notes = items.slice(start, end);
  getItem(notes);
});


function getItem(notes){
  $('.catalog__items').empty();
  var out = '';
  for (var note in notes){
    out += '<div class="catalog__item" >';
    out += '<div class="catalog__header">';
    out += '<div class="catalog__image">';
    out += `<img src="/image/catalog/${notes[note].img}" alt="">`;
    out += '</div>';
    out += '</div>';
    out += `<div class="catalog__description">${notes[note].name}</div>`;
    out += '<div class="catalog__footer">';
    out += `<div class="catalog__price">${notes[note].price}</div>`;
    out += `<div class="catalog__basket" data-id="${notes[note].id}"><img src="/image/catalog/${notes[note].imgBasket}" alt=""></div>`;
    out += '</div>';
    out += '</div>';
  }
  $('.catalog__items').html(out);
  $('.catalog__basket').on('click',function () {
    let itemId = $(this).attr('data-id');
    alert(`Това с id=${itemId} добавлен в корзину`)
  });
};
  
