<?php

/**
* Template Name: homePage
*
* 
*/

get_header();
?>

    <section id="homeBanerSection">
        <div class="homeBanerSectionBackground" style="background-image: url(/develtio-zadanie-2-WordPress/wp-content/uploads/2022/06/shutterstock_1105116683.jpg)">
            <div class="blueBackground">
                <div class="container">
                    <div class="row">
                        <div class="col-xl-7 col-lg-6">
                            <h2 class="titleHomeBaner">Ubezpieczenie majątkowe</h2>
                            <h4 class="subTitleHomeBaner">Skontaktuj się z nami i skorzystaj ze specjalnej oferty!</h4>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="contactFormHomeBaner">
            <h3 class="titleContactFormHomeBaner">Podaj dane kontaktowe, a my przygotujemy najlepszą ofertę</h3>
            <div class="formHomeBaner container">
                <?php echo do_shortcode('[contact-form-7 id="9" title="Contact form" ]'); ?>
            </div>
        </div>
    </section>

    <section id="homeInformationSection">
        <div class="container">
            <div class="row">
                <div class="col-xl-7 col-lg-12">
                    <h2 class="title">Ubezpieczenia majątkowe</h2>
                    <h4 class="subTitle">Co obejmują?</h4>
                    <p class="globalText"><b>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.</b></p>
                    <p class="globalText">Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet, consetetur sadipscing elitr.</p>
                    <a class="orangeButton" href="#">Zamów ubezpieczenie</a>
                </div>
            </div>
        </div>
        <div class="sideBackground">
            <img src="/develtio-zadanie-2-WordPress/wp-content/uploads/2022/06/shutterstock_373266265.png" alt="">
        </div>
    </section>

<?php
get_footer();