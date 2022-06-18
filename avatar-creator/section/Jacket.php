    <!-------------------------------------Jacket--------------------------------------->
    <section id="Section-Jacket">
        <div class="disable-message"><p>Vous portez un costume.</p>
        <div class="remove-costum-button"><i class="fa fa-trash mr-2 reset color-item"></i>Supprimer le costume </div></div>
        <div class="mx-2 row section-vignettes withcolor vignette-default" id="Vignettes-Jacket">
        
            <?php
            
            $F_Jacket = glob("avatar-creator/images/Jacket/Men/*", GLOB_ONLYDIR);
                  $C_Jacket = count($F_Jacket);
                  for ($i = 1; $i <= $C_Jacket; $i++) {
                    echo '<div class="col-xl-3 col-lg-4 col-md-4 col-sm-6 col-xs-6 p-0 vignette_col"><div class="m-2 vignette" data-element="'.$i.'">';
                    echo '<img alt="Avatar Vignette jacket" src="avatar-creator/images/Jacket/Men/'.$i.'/1.png">';
                    echo '</div></div>';
                }
             ?>

        </div>
        <div class="vignettes-color" id="Vignettes-Jacket-color">
        <span><i class="fas fa-eye-dropper"></i></span>
            <?php 
            for ($i = 0; $i < $length_rainbowcolor; $i++) {
                echo '<div class="colorJacket color-item" data-color="';
                echo $i + 1 ;
                echo '" style="background-color:';
                echo $rainbowcolor[$i];
                echo '"></div>';
            }
            ?>
            <div class="colorJacket reset color-item" data-color="1"><i class="fa fa-trash"
                    ></i></div>
        </div>
    </section>