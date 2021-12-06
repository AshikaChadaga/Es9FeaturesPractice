//DotAllFlag (\s) that is used with Regex to match line terminators and emojis
//ES6
console.log(/Tutorials.Point/.test('Tutorials_Point')); 
console.log(/Tutorials.Point/.test('Tutorials\nPoint')); 
console.log(/Tutorials.Point/.test('Tutorials\rPoint'));
//ES9
console.log(/Tutorials.Point/s.test('Tutorials\nPoint'));
console.log(/Tutorials.Point/s.test('Tutorials\rPoint'));