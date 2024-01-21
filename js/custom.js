function passchange() {
    var x = document.getElementById("plateformpassword");
    if (x.type === "password") {
      x.type = "text";
    } else {
      x.type = "password";
    }
}

function togglrtodarkplateformlogin() {
  document.querySelector("#plateform-light").style.display="block";
  document.querySelector("#plateform-dark").style.display="none";
  document.querySelector(".login-plateform-form").style.backgroundColor="black";
  document.querySelector("#plateformusername").style.backgroundColor="#ffffff";
  document.querySelector(".plateform-login-form h3").style.color="#ffffff";
  document.querySelector("#plateformpassword").style.backgroundColor="#ffffff";
  document.querySelector("#plateform-light").style.backgroundColor="#f5fdff";
}

function togglrtolightplateformlogin() {
  document.querySelector("#plateform-light").style.display="none";
  document.querySelector("#plateform-dark").style.display="block";
  document.querySelector(".login-plateform-form").style.backgroundColor="#f9f9f9";
  document.querySelector("#plateformusername").style.backgroundColor="unset";
  document.querySelector(".plateform-login-form h3").style.color="black";
  document.querySelector("#plateformpassword").style.backgroundColor="unset";
}

function togglrtodarkplateformforgot() {
  document.querySelector("#plateform-light").style.display="block";
  document.querySelector("#plateform-dark").style.display="none";
  document.querySelector(".login-plateform-form").style.backgroundColor="black";
  document.querySelector("#plateformusername").style.backgroundColor="#ffffff";
  document.querySelector(".plateform-login-form h3").style.color="#ffffff";
  document.querySelector("#plateform-light").style.backgroundColor="#f5fdff";
}

function togglrtolightplateformforgot() {
  document.querySelector("#plateform-light").style.display="none";
  document.querySelector("#plateform-dark").style.display="block";
  document.querySelector(".login-plateform-form").style.backgroundColor="#f9f9f9";
  document.querySelector("#plateformusername").style.backgroundColor="unset";
  document.querySelector(".plateform-login-form h3").style.color="black";
}

// custmize active 

// Add active class to the current button (highlight it)
var header = document.getElementById("row-card");
var elements = header.getElementsByClassName("start-card");
for (var i = 0; i < elements.length; i++) {
  elements[i].addEventListener("click", function() {
  var current = document.getElementsByClassName("active-state-base");
  current[0].className = current[0].className.replace(" active-state-base", "");
  this.className += " active-state-base";
  });
}


let adminOpenMobileView = document.querySelectorAll(".admin-dashboard-mobile-open");
let adminOpenMobileViewPanel = document.querySelectorAll(".admin-dashboard-mobile-open-panel");
let adminOpenMobileViewShowButton = document.querySelectorAll(".admin-dashboard-mobile-close-button");

adminOpenMobileView.forEach((element,index) => {
  element.addEventListener("click",()=>{
    console.log("ghjk");
    adminOpenMobileViewPanel[index].style.display = "block"; 
    adminOpenMobileViewShowButton[index].style.display = "block";
  })
});
adminOpenMobileViewShowButton.forEach((element,index) => {
  element.addEventListener("click",()=>{
    adminOpenMobileViewPanel[index].style.display = "none";
    adminOpenMobileViewShowButton[index].style.display = "none";
  })
});


let openAndCloseMenubar=document.getElementById("dashboard-menubar");
let sideMenubarForMobile=document.querySelector(".dashboard-nav-2");
openAndCloseMenubar.addEventListener("click",()=> {
  if (sideMenubarForMobile.style.display === "flex") {
    sideMenubarForMobile.style.display="none";
  }else{
    sideMenubarForMobile.style.display="flex";
  }
})
