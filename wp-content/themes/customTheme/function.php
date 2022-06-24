<?php

register_nav_menus( array(
    'menu-1' => __( 'Primary Menu', 'my-custom-theme' ),
);

wp_nav_menu( array(
    'theme_location' => 'menu-1',
) );

function my_custom_theme_sidebar() {
    register_sidebar( array(
        'name' => __( 'Primary Sidebar', 'my-custom-theme' ),
        'id'   => 'sidebar-1',
    ) );
}
add_action( 'widgets_init', 'my_custom_theme_sidebar' );

if ( is_active_sidebar( 'sidebar-1' ) ) { ?>
    <ul class="sidebar">
    <?php dynamic_sidebar('sidebar-1' ); ?>
    </ul>
<?php} 

add_theme_support( 'post-thumbnails' );

add_image_size( 'my-custom-image-size', 640, 999 );

the_post_thumbnail( 'my-custom-image-size' );