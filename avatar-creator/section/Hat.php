 <!-----------------------------------Hat------------------------------------->
 <section id="Section-Hat">
     <ul class="nav nav-pills">
         <li id="Section-Hat" class="active">
             <a data-toggle="pill" href="#collapseHat">Classiques
                 <div class="reset color-item mr-0 ml-3" data-color="1"><i class="fa fa-trash"></i></div></a>
         </li>
         <!-- <li id="Section-Hat_Costums" class="ml-3">
             <a data-toggle="pill" href="#collapseHat_Costums">Costumes
                 <div class="reset color-item mr-0 ml-3" data-color="1"><i class="fa fa-trash"></i></div></a>
         </li>-->
     </ul>

     <div class="tab-content">
         <div id="collapseHat" class="tab-pane active">
             <div class="mx-2 row section-vignettes withsubpart" id="Vignettes-Hat">

                 <?php
                    $F_Hat = glob("avatar-creator/images/Hat/*", GLOB_ONLYDIR);
                    $C_Hat = count($F_Hat);
                    for ($i = 1; $i <= $C_Hat; $i++) {
                        echo '<div class="col-xl-3 col-lg-4 col-md-4 col-sm-6 col-xs-6 p-0 vignette_col"><div class="m-2 vignette" data-element="'.$i.'">';
                        echo '<img data-vignette-item="Hat" src="avatar-creator/images/Hat/'.$i.'/Shape/1.png" class="zindex-4"> ';
                        echo '<img src="avatar-creator/UI/Base.png" class="zindex-3">';
                        echo '<img data-vignette-item="Hat_Back" src="avatar-creator/images/Hat/'.$i.'/Shape_Back/1.png" class="zindex-2">';
                        echo '</div></div>';
                    }
                    ?>
             </div>



             <div class="vignettes-color" id="Vignette-Hat-color">
             <span><i class="fas fa-eye-dropper" aria-hidden="true"></i></span>
                                <?php 
            for ($i = 0; $i < $length_rainbowcolor; $i++) {
                echo '<div class="colorHat color-item" data-color="';
                echo $i + 1 ;
                echo '" style="background-color:';
                echo $rainbowcolor[$i];
                echo '"></div>';
            }
            ?>

                 </div></div>
 </section>