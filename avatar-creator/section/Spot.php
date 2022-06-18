<!----------------------------------Spot----------------------------------------->
<section id="Section-Spot">
    <div class="mx-2 row section-vignettes " id="Vignettes-Spot">

        <?php $F_Spot = glob("avatar-creator/images/Spot/*.png");
        $C_Spot = count($F_Spot);
        for ($i = 1; $i <= $C_Spot; $i++) {
            echo '<div class="col-xl-3 col-lg-4 col-md-4 col-sm-6 col-xs-6 p-0 vignette_col"><div class="m-2 vignette" data-element="'.$i.'">';
            echo '<img src="avatar-creator/images/Eyes/1.png" alt="Avatar Vignette" class="zindex-2">';
            echo '<img src="avatar-creator/images/Spot/'.$i.'.png" alt="Avatar Vignette" class="zindex-1"> ';
            echo '<img src="avatar-creator/UI/Base.png" alt="Avatar Vignette" class="zindex-0">';
            echo '</div></div>';
    }
    ?>
    </div>
</section>