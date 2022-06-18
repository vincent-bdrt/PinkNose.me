<!-------------------------------------Eyebrow-------------------------------------->
<section id="Section-Eyebrow">
    <div class="mx-2 row section-vignettes zoom-face" id="Vignettes-Eyebrow">
        <?php
            $F_Eyebrow = glob("avatar-creator/images/Eyebrow/*", GLOB_ONLYDIR);
            $C_Eyebrow = count($F_Eyebrow);
            for ($i = 1; $i <= $C_Eyebrow; $i++) {
                echo '<div class="col-xl-3 col-lg-4 col-md-4 col-sm-6 col-xs-6 p-0 vignette_col"><div class="m-2 vignette" data-element="'.$i.'">';
                echo '<img src="avatar-creator/images/Eyebrow/'. $i.'/1.png" data-vignette-item="Eyebrow" alt="Avatar Vignette" class="zindex-2">';
                echo '<img src="avatar-creator/images/Eyes/1.png" alt="Avatar Vignette" class="zindex-1">';
                echo '<img src="avatar-creator/UI/Base.png" alt="Avatar Vignette" class="zindex-0">';
                echo '</div></div>';
          }
        ?>

    </div>
    <div class="vignettes-color" id="Vignettes-Eyebrow-color">
    <span><i class="fas fa-eye-dropper"></i></span>
        <?php 
            for ($i = 0; $i < $length_haircolor; $i++) {
                echo '<div class="colorEyebrow color-item" data-color="';
                echo $i + 1 ;
                echo '" style="background-color:';
                echo $haircolor[$i];
                echo '"></div>';
                }
            ?>
    </div>
</section>