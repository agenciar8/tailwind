<?php
remove_action('wp_head', 'rsd_link');
remove_action('wp_head', 'wlwmanifest_link');
remove_action('wp_head', 'start_post_rel_link', 10, 0);
remove_action('wp_head', 'adjacent_posts_rel_link_wp_head', 10, 0);
remove_action('wp_head', 'feed_links_extra', 3);
remove_action('wp_head', 'wp_generator');
remove_action('wp_head', 'print_emoji_detection_script', 7);
remove_action('admin_print_scripts', 'print_emoji_detection_script');
remove_action('wp_print_styles', 'print_emoji_styles');
remove_action('admin_print_styles', 'print_emoji_styles');


add_theme_support('post-thumbnails');


// Adiciona campos personalizados ao retorno da API
add_filter('rest_api_init', function () {
  register_rest_field('projeto', 'text_info_home', [
      'get_callback' => function ($data) {
          return get_field('text_info_home', $data['id']);
      },
  ]);

  register_rest_field('projeto', 'list-text-home', [
      'get_callback' => function ($data) {
          return get_field('list-text-home', $data['id']);
      },
  ]);
});



function filter_search_query($query) {
  if ($query->is_search && !is_admin()) {
      $query->set('post_type', 'post');
  }
  return $query;
}
add_filter('pre_get_posts', 'filter_search_query');



function custom_excerpt_length($length)
{
  return 35;
}
add_filter('excerpt_length', 'custom_excerpt_length');



function enqueue_tailwind(){
  wp_enqueue_style('tailwind-css',get_template_directory_uri() . '/src/output.css');
}

add_action('wp_enqueue_scripts','enqueue_tailwind');