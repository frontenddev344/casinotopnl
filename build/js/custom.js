$(".toggle").click(function () {
    $(".navigation").css({ transform: "translateX(0)" });
});

$(".closebtn").click(function () {
    $(".navigation").css({ transform: "translateX(-100%)" });
});



// 

var btn = document.getElementById('button');

window.addEventListener('scroll', function () {
    if (window.scrollY > 300) {
        btn.classList.add('opacity-100', 'visible');
        btn.classList.remove('opacity-0', 'invisible');
    } else {
        btn.classList.add('opacity-0', 'invisible');
        btn.classList.remove('opacity-100', 'visible');
    }
});

btn.addEventListener('click', function (e) {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
});