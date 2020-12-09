$(document).ready(function(){
  $("h2").click(function(){
    $(this).next().toggle();
  })
  $("h3").click(function(){
    $(this).next().toggle();
  })
})
