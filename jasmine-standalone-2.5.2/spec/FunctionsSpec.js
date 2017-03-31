describe("isEven",function(){
  var evenNumber, oddNumber;
  //executes before all test
  beforeEach(function(){
    evenNumber = 6;
    oddNumber =7;
  });
  //Test
  it("should return true for a even number", function(){
    expect (isEven(evenNumber)).toBe(true);
  });
});
