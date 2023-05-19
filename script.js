$(document).ready(function () {
    $(window).scroll(function () {
        if (this.scrollY > 20) {
            $('.navbar').addClass("sticky");
        } else {
            $('.navbar').removeClass("sticky");
        }
        if (this.scrollY > 500) {
            $('.scroll-up-btn').addClass("show");
        } else {
            $('.scroll-up-btn').removeClass("show");
        }
    });
    $('.scroll-up-btn').click(function () {
        $('html').animate({ scrollTop: 0 });
    });

    var typed = new Typed(".typing", {
        strings: ["Web Design", "Front End", "Freelancer", "Crio Artes"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });
    var typed = new Typed(".typing-2", {
        strings: ["Web Design", "Front End", "Freelancer", "Crio Artes"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

    $('.menu-btn').click(function () {
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });
});

function sendMail() {
    var params = {
        from_name: document.getElementById("fullName").value,
        email_id: document.getElementById("email_id").value,
        message: document.getElementById("message").value,
    }
    emailjs.send("service_v5xtlsm" , "template_8lvwcvi" , params).then(function (res){
        alert("success! " + res.status);
    })
}