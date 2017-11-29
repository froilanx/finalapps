$('#send').on('click',function(){
  var $inputContent = $('#input').val()
  var $memoContent = '<section class="memo-content">' + $inputContent + '</section>'
  var  $memoWrap = '<div class="memo-wrap">' + $memoContent + '</div>'
  var  $memoItem = '<div class="memo-item"><button class="remove"><span></span></button>' + $memoWrap + '</div>'
      $('.memo-board').append($memoItem)
      $('#input').val('')
})
$('.memo-board').on('click','button.remove',function(){
  $(this).parents('.memo-item').remove()
})