console.log("Thank you for visiting my site, fellow dev!");

$(window).resize(function() {
    $('#header-content').height($(window).height());
});

$(window).trigger('resize');