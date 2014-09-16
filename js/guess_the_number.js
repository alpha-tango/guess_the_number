var randomNumber = Math.round(Math.random()*10+1);
var num = 1;

$('#replay').css('visibility', 'hidden')

$('#guess').on('submit', function(event) {
  event.preventDefault();
  var guess = parseInt($('input').val());
    if (guess < 1 || guess > 10) {
      alert("That's not a valid guess!")
    } else if(guess < randomNumber){
      $('body').append('<p>'+guess+' is too low, try again...</p>');
      $('input').val('');
      num++;
    } else if (guess > randomNumber) {
      $('body').append('<p>'+guess+' is too high, try again...</p>');
      $('input').val('');
      num++;
    } else {
      $('body').append("<p style='font-weight:bold;'>Congratulations, you've guessed the number in "+num+" guesses!</p>");
      $('input').val('');
      $('#replay').css('visibility', 'visible')
    }
});
