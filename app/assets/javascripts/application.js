/* global $*/
// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, or any plugin's
// vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file. JavaScript code in this file should be added after the last require_* statement.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery3
//= require popper
//= require bootstrap-sprockets
//= require jquery
//= require rails-ujs
//= require activestorage
//= require turbolinks
//= require_tree .

 document.addEventListener("turbolinks:load"
, function () {
$(function() {
  $('.a').slick({
      fade: true,
      autoplay: true, //自動再生
      autoplaySpeed: 3000, //再生スピード
      // 無限スクロールにするかどうか。最後の画像の次は最初の画像が表示される。
      infinite: true,
      cssEase: 'ease-in-out',
      swipe: true,
      centerMode: true,
      arrows: true
  });
});
});

