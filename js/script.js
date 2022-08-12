// ----------------------home js start------------------------
function homeFunction() {
    var dots = document.getElementById("dots");
    var moreText = document.getElementById("more");
    var btnText = document.getElementById("homeBtn");
  
    if (dots.style.display === "none") {
      dots.style.display = "inline";
      btnText.innerHTML = "Read more";
      moreText.style.display = "none";
    } else {
      dots.style.display = "none";
      btnText.innerHTML = "Read less";
      moreText.style.display = "inline";
    }
  }

// ----------------------home js end------------------------


// ----------------------service js start------------------------
  // function serviceFunction() {
  //   var dots = document.getElementById("dot");
  //   var moreText = document.getElementById("mor");
  //   var btnText = document.getElementById("serviceBtn");
  
  //   if (dots.style.display === "none") {
  //     dots.style.display = "inline";
  //     btnText.innerHTML = "Read more";
  //     moreText.style.display = "none";
  //   } else {
  //     dots.style.display = "none";
  //     btnText.innerHTML = "Read less";
  //     moreText.style.display = "inline";
  //   }
  // }
  // ----------------------service js end------------------------

  // ----------------------costomers js start------------------------

  $(".carousel").owlCarousel({
    margin: 10,
    loop: true,
    autoplay: true,
    autoplayTimeout: 2000,
    autoplayHoverPause: true,
    responsive: {
      0: {
        items: 1,
        nav: false
      },
      600: {
        items: 2,
        nav: false
      },
      1000: {
        items: 3,
        nav: false
      }
    }
  });
  // ----------------------customers js end------------------------





   // ----------------------navbar js start------------------------

 

  const menu = document.querySelector(".menu");
  const menuMain = menu.querySelector(".menu-main");
  const goBack = menu.querySelector(".go-back");
  const menuTrigger = document.querySelector(".mobile-menu-trigger");
  const closeMenu = menu.querySelector(".mobile-menu-close");
  let subMenu;
  menuMain.addEventListener("click", (e) =>{
    if(!menu.classList.contains("active")){
      return;
    }
    if(e.target.closest(".menu-item-has-children")){
       const hasChildren = e.target.closest(".menu-item-has-children");
       showSubMenu(hasChildren);
    }
  });
  goBack.addEventListener("click",() =>{
     hideSubMenu();
  })
  menuTrigger.addEventListener("click",() =>{
     toggleMenu();
  })
  closeMenu.addEventListener("click",() =>{
     toggleMenu();
  })
  document.querySelector(".menu-overlay").addEventListener("click",() =>{
    toggleMenu();
  })
  function toggleMenu(){
    menu.classList.toggle("active");
    document.querySelector(".menu-overlay").classList.toggle("active");
  }
  function showSubMenu(hasChildren){
     subMenu = hasChildren.querySelector(".sub-menu");
     subMenu.classList.add("active");
     subMenu.style.animation = "slideLeft 0.5s ease forwards";
     const menuTitle = hasChildren.querySelector("i").parentNode.childNodes[0].textContent;
     menu.querySelector(".current-menu-title").innerHTML=menuTitle;
     menu.querySelector(".mobile-menu-head").classList.add("active");
  }
 
  function  hideSubMenu(){  
     subMenu.style.animation = "slideRight 0.5s ease forwards";
     setTimeout(() =>{
        subMenu.classList.remove("active");	
     },300); 
     menu.querySelector(".current-menu-title").innerHTML="";
     menu.querySelector(".mobile-menu-head").classList.remove("active");
  }
  
  window.onresize = function(){
    if(this.innerWidth >991){
      if(menu.classList.contains("active")){
        toggleMenu();
      }
 
    }
  }

     // ----------------------navbar js end------------------------

 
 