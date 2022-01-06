function getDocHeight() { // $(document).height() value depends on browser
    var D = document;
    return Math.max(
        D.body.scrollHeight, D.documentElement.scrollHeight,
        D.body.offsetHeight, D.documentElement.offsetHeight,
        D.body.clientHeight, D.documentElement.clientHeight
    );
}
// $(window).scroll(function () {
//     console.log(getDocHeight())

// });


$('.test2').click(function () {
    document.location.href = '/projectPages/GLRY/GLRY.html';
})




$('#contactButton').click(function () {
    window.scrollTo(0, 5600)

})


/* -------------------------------------------------------------------------- */
/*                               FILTER PROJECTS                              */
/* -------------------------------------------------------------------------- */
let cards = document.querySelectorAll('.card');
let showAll = document.querySelector('.showAll');
let showUi = document.querySelector('.showUi');
let showFront = document.querySelector('.showFront');
let showDesign = document.querySelector('.showDesign');
let showGraphic = document.querySelector('.showGraphic');
let uiCards = document.querySelectorAll('.ui');
let graphicCards = document.querySelectorAll('.graphic');
let frontCards = document.querySelectorAll('.front');
let designCards = document.querySelectorAll('.design');
let allButton = [showAll, showUi, showDesign, showGraphic]

showAll.addEventListener('click', function () {
    cards.forEach((item, index) => {
        item.style.display = 'flex';
    })
    allButton.forEach((item, index) => {
        if (item.classList.contains('active')) {
            item.classList.remove('active');
        };

        showAll.classList.add('active');
    })

});

showUi.addEventListener('click', function () {
    cards.forEach((item, index) => {
        item.style.display = 'none';
    });

    uiCards.forEach((item, index) => {
        item.style.display = 'flex';
    });

    allButton.forEach((item, index) => {
        if (item.classList.contains('active')) {
            item.classList.remove('active');
        };

        showUi.classList.add('active');
    })
});
showFront.addEventListener('click', function () {
    cards.forEach((item, index) => {
        item.style.display = 'none';
    });

    frontCards.forEach((item, index) => {
        item.style.display = 'flex';
    });

    allButton.forEach((item, index) => {
        if (item.classList.contains('active')) {
            item.classList.remove('active');
        };

        showFront.classList.add('active');
    })
});
showGraphic.addEventListener('click', function () {
    cards.forEach((item, index) => {
        item.style.display = 'none';
    });
    graphicCards.forEach((item, index) => {
        item.style.display = 'flex';
    });
    allButton.forEach((item, index) => {
        if (item.classList.contains('active')) {
            item.classList.remove('active');
        };

        showGraphic.classList.add('active');
    })
});
showDesign.addEventListener('click', function () {
    cards.forEach((item, index) => {
        item.style.display = 'none';
    });

    designCards.forEach((item, index) => {
        item.style.display = 'flex';
    });

    allButton.forEach((item, index) => {
        if (item.classList.contains('active')) {
            item.classList.remove('active');
        };

        showDesign.classList.add('active');
    })
});


// cards.forEach((item, index) => {
//     this.addEventListener('click', function () {
//         // document.location.href = item.getAttribute('data-link')
//     })
// });

cards.addEventListener('click', function () {
    console.log(this.getAttribute('data-link'));

})