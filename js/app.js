$(document).ready(function() {

  var Player1 = prompt('Enter player 1 name');
  var Player2 = prompt('Enter player 2 name');

  var boxes = [];

  var clickedBoxes = [false, false, false, false, false, false,false, false, false]

  var counter = 0;

  $($('.box')[0]).on('click', function () {
    if (clickedBoxes[0] === false) {
      if (counter % 2 === 0) {
        $(this).append('X').addClass('xStyle');
      } else {
        $(this).append('0').addClass('oStyle');
      }
      counter++;
    }
    if (clickedBoxes[0] === true) {
      alert('You already clicked this box!');
    }
    clickedBoxes[0] = true;
    draw(clickedBoxes);
    isWinner();
  });
  $($('.box')[1]).on('click', function () {
    if (clickedBoxes[1] === false) {
      if (counter % 2 === 0) {
        $(this).append('X').addClass('xStyle');
      } else {
        $(this).append('0').addClass('oStyle');
      }
      counter++;
    }
    if (clickedBoxes[1] === true) {
      alert('You already clicked this box!');
    }
    clickedBoxes[1] = true;
    draw(clickedBoxes);
    isWinner();
  });
  $($('.box')[2]).on('click', function () {
    if (clickedBoxes[2] === false) {
      if (counter % 2 === 0) {
        $(this).append('X').addClass('xStyle');
      } else {
        $(this).append('0').addClass('oStyle');
      }
      counter++;
    }
    if (clickedBoxes[2] === true) {
      alert('You already clicked this box!');
    }
    clickedBoxes[2] = true;
    draw(clickedBoxes);
    isWinner();
  });
  $($('.box')[3]).on('click', function () {
    if (clickedBoxes[3] === false) {
      if (counter % 2 === 0) {
        $(this).append('X').addClass('xStyle');
      } else {
        $(this).append('0').addClass('oStyle');
      }
      counter++;
    }
    if (clickedBoxes[3] === true) {
      alert('You already clicked this box!');
    }
    clickedBoxes[3] = true;
    draw(clickedBoxes);
    isWinner();
  });
  $($('.box')[4]).on('click', function () {
    if (clickedBoxes[4] === false) {
      if (counter % 2 === 0) {
        $(this).append('X').addClass('xStyle');
      } else {
        $(this).append('0').addClass('oStyle');
      }
      counter++;
    }
    if (clickedBoxes[4] === true) {
      alert('You already clicked this box!');
    }
    clickedBoxes[4] = true;
    draw(clickedBoxes);
    isWinner();
  });
  $($('.box')[5]).on('click', function () {
    if (clickedBoxes[5] === false) {
      if (counter % 2 === 0) {
        $(this).append('X').addClass('xStyle');
      } else {
        $(this).append('0').addClass('oStyle');
      }
      counter++;
    }
    if (clickedBoxes[5] === true) {
      alert('You already clicked this box!');
    }
    clickedBoxes[5] = true;
    draw(clickedBoxes);
    isWinner();
  });
  $($('.box')[6]).on('click', function () {
    if (clickedBoxes[6] === false) {
      if (counter % 2 === 0) {
        $(this).append('X').addClass('xStyle');
      } else {
        $(this).append('0').addClass('oStyle');
      }
      counter++;
    }
    if (clickedBoxes[6] === true) {
      alert('You already clicked this box!');
    }
    clickedBoxes[6] = true;
    draw(clickedBoxes);
    isWinner();
  });
  $($('.box')[7]).on('click', function () {
    if (clickedBoxes[7] === false) {
      if (counter % 2 === 0) {
        $(this).append('X').addClass('xStyle');
      } else {
        $(this).append('0').addClass('oStyle');
      }
      counter++;
    }
    if (clickedBoxes[7] === true) {
      alert('You already clicked this box!');
    }
    clickedBoxes[7] = true;
    draw(clickedBoxes);
    isWinner();
  });
  $($('.box')[8]).on('click', function () {
    if (clickedBoxes[8] === false) {
      if (counter % 2 === 0) {
        $(this).append('X').addClass('xStyle');
      } else {
        $(this).append('0').addClass('oStyle');
      }
      counter++;
    }
    if (clickedBoxes[8] === true) {
      alert('You already clicked this box!');
    }
    clickedBoxes[8] = true;
    draw(clickedBoxes);
    isWinner();
  });

  $('#reset').on('click', function resetBoard () {
    counter = 0;
    $('.box').empty();
    $('#winner').empty();
    $('.box').removeClass('xStyle oStyle');
    for (var i = 0; i < clickedBoxes.length; i++) {
      clickedBoxes[i] = false;
    }
    Player1 = prompt('Enter player 1 name');
    Player2 = prompt('Enter player 2 name');
    clearInterval(interval);
    $('.box').css('background-color', '#FFB424');
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
      isTrue = !isTrue; //changing from false to true
    }, 200);
  }

  function draw (clickedBoxes) {
    if (clickedBoxes.indexOf(false) === -1) {
      $('#winner').text("It's a draw");
    }
  }

  function isWinner () {
    return horizontalPl1() || horizontalPl2() || verticalPl1() || verticalPl2() || diagonalPl1() || diagonalPl2();
  }

  function horizontalPl1 () {
    if ($('#box1').is('.xStyle') && $('#box2').is('.xStyle') && $('#box3').is('.xStyle')) {
      $('#winner').text(Player1.toUpperCase() + ' is on fire today!');
      changeBackground ('#box1', '#box2', '#box3');
    }
    if ($('#box4').is('.xStyle') && $('#box5').is('.xStyle') && $('#box6').is('.xStyle')) {
      $('#winner').text(Player1.toUpperCase() + ' is on fire today!');
      changeBackground ('#box4', '#box5', '#box6');
    }
    if ($('#box7').is('.xStyle') && $('#box8').is('.xStyle') && $('#box9').is('.xStyle')) {
      $('#winner').text(Player1.toUpperCase() + ' is on fire today!');
      changeBackground ('#box7', '#box8', '#box9');
    }
  }

  function horizontalPl2 () {
    if ($('#box1').is('.oStyle') && $('#box2').is('.oStyle') && $('#box3').is('.oStyle')) {
      $('#winner').text(Player2.toUpperCase() + ' is on fire today!');
      changeBackground ('#box1', '#box2', '#box3');
    }
    if ($('#box4').is('.oStyle') && $('#box5').is('.oStyle') && $('#box6').is('.oStyle')) {
      $('#winner').text(Player2.toUpperCase() + ' is on fire today!');
      changeBackground ('#box4', '#box5', '#box6');
    }
    if ($('#box7').is('.oStyle') && $('#box8').is('.oStyle') && $('#box9').is('.oStyle')) {
      $('#winner').text(Player2.toUpperCase() + ' is on fire today!');
      changeBackground ('#box7', '#box8', '#box9');
    }
  }

  function verticalPl1 () {
    if ($('#box1').is('.xStyle') && $('#box4').is('.xStyle') && $('#box7').is('.xStyle')) {
      $('#winner').text(Player1.toUpperCase() + ' is on fire today!');
      changeBackground ('#box1', '#box4', '#box7');
    }
    if ($('#box2').is('.xStyle') && $('#box5').is('.xStyle') && $('#box8').is('.xStyle')) {
      $('#winner').text(Player1.toUpperCase() + ' is on fire today!');
      changeBackground ('#box2', '#box5', '#box8');
    }
    if ($('#box3').is('.xStyle') && $('#box6').is('.xStyle') && $('#box9').is('.xStyle')) {
      $('#winner').text(Player1.toUpperCase() + ' is on fire today!');
      changeBackground ('#box3', '#box6', '#box9');
    }
  }

  function verticalPl2 () {
    if ($('#box1').is('.oStyle') && $('#box4').is('.oStyle') && $('#box7').is('.oStyle')) {
      $('#winner').text(Player2.toUpperCase() + ' is on fire today!');
      changeBackground ('#box1', '#box4', '#box7');
    }
    if ($('#box2').is('.oStyle') && $('#box5').is('.oStyle') && $('#box8').is('.oStyle')) {
      $('#winner').text(Player2.toUpperCase() + ' is on fire today!');
      changeBackground ('#box2', '#box5', '#box8');
    }
    if ($('#box3').is('.oStyle') && $('#box6').is('.oStyle') && $('#box9').is('.oStyle')) {
      $('#winner').text(Player2.toUpperCase() + ' is on fire today!');
      changeBackground ('#box3', '#box6', '#box9');
    }
  }

  function diagonalPl1 () {
    if ($('#box1').is('.xStyle') && $('#box5').is('.xStyle') && $('#box9').is('.xStyle')) {
      $('#winner').text(Player1.toUpperCase() + ' is on fire today!');
      changeBackground ('#box1', '#box5', '#box9');
    }
    if ($('#box3').is('.xStyle') && $('#box5').is('.xStyle') && $('#box7').is('.xStyle')) {
      $('#winner').text(Player1.toUpperCase() + ' is on fire today!');
      changeBackground ('#box3', '#box5', '#box7');
    }
  }

  function diagonalPl2 () {
    if ($('#box1').is('.oStyle') && $('#box5').is('.oStyle') && $('#box9').is('.oStyle')) {
      $('#winner').text(Player2.toUpperCase() + ' is on fire today!');
      changeBackground ('#box1', '#box5', '#box9');
    }
    if ($('#box3').is('.oStyle') && $('#box5').is('.oStyle') && $('#box7').is('.oStyle')) {
      $('#winner').text(Player2.toUpperCase() + ' is on fire today!');
      changeBackground ('#box3', '#box5', '#box7');
    }
  }
});

