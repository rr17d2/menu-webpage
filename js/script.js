$(document).ready(function() {
    //ripples
    $("#header, .info").ripples({
        dropRadius: 25,
        perturbance: 0.6,

    });
    //magniffic popup
    $('.parent-container').magnificPopup({
        delegate: 'a', //child item selector, by clicking on it popup will open
        type: 'image',

        gallery: {
            enabled: true
        }
        //other options
    });
});