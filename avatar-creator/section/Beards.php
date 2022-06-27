 <!-------------------------------------Beards & Mustaches--------------------------------------->
 <section id="Section-Beards">
     <ul class="nav nav-pills">
         <li id="Section-Mustache" class="active " >
              <a data-toggle="pill" href="#collapseMustache">Moustaches 
             <div class="reset color-item mr-0 ml-3" data-color="1"><i class="fa fa-trash"></i></div></a>
         </li>
         <li id="Section-Beard" class="ml-3 ">
             <a data-toggle="pill" href="#collapseBeard">Barbes
             <div class="reset color-item mr-0 ml-3" data-color="1"><i class="fa fa-trash"></i></div></a>
         </li>
     </ul>

     <div class="tab-content">
         <div id="collapseMustache" class="tab-pane active">
             <div class="mx-2 row section-vignettes withsubpart  zoom-face" id="Vignettes-Mustache">

                 <?php
                        $F_Mustache = glob("avatar-creator/images/Mustache/*", GLOB_ONLYDIR);
                        $C_Mustache = count($F_Mustache);
                            for ($i = 1; $i <= $C_Mustache; $i++) {
                                echo '<div class="col-xl-3 col-lg-4 col-md-4 col-sm-6 col-xs-6 p-0 vignette_col"><div class="m-2 vignette" data-element="'.$i.'">';
                                echo '<img loading="lazy"src="avatar-creator/images/Nose/1.png" alt="Avatar Vignette" class="zindex-4">';
                                echo '<img loading="lazy"data-vignette-item="Mustache" src="avatar-creator/images/Mustache/'.$i.'/1.png" alt="Avatar Vignette" class="zindex-3"> ';
                                echo '<img loading="lazy"src="avatar-creator/UI/Base.png" alt="Avatar Vignette" class="zindex-0">';
                                echo '</div></div>';
                        }
                        ?>
             </div>
         </div>

         <div id="collapseBeard" class="tab-pane ">
             <div class="mx-2 row section-vignettes withsubpart vignette-default" id="Vignettes-Beard">
                 <?php          
                            $F_Beard = glob("avatar-creator/images/Beard/*", GLOB_ONLYDIR);
                                    $C_Beard = count($F_Beard);
                                    for ($i = 1; $i <= $C_Beard; $i++) {
                                        echo '<div class="col-xl-3 col-lg-4 col-md-4 col-sm-6 col-xs-6 p-0 vignette_col"><div class="m-2 vignette" data-element="'.$i.'">';
                                        echo '<img loading="lazy"alt="Avatar Vignette Beard" src="avatar-creator/images/Beard/'.$i.'/1.png"> ';
                                        echo '</div></div>';
                                }
          ?>
             </div>
         </div>

     </div>

     <div class="vignettes-color" id="Vignettes-Beard-Mustache-color">
         <span><i class="fas fa-eye-dropper"></i></span>
         <?php 
            for ($i = 0; $i < $length_haircolor; $i++) {
            echo '<div class="colorMustache color-item" data-color="';
            echo $i + 1 ;
            echo '" style="background-color:';
            echo $haircolor[$i];
            echo '"></div>';
            }
        ?>
     </div>
 </section>