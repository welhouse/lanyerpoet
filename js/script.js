$(document).ready(function(){
   $(function () {
      $('[data-toggle="popover"]').popover()
    })
});


 function createStory(){
   var $noun1 = $('#noun-1').val();
   var $adjective1 = $('#adjective-1').val();
   var $verb1 = $('#verb-1').val();
   var $noun2 = $('#noun-2').val();
   var $noun3 = $('#noun-3').val();
   var $noun4 = $('#noun-4').val();
   var $noun5 = $('#noun-5').val();
   var $verb2 = $('#verb-2').val();
   
    $('#noun-1-place').html($noun1);
    $('#adjective-1-place').html($adjective1);
    $('#verb-1-place').html($verb1);
    $('#noun-2-place').html($noun2);
    $('#noun-3-place').html($noun3);
    $('#noun-4-place').html($noun4);
    $('#noun-5-place').html($noun5);
    $('#verb-2-place').html($verb2);
    $('input').val('');
}
            
$('#create-story').click(createStory);




