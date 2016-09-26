// Check Off Specific Todos By Clicking
$('ul').on('click', "li" , function(){
  $(this).toggleClass('completed');
});

//Click on X to delete TODO
$('ul').on('click', 'span' , function(e){
  $(this).parent().fadeOut(500, function(){
    $(this).remove();
  });
  e.stopPropagation();
});

$("input[type='text']").keypress(function(e){
 if(e.which === 13){
  // Grab input value
  var todoText = $(this).val();
  // Create new li and add to ul
  $('ul').append("<li><span><i class='fa fa-trash'></i></span> " + todoText + "</li>");
  $(this).val("");
 }
});

$('.fa-plus').click(function(){
  $('input[type="text"').fadeToggle();
})