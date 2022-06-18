  <!-------------------------------------Nose----------------------------------------->
  <section id="Section-Nose">
      <div class="mx-2 row section-vignettes vignette-default" id="Vignettes-Nose">

          <?php $F_Nose = glob("avatar-creator/images/Nose/*.png");
                  $C_Nose = count($F_Nose);
                  for ($i = 1; $i <= $C_Nose; $i++) {
                    echo '<div class="col-xl-3 col-lg-4 col-md-4 col-sm-6 col-xs-6 p-0 vignette_col"><div class="m-2 vignette" data-element="'.$i.'">';
                    echo '<img alt="Avatar Vignette Nose" src="avatar-creator/images/Nose/'.$i.'.png">';
                    echo '</div></div>';
                }
             ?>
      </div>
  </section>