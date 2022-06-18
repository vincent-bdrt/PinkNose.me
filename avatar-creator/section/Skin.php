<!----------------------------------Skin--------------------------------------->

<section id="Section-Skin">
    <div class="mx-2 row section-vignettes" id="Vignettes-Skin">
        <?php $F_Skin = glob("avatar-creator/images/Skin/Men/*.png");
                  $C_Skin = count($F_Skin);
                  for ($i = 1; $i <= $C_Skin; $i++) {
                    echo '<div class="col-xl-3 col-lg-4 col-md-4 col-sm-6 col-xs-6 p-0 vignette_col"><div class="m-2 vignette" data-element="'.$i.'">';
                    echo '<img alt="Avatar Vignette Skin" src="avatar-creator/images/Skin/Men/'.$i.'.png">';
                    echo '</div></div>';
                }
             ?>
    </div>
</section>