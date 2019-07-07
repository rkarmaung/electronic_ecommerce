//Item-1
// click Item-1 SELL btn and pop-up 1st page 
var sellIphoneXmax = document.querySelector(".sellIphoneXmax");
var modalOverlay = document.querySelector(".modalOverlay");
var memory = document.querySelector(".memory");
var memoryBackBtn = document.querySelector(".memoryBackBtn");
sellIphoneXmax.addEventListener("click", function(){
    modalOverlay.style.transform = "translateX(0%)";
    memory.style.transform = "translateX(0%)";
    // cancel btn on pop-up 1st page
    memoryBackBtn.addEventListener("click", function(){ 
        memory.style.transform = "translateX(-250%)";
        modalOverlay.style.transform = "translateX(-250%)";
    });
});
// pop-up 1st page NEXT btn to pop-up 2nd page
var iphoneXmaxMemoryPgNexBtn = document.querySelector(".iphoneXmaxMemoryPgNexBtn");
var sellSubmit = document.querySelector(".sellSubmit");
var submitBack = document.querySelector(".submitBack");
iphoneXmaxMemoryPgNexBtn.addEventListener("click", function(){
        memory.style.transform = "translateX(-250%)";
        sellSubmit.style.transform = "translateX(0%)";
        // back btn on pop-up 2nd page
        submitBack.addEventListener("click", function(){
            sellSubmit.style.transform = "translateX(-250%)";
            memory.style.transform = "translateX(0%)";
    });
});
//Submit btn ...> thank you page
var aboutUsOverlay = document.querySelector(".aboutUsOverlay");
var iphoneXmaxMemoryPgSubmitBtn1 = document.querySelector(".iphoneXmaxMemoryPgSubmitBtn1");

iphoneXmaxMemoryPgSubmitBtn1.addEventListener("click", function(){
    aboutUsOverlay.style.display = "grid";
});


//Item-2
// click Item-2 SELL btn and pop-up 1st page 
var macbookPro = document.querySelector(".macbookPro");
macbookPro.addEventListener("click", function(){
    modalOverlay.style.transform = "translateX(0%)";
    memory.style.transform = "translateX(0%)";
    // cancel btn on pop-up 1st page
    memoryBackBtn.addEventListener("click", function(){ 
        memory.style.transform = "translateX(-250%)";
        modalOverlay.style.transform = "translateX(-250%)";
    });
});

//Item-3
// click Item-3 SELL btn and pop-up 1st page 
var macbookAir = document.querySelector(".macbookAir");
macbookAir.addEventListener("click", function(){
    modalOverlay.style.transform = "translateX(0%)";
    memory.style.transform = "translateX(0%)";
    // cancel btn on pop-up 1st page
    memoryBackBtn.addEventListener("click", function(){ 
        memory.style.transform = "translateX(-250%)";
        modalOverlay.style.transform = "translateX(-250%)";
    });
});

//Item-4
// click Item-4 SELL btn and pop-up 1st page 
var iwatchS4 = document.querySelector(".iwatchS4");
iwatchS4.addEventListener("click", function(){
    modalOverlay.style.transform = "translateX(0%)";
    memory.style.transform = "translateX(0%)";
    // cancel btn on pop-up 1st page
    memoryBackBtn.addEventListener("click", function(){ 
        memory.style.transform = "translateX(-250%)";
        modalOverlay.style.transform = "translateX(-250%)";
    });
});

//Item-5
// click Item-5 SELL btn and pop-up 1st page 
var iwatchS5 = document.querySelector(".iwatchS5");
iwatchS5.addEventListener("click", function(){
    modalOverlay.style.transform = "translateX(0%)";
    memory.style.transform = "translateX(0%)";
    // cancel btn on pop-up 1st page
    memoryBackBtn.addEventListener("click", function(){ 
        memory.style.transform = "translateX(-250%)";
        modalOverlay.style.transform = "translateX(-250%)";
    });
});