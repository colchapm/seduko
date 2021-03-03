import Seduko from './../src/seduko.js'


describe('Seduko', () => {



  test('should tell us duplicates', () => {
    var newSeduko = new Seduko([1, 2, 3, 4, 5, 6, 7, 8, 8]);
    expect(newSeduko.checkForDoubles()).toEqual("not legal at 8");
  });

  test('should say "legal move"', () => {
    var newSeduko = new Seduko([1, 2, 3, 4, 5, 6, 7, 8, 9]);
    expect(newSeduko.checkForDoubles()).toEqual("legal move");
  });


});
