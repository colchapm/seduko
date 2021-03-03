import $ from 'jquery';

export default function Memory() {
  this.squares = [1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6];
  this.cue1 = 0;
  this.cue2 = 0;
  this.pairs = [];
  this.firstPick = true;
}

Memory.prototype.shuffleCards = function () {
  return this.squares = this.squares.sort(() => Math.random() - 0.5);
};

Memory.prototype.pickNumber = function (pick) {
  let num = this.squares[pick]
  if (this.firstPick) {
    this.cue1 = num;
    this.cue2 = 0;
    this.firstPick = false;
  } else {
    this.cue2 = num;
    this.firstPick = true;
  }

}

Memory.prototype.showNumber = function (pick) {
  return this.squares[pick]
}

Memory.prototype.matchEm = function () {
  if (this.cue1 === this.cue2) {
    this.pairs.push(this.cue1);
    $("#winner").append(this.pairs);
  }

}