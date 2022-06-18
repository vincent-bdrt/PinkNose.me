<?php 
include 'header.php';
$rainbowcolor=array("#DA6A6A", "#DA7A6A", "#DA8A6A", "#D29056", "#DAA06A", "#DAB16A", "#DAC56A", "#C2DA6A", "#AADA6A", "#90DA6A", "#79DA6A", "#6ADA78", "#6ADA93", "#6ADAB8", "#6ADACA", "#5AE4DF", "#6AC1DA", "#6AA9DA", "#6A8CDA", "#6A76DA", "#7E6ADA", "#926ADA", "#AA6ADA", "#CB6ADA", "#DA6ABB", "#DA6A94", "#DA6A6F", "#AE6165", "#896263", "#877273", "#615C5C", "#6F6767", "#716D6D", "#928F8F", "#A3A2A2", "#BFB9B9", "#CAC6C6", "#DFD9D9", "#F7F6F6", "#FFFFFF");
$haircolor=array("#715B48", "#8B6D53", "#A3764F", "#D29056", "#D5A186", "#C8A380", "#C8B380", "#E3C06C", "#E6D19E", "#DFD2B5", "#F7F4ED", "#BEBBB3", "#928F89", "#6F6C63", "#4F4E4A");
$length_rainbowcolor=count($rainbowcolor);
$length_haircolor=count($haircolor);?>
<div class="information d-none">
    <h2>Bonjour et bienvenue dans mon projet PinkNose.me.</h2>
    <div class="container py-5">
        <p>
            PinkNose.me est un créateur d'Avatar où les possibilités sont infinies.Dans ce projet il est possible de
            créer un avatar de toutes pièces en choisissant la couleur de cheveux, les vêtements et également des
            costumes. Une fois que votre avatar est prêt vous pouvez le télécharger. Il est également possible de
            changer sa morphologie et de choisir aléatoirement sa tenue et son apparence.

            Je développe ce projet sur mon temps libre depuis environ 1 an. Ce projet est développé principalement avec
            bootstrap4 et jQuery. Le langage PHP est également utilisé afin d'automatiser certaines actions comme par
            exemple faciliter l’ajout de nouveau contenu en ciblant le répertoire désiré.
            Plusieurs versions sont sorties depuis le début du projet et à chaque fois l'optimisation afin de permettre
            une lecture simple du code a été effectuée.

            Une documentation sera bientôt fournie pour permettre à tous de pouvoir créer son propre jeu. J’envisage par
            la suite de créer un Back-Office afin de permettre à des personnes vraiment novice en programmation de créer
            leur propre jeu.
        </p>
    </div>
    <div class="container py-5">
        <p>
            PinkNose.me is an Avatar creator where the possibilities are endless. In this project it is possible to
            create an avatar from scratch by choosing hair color, clothes and also costumes. Once your avatar is ready
            you can upload it. It is also possible to change its morphology and to randomly choose its outfit and its
            appearance.

            I have been developing this project during my free time for about 1 year. This project is developed mainly with
            bootstrap4 and jQuery. The PHP language is also used to automate certain actions, such as facilitating the
            addition of new content by targeting the desired directory.
            Several versions have been released since the beginning of the project and each time the optimization to
            allow easy reading of the code has been carried out.

            Documentation will soon be provided to allow everyone to be able to create their own game. I then plan to
            create a Back-Office to allow people who are really new to programming to create their own game.

        </p>
    </div>
</div>
<nav class="menu-plus">
    <ul class="menu-list">
        <li class="menu-item"><button class="menu-button download-btn">
                <i class="fa fa-download mr-2" aria-hidden="true"></i>
                Télécharger


            </button></li>
        <li class="menu-item"><button class="menu-button delete-btn">

                <i class="fa fa-trash mr-2"></i>
                Corbeille</button>
        </li>
        <li class="menu-item">
            <button class="menu-button random-btn"><i class="fas fa-dice mr-2"></i>Aléatoire</button>
        </li>
        <li class="menu-item">
            <button class="menu-button morpho-btn"> <i class="fa fa-random mr-2" aria-hidden="true"></i>
                Morphologie</button>
        </li>

        <li class="menu-item">
            <a class="btn btn-danger" href="https://utip.io/ballcutter" target="_blank">
                <i class="fas fa-heart mr-2"></i>
                Soutenir le projet
            </a>
        </li>
    </ul>
