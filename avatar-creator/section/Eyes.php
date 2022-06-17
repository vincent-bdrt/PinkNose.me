<!-------------------------------------Eyes----------------------------------------->
<section id="Section-Eyes">
    <div class="mx-2 row section-vignettes vignette-default" id="Vignettes-Eyes">

        <?php $F_Eyes = glob("avatar-creator/images/Eyes/*.png");
                  $C_Eyes = count($F_Eyes);
                  for ($i = 1; $i <= $C_Eyes; $i++) {
                    echo '<div class="col-xl-3 col-lg-4 col-md-4 col-sm-6 col-xs-6 p-0 vignette_col"><div class="m-2 vignette" data-element="'.$i.'">';
                    echo '<img src="avatar-creator/images/Eyes/'.$i.'.png">';
                    echo '</div></div>';
                }
             ?>
    </div>
</section>