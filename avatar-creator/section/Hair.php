<!-------------------------------------Hair--------------------------------------->
<section id="Section-Hair">
    <div class="disable-message">
        <p>Vous portez un chapeau.</p>
        <div class="remove-hat-button"><i class="fa fa-trash mr-2 reset color-item"> </i> Supprimer le chapeau </div>
    </div>
     <ul class="nav nav-pills">
         <li id="Section-Hair-shaved" class="active" >
              <a data-toggle="pill" href="#collapse-Hair-shaved">Rasé</a>
         </li>
         <li id="Section-Hair-very-short">
             <a data-toggle="pill" href="#collapse-Hair-very_short">Très Court </a>
         </li>
         <li id="Section-Hair-short">
             <a data-toggle="pill" href="#collapse-Hair-short">Court</a>
         </li>
         <li id="Section-Hair-medium">
             <a data-toggle="pill" href="#collapse-Hair-medium">Mi-Long</a>
         </li>
         <li id="Section-Hair-long">
             <a data-toggle="pill" href="#collapse-Hair-long">Long</a>
         </li>

     </ul>

     <div class="tab-content">
     <div id="collapse-Hair-shaved" class="tab-pane active">
    <div class="mx-2 row section-vignettes withsubpart" id="Vignettes-Hair-shaved">
        <?php
        $F_Hair_shaved = glob("avatar-creator/images/Hair/shaved/*", GLOB_ONLYDIR);
        $C_Hair_shaved = count($F_Hair_shaved);
        for ($i = 1; $i <= $C_Hair_shaved; $i++) {
            echo '<div class="col-xl-3 col-lg-4 col-md-4 col-sm-6 col-xs-6 p-0 vignette_col"><div class="m-2 vignette" data-element="'.$i.'">';
            echo '<img loading="lazy"data-vignette-item="Hair" src="avatar-creator/images/Hair/shaved/'.$i.'/1.png" alt="Avatar Vignette" class="zindex-4"> ';
            echo '<img loading="lazy"src="avatar-creator/UI/Base.png" alt="Avatar Vignette" class="zindex-3">';
            echo '<img loading="lazy"data-vignette-item="Hair_Back" src="avatar-creator/images/Hair_Back/shaved/'.$i.'/1.png" alt="Avatar Vignette" class="zindex-2"> ';
            echo '</div></div>';
        }
        ?>
    </div>
</div>
<div id="collapse-Hair-very_short" class="tab-pane">
    <div class="mx-2 row section-vignettes withsubpart" id="Vignettes-Hair-very_short">
        <?php
        $F_Hair_very_short = glob("avatar-creator/images/Hair/very_short/*", GLOB_ONLYDIR);
        $C_Hair_very_short = count($F_Hair_very_short);
        for ($i = 1; $i <= $C_Hair_very_short; $i++) {
        echo '<div class="col-xl-3 col-lg-4 col-md-4 col-sm-6 col-xs-6 p-0 vignette_col"><div class="m-2 vignette" data-element="'.$i.'">';
        echo '<img loading="lazy"data-vignette-item="Hair" src="avatar-creator/images/Hair/very_short/'.$i.'/1.png" alt="Avatar Vignette" class="zindex-4"> ';
        echo '<img loading="lazy"src="avatar-creator/UI/Base.png" alt="Avatar Vignette" class="zindex-3">';
        echo '<img loading="lazy"data-vignette-item="Hair_Back" src="avatar-creator/images/Hair_Back/very_short/'.$i.'/1.png" alt="Avatar Vignette" class="zindex-2"> ';
        echo '</div></div>';


        }
        ?>
    </div>
</div>
<div id="collapse-Hair-short" class="tab-pane">
    <div class="mx-2 row section-vignettes withsubpart" id="Vignettes-Hair-short">
        <?php
        $F_Hair_short = glob("avatar-creator/images/Hair/short/*", GLOB_ONLYDIR);
        $C_Hair_short = count($F_Hair_short);
        for ($i = 1; $i <= $C_Hair_short; $i++) {
            echo '<div class="col-xl-3 col-lg-4 col-md-4 col-sm-6 col-xs-6 p-0 vignette_col"><div class="m-2 vignette" data-element="'.$i.'">';
            echo '<img loading="lazy"data-vignette-item="Hair" src="avatar-creator/images/Hair/short/'.$i.'/1.png" alt="Avatar Vignette" class="zindex-4"> ';
            echo '<img loading="lazy"src="avatar-creator/UI/Base.png" alt="Avatar Vignette" class="zindex-3">';
            echo '<img loading="lazy"data-vignette-item="Hair_Back" src="avatar-creator/images/Hair_Back/short/'.$i.'/1.png" alt="Avatar Vignette" class="zindex-2"> ';
            echo '</div></div>';
        }
        ?>
    </div>
</div>
<div id="collapse-Hair-medium" class="tab-pane">
    <div class="mx-2 row section-vignettes withsubpart" id="Vignettes-Hair-medium">
        <?php
        $F_Hair_medium = glob("avatar-creator/images/Hair/medium/*", GLOB_ONLYDIR);
        $C_Hair_medium = count($F_Hair_medium);
        for ($i = 1; $i <= $C_Hair_medium; $i++) {
            echo '<div class="col-xl-3 col-lg-4 col-md-4 col-sm-6 col-xs-6 p-0 vignette_col"><div class="m-2 vignette" data-element="'.$i.'">';
            echo '<img loading="lazy"data-vignette-item="Hair" src="avatar-creator/images/Hair/medium/'.$i.'/1.png" alt="Avatar Vignette" class="zindex-4"> ';
            echo '<img loading="lazy"src="avatar-creator/UI/Base.png" alt="Avatar Vignette" class="zindex-3">';
            echo '<img loading="lazy"data-vignette-item="Hair_Back" src="avatar-creator/images/Hair_Back/medium/'.$i.'/1.png" alt="Avatar Vignette" class="zindex-2"> ';
            echo '</div></div>';
        }
        ?>
    </div>
</div>
        
<div id="collapse-Hair-long" class="tab-pane">
    <div class="mx-2 row section-vignettes withsubpart" id="Vignettes-Hair-long">
        <?php
        $F_Hair_long = glob("avatar-creator/images/Hair/long/*", GLOB_ONLYDIR);
        $C_Hair_long = count($F_Hair_long);
        for ($i = 1; $i <= $C_Hair_long; $i++) {
            echo '<div class="col-xl-3 col-lg-4 col-md-4 col-sm-6 col-xs-6 p-0 vignette_col"><div class="m-2 vignette" data-element="'.$i.'">';
            echo '<img loading="lazy"data-vignette-item="Hair" src="avatar-creator/images/Hair/long/'.$i.'/1.png" alt="Avatar Vignette" class="zindex-4"> ';
            echo '<img loading="lazy"src="avatar-creator/UI/Base.png" alt="Avatar Vignette" class="zindex-3">';
            echo '<img loading="lazy"data-vignette-item="Hair_Back" src="avatar-creator/images/Hair_Back/long/'.$i.'/1.png" alt="Avatar Vignette" class="zindex-2"> ';
            echo '</div></div>';
        }
        ?>
    </div>
</div>
     </div>

     <div class="vignettes-color" id="Vignettes-Hair-color">
         <span><i class="fas fa-eye-dropper"></i></span>
         <?php 
            for ($i = 0; $i < $length_haircolor; $i++) {
            echo '<div class="colorHair color-item" data-color="';
            echo $i + 1 ;
            echo '" style="background-color:';
            echo $haircolor[$i];
            echo '"></div>';
            }
        ?>
     </div>
 </section>