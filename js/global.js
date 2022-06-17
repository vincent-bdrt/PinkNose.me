/**
 * @file
 * Global utilities.
 *
 */



//TODO: Lié une base de donnée et améliorer les sections en se connectant à la base de données
//TODO: Créer un Backoffice CMS

(function ($) {

    $(document).ready(function () {
        if ($('body').hasClass("home")) {
            $('.vignettes-color .color-item[data-color="1"],.vignette[data-element="1"],#Skin').addClass('active');
            $('#Vignettes-Spot .vignette_col:nth-child(1) .vignette,#Vignettes-Makeup .vignette_col:nth-child(1) .vignette').css('Background-image', 'url("../avatar-creator/UI/cross.png")').css('transform', 'none');
            $('#Vignettes-Beard .vignette[data-element="1"]').removeClass('active');
            $('#Hair,#Costums').addClass('new');

            $('#Zone-Droite section').hide();

            /*-------------Navigation-------------*/
            $('.start').click(function () {
                $('.section.accueil,.start').hide();
                $('#content .game,.option:not(#sidebarCollapse)').fadeIn();
                $('.option:not(#sidebarCollapse)').css('display', 'flex');
                $('.modal-morpho').fadeIn();
                $('#Section-Skin').fadeIn();
                $('body').addClass('game-started');
                $('.licence').fadeOut();
            });
            $('#Morphologie-btn').click(function () {
                $('.modal-morpho').fadeIn();
            });
            /*Options section*/
            $('.nav-pills li').click(function () {
                $(this).parent().children(".active").removeClass('active');
                $(this).addClass('active');
            });


            /*-----------Men/Women------------*/
            $('.button.genre').click(function () {
                $('.button.genre').removeClass('active');
                $('.modal-morpho').fadeOut();
                $(this).addClass('active');
                if ($('.genre.Women.active').hasClass('active')) {
                    $('#Result_Skin').attr('src', $('#Result_Skin').attr("src").replace('/Men/', '/Women/'));
                    $('#Result_Top').attr('src', $('#Result_Top').attr("src").replace('/Men/', '/Women/'));
                    $('#Result_Motif_Top').attr('src', $('#Result_Motif_Top').attr("src").replace('/Men/', '/Women/'));
                    $('#Result_Jacket').attr('src', $('#Result_Jacket').attr("src").replace('/Men/', '/Women/'));
                    $('#Result_Costums').attr('src', $('#Result_Costums').attr("src").replace('/Men/', '/Women/'));
                    $("#Vignettes-Skin img").each(function () {
                        $(this).attr('src', $(this).attr("src").replace('/Men/', '/Women/'));
                    });
                } else {
                    $('.vignette img').removeClass('Women');
                    $('#Result_Skin').attr('src', $('#Result_Skin').attr("src").replace('/Women/', '/Men/'));
                    $('#Result_Top').attr('src', $('#Result_Top').attr("src").replace('/Women/', '/Men/'));
                    $('#Result_Motif_Top').attr('src', $('#Result_Motif_Top').attr("src").replace('/Women/', '/Men/'));
                    $('#Result_Jacket').attr('src', $('#Result_Jacket').attr("src").replace('/Women/', '/Men/'));
                    $('#Result_Costums').attr('src', $('#Result_Costums').attr("src").replace('/Women/', '/Men/'));
                    $("#Vignettes-Skin img").each(function () {
                        $(this).attr('src', $(this).attr("src").replace('/Women/', '/Men/'));
                    });
                }
            });




            /*--------------------------------------------------------------------------*/
            /*Change without Options (colors/sex) */
            function change_without_options(item) {
                $('#Vignettes-' + item).addClass('zoom-face');
                $('#Vignettes-' + item + ' .vignette').click(function () {
                    $('#Result_' + item).attr('src', 'avatar-creator/images/' + item + '/' + $(this).attr("data-element") + '.png');
                });
            }
            change_without_options('Mouth');
            change_without_options('Eyes');
            change_without_options('Nose');
            change_without_options('Makeup');
            change_without_options('Spot');

            /*--------------------------------------------------------------------------*/
            /*Change with colors*/
            function change_with_color(item, custom_vignette, Back) {
                $('#Vignettes-' + item + ' .vignette:first').addClass('active');

                /*Change shape*/
                $('#Vignettes-' + item + ' .vignette').click(function () {
                    $('#Vignettes-' + item + ' .vignette.active').removeClass('active');
                    $(this).addClass('active');
                    $('#Result_' + item).attr('src', 'avatar-creator/images/' + item + '/' + $(this).attr("data-element") +
                        '/' + $('#Vignettes-' + item + '-color .color' + item + '.active').attr("data-color") + '.png');
                    if (Back == true) {
                        $('#Result_' + item + '_Back').attr('src', 'avatar-creator/images/' + item + '_Back/' + $(this).attr("data-element") +
                            '/' + $('#Vignettes-' + item + '-color .color' + item + '.active').attr("data-color") + '.png');
                    }
                });
                /*Change color*/
                $('#Vignettes-' + item + '-color .color' + item).click(function () {
                    $('#Vignettes-' + item + '-color .color' + item).removeClass('active');
                    $(this).addClass('active');


                    /*Change vignette color**/
                    for (var i = 1; i < $('#Vignettes-' + item + " .vignette_col").length + 1; i++) {
                        if (custom_vignette == true) {
                            $('#Vignettes-' + item + ' .vignette_col:nth-child(' + i + ') img[data-vignette-item="' + item + '"]').attr("src", "avatar-creator/images/" + item + "/" + i + "/" + $('#Vignettes-' + item + '-color .color-item.active').attr('data-color') + ".png");
                            if (Back == true) {
                                $('#Vignettes-' + item + ' .vignette_col:nth-child(' + i + ') img[data-vignette-item="' + item + '_Back"]').attr("src", "avatar-creator/images/" + item + "_Back/" + i + "/" + $('#Vignettes-' + item + '-color .color-item.active').attr('data-color') + ".png");
                            }
                        } else {
                            $('#Vignettes-' + item + ' .vignette_col:nth-child(' + i + ') img').attr("src", "avatar-creator/images/" + item + "/" + i + "/" + $('#Vignettes-' + item + '-color .color-item.active').attr('data-color') + ".png");
                        }
                    }

                    /*Change result**/
                    $('#Result_' + item).attr('src', 'avatar-creator/images/' + item + '/' + $('#Vignettes-' + item + ' .vignette.active').attr("data-element") +
                        '/' + $(this).attr("data-color") + '.png');
                    if (Back == true) {
                        $('#Result_' + item + '_Back').attr('src', 'avatar-creator/images/' + item + '_Back/' + $('#Vignettes-' + item + ' .vignette.active').attr("data-element") +
                            '/' + $(this).attr("data-color") + '.png');
                    }
                });
            }
            change_with_color('Glasses', true, true);
            change_with_color('Eyebrow', true, false);
            change_with_color('Earring', true, false);
            change_with_color('Necklace', false, false);
            /*--------------------------------------------------------------------------*/
            function change_with_sex(item, costums) {
                $('#Vignettes-' + item + ' .vignette').click(function () {
                    if (costums == false) {
                        $(this).addClass('active');
                        if ($('.genre.Women.active').hasClass('active')) {
                            $('#Result_' + item).attr('src', 'avatar-creator/images/' + item + '/Women/' + $(this).attr("data-element") + '.png');
                        } else {
                            $('#Result_' + item).attr('src', 'avatar-creator/images/' + item + '/Men/' + $(this).attr("data-element") + '.png');
                        }
                    }
                    if (costums == true) {
                        if (!$('#Section-Costums .vignette').hasClass('active')) {
                            $('#Result_Motif_Top').attr('data-src-store', $('#Result_Motif_Top').attr('src'));
                            $('#Result_Top').attr('data-src-store', $('#Result_Top').attr('src'));
                            $('#Result_Jacket').attr('data-src-store', $('#Result_Jacket').attr('src'));
                            $('#Result_Necklace').attr('data-src-store', $('#Result_Necklace').attr('src'));
                        }
                        $(this).addClass('active');
                        $('#Section-Top,#Section-Motif_Top,#Section-Jacket,#collapseNecklace').addClass('disable');

                        $('#Result_Motif_Top,#Result_Top,#Result_Jacket,#Result_Necklace').attr('src', "avatar-creator/UI/reset.png");

                        if ($('.genre.Women.active').hasClass('active')) {
                            $('#Result_Costums').attr('src', 'avatar-creator/images/Costums/' + item + '/Women/' + $(this).attr("data-element") + '.png');
                        } else {
                            $('#Result_Costums').attr('src', 'avatar-creator/images/Costums/' + item + '/Men/' + $(this).attr("data-element") + '.png');
                        }
                    }
                });
            }
            change_with_sex('Skin', false);
            change_with_sex('Motif_Top', false);
            change_with_sex('Christmas', true);
            change_with_sex('Job', true);
            change_with_sex('Medieval', true);

            /*--------------------------------------------------------------------------*/

            function change_with_color_and_sex(item) {

                $('#Vignettes-' + item + ' .vignette:first').addClass('active');

                $('#Vignettes-' + item + ' .vignette').click(function () {

                    $('#Vignettes-' + item + ' .vignette.active').removeClass('active');
                    $(this).addClass('active');

                    /*Change with sex*/
                    if ($('.genre.Women.active').hasClass('active')) {
                        $('#Result_' + item).attr('src', 'avatar-creator/images/' + item + '/Women/' + $(this).attr("data-element") +
                            '/' + $('#Vignettes-' + item + '-color .color' + item + '.active').attr("data-color") + '.png');
                    } else {
                        $('#Result_' + item).attr('src', 'avatar-creator/images/' + item + '/Men/' + $(this).attr("data-element") +
                            '/' + $('#Vignettes-' + item + '-color .color' + item + '.active').attr("data-color") + '.png');
                    }
                });
                $('#Vignettes-' + item + '-color .color' + item).click(function () {

                    $('#Vignettes-' + item + '-color .color' + item).removeClass('active');
                    $(this).addClass('active');

                    /*Change vignette color**/
                    for (var i = 1; i < $('#Vignettes-' + item + " .vignette_col").length + 1; i++) {
                        $('#Vignettes-' + item + ' .vignette_col:nth-child(' + i + ') img').attr("src", "avatar-creator/images/" + item + "/Men/" + i + "/" + $('#Vignettes-' + item + '-color .color-item.active').attr('data-color') + ".png");
                    }

                    /*Change with sex*/
                    if ($('.genre.Women.active').hasClass('active')) {
                        $('#Result_' + item).attr('src', 'avatar-creator/images/' + item + '/Women/' + $('#Vignettes-' + item + ' .vignette.active').attr("data-element") +
                            '/' + $(this).attr("data-color") + '.png');


                    } else {

                        $('#Result_' + item).attr('src', 'avatar-creator/images/' + item + '/Men/' + $('#Vignettes-' + item + ' .vignette.active').attr("data-element") +
                            '/' + $(this).attr("data-color") + '.png');
                    }
                });
            };

            change_with_color_and_sex('Top');
            change_with_color_and_sex('Jacket');



            /*-------------HAIR-------------*/
            /*Change with colors*/
            function change_hair(size) {
                $('#Vignettes-Hair-' + size + ' img:first').addClass('active');

                /*Change shape*/
                $('#Vignettes-Hair-' + size + ' .vignette').click(function () {
                    $('#Vignettes-Hair-' + size + ' .vignette.active').removeClass('active');
                    $(this).addClass('active');
                    $('#Result_Hair').attr('src', 'avatar-creator/images/Hair/' + size +
                        '/' + $(this).attr("data-element") + '/' + $('#Vignettes-Hair-color .colorHair.active').attr("data-color") + '.png');
                    $('#Result_Hair_Back').attr('src', 'avatar-creator/images/Hair_Back/' + size +
                        '/' + $(this).attr("data-element") + '/' + $('#Vignettes-Hair-color .colorHair.active').attr("data-color") + '.png');

                    $('#Result_Hair,#Result_Hair_Back').attr('data-size', size);
                });
                /*Change color*/
                $('#Vignettes-Hair-color .colorHair').click(function () {
                    $('#Vignettes-Hair-color .colorHair').removeClass('active');
                    $(this).addClass('active');


                    /*Change vignette color**/
                    for (var i = 1; i < $('#Vignettes-Hair-' + size + ' .vignette_col').length + 1; i++) {
                        $('#Vignettes-Hair-' + size + ' .vignette_col:nth-child(' + i + ') img[data-vignette-item="Hair"]').attr("src", "avatar-creator/images/Hair/" + size + "/" + i + "/" + $('.colorHair.active').attr('data-color') + ".png");
                        $('#Vignettes-Hair-' + size + ' .vignette_col:nth-child(' + i + ') img[data-vignette-item="Hair_Back"]').attr("src", "avatar-creator/images/Hair_Back/" + size + "/" + i + "/" + $('.colorHair.active').attr('data-color') + ".png");
                    }

                    /*Change result */
                    $('#Result_Hair').attr('src', 'avatar-creator/images/Hair/' + $('#Result_Hair,#Result_Hair_Back').attr('data-size') +
                        '/' + $('#Vignettes-Hair-' + $('#Result_Hair,#Result_Hair_Back').attr('data-size') + ' .vignette.active').attr("data-element") + '/' + $(this).attr("data-color") + '.png');
                    $('#Result_Hair_Back').attr('src', 'avatar-creator/images/Hair_Back/' + $('#Result_Hair,#Result_Hair_Back').attr('data-size') +
                        '/' + $('#Vignettes-Hair-' + $('#Result_Hair,#Result_Hair_Back').attr('data-size') + ' .vignette.active').attr("data-element") + '/' + $(this).attr("data-color") + '.png');

                    $('#Result_Hair,#Result_Hair_Back').attr('data-color', $(this).attr('data-color'));
                });
            }





            change_hair('shaved');
            change_hair('very_short');
            change_hair('short');
            change_hair('medium');
            change_hair('long');



            /*-------------HAT-------------*/
            function change_hat(item) {
                /*Change shape*/
                $('#Vignettes-' + item + ' .vignette:first').addClass('active');
                $('#Vignette-Hat-color').fadeOut();

                $('#Vignettes-' + item + ' .vignette').click(function () {
                    $('#Section-Hair').addClass('disable');
                    $('#Vignettes-' + item + ' .vignette.active').removeClass('active');
                    $(this).addClass('active');
                    $('#Result_Hat').attr('src', 'avatar-creator/images/' + item + '/' + $(this).attr("data-element") +
                        '/Shape/' + $('#Vignette-Hat-color .color-item.active').attr("data-color") + '.png');
                    $('#Result_Hat_Back').attr('src', 'avatar-creator/images/' + item + '/' + $(this).attr("data-element") +
                        '/Shape_Back/' + $('#Vignette-Hat-color .color-item.active').attr("data-color") + '.png');

                    if ($('#Result_Hair').attr('data-size') == "long" || $('#Result_Hair').attr('data-size') == "medium" || $('#Result_Hair').attr('data-size') == "short") {

                        $('#Result_Hat_Hair').attr('src', 'avatar-creator/images/' + item + '/' + $(this).attr("data-element") +
                            '/Hair/' + $('#Result_Hair').attr('data-size') + '/' + $('#Result_Hair').attr('data-color') + '.png');
                        $('#Result_Hat_Hair_Back').attr('src', 'avatar-creator/images/' + item + '/' + $(this).attr("data-element") +
                            '/Hair_Back/' + $('#Result_Hair').attr('data-size') + '/' + $('#Result_Hair').attr('data-color') + '.png');
                    }

                    if ($('#Result_Hair').attr('data-size') == "very_short") {

                        $('#Result_Hat_Hair').attr('src', 'avatar-creator/images/' + item + '/' + $(this).attr("data-element") +
                            '/Hair/very_short/' + $('#Result_Hair').attr('data-color') + '.png');
                        $('#Result_Hat_Hair_Back').attr('src', "avatar-creator/UI/reset.png");
                    }

                    if ($('#Result_Hair').attr('data-size') == "shaved") {
                        $('#Result_Hat_Hair').attr('src', 'avatar-creator/images/Hair/shaved/' + $('#Vignettes-Hair-shaved .vignette.active').attr('data-element') +
                            '/' + $('#Result_Hair').attr('data-color') + '.png');
                        $('#Result_Hat_Hair_Back').attr('src', "avatar-creator/UI/reset.png");
                    }
                    /*Show Options*/
                    $('#Vignette-Hat-color').fadeIn();

                    /*SAVE*/
                    if (!$('#Section-Hair').hasClass('item-save')) {
                        $('#Section-Hair').addClass('item-save');
                        $('#Result_Hair').attr('data-src-store', $('#Result_Hair').attr('src'));
                        $('#Result_Hair_Back').attr('data-src-store', $('#Result_Hair_Back').attr('src'));
                        $('#Result_Hair,#Result_Hair_Back').attr('src', "avatar-creator/UI/reset.png");
                    }
                });
                /*Change color Rainbow*/
                $('#Vignette-Hat-color .color-item').click(function () {
                    // $('#Section-Hair').addClass('disable');
                    $('#Vignette-Hat-color .color-item').removeClass('active');
                    $(this).addClass('active');
                    /*Change vignette color**/
                    for (var i = 1; i < $('#Vignettes-' + item + " .vignette_col").length + 1; i++) {
                        $('#Vignettes-' + item + ' .vignette_col:nth-child(' + i + ') img[data-vignette-item="Hat"]').attr("src", "avatar-creator/images/Hat/" + i + "/Shape/" + $('.color' + item + '.active').attr('data-color') + ".png");
                        $('#Vignettes-' + item + ' .vignette_col:nth-child(' + i + ') img[data-vignette-item="Hat_Back"]').attr("src", "avatar-creator/images/Hat/" + i + "/Shape_Back/" + $('.color' + item + '.active').attr('data-color') + ".png");
                    }

                    /*Change result */
                    $('#Result_Hat').attr('src', 'avatar-creator/images/' + item + '/' + $('#Vignettes-' + item + ' .vignette.active').attr("data-element") +
                        '/Shape/' + $(this).attr("data-color") + '.png');
                    $('#Result_Hat_Back').attr('src', 'avatar-creator/images/' + item + '/' + $('#Vignettes-' + item + ' .vignette.active').attr("data-element") +
                        '/Shape_Back/' + $(this).attr("data-color") + '.png');
                });
            }

            change_hat("Hat");


            /*--------------------------------------------------------------------------*/
            /*-------------Beard-Mustache-------------*/

            /*Changer la forme des Beards*/
            $('#Vignettes-Beard .vignette').click(function () {
                $('#Vignettes-Beard .vignette.active').removeClass('active');
                $(this).addClass('active');
                $('#Result_Beard').attr('src', 'avatar-creator/images/Beard/' + $(this).attr("data-element") +
                    '/' + $('#Vignettes-Beard-Mustache-color .colorMustache.active').attr("data-color") + '.png');
            });
            /*Changer la forme des Mustaches*/
            $('#Vignettes-Mustache .vignette').click(function () {
                $('#Vignettes-Mustache .vignette.active').removeClass('active');
                $(this).addClass('active');
                $('#Result_Mustache').attr('src', 'avatar-creator/images/Mustache/' + $(this).attr("data-element") +
                    '/' + $('#Vignettes-Beard-Mustache-color .colorMustache.active').attr("data-color") + '.png');
            });

            /*Changer la couleur des Beards et Mustaches*/
            $('#Vignettes-Beard-Mustache-color .colorMustache').click(function () {
                $('#Vignettes-Beard-Mustache-color .colorMustache').removeClass('active');
                $(this).addClass('active');
                if ($('#Vignettes-Mustache .vignette').hasClass('active')) {

                    var Mustache_result = 'avatar-creator/images/Mustache/' + $('#Vignettes-Mustache .vignette.active').attr("data-element") +
                        '/' + $(this).attr("data-color") + '.png';
                } else {
                    var Mustache_result = 'avatar-creator/UI/reset.png';
                }
                if ($('#Vignettes-Beard .vignette').hasClass('active')) {
                    var Beard_result = 'avatar-creator/images/Beard/' + $('#Vignettes-Beard .vignette.active').attr("data-element") +
                        '/' + $(this).attr("data-color") + '.png';
                } else {
                    var Beard_result = 'avatar-creator/UI/reset.png';
                }


                $('#Result_Mustache').attr('src', Mustache_result);
                $('#Result_Beard').attr('src', Beard_result);
            });


            /*-------------Background-------------*/
            /*Changer la couleur du Background*/
            /*motif*/
            $('#Vignettes-Background .vignette').click(function () {
                $('#Result_Background_motif').attr('src', 'avatar-creator/images/Background/motifs/' + $(this).attr("data-element") + '.png');
            });


            /*couleurs*/
            $('#Vignettes-Background-color .colorBackground').click(function () {



                $('#Vignettes-Background-color .colorBackground').removeClass('active');
                $(this).addClass('active');
                $('#Result_Background').attr('src', 'avatar-creator/images/Background/color/' + $(this).attr("data-color") + '.png');
                $('div#Vignettes-Background div.vignette img').css('Background-color', $(this).css("Background-color"));
            });
        }
    });
})(jQuery);