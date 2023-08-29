const navItems = document.getElementById("nav-ul");
const pageHome = document.querySelector(".nav-item-home");
const pageAbout = document.querySelector(".nav-item-about");
const pageContact = document.querySelector(".nav-item-contact");

const pages = document.querySelectorAll(".page");
const translateAmount = 100;
let currentPage = 0;

slide = (direction) => {
    if (direction === "next") {
        currentPage = (currentPage + 1) % pages.length;
    }

    translate = -currentPage * translateAmount;

    pages.forEach(
        page => (page.style.transform = `translateX(${translate}%)`)
    );

    console.log(currentPage);
    updateNavActiveState();

}

updateNavActiveState = () => {
    if (currentPage === 1) {
        navItems.classList.remove("white-nav");
        pageHome.classList.remove("active-page");
        pageAbout.classList.add("active-page");
        console.log("this is " + currentPage);
    } else if (currentPage === 2) {
        navItems.classList.remove("white-nav");
        pageAbout.classList.remove("active-page");
        pageContact.classList.add("active-page");
        console.log("this is " + currentPage);

    } else {
        pageContact.classList.remove("active-page");
        pageHome.classList.add("active-page");
        navItems.classList.add("white-nav");
        console.log("this is " + currentPage);
    }
}



// const pages = document.querySelectorAll(".page");
// const translateAmount = 100;
// let translate = 0;

// slide = (direction) => {
//     direction === "next" ? translate -= translateAmount : translate += translateAmount;

//     pages.forEach(
//         pages => (pages.style.transform = `translateX(${translate}%)`)
//     )

//     console.log(translate);
// }