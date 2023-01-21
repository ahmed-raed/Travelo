const navMenu = document.getElementById("nav-menu"),
    navToggle = document.getElementById('nav-toggle'),
    navClose = document.getElementById('nav-close')

if (navToggle) {
    navToggle.addEventListener('click', () => {
        navMenu.classList.add('show-menu');
    })
}


if (navClose) {
    navClose.addEventListener('click', () => {
        navMenu.classList.remove('show-menu');
    })
}

window.addEventListener("scroll", function () {
    let navWrapper = document.getElementById("nav__wrapper");
    navWrapper.classList.toggle('fixed', this.window.scrollY > 100)
})

var prevScrollpos = window.pageYOffset;
window.onscroll = function () {
    var currentScrollpos = window.pageYOffset;
    if (prevScrollpos > currentScrollpos) {
        document.getElementById("nav__wrapper").style.top = "0";
    }
    else {
        document.getElementById("nav__wrapper").style.top = "-100%";
    }
    prevScrollpos = currentScrollpos;
}

const navSearch = document.getElementById('nav-search'),
    searchBar = document.getElementById('search-bar'),
    searchClose = document.getElementById('search-close');

if (navSearch) {
    navSearch.addEventListener('click', () => {
        searchBar.classList.add('show-search')
        document.body.style.overflowY = "hidden";
    })
};

if (searchClose) {
    searchClose.addEventListener('click', () => {
        searchBar.classList.remove('show-search')
        document.body.style.overflowY = "scroll";
    })
};

const navLink = document.querySelectorAll('.nav__link');

navLink.forEach(link => {
    link.addEventListener("click", ()=>{
        const navMenu = document.getElementById('nav-menu');
        navMenu.querySelector(".active").classList.remove("active");
        link.classList.add("active");

        navMenu.classList.remove("show-menu");
    })
})

$('.home-carousel').owlCarousel({
    loop: true,
    margin: 0,
    dots: false,
    smartSpeed: 700,
    autoplay: true,
    autoplayTimeout: 8000,
    responsive: {
        0: {
            items: 1
        }
    }
})

let wrapper = document.querySelectorAll(".wrapper");

wrapper.forEach(option => {
    option.addEventListener("click", function (e){
        if(e.target.classList.contains("carousel__next__btn")){
            const target = e.target.getAttribute("data-target");
            var owl = $(target);
            owl.owlCarousel();

            owl.trigger('next.owl.carousel')
        }

        else if(e.target.classList.contains("carousel__prev__btn")){
            const target = e.target.getAttribute("data-target");
            var owl = $(target);
            owl.owlCarousel();

            owl.trigger('prev.owl.carousel')
        }
        else {
            return // Do nothing
        }
    })
})

$('.destination-carousel').owlCarousel({
    loop: true,
    margin: 35,
    dots: false,
    stagePadding: 75,
    smartSpeed: 500,
    autoplay: true,
    autoplayTimeout: 8000,
    responsive: {
        0: {
            items: 1,
            stagePadding: 0
        },
        1000: {
            items: 1.2
        },
        1080: {
            items: 1.61
        }
    }
})

$('.tour-carousel').owlCarousel({
    loop: true,
    margin: 35,
    dots: false,
    stagePadding: 75,
    smartSpeed: 500,
    autoplay: true,
    autoplayTimeout: 8000,
    responsive: {
        0: {
            items: 1,
            stagePadding: 0
        },
        700: {
            items: 2,
            stagePadding: 0
        },
        1000: {
            items: 2.5,
        },
        1080: {
            items: 3,
        }
    }
})