</nav>
<header>

    <nav id="sidebar">
        <button class="btn btn-primary option" id="Random">
            <i class="fas fa-dice"></i>
            <span>Aléatoire</span>
        </button>
        <button class="btn btn-primary option" id="Morphologie-btn">
            <i class="fa fa-random" aria-hidden="true"></i>
            <span>Morphologie</span>
        </button>
        <button class="btn btn-primary option" id="Telecharger">
            <i class="fa fa-download" aria-hidden="true"></i>
            <span>Téléchargement</span>
        </button>
        <button class="btn btn-primary option" id="Reinitialiser">
            <i class="fa fa-trash "></i>
            <span>Corbeille</span>
        </button>
        <a class="btn btn-primary option" id="Utip" href="https://utip.io/ballcutter" target="_blank">
            <i class="fas fa-heart"></i>
            <span>Soutenir le projet</span>
        </a>
    </nav>
</header>
<main id="content" class="m-0 h-100">
    <section class="accueil">
        <div class="animation-wrapper">
            <div class="particle particle-1"></div>
            <div class="particle particle-2"></div>
            <div class="particle particle-3"></div>
            <div class="particle particle-4"></div>
        </div>
        <h1>Crée <span>l'avatar</span> qui te plait</h1>
        <h2>Pink <span class="text-yellow">Nose </span></h2><br>
        <div class="d-flex justify-content-center"><a class="start">Créer un avatar</a></div><img
            src="avatar-creator/UI/background-home.png" alt="Avatars créer avec avatar creator" class="background-home">
    </section>
    <div class="container-fluid game">
        <div class="row">
            <div class="col-lg-7 col-md-12 col-sm-12 p-md-0 p-sm-2 bg-light min-vh-100" id="Zone-Gauche">
                <?php include 'avatar-creator/result.php'?><p class="version">18.06.2022 - Body Update</p>
                <p class="author">by <a href="https://vincent-bod.art/" target="_blank">Vincent BODART</a>- <a
                        id="Instagram" href="https://www.instagram.com/pinknose.me/" target="_blank">Instagram </a>- <a
                        id="Contact" href="https://twitter.com/Ballcutter_" target="_blank">Contact </a>-
                    <a id="Github" href="https://github.com/vincent-bdrt/PinkNose.me/" target="_blank"><img src="avatar-creator\UI\Icon\github-logo.svg" alt="Icone github"> </a>

                </p>
            </div>
            <div class="col-lg-5 col-md-12 col-sm-12  bg-dark text-white min-vh-100" id="Zone-Droite">
                <div class="mx-3" id="Categories">

                    <?php 

$section_name=array("Skin","Hair","Beards","Eyes","Eyebrow","Nose","Mouth","Spot","Makeup","Accessory","Top","Motif_Top","Jacket","Hat","Costums","Background");
            for ($i = 0; $i < count($section_name); $i++) {
                echo '<button type="button" id="';
                echo $section_name[$i];
                echo '" class="m-2 btn btn-default btn-lg btn-round">';
                echo '<img src="avatar-creator/UI/Icon/icon_';
                echo $section_name[$i];
                echo '.svg" alt="Icon ';
                echo $section_name[$i];
                echo '"></button>';
            }
?>

                </div>
                <?php include 'avatar-creator/section/Morpho.php'?>
                <?php include 'avatar-creator/section/Skin.php'?>
                <?php include 'avatar-creator/section/Nose.php'?>
                <?php include 'avatar-creator/section/Mouth.php'?>
                <?php include 'avatar-creator/section/Hair.php'?>
                <?php include 'avatar-creator/section/Beards.php'?>
                <?php include 'avatar-creator/section/Eyes.php'?>
                <?php include 'avatar-creator/section/Eyebrow.php'?>
                <?php include 'avatar-creator/section/Spot.php'?>
                <?php include 'avatar-creator/section/Makeup.php'?>
                <?php include 'avatar-creator/section/Accessory.php'?>
                <?php include 'avatar-creator/section/Hat.php'?>
                <?php include 'avatar-creator/section/Top.php'?>
                <?php include 'avatar-creator/section/Motif_Top.php'?>
                <?php include 'avatar-creator/section/Jacket.php'?>
                <?php include 'avatar-creator/section/Costums.php'?>
                <?php include 'avatar-creator/section/Background.php'?>
            </div>
        </div>
    </div>
    </div>
</main>
</body>
<!-- HTML5 shim et Respond.js pour supporter les éléments HTML5 pour Internet Explorer 8 -->
<!--[if lt IE 9]>
        <script src="https://oss.maxcdn.com/html5shiv/3.7.2/html5shiv.min.js"></script> 
        <script src="https://oss.maxcdn.com/respond/1.4.2/respond.min.js"></script>
        <![endif]-->

<script src="https://code.jquery.com/jquery-3.3.1.slim.min.js"
    integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous">
</script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js"
    integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1" crossorigin="anonymous">
</script>
<script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js"
    integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM" crossorigin="anonymous">
</script>
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
<script src="js/global.js"></script>
<script src="js/random.js"></script>
<script src="js/navigation.js"></script>
<script src="js/reset.js"></script>
<script src="js/download.js"></script>

</html>