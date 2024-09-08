var mixer = mixitup('.grid-portfolio');
$(function () {
    $.scrollify({
        section: ".scrollify",
        setHeights: false,
        scrollSpeed: 1100,
        updateHash: false,
    });
});

function openMenu() {
    document.getElementById('navBar').style.height = "100%"
}
function closeMenu() {
    document.getElementById('navBar').style.height = "0"
}

// Smooth Scroll
$(function () {
    $('.menu-item a, .scroll-down a').on('click', function () {
        $('html, body').animate({
            scrollTop: $($.attr(this, 'href')).offset().top
        }, 1000)
        return false;
    })
})