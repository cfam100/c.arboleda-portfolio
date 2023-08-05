    // Navbar script\\
    $(document).ready(function(){
        $(window).scroll(function(){
            if(this.scrollY > 20){
                $('.navbar').addClass("sticky");
            }else{
                $('.navbar').removeClass("sticky");
            }            
            if(this.scroll > 500){
                $('.scroll-up-btn').addClass("show");
            }
            else{
                $('.scroll-up-btn').removeClass("show");  
            }
        });
    
          // toggle menu/navbar script\\
    $('.menu-btn').click(function(){
        $('.navbar .menu, navbar1 .menu1').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
     })});

     $(document).ready(function(){
        $('.menu-btn').click(function(){
            $('.navbar1 .menu1').toggleClass("active");
            $('.menu-btn i').toggleClass("active");
        });
    });

    //scroll up button\\
    const toTop = document.querySelector(".scrollupbtn");

    window.addEventListener("scroll", () =>{
        if (window.pageYOffset > 500) {
            toTop.classList.add("active");
        }
        else{
            toTop.classList.remove("active");
        }
    })

    //Typing animation script\\
        const texts = [".NET", "SQL", "HTML", "CSS", "Javascript", "Mendix"];
        let count = 0;
        let index = 0;//Checks every single char
        let currentText = "";//here gets text saved who is coming from const text
        let letter = "";

        (function type() {
            if(count === texts.length){
                count = 0;//when all texts are displayed gets back to 0(first string)
            }
            currentText = texts[count];
            letter = currentText.slice(0, ++index);

            document.querySelector(".typing").textContent = letter;
            if (letter.length === currentText.length) {
                count++;
                index = 0;
            }
            setTimeout(type, 300);
        })();


    //Owl carousel script\\
    $('.carousel').owlCarousel({
        margin: 20,
        loop: true,
        autoplayTimeOut: 500,
        autoplayHoverPause: true,
        responsive:{
            0:{
                items: 1,
                nav: false
            },
            500:{
                items: 2,
                nav: false
            },
            1000:{
                items: 3,
                nav: false
            }
        }
    });
    //current year footer\\
    const year = document.querySelector('#current-year')
    year.innerHTML = new Date().getFullYear()

    // Contact form script\\
    const inputs = document.querySelectorAll(".input");//selects form input

    function focusFunc(){
        let parent = this.parentNode;
        parent.classList.add("focus");
    }
    function blurFunc(){
        let parent = this.parentNode;
        if(this.value == ""){ //if input value is empty stay removed
            parent.classList.remove("focus");
        }
    }
    inputs.forEach(input =>{
        input.addEventListener("focus", focusFunc);
        input.addEventListener("blur", blurFunc);
    })
    let popup = document.getElementById("popup");

    function openPopup() {
        // Check if all input fields are filled
        const inputs = document.querySelectorAll(".input");
        let isValid = true;
      
        inputs.forEach((input) => {
          if (input.value.trim() === "") {
            isValid = false;
            let parent = input.parentNode;
            parent.classList.add("error");
          }
        });
         // Check if email field is valid
        const emailInput = document.querySelector('input[name="email"]');
        const emailValue = emailInput.value.trim();
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        
        if (!emailRegex.test(emailValue)) {
            isValid = false;
            let parent = emailInput.parentNode;
            parent.classList.add("error");
        }
      
        if (isValid) {
          // Display the popup
          let popup = document.getElementById("popup");
          popup.classList.add("open-popup");
          setTimeout(function() {
            window.location.href = "http://127.0.0.1:5500/index.html#contact";
        }, 3000); 
        }
    }
    function closePopup(){
        popup.classList.remove("open-popup")
    }

    // myID = document.getElementById("projectContainer");

    // var myScrollFunc = function () {
    //     var y = window.scrollY;
    //     if (y >= 500) {
    //         myID.className = "s-b-container show"
    //     } else {
    //         myID.className = "s-b-container hide"
    //     }
    // };
    
    //Reveal objects\\
    // window.addEventListener("scroll", myScrollFunc);
//     var myID = document.getElementById("projectContainer");

//     var myScrollFunc = function () {
//     var y = window.scrollY;
//     if (y >= 800) {
//         myID.classList.add("show");
//     } else {
//         myID.classList.remove("show");
//     }
//     };
//     window.addEventListener("scroll", myScrollFunc);


//    function highlightProject(event) {
//   event.preventDefault(); 

//   const projectBoxes = document.querySelectorAll('.s-box');
//   projectBoxes.forEach(box => box.classList.remove('highlight'));

//   const clickedBox = event.currentTarget;
//   clickedBox.classList.add('highlight');
// }

window.addEventListener('scroll', reveal);

    function reveal(){
        var reveals = document.querySelectorAll('.reveal');

        for (var i = 0; i < reveals.length; i++) {

            var windowheight = window.innerHeight;
            var revealtop = reveals[i].getBoundingClientRect().top;
            var revealpoint = 100;

            if(revealtop < windowheight - revealpoint){
                reveals[i].classList.add('active');
            }
            else{
                reveals[i].classList.remove('active');
            }
            
        }
    }  