
var tl = new TimelineMax();
//select the classname and create variables
var mainTitle = document.getElementsByClassName("title-1");
var heroPara = document.getElementsByClassName("hero-para");
var homeLogo = document.getElementsByClassName("home-logo");
var navBar = document.getElementsByClassName("navbar");
var sideHeader = document.getElementsByClassName("side-content-header"); 
var introCards = document.getElementsByClassName("cards"); 
  //inner section select classname
var scrollText = document.getElementsByClassName("scroll-down-text");
var mainContentBG = document.getElementById("main-content");
var innerLeftContent = document.getElementsByClassName("inner-hero-left-content");
var sphereMainInner = document.getElementsByClassName("sphere-main-inner");
var animationItems1 = document.getElementsByClassName("animation-items");

/************Home Page*******/
TweenMax.from("#pop-up-message",1.2,{scale:0,transformOrigin:"100% bottom",ease:Expo.easeInOut,delay:2.5});
TweenMax.from(navBar,1.2,{y:-100,ease: Expo.easeOut,delay:1.2});
TweenMax.from(homeLogo,1.2,{opacity:0,ease: Expo.easeOut,delay:1});
TweenMax.staggerFrom(mainTitle, 1.2, {y:300,ease: Expo.easeOut,delay:1.5},0.25);
TweenMax.from(heroPara,1.2,{y:32,opacity:0,ease: Expo.easeOut,delay:1.6});

//side content
TweenMax.from(sideHeader,1.6,{y:48, opacity:0, ease: Expo.easeOut,delay:1.7});
TweenMax.staggerFrom(introCards,1.6,{y:72,opacity:0,ease: Expo.easeOut,delay:1.8},.2);


/*******************Inner Section*************
*********************************************/
/******Individual Page******/
//scroll text animation
TweenMax.fromTo(scrollText,2,{y:-6,opacity:1},{y:6,autoAlpha:0,repeat:-1}); 

//Individual Animation 1
tl.from("#main-content",1.2,{scale:0,ease:Expo.easeOut})
.fromTo(".sphere-main-inner",1.2,{scale:2},{scale:1,top:64},"-=0.5")
.fromTo(".animation-items",1.2,{opacity:0,y:124,ease:Power1.easeIn},{opacity:1,y:64,ease:Power4.easeInOut},"-=1.5")
    .from(".inner-hero-left-content",1.2,{y:32,opacity:0,ease:Expo.easeOut},"-=1");
    

/*WE CAN DELETE THIS COMMENT
  TweenMax.from("#main-content",1.6,{scale:0,ease:Expo.easeOut});
    TweenMax.from(".inner-hero-left-content",1.6,{y:32,opacity:0,ease:Expo.easeOut,delay:1});
    TweenMax.fromTo(".sphere-main-inner",1.6,{scale:2},{scale:1,top:64});
TweenMax.fromTo(".animation-items",1.6,{opacity:0,y:124,delay:1,ease:Power1.easeIn},{opacity:1,y:64,ease:Power1.easeIn});*/
    
    
    
var animation = bodymovin.loadAnimation({
    container: document.getElementById('individual-1'),
    renderer: 'svg',
  
    loop: false,
  direction:-1,
    autoplay: true,
    path: 'asset/01-individual.json'
    });

/**********************
Scroll divs************/
$(document).ready(function () {
    var divs = $('.mydiv');
    var dir = 'up'; // wheel scroll direction
    var div = 0; // current div
    $(document.body).on('DOMMouseScroll mousewheel', function (e) {
        if (e.originalEvent.detail > 0 || e.originalEvent.wheelDelta < 0) {
            dir = 'down';
        } else {
            dir = 'up';
        }
        // find currently visible div :
        div = -1;
        divs.each(function(i){
            if (div<0 && ($(this).offset().top >= $(window).scrollTop())) {
                div = i;
            }
        });
        if (dir == 'up' && div > 0) {
            div--;
        }
        if (dir == 'down' && div < divs.length) {
            div++;
        }
        //console.log(div, dir, divs.length);
        $('html,body').stop().animate({
            scrollTop: divs.eq(div).offset().top
        }, 200);
        return false;
    });
    $(window).resize(function () {
        $('html,body').scrollTop(divs.eq(div).offset().top);
    });
});