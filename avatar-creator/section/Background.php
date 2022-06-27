<!-------------------------------------Background--------------------------------------->
<section id="Section-Background">
  <div class="mx-2 row section-vignettes withcolor" id="Vignettes-Background">
    <?php
            
            $F_top = glob("avatar-creator/images/Background/motifs/*.png");
                  $C_top = count($F_top);
                  for ($i = 1; $i <= $C_top; $i++) {
                    echo '<div class="col-xl-3 col-lg-4 col-md-4 col-sm-6 col-xs-6 p-0 vignette_col"><div class="m-2 vignette" data-element="';
                    echo $i;
                    echo '">';
                    echo '<img loading="lazy"alt="Avatar Vignette background" src="avatar-creator/images/Background/motifs/';
                    echo $i;
                    echo '.png"> </div></div>';
                }
             ?>

  </div>
  <div class="vignettes-color" id="Vignettes-Background-color">
    <span><i class="fas fa-eye-dropper"></i></span>
    <?php 
        for ($i = 0; $i < $length_rainbowcolor; $i++) {
          echo '<div class="colorBackground color-item" data-color="';
          echo $i + 1 ;
          echo '" style="background-color:';
          echo $rainbowcolor[$i];
          echo '"></div>';
        }
            ?>
    <div class="colorBackground reset color-item" data-color="1"><i class="fa fa-trash"></i></div>

  </div>
</section>