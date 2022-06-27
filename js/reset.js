$(document).ready(function () {

    /*------------GLOBAL-RESET-------------*/
    $('#Reinitialiser').click(function () {
        $('#Result_Skin').attr('src', "avatar-creator/images/Skin/Men/1.png");
        $('#Result_Eyes').attr('src', "avatar-creator/images/Eyes/1.png");
        $('#Result_Nose').attr('src', "avatar-creator/images/Nose/1.png");
        $('#Result_Mouth').attr('src', "avatar-creator/images/Mouth/1.png");
        $('#Result_Eyebrow').attr('src', "avatar-creator/images/Eyebrow/1/1.png");
        $('#Result_Background,#Result_Makeup,#Result_Spot,#Result_Glasses,#Result_Glasses_Back,#Result_Hair_Back,#Result_Hat_Back,#Result_Background_motif,#Result_Earring,#Result_Necklace,#Result_Top,#Result_Jacket,#Result_Hair,#Result_Mustache,#Result_Beard,#Result_Costums,#Result_Hat_Hair_Back,#Result_Hat_Hair,#Result_Hat').attr('src', "avatar-creator/UI/reset.png");
    });



    /*Reset function for specific item*/
    function reset_click(item) {
        $('#Section-' + item + ' .reset').click(function () {
            $('#Result_' + item).attr('src', "avatar-creator/UI/reset.png");
            if (item === "Hair" || item === "Glasses") {
                $('#Result_' + item + '_Back').attr('src', "avatar-creator/UI/reset.png");
            }
            if (item === "Background") {
                $('#Result_' + item + '_motif').attr('src', "avatar-creator/UI/reset.png");

            }
            $('.color' + item + ',#Vignettes' + item + ' img.active').removeClass('active');
            $('.color' + item + '[data-color="1"]').addClass('active');
        })

    }

    function reset_hat(item) {
        $('#Section-' + item + ' .reset').click(function () {
            $('#Vignette-Hat-color').fadeOut();
            $('#Vignette-Hat-color .color-item,#Vignette-Hat-color button').removeClass("active");
            $('#Vignette-Hat-color .color-item:first,#Vignette-Hat-color button:first').addClass("active");
            /*Reset saved item*/
            $('#Section-Hair').removeClass('item-save');
            $('#Result_Hair').attr('src', $('#Result_Hair').attr('data-src-store'));
            $('#Result_Hair_Back').attr('src', $('#Result_Hair_Back').attr('data-src-store'));
            $('#Section-Hair').removeClass('disable');
            /*Reset Hat*/
            $('#Section-Hat .vignette img.active').removeClass('active');
            $('#Result_Hat_Hair_Back').attr('src', "avatar-creator/UI/reset.png");
            $('#Result_Hat_Hair').attr('src', "avatar-creator/UI/reset.png");
            $('#Result_Hat_Back').attr('src', "avatar-creator/UI/reset.png");
            $('#Result_Hat').attr('src', "avatar-creator/UI/reset.png");
        })
    };


    /*-----------RESET COSTUMS-----------------*/
    function reset_costum(item) {
        $('#Section-' + item + ' .reset').click(function () {
            $('#Result_Top').attr('src', $('#Result_Top').attr('data-src-store'));
            $('#Result_Jacket').attr('src', $('#Result_Jacket').attr('data-src-store'));
            $('#Result_Necklace').attr('src', $('#Result_Necklace').attr('data-src-store'));
            $('#Section-Top,#Section-Jacket,#collapseNecklace').removeClass('disable');
            $('#Section-Costums .vignette img.active').removeClass('active');
            $('#Section-Top').removeClass('item-save');
            /*-----------*/
            $('#Result_Costums').attr('src', "avatar-creator/UI/reset.png");
        })
    };   


    reset_click("Mustache");
    reset_click("Beard");
    reset_click("Glasses");
    reset_click("Necklace");
    reset_click("Earring");
    reset_click("Jacket");
    reset_click("Top");
    reset_click("Background");

    reset_hat('Hat');
    reset_hat('Hat_Costums');

    reset_costum('Christmas');
    reset_costum('Medieval');
    reset_costum('Job');

    $('.remove-hat-button').click(function () {
        $('#Section-Hat .reset').click();
    });

    $('.remove-costum-button').click(function () {
        $('#Section-Costums .reset').click();
    });

});