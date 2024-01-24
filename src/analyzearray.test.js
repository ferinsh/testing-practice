import analyzeArray from "./analyzearray.js";



test('simple array', () => {
    let obj = {"average": 40,"length": 5,"max": 60,"min": 20};
    expect(analyzeArray([20,30,40,50,60])).toStrictEqual(obj);
})


