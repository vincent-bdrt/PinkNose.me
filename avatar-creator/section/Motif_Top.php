<!----------------------------------Motif_Top----------------------------------------->
<section id="Section-Motif_Top">
    <div class="disable-message"><p>Vous portez un costume.</p>
    <div class="remove-costum-button"><i class="fa fa-trash mr-2 reset color-item"></i>Supprimer le costume </div>
</div>
    <div class="mx-2 row section-vignettes  " id="Vignettes-Motif_Top">
    
        <?php $F_Motif_Top = glob("avatar-creator/images/Vignette/Motif_Top/*.png");
        $C_Motif_Top = count($F_Motif_Top);
        for ($i = 1; $i <= $C_Motif_Top; $i++) {
        echo '<div class="col-xl-3 col-lg-4 col-md-4 col-sm-6 col-xs-6 p-0 vignette_col"><div class="m-2 vignette" data-element="';
echo $i;
echo '">';
        echo '<img src="avatar-creator/images/Vignette/Motif_Top/';
        echo $i;
        echo '.png" ></div></div>';
    }
    ?>
    </div>
</section>