/* nav bar content start */
var burgerContainer = document.querySelector(".burgerContainer");
var burgerContentContainer = document.querySelector(".burgerContentContainer");
var x = 0;
var burger1 = document.querySelector(".burger1");
var burger2 = document.querySelector(".burger2");
var burger3 = document.querySelector(".burger3");
var burgerContentWrapper = document.querySelector(".burgerContentWrapper");
    
    
burgerContainer.addEventListener("click", function(){
if(x==0){
/*  this is drop down top - bottom 
    burgerContentContainer.style.transform = "rotateX(0deg)";
    burgerContent.style.opacity = "1";*/
    
    burgerContentContainer.style.transform = "rotateY(0deg)";
    burgerContentContainer.style.transition = "800ms all ease";
    
    burgerContentWrapper.style.opacity = "1";
    burgerContentWrapper.style.transition = "1800ms all ease";
    
    
    burger1.style.opacity = "0";
    burger2.style.transform = "rotate(45deg)";
    burger3.style.margin = "-4px 0 0 0";
    burger3.style.transform = "rotate(-45deg)";
    x++;
} else {

/*  top - bottom closing func
    burgerContentContainer.style.transform = "rotateX(90deg)";*/
    
    burgerContentContainer.style.transform = "rotateY(180deg)";
    burgerContentContainer.style.transition = "2000ms all ease";
    
    burgerContentWrapper.style.opacity = "0";
    burgerContentWrapper.style.transition = "1300ms all ease";
    
    burger1.style.opacity = "1";
    burger2.style.transform = "rotate(0deg)";
    burger3.style.margin = "4px 0 0 0";
    burger3.style.transform = "rotate(0deg)";
    
    x--;
}

/* click anywhere on window - close action will active*/
window.addEventListener("mouseup", function(e){
	if(e.target != burgerContainer 
	&& e.target != loginClick 
	&& e.target != products
	&& e.target != burgerContentContainer){
	/*  closed top - bottom if u click on window
	    burgerContentContainer.style.transform = "rotateX(90deg)";*/
	    burgerContentContainer.style.transform = "rotateY(180deg)";
	    burgerContentContainer.style.transition = "1500ms all ease";
	    
	    burgerContentWrapper.style.opacity = "0";
	    burgerContentWrapper.style.transition = "1300ms all ease";
	    
	    burger1.style.opacity = "1";
	    burger2.style.transform = "rotate(0deg)";
	    burger3.style.margin = "4px 0 0 0";
	    burger3.style.transform = "rotate(0deg)";
	    
	    x=0;
	}
});
});
/* nav bar content ends */


/* navbar > products dropdown starts */
var productContent = document.querySelector(".productContent");
var products = document.querySelector(".products");
var productsIndex = 0;

products.addEventListener("click", function(){
    if(productsIndex==0){
	    productContent.style.display = "block";
	    productsIndex++;
    } else {
	    productContent.style.display = "none";
	    productsIndex--;
    }
    
    /* navbar > products dropdown close if u click on window*/
    window.addEventListener("mouseup", function(e){
	    if(e.target!=products){
		    productContent.style.display = "none";
		    productsIndex=0;
	    }
    });
});
/* navbar > products dropdown ends */


/* shopping cart starts */
var addToCart = document.querySelector(".addToCart");
var shoppingCartIndex = document.querySelectorAll(".shoppingCartIndex");

addToCart.addEventListener("click", function(){
    shoppingCartIndex[1].style.opacity = "1";
});
/* shopping cart ends */


/* login starts */
var loginOverlay = document.querySelector(".loginOverlay");
var loginBg = document.querySelector(".loginBg");
var loginClick = document.querySelector(".loginClick");

loginClick.addEventListener("click", function(){
    loginOverlay.style.opacity = "1";
    loginOverlay.style.transform = "translateY(0px)";
    loginBg.style.transform = "translateY(0px)";
});
/* login ends */


/*Register*/
var registerOverlay = document.querySelector(".registerOverlay");
var registerBg = document.querySelector(".registerBg");
var registerClick = document.querySelector(".registerClick");
var registerClick1 = document.querySelector(".registerClick1");

registerClick.addEventListener("click", function(){
    registerOverlay.style.opacity = "1";
    registerOverlay.style.transform = "translateY(0px)";
    registerBg.style.transform = "translateY(0px)";
});
/* register Click1 located at login-Modal-RegisterNow*/
registerClick1.addEventListener("click", function(){
    registerOverlay.style.transform = "translateY(0px)";
    registerBg.style.transform = "translateY(0px)";
    registerBg.style.transition = "1000ms all ease";
});

/* Close Modals Btn - crossIcon */
var closeModalBtn = document.querySelectorAll(".closeModalBtn");
/* Close Login Modal */
closeModalBtn[0].addEventListener("click", function(){
	loginOverlay.style.transform = "translateY(-650px)";
	loginBg.style.transform = "translateY(-410px)";
});

/* Close Register Modal */
closeModalBtn[1].addEventListener("click", function(){
	registerOverlay.style.transform = "translateY(-650px)";
	registerBg.style.transform = "translateY(-410px)";
});





/*phone item1 more info*/
var itemOverlay = document.querySelectorAll(".itemOverlay");
var imgCard = document.querySelectorAll(".imgCard");

imgCard[0].addEventListener("click", function(){
    itemOverlay[0].style.display = "grid";
});

/*phone item2 more info*/
imgCard[1].addEventListener("click", function(){
    itemOverlay[1].style.display = "grid";
});

/*phone item3 more info*/
imgCard[2].addEventListener("click", function(){
    itemOverlay[2].style.display = "grid";
});



/* searchPopUp
searchIcon */
/*search Btn for MOBILE starts*/
var searchIcon = document.querySelector(".searchIcon");
var searchIcon1 = document.querySelector(".searchIcon1");
var searchPopUp = document.querySelector(".searchPopUp");
var searchCountDown = 0;

searchIcon.addEventListener("click", function(){
    if(searchCountDown==0){
        searchPopUp.style.opacity = "1";
        searchIcon1.style.opacity = "1";
	    searchPopUp.style.transform = "translateX(350px)";
	    searchCountDown++;
    } else {
        searchPopUp.style.transform = "translateX(-50px)";
        searchPopUp.style.opacity = "0";
        searchCountDown--;
    }
});

window.addEventListener("mouseup", function(e){
    if(e.target!=searchIcon && e.target!=searchPopUp){
        searchPopUp.style.transform = "translateX(-50px)";
        searchPopUp.style.opacity = "0";
        searchCountDown = 0;
    }
});
/*search Btn for MOBILE ends*/

/*search Btn for WEB starts*/
var webSearchIcon = document.querySelector(".webSearchIcon");
/*var webSearchIconCounter = 0;*/
webSearchIcon.addEventListener("click", function(){
    alert("hey");
});
/*webSearchIcon.addEventListener("click", function(){
    if(webSearchIconCounter==0){
        searchPopUp.style.opacity = "1";
	    searchPopUp.style.transform = "translateX(350px)";
	    webSearchIconCounter++;
    } else {
        searchPopUp.style.transform = "translateX(-50px)";
        searchPopUp.style.opacity = "0";
        webSearchIconCounter--;
    }
});*/
/*search Btn for WEB ends*/