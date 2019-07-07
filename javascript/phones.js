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
	if(e.target != burgerContainer && e.target != products && e.target != productContent){
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

/* searchPopUp
searchIcon */
/*search Btn Mobile Starts*/
var searchIcon = document.querySelector(".searchIcon");
var searchIcon1 = document.querySelector(".searchIcon1");
var searchPopUp = document.querySelector(".searchPopUp");
var searchBox = document.querySelector(".searchBox");
var searchCountDown = 0;

searchIcon.addEventListener("click", function(){
    if(searchCountDown==0){
        searchBox.style.opacity = "1";
        searchPopUp.style.opacity = "1";
        searchIcon1.style.opacity = "1";
	    searchCountDown++;
    } else {
        searchBox.style.opacity = "0";
        searchPopUp.style.opacity = "0";
        searchIcon1.style.opacity = "0";
        searchCountDown--;
    }
    /*window.addEventListener("mouseup", function(e){
	    if(e.target!=searchIcon1 && e.target!= searchPopUp){
        searchBox.style.opacity = "0";
        searchPopUp.style.opacity = "0";
        searchIcon1.style.opacity = "0";
	    searchCountDown = 0;
	    }
    });*/
});/*search Btn Mobile Ends*/

/*search Btn for WEB starts*/
var webSearchIcon = document.querySelector(".webSearchIcon");
var webSearchBoxContainer = document.querySelector(".webSearchBoxContainer");
var webSearchBoxCounter = 0;
webSearchIcon.addEventListener("click", function(){
    if(webSearchBoxCounter==0){
        webSearchBoxContainer.style.opacity = "1";
        webSearchBoxCounter++;
    } else {
        webSearchBoxContainer.style.opacity = "0";
        webSearchBoxCounter--;
    }
});/*search Btn for WEB ends*/

/* Footer Contact Us starts */
var contactUs = document.querySelector(".contactUs");
var contactUsDescription = document.querySelector(".contactUsDescription");
var contactIconContainerUL = document.querySelector(".contactIconContainerUL");
contactUs.addEventListener("click", function(){
    contactUsDescription.style.transition = "1000ms all ease";
    contactUsDescription.style.transform = "rotateX(0deg)";
    contactIconContainerUL.style.transition = "500ms all ease";
    contactIconContainerUL.style.opacity = "0";
})
window.addEventListener("mouseup", function(e){
    if(e.target!=contactUs && e.target!= contactIconContainerUL){
        contactUsDescription.style.transition = "500ms all ease";
        contactUsDescription.style.transform = "rotateX(-90deg)";
        contactIconContainerUL.style.transition = "1000ms all ease";
        contactIconContainerUL.style.opacity = "1";
	    }
    });
/* Footer Contact Us starts */