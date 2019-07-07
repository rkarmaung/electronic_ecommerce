
/* readMore for items - starts */
var readMore = document.querySelector(".readMore");
var readMoreStarts = document.querySelector(".readMoreStarts");
var x = 0;

readMore.addEventListener("click", function(){
    readMoreStarts.style.display = "block";
    readMore.style.display = "none";
});
/* readMore for items - starts */

/* buy btn modal starts */
var buyBtn = document.querySelector(".buyBtn");
var buyModal = document.querySelector(".buyModal");
var cancelBtn = document.querySelector(".cancelBtn");
var buyIndex = 0;
buyBtn.addEventListener("click", function(){
	if(buyIndex==0){
	buyModal.style.transform = "translateX(0px)";
	buyModal.style.opacity = "1";	
	}
    cancelBtn.addEventListener("click", function(){
	buyModal.style.transform = "translateX(-1200px)";
	buyModal.style.opacity = "0";	
    });
});
/* buy btn modal ends */

/* 1st image is clicked */
var promotionItemImg = document.querySelector(".promotionItemImg");
var itemModalContainer = document.querySelector(".itemModalContainer");
var itemModalBackbtn = document.querySelector(".itemModal-backbtn");

promotionItemImg.addEventListener("click", function(){
	itemModalContainer.style.transform = "scale(1)";
    itemModalBackbtn.style.transform = "translateY(0)";
    
    itemModalBackbtn.addEventListener("click", function(){
	itemModalContainer.style.transform = "scale(0)";
    itemModalBackbtn.style.transform = "translateY(-50px)";
    });
});

/* 2nd image is clicked */
var promotionItemImg2 = document.querySelector(".promotionItemImg2");
    promotionItemImg2.addEventListener("click", function(){
    
    itemModalContainer.style.transform = "scale(1)";
    itemModalBackbtn.style.transform = "translateY(0)";
    
    itemModalBackbtn.addEventListener("click", function(){
    itemModalContainer.style.transform = "scale(0)";
        itemModalBackbtn.style.transform = "translateY(-50px)";
    });
});