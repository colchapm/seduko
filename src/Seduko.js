export default function Seduko(rows) {
  this.rows = rows;
}

Seduko.prototype.checkForDoubles = function () {
  let answer;
  for (var i = 0; i < this.rows.length; i++) {
    for (var j = 0; j < this.rows.length; j++) {
      if (i != j && this.rows[i] === this.rows[j]) {
        return `not legal at ${this.rows[j]}`
      } else {
        answer = "legal move"
      }
    }
  }
  return answer

}



///sduko {
// this.column = [0, 0, 0, 0]
// this.column = [5, 6, 0, 8, 4, 7, 0, 0, 0]
// this.column2 = [3, 0, 9]
// this.column3 = [0, 0, 8]
// this.row1 = [column1[0], column2[0], column3[0]]
// this.row2 = [column1[1], column2[1], column3[1]]
// this.row3 = [column1[2], column2[2], column3[2]]
// }

// let column1 = new seduko[5, 6, 0, 8, 4, 7, 0, 0, 0]

// column1.fillColumn()

// seduko.prototype.fillColumn = function () {



//   for (var i = 0; i < this.column.length; i++) {
//     if (this.column[i] === 0) {

//     }
//   }
// }
//hello



