function getDocHeight() { // $(document).height() value depends on browser
    var D = document;
    return Math.max(
        D.body.scrollHeight, D.documentElement.scrollHeight,
        D.body.offsetHeight, D.documentElement.offsetHeight,
        D.body.clientHeight, D.documentElement.clientHeight
    );
}
$(window).scroll(function () {
    console.log(getDocHeight())

});






$('#contactButton').click(function () {
    window.scrollTo(0, 5600)

})