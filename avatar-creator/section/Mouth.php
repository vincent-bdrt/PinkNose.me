<!-------------------------------------Mouth----------------------------------------->
<section id="Section-Mouth">
    <div class="mx-2 row section-vignettes vignette-default" id="Vignettes-Mouth">

        <?php $F_Mouth = glob("avatar-creator/images/Mouth/*.png");
        $C_Mouth = count($F_Mouth);
        for ($i = 1; $i <= $C_Mouth; $i++) {
        echo '<div class="col-xl-3 col-lg-4 col-md-4 col-sm-6 col-xs-6 p-0 vignette_col"><div class="m-2 vignette" data-element="';
echo $i;
echo '">';
        echo '<img src="avatar-creator/images/Mouth/';
        echo $i;
        echo '.png" ></div></div>';
    }
    ?>
    </div>
</section>