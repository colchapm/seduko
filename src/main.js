import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import Memory from './Memory.js';

$(document).ready(function () {
  const newGame = new Memory();
  newGame.shuffleCards();


  $("#square1").click(function () {
    newGame.pickNumber(0)
    $("#square1").text(newGame.showNumber(0))
    newGame.matchEm();
    console.log(newGame);
  });

  $("#square2").click(function () {
    newGame.pickNumber(1)
    $("#square2").text(newGame.showNumber(1))
    newGame.matchEm();
    console.log(newGame);
  });


});