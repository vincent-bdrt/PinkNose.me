 <!-----------------------------------COSTUMS------------------------------------->
 <section id="Section-Costums">
     <ul class="nav nav-pills">
         <li id="Section-Medieval" class="active">
             <a data-toggle="pill" href="#collapseMedieval"><img src="avatar-creator/UI/Icon/icon_medieval.svg"
                     alt="Icon Costume medieval">
                 <div class="reset color-item mr-0 ml-3"><i class="fa fa-trash"></i></div>
             </a>
         </li>
         <li id="Section-Christmas" class="ml-3 ">
             <a data-toggle="pill" href="#collapseChristmas"><img src="avatar-creator/UI/Icon/icon_christmas.svg"
                     alt="Icon Costume de Noel">
                 <div class="reset color-item mr-0 ml-3"><i class="fa fa-trash"></i></div>
             </a>
         </li>
         <li id="Section-Job" class="ml-3">
             <a data-toggle="pill" href="#collapseJob"><img src="avatar-creator/UI/Icon/icon_job.svg"
                     alt="Icon Costume de fête">
                 <div class="reset color-item mr-0 ml-3"><i class="fa fa-trash"></i></div>
             </a>
         </li>
     </ul>

     <div class="tab-content">
         <div id="collapseChristmas" class="tab-pane">
             <div class="mx-2 row section-vignettes withsubpart vignette-default" id="Vignettes-Christmas">

                 <?php
                    $F_Christmas = glob("avatar-creator/images/Costums/Christmas/Men/*.png");
                    $C_Christmas = count($F_Christmas);
                    for ($i = 1; $i <= $C_Christmas; $i++) {
                        echo '<div class="col-xl-3 col-lg-4 col-md-4 col-sm-6 col-xs-6 p-0 vignette_col"><div class="m-2 vignette" data-element="'.$i.'">';
                        echo '<img alt="Avatar Vignette christmas" src="avatar-creator/images/Costums/Christmas/Men/'. $i.'.png">';
                        echo '</div></div>';
                    }
                    ?>
             </div>
         </div>
         <div id="collapseMedieval" class="tab-pane active">
             <div class="mx-2 row section-vignettes withsubpart vignette-default" id="Vignettes-Medieval">
                 <?php
                    $F_Medieval = glob("avatar-creator/images/Costums/Medieval/Men/*.png");
                    $C_Medieval = count($F_Medieval);
                    for ($i = 1; $i <= $C_Medieval; $i++) {
                        echo '<div class="col-xl-3 col-lg-4 col-md-4 col-sm-6 col-xs-6 p-0 vignette_col"><div class="m-2 vignette" data-element="'.$i.'">';
                        echo '<img alt="Avatar Vignette Medieval" src="avatar-creator/images/Costums/Medieval/Men/'. $i.'.png">';
                        echo '</div></div>';
                    }
                    ?>
             </div>
         </div>
         <div id="collapseJob" class="tab-pane">
             <div class="mx-2 row section-vignettes withsubpart vignette-default" id="Vignettes-Job">
             <h2>Prochainement</h2>
             </div>
         </div>
     </div>
 </section>