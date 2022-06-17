$(document).ready(function () {





    /*--RIGHT CLICK NAVIGATION--*/

    $(document).on("contextmenu", function (event) {
        event.preventDefault();
        $(".menu-plus")
            .show()
            .css({
                top: event.pageY,
                left: event.pageX
            });
    });
    $(document).click(function () {

        if ($(".menu-plus").is(":hover") == false) {
            $(".menu-plus").fadeOut("fast");
        };

    });

    $('.menu-button.download-btn').click(function () {
        $('#Telecharger').click();
    });
    $('.menu-button.delete-btn').click(function () {
        $('#Reinitialiser').click();
    })
    $('.menu-button.random-btn').click(function () {
        $('#Random').click();
    });
    $('.menu-button.morpho-btn').click(function () {
        $('#Morphologie-btn').click();
    });
    
    /*Navigation - Sections*/
      /*Navigation*/
      $('#Categories button').click(function () {
        $('#Categories button.active').removeClass('active');
        $(this).addClass('active');
        $('#Zone-Droite section').hide();
        $("#Section-"+$(this).attr('id')).fadeIn();
    });



    /*Navigation categories*/

    var setInvisible = function (elem) {
        elem.css('visibility', 'hidden');
    };
    var setVisible = function (elem) {
        elem.css('visibility', 'visible');
    };

    var elem = $("#Categories");
    var items = elem.children();
    // Inserting Buttons
    elem.prepend('<div id="left-button" style="visibility: hidden;"><a href="#"><i class="fas fa-chevron-left"></i></a></div>');
    elem.append('<div id="right-button"><a href="#"><i class="fas fa-chevron-right"></i></a></div>');
    // Inserting Inner
    items.wrapAll('<div id="inner" />');
    // Inserting Outer
    elem.find('#inner').wrap('<div id="outer"/>');

    var outer = $('#outer');

    var updateUI = function () {
        var maxWidth = outer.outerWidth(true);
        var actualWidth = 0;
        $.each($('#inner >'), function (i, item) {
            actualWidth += $(item).outerWidth(true);
        });

        if (actualWidth <= maxWidth) {
            setVisible($('#left-button'));
        }
    };
    updateUI();



    $('#left-button').click(function (e) {
        e.preventDefault();
        var leftPos = outer.scrollLeft();
        outer.animate({
            scrollLeft: leftPos - 200
        }, 800, function () {
            if ($('#outer').scrollLeft() <= 0) {
                setInvisible($('#left-button'));
            }
        });
    });

    $('#right-button').click(function (e) {
        e.preventDefault();
        setVisible($('#left-button'));
        var leftPos = outer.scrollLeft();
        outer.animate({
            scrollLeft: leftPos + 200
        }, 800);
    });

    $(window).resize(function () {
        updateUI();
    });
});