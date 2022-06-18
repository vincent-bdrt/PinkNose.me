<!----------------------------------Makeup----------------------------------------->
<section id="Section-Makeup">
    <div class="mx-2 row section-vignettes" id="Vignettes-Makeup">

        <?php $F_Makeup = glob("avatar-creator/images/Makeup/*.png");
        $C_Makeup = count($F_Makeup);
        for ($i = 1; $i <= $C_Makeup; $i++) {
            echo '<div class="col-xl-3 col-lg-4 col-md-4 col-sm-6 col-xs-6 p-0 vignette_col"><div class="m-2 vignette" data-element="'.$i.'">';
            echo '<img src="avatar-creator/images/Makeup/'.$i.'.png" alt="Avatar Vignette" class="zindex-1"> ';
            echo '<img src="avatar-creator/images/Eyes/1.png" alt="Avatar Vignette" class="zindex-2">';
            echo '<img src="avatar-creator/UI/Base.png" alt="Avatar Vignette" class="zindex-0">';
            echo '</div></div>';
    }
    ?>
    </div>
</section>