$(function(){

  //topへスクロールするボタンが60pxスクロール後にfadeIn
  $(window).scroll(function(){
    const windowHeight = $(this).scrollTop();
    if(windowHeight > 200){
      $('.button').fadeIn();
    } else {
      $('.button').fadeOut();
    }
  });

  //loadした時も、scrollTopに応じて出現
  $(window).load(function(){
    const windowHeight = $(this).scrollTop();
    if(windowHeight > 200){
      $('.button').show();
    } else {
      $('.button').hide();
    }
  });

  //.buttonをクリックした時に#topに戻るアニメーション
  $('.button').click(function(){
    $('html,body').animate({'scrollTop':0},500);
    return false;
  });

  //ハンバーガーメニューをクリックしたらナビゲーションが現れる
  var dis = 200;

  $('.fa-bars').click(function(){
    $('nav').animate({'margin-right': '+=' + dis + 'px'},200);
    //全ての要素をずらす
    $('#wrap').children().not('nav').animate({'margin-left': '-=' + dis + 'px'},200);
    //ナビゲーションが開いている時アイコンをバツ、閉じている時戻す
    if(dis == -200) {
      $(this).removeClass('fa-times').addClass('fa-bars');
    } else {
      $(this).removeClass('fa-bars').addClass('fa-times');
    }

    dis *= -1;
  });

  //resizeした時navを閉じる
  $(window).resize(function() {
    if(dis == -200) {
      $('nav').css('margin-right','-200px');
      $('#wrap').children().not('nav').css('margin-left', 0);
      $('.fa-times').removeClass('fa-times').addClass('fa-bars');
      dis *= -1;
    }

  });



  //スムーススクロール
  $('nav a[href^="#"]').click(function(){
    var position = $($(this).attr("href")).offset().top;
    position -= 60;
    $('body, html').animate({'scrollTop': position},500);
    //navを閉じる
    $('nav').animate({'margin-right': '+=' + dis + 'px'},200);
    //全ての要素をずらす
    $('#wrap').children().not('nav').animate({'margin-left': '-=' + dis + 'px'},200);
    //アイコンを戻す
    $('.fa-times').removeClass('fa-times').addClass('fa-bars');
    dis *= -1;

    return false;
  });


  //#hero-headerをクリックしたら#accessへ飛ぶのを防ぐ
  $('#hero-header').click(function(){
    return false;
  });

  //スライドショー
  $('.slider').slick({
    autoplay:true,
    autoplaySpeed:3000,
    slidesToShow: 2,
    slidesToScroll: 1,
    centerMode:true,
    centerPadding: '110px',
    arrows: true,
    initialSlide: 1,

    //レスポンシブの動作
    responsive: [
      {
        breakpoint: 1212,
        settings: {
          centerPadding: '50px',
        }
      },
      {
        breakpoint: 1094,
        settings: {
          centerPadding: '20px',
        }
      },
      {
        breakpoint: 1051,
        settings: {
          centerPadding: '80px',
        }
      },
      {
        breakpoint: 910,
        settings: {
          centerPadding: '20px',
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
          centerPadding: '30px',
        }
      },
      {
        breakpoint: 660,
        settings: {
          centerPadding: '80px',
        }
      },
      {
        breakpoint: 560,
        settings: {
          centerPadding: '40px',
        }
      },
      {
        breakpoint: 490,
        settings: {
          centerPadding: '30px',
        }
      },
      {
        breakpoint: 468,
        settings: {
          centerPadding: '0',
        }
      },
      {
        breakpoint: 438,
        settings: {
          slidesToShow: 1.5,
          centerPadding: '40px',
        }
      },
      {
        breakpoint: 375,
        setting: {
          slidesToShow: 1,
          centerPadding: '0',
        }
      }
    ]
  });



  //.question-boxにロールオーバーした時に下ボーダーを表示
  $('.question-box').hover(
    function(){
      $(this).find('h3').css('border-bottom','1px solid #707070');
    },
    function(){
      $(this).find('h3').css('border-bottom','none');
    }
  );

  $('.js-open').next().show();

  //アコーディオン
  $('.question-box').click(function(){
    if($(this).hasClass('js-open')){
      $(this).removeClass('js-open');
      $(this).next().slideUp();
      $(this).find('span').text('＋');
    } else {
      $(this).addClass('js-open');
      $(this).next().slideDown();
      $(this).find('span').text('ー');
    }
  });


});
