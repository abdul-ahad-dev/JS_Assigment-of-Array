// Statement 1

document.write("<h2>Statement 1</h2>");

var array = [3, 9, 7, 5, 13, 17, 21, 31, 29, 43, 37, 41, 47];

document.write("Original Array : <b>", array , '</b> <br  />');

var myArray = array.slice(3,12);

document.write("After slicing Array : <b>", myArray , '</b> <br  />');



// Statement 2

document.write("<h2>Statement 2</h2>");

document.write("Original Array : <b>", myArray , '</b> <br  />');

var myArraySplice = myArray.splice(5,7);
document.write("After Slice Method use in array <br  > Removed Element : <b>", myArraySplice , '</b> <br  />');
document.write("Updated Array : <b>", myArray , '</b> <br  />');


// Statement 3

document.write("<h2>Statement 3</h2>");

document.write("Original Array : <b>", myArray , '</b> <br  />');

var myArrayShift = myArray.shift();

document.write("Shift Element : <b>", myArrayShift , '</b> <br  />');
document.write("Updated Array : <b>", myArray , '</b> <br  />');


// Statement 4

document.write("<h2>Statement 4</h2>");

document.write("Original Array : <b>", myArray , '</b> <br  />');

myArray.unshift(5, 7, 9);
document.write("Add Element in Array : <b>5,7,9</b> <br  />");
document.write("After Unshift Method use in Array : <b>", myArray , '</b> <br  />');


// Statement 5

document.write("<h2>Statement 5</h2>");

document.write("Original Array : <b>", myArray , '</b> <br  />');

myArray.push(61, 53, 59)
document.write("Add Element in Array : <b>61,53,59</b> <br  />");
document.write("After Unshift Method use in Array : <b>", myArray , '</b> <br  />');




// Statement 6

document.write("<h2>Statement 6</h2>");

document.write("Original Array : <b>", myArray , '</b> <br  />');

var myArrayPop = myArray.pop();

document.write("Removed Element : <b>", myArrayPop , '</b> <br  />');

document.write("After Pop Method use in Array : <b>", myArray , '</b> <br  />');


// Statement 7

document.write("<h2>Statement 7</h2>");

document.write("Array : <b>", myArray , '</b> <br  />');

var myArraySlice = myArray.slice(4,7);

document.write("After Slice Method use in array : <b>", myArraySlice , '</b> <br  />');
document.write("Original Array : <b>", myArray , '</b> <br  />');


// Statement 8

document.write("<h2>Statement 8</h2>");

document.write("Original Array : <b>", myArray , '</b> <br  />');

var myArraySlice = myArray.splice(2,4);

document.write("After Slice Method use in array <br  > Removed Elementt: <b>", myArraySlice , '</b> <br  />');
document.write("Updated Array : <b>", myArray , '</b> <br  />');


// Statement 9

document.write("<h2>Statement 9</h2>");

var furits = ['Apple', 'Banana', 'Cherry', 'Mango'];
document.write("Furits List : <b>", furits , "</b> <br  />");

var furit1 = furits.shift(); 
var furit2 = furits.shift(); 
var furit3 = furits.shift(); 
var furit4 = furits.shift(); 
document.write("Furit List Element : <b>", furit1 , '</b> <br  />');
document.write("Furit List Element : <b>", furit2 , '</b> <br  />');
document.write("Furit List Element : <b>", furit3 , '</b> <br  />');
document.write("Furit List Element : <b>", furit4 , '</b> <br  />');


// Statement 10
document.write("<h2>Statement 10</h2>");

document.write("Original Array : <b>", myArray , '</b> <br  />');
addElement = [71, 73, 79]
document.write("Add Element in Array : <b>", addElement , '</b> <br  />');
myArray.push(addElement);
document.write("Updated Array : <b>", myArray , '</b> <br  />');
