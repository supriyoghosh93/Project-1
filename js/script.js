$(document).ready(function(){
    $("#header, .info").ripples({
        dropRedius: 25,
        perturbance: 0.6,
    });
   //magnific popup
    $('.parent-container').magnificPopup({
        delegate: 'a',
        type: 'image',

        gallery:{
            enabled: true
        }
    });

});