$(document).ready(function() {

  var Player1 = prompt('Enter player 1 name');
  var Player2 = prompt('Enter player 2 name');
  var boxes = [];
  var counter = 0;

  $('.box').click(function(){
    var $this = $(this);
    if($this.data('clicked')) {
      alert('You already clicked this box');
    } else {
      $this.data('clicked', true);
        if (counter % 2 === 0) {
          $(this).append('X').addClass('xStyle');
        } else {
          $(this).append('0').addClass('oStyle');
        }
      counter++;
      isWinner();
      if (boardHasEmptyBoxes() === false) {
        $('#winner').text("It's a draw");
        isWinner();
      }
    }
  });

  function boardHasEmptyBoxes() {
    var hasEmptyBoxes = false;
    for (var i = 0; i < $('.box').length; i++){
      if ($('.box').eq(i).text() === '') {
        hasEmptyBoxes = true;
      }
    }
    return hasEmptyBoxes;
  }

  $('#reset').on('click', function resetBoard () {
      location.reload();
  });

  var interval;
  function changeBackground (arg1, arg2, arg3) {
    var isTrue = false;
    interval = setInterval(function() {
      if (isTrue) {
        $(arg1).css('background', '#00BDFF');
        $(arg2).css('background', '#00BDFF');
        $(arg3).css('background', '#00BDFF');
      } else {
        $(arg1).css('background', '#27FF1C');
        $(arg2).css('background', '#27FF1C');
        $(arg3).css('background', '#27FF1C');
      }
      isTrue = !isTrue;
    }, 200);
  }

  function isWinner () {
    return horizontalPl1() || horizontalPl2() || verticalPl1() || verticalPl2() || diagonalPl1() || diagonalPl2();
  }

  function horizontalPl1 () {
    if ($('#box1').is('.xStyle') && $('#box2').is('.xStyle') && $('#box3').is('.xStyle')) {
      $('#winner').text(Player1.toUpperCase() + ' is on fire today!');
      changeBackground ('#box1', '#box2', '#box3');
      $('.box').off('click');
    }
    if ($('#box4').is('.xStyle') && $('#box5').is('.xStyle') && $('#box6').is('.xStyle')) {
      $('#winner').text(Player1.toUpperCase() + ' is on fire today!');
      changeBackground ('#box4', '#box5', '#box6');
      $('.box').off('click');
    }
    if ($('#box7').is('.xStyle') && $('#box8').is('.xStyle') && $('#box9').is('.xStyle')) {
      $('#winner').text(Player1.toUpperCase() + ' is on fire today!');
      changeBackground ('#box7', '#box8', '#box9');
      $('.box').off('click');
    }
  }

  function horizontalPl2 () {
    if ($('#box1').is('.oStyle') && $('#box2').is('.oStyle') && $('#box3').is('.oStyle')) {
      $('#winner').text(Player2.toUpperCase() + ' is on fire today!');
      changeBackground ('#box1', '#box2', '#box3');
      $('.box').off('click');
    }
    if ($('#box4').is('.oStyle') && $('#box5').is('.oStyle') && $('#box6').is('.oStyle')) {
      $('#winner').text(Player2.toUpperCase() + ' is on fire today!');
      changeBackground ('#box4', '#box5', '#box6');
      $('.box').off('click');
    }
    if ($('#box7').is('.oStyle') && $('#box8').is('.oStyle') && $('#box9').is('.oStyle')) {
      $('#winner').text(Player2.toUpperCase() + ' is on fire today!');
      changeBackground ('#box7', '#box8', '#box9');
      $('.box').off('click');
    }
  }

  function verticalPl1 () {
    if ($('#box1').is('.xStyle') && $('#box4').is('.xStyle') && $('#box7').is('.xStyle')) {
      $('#winner').text(Player1.toUpperCase() + ' is on fire today!');
      changeBackground ('#box1', '#box4', '#box7');
      $('.box').off('click');
    }
    if ($('#box2').is('.xStyle') && $('#box5').is('.xStyle') && $('#box8').is('.xStyle')) {
      $('#winner').text(Player1.toUpperCase() + ' is on fire today!');
      changeBackground ('#box2', '#box5', '#box8');
      $('.box').off('click');
    }
    if ($('#box3').is('.xStyle') && $('#box6').is('.xStyle') && $('#box9').is('.xStyle')) {
      $('#winner').text(Player1.toUpperCase() + ' is on fire today!');
      changeBackground ('#box3', '#box6', '#box9');
      $('.box').off('click');
    }
  }

  function verticalPl2 () {
    if ($('#box1').is('.oStyle') && $('#box4').is('.oStyle') && $('#box7').is('.oStyle')) {
      $('#winner').text(Player2.toUpperCase() + ' is on fire today!');
      changeBackground ('#box1', '#box4', '#box7');
      $('.box').off('click');
    }
    if ($('#box2').is('.oStyle') && $('#box5').is('.oStyle') && $('#box8').is('.oStyle')) {
      $('#winner').text(Player2.toUpperCase() + ' is on fire today!');
      changeBackground ('#box2', '#box5', '#box8');
      $('.box').off('click');
    }
    if ($('#box3').is('.oStyle') && $('#box6').is('.oStyle') && $('#box9').is('.oStyle')) {
      $('#winner').text(Player2.toUpperCase() + ' is on fire today!');
      changeBackground ('#box3', '#box6', '#box9');
      $('.box').off('click');
    }
  }

  function diagonalPl1 () {
    if ($('#box1').is('.xStyle') && $('#box5').is('.xStyle') && $('#box9').is('.xStyle')) {
      $('#winner').text(Player1.toUpperCase() + ' is on fire today!');
      changeBackground ('#box1', '#box5', '#box9');
      $('.box').off('click');
    }
    if ($('#box3').is('.xStyle') && $('#box5').is('.xStyle') && $('#box7').is('.xStyle')) {
      $('#winner').text(Player1.toUpperCase() + ' is on fire today!');
      changeBackground ('#box3', '#box5', '#box7');
      $('.box').off('click');
    }
  }

  function diagonalPl2 () {
    if ($('#box1').is('.oStyle') && $('#box5').is('.oStyle') && $('#box9').is('.oStyle')) {
      $('#winner').text(Player2.toUpperCase() + ' is on fire today!');
      changeBackground ('#box1', '#box5', '#box9');
      $('.box').off('click');
    }
    if ($('#box3').is('.oStyle') && $('#box5').is('.oStyle') && $('#box7').is('.oStyle')) {
      $('#winner').text(Player2.toUpperCase() + ' is on fire today!');
      changeBackground ('#box3', '#box5', '#box7');
      $('.box').off('click');
    }
  }
});
