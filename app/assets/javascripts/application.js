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

//= require jquery
//= require rails-ujs
//= require activestorage
//= require turbolinks
//= require_tree .

var title = "javascriptが使えました";
alert(title)

/*global $*/
$(document).ready(function () {
  $('.jquery').on('click', function(){
    $(this).css('color','red');
  });
});

$(document).ready(function () {
  $("#theTarget").skippr({
    transition : 'slide',
    speed : 1000,
    easing : 'easeOutQuart',
    navType : 'block',
    childrenElementType : 'div',
    arrows : true,
    autoPlay : true,
    autoPlayDuration : 3000,
    keyboardOnAlways : true,
    hidePrevious : false
  });
});