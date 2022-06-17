 <!-----------------------------------Accessory------------------------------------->
 <section id="Section-Accessory">
     <ul class="nav nav-pills">
         <li id="Section-Glasses" class="active ">
             <a data-toggle="pill" href="#collapseGlasses">Lunettes
                 <div class="reset color-item mr-0 ml-3" data-color="1"><i class="fa fa-trash"></i></div></a>
         </li>
         <li id="Section-Necklace" class="ml-3">
             <a data-toggle="pill" href="#collapseNecklace">Colliers
                 <div class="reset color-item mr-0 ml-3" data-color="1"><i class="fa fa-trash"></i></div></a>
         </li>
         <li id="Section-Earring" class="ml-3 ">
             <a data-toggle="pill" href="#collapseEarring">Boucles d'oreille
                 <div class="reset color-item mr-0 ml-3" data-color="1"><i class="fa fa-trash"></i></div></a>
         </li>
     </ul>

     <div class="tab-content">
         <div id="collapseGlasses" class="tab-pane active">
             <div class="mx-2 row section-vignettes withsubpart zoom-face" id="Vignettes-Glasses">

                 <?php
                    $F_Glasses = glob("avatar-creator/images/Glasses/*", GLOB_ONLYDIR);
                    $C_Glasses = count($F_Glasses);
                    for ($i = 1; $i <= $C_Glasses; $i++) {
                    echo '<div class="col-xl-3 col-lg-4 col-md-4 col-sm-6 col-xs-6 p-0 vignette_col"><div class="m-2 vignette" data-element="'.$i.'">';
                    echo '<img data-vignette-item="Glasses" src="avatar-creator/images/Glasses/'.$i.'/1.png" class="zindex-4"> ';
                    echo '<img src="avatar-creator/images/Nose/1.png" class="zindex-3">';
                    echo '<img src="avatar-creator/images/Glasses_Back/'. $i.'/1.png" data-vignette-item="Glasses_Back" class="zindex-2">';
                    echo '<img src="avatar-creator/images/Eyes/1.png" class="zindex-1">';
                    echo '<img src="avatar-creator/UI/Base.png" class="zindex-0">';
                    echo '</div></div>';
                    }
                    ?>
             </div>
             <div class="vignettes-color" id="Vignettes-Glasses-color">
                 <span><i class="fas fa-eye-dropper"></i></span>
                 <?php 
                    for ($i = 0; $i < $length_rainbowcolor; $i++) {
                    echo '<div class="colorGlasses color-item" data-color="';
                    echo $i + 1 ;
                    echo '" style="background-color:';
                    echo $rainbowcolor[$i];
                    echo '"></div>';
                    }
                ?>
             </div>
         </div>

         <div id="collapseNecklace" class="tab-pane">
             <div class="disable-message">
                 <p>Vous portez un costume.</p>
             </div>
             <div class="mx-2 row section-vignettes withsubpart vignette-default" id="Vignettes-Necklace">
                 <?php
                    $F_Necklace = glob("avatar-creator/images/Necklace/*", GLOB_ONLYDIR);
                    $C_Necklace = count($F_Necklace);
                    for ($i = 1; $i <= $C_Necklace; $i++) {
                        echo '<div class="col-xl-3 col-lg-4 col-md-4 col-sm-6 col-xs-6 p-0 vignette_col"><div class="m-2 vignette" data-element="'.$i.'">';
                        echo '<img data-vignette-item="Necklace" src="avatar-creator/images/Necklace/'.$i.'/1.png"> ';
                        echo '</div></div>';
                    }
                ?>
             </div>
             <div class="vignettes-color" id="Vignettes-Necklace-color">
                 <span><i class="fas fa-eye-dropper"></i></span>
                 <?php 
                        for ($i = 0; $i <  $length_rainbowcolor; $i++) {
                        echo '<div class="colorNecklace color-item" data-color="';
                        echo $i + 1 ;
                        echo '" style="background-color:';
                        echo $rainbowcolor[$i];
                        echo '"></div>';
                        }
                        ?>
             </div>
         </div>
         <div id="collapseEarring" class="tab-pane ">
             <div class="mx-2 row section-vignettes withsubpart vignette-default zoom-face" id="Vignettes-Earring">
                 <?php          
           $F_Earring = glob("avatar-creator/images/Earring/*", GLOB_ONLYDIR);
           $C_Earring = count($F_Earring);
           for ($i = 1; $i <= $C_Earring; $i++) {
            echo '<div class="col-xl-3 col-lg-4 col-md-4 col-sm-6 col-xs-6 p-0 vignette_col"><div class="m-2 vignette" data-element="'.$i.'">';
            echo '<img data-vignette-item="Earring" src="avatar-creator/images/Earring/'.$i.'/1.png"> ';
            echo '</div></div>';
       }
   ?>
             </div>
             <div class="vignettes-color" id="Vignettes-Earring-color">
                 <span><i class="fas fa-eye-dropper"></i></span>
                 <?php 
                        for ($i = 0; $i <  $length_rainbowcolor; $i++) {
                        echo '<div class="colorEarring color-item" data-color="';
                        echo $i + 1 ;
                        echo '" style="background-color:';
                        echo $rainbowcolor[$i];
                        echo '"></div>';
                        }
                    ?>
             </div>
         </div>

     </div>
 </section>