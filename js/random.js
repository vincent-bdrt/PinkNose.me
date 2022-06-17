/**
 * @file
 * Global utilities.
 *
 */

$(document).ready(function () {

    function randomIntFromInterval(min, max) {
        return Math.floor(Math.random() * (max - min + 1) + min)
    }

    function Generate_Random(item) {
        var Count_item = $('#Vignettes-' + item + ' .vignette_col').length;
        var Random_item = randomIntFromInterval(1, Count_item);
        $('#Result_' + item).attr('src', 'avatar-creator/images/' + item + '/' + Random_item + '.png');
    }

    $('#Random').click(function () {
        $('#Reinitialiser').click();
        $('#Section-Hat .reset').click();
        $('#Section-Costums .reset').click();
        /*--*/
        var Random_skin = randomIntFromInterval(1, 8);
        if ($('.genre.Women.active').hasClass('active')) {
            $('#Result_Skin').attr('src', 'avatar-creator/images/Skin/Women/' + Random_skin + '.png');
        } else {
            $('#Result_Skin').attr('src', 'avatar-creator/images/Skin/Men/' + Random_skin + '.png');
        }

        /*--*/
        var Random_Color_Hair = randomIntFromInterval(1, 15);
        var Shape_hair = randomIntFromInterval(1, 5);

        switch (Shape_hair) {
            case 1:
                Shape_hair = "shaved";
                var Count_hair = $('#Vignettes-Hair-'+Shape_hair+' .vignette_col').length;
                var Random_hair = randomIntFromInterval(1, Count_hair);
                console.log(Shape_hair);
                console.log(Count_hair);
                console.log(Random_hair);
              break;
            case 2:
                Shape_hair = "very_short";
                var Count_hair = $('#Vignettes-Hair-'+Shape_hair +' .vignette_col').length;
                var Random_hair = randomIntFromInterval(1, Count_hair);
                console.log(Shape_hair);
                console.log(Count_hair);
                console.log(Random_hair);
              break;
            case 3:
                Shape_hair = "short";
                var Count_hair = $('#Vignettes-Hair-'+Shape_hair +' .vignette_col').length;
                var Random_hair = randomIntFromInterval(1, Count_hair);
                console.log(Shape_hair);
                console.log(Count_hair);
                console.log(Random_hair);
              break;
            case 4:
                Shape_hair = "medium";
                var Count_hair = $('#Vignettes-Hair-'+Shape_hair +' .vignette_col').length;
                var Random_hair = randomIntFromInterval(1, Count_hair);
                console.log(Shape_hair);
                console.log(Count_hair);
                console.log(Random_hair);
              break;
            case 5:
                Shape_hair = "long";
                var Count_hair = $('#Vignettes-Hair-'+Shape_hair +' .vignette_col').length;
                var Random_hair = randomIntFromInterval(1, Count_hair);
                console.log(Shape_hair);
                console.log(Count_hair);
                console.log(Random_hair);
          }
        $('#Result_Hair').attr('src', 'avatar-creator/images/Hair/' + Shape_hair + '/' +  Random_hair + '/' + Random_Color_Hair + '.png');
        $('#Result_Hair_Back').attr('src', 'avatar-creator/images/Hair_Back/'+ Shape_hair + '/' +  Random_hair + '/' + Random_Color_Hair + '.png');
        /*--*/
        if ($('.genre.Men.active').hasClass('active')) {
            var Random_Beard_YN = randomIntFromInterval(1, 2); // Yes = 1 (1 chance sur 2)
            var Random_Mustache_YN = randomIntFromInterval(1, 2); // Yes = 1 (1 chance sur 2)

            var Count_Beard = $('#Vignettes-Beard .vignette_col').length;
            var Random_Beard = randomIntFromInterval(1, Count_Beard);
            var Count_Mustache = $('#Vignettes-Mustache .vignette_col').length;
            var Random_Mustache = randomIntFromInterval(1, Count_Mustache);
            if (Random_Mustache_YN == 1) {
                $('#Result_Mustache').attr('src', 'avatar-creator/images/Mustache/' + Random_Mustache + '/' + Random_Color_Hair + '.png');
            }
            if (Random_Beard_YN == 1) {
                $('#Result_Beard').attr('src', 'avatar-creator/images/Beard/' + Random_Beard + '/' + Random_Color_Hair + '.png');
            }
        }
        /*--*/
        var Random_Glasses_YN = randomIntFromInterval(1, 5); // Yes = 1 (1 chance sur 5)
        var Count_Glasses = $('#Vignettes-Glasses .vignette_col').length;
        var Random_Glasses = randomIntFromInterval(1, Count_Glasses);
        var Random_Color_Glasses = randomIntFromInterval(1, 40);
        if (Random_Glasses_YN == 1) {
            $('#Result_Glasses').attr('src', 'avatar-creator/images/Glasses/' + Random_Glasses + '/' + Random_Color_Glasses + '.png');
            $('#Result_Glasses_Back').attr('src', 'avatar-creator/images/Glasses_Back/' + Random_Glasses + '/' + Random_Color_Glasses + '.png');
        }
        /*--*/
        var Random_Necklace_YN = randomIntFromInterval(1, 5); // Yes = 1 (1 chance sur 5)
        var Count_Necklace = $('#Vignettes-Necklace .vignette_col').length;
        var Random_Necklace = randomIntFromInterval(1, Count_Necklace);
        var Random_Color_Necklace = randomIntFromInterval(1, 40);
        if (Random_Necklace_YN == 1) {
            $('#Result_Necklace').attr('src', 'avatar-creator/images/Necklace/' + Random_Necklace + '/' + Random_Color_Necklace + '.png');
        }
        /*--*/
        var Random_Earring_YN = randomIntFromInterval(1, 5); // Yes = 1 (1 chance sur 5)
        var Count_Earring = $('#Vignettes-Earring .vignette_col').length;
        var Random_Earring = randomIntFromInterval(1, Count_Earring);
        var Random_Color_Earring = randomIntFromInterval(1, 40);
        if (Random_Earring_YN == 1) {
            $('#Result_Earring').attr('src', 'avatar-creator/images/Earring/' + Random_Earring + '/' + Random_Color_Earring + '.png');
        }

        var Count_Top = $('#Vignettes-Top .vignette_col').length;
        var Random_Top = randomIntFromInterval(1, Count_Top);
        var Random_Color_Top = randomIntFromInterval(1, 40);

        if ($('.genre.Women.active').hasClass('active')) {
            $('#Result_Top').attr('src', 'avatar-creator/images/Top/Women/' + Random_Top + '/' + Random_Color_Top + '.png');

        } else {
            $('#Result_Top').attr('src', 'avatar-creator/images/Top/Men/' + Random_Top + '/' + Random_Color_Top + '.png');
        }

        var Random_Jacket_YN = randomIntFromInterval(1, 4); // Yes = 1 (1 chance sur 4)
        var Count_Jacket = $('#Vignettes-Jacket .vignette_col').length;
        var Random_Jacket = randomIntFromInterval(1, Count_Jacket);
        var Random_Color_Jacket = randomIntFromInterval(1, 40);
        if (Random_Jacket_YN == 1) {
            if ($('.genre.Women.active').hasClass('active')) {
                $('#Result_Jacket').attr('src', 'avatar-creator/images/Jacket/Women/' + Random_Jacket + '/' + Random_Color_Jacket + '.png');
            } else {
                $('#Result_Jacket').attr('src', 'avatar-creator/images/Jacket/Men/' + Random_Jacket + '/' + Random_Color_Jacket + '.png');
            }
        }



        var Count_Background = $('#Vignettes-Background .vignette_col').length;
        var Random_Background = randomIntFromInterval(1, Count_Background);
        var Random_Color_Background = randomIntFromInterval(1, 40);
        $('#Result_Background').attr('src', 'avatar-creator/images/Background/color/' + Random_Color_Background + '.png');
        $('#Result_Background_motif').attr('src', 'avatar-creator/images/Background/motifs/' + Random_Background + '.png');
        Generate_Random('Mouth');
    });

});