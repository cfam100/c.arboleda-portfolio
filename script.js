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

    //scroll up button\\
    const toTop = document.querySelector(".scrollupbtn");

    window.addEventListener("scroll", () =>{
        if (window.pageYOffset > 100) {
            toTop.classList.add("active");
        }
        else{
            toTop.classList.remove("active");
        }
    })

    //Typing animation script\\
        const texts = ["C#", "HTML", "CSS", "Javascript"];
        let count = 0;
        let index = 0;//Checks very single char
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
            setTimeout(type, 500);
        })();
        
    // toggle menu/navbar script\\
    $('.menu-btn').click(function(){
       $('.navbar .menu').toggleClass("active");
       $('.menu-btn i').toggleClass("active");
    })});

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


