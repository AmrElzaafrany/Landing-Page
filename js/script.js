let sections = document.querySelectorAll("section");
let navbar = document.querySelector("#navbar-list");
let btnUp = document.querySelector("#up");

//Adding Nav items
function add() {

    for (let item of sections) {
        let section = document.createElement("li");
        section.classList.add("nav-item");
        section.dataset.nav = item.id;
        section.innerText = item.dataset.nav;
        navbar.appendChild(section);

    }

}


//Scroll To Section Onclick
function scrollClick() {
    navbar.addEventListener('click', function (event) {
        const click = document.querySelector('#' + event.target.dataset.nav);
        click.scrollIntoView();

    });
}


//Scroll to the top of the page
function scrollTop() {
    btnUp.addEventListener("click", function () {
        document.documentElement.scrollTop = 0;
        document.body.scrollTop = 0;

    });
}


// Set Active Class onClick
$(document).ready(() => {
    $('ul li').click(function () {
        $('li').removeClass("active");
        $(this).addClass("active");

    });

    $(window).scroll(function () {
        let windscroll = $(window).scrollTop();
        if (windscroll >= 100) {
            $("nav").addClass("sticky");
            $("section").each(function (i) {
                if ($(this).position().top <= windscroll) {
                    $("li.active").removeClass("active");
                    $("li").eq(i).addClass("active");
                }

            })
        } else {
            $("li").removeClass("sticky");
            $("li.active").removeClass("active");
        }
    })
});


add();
scrollTop()
scrollClick();

