var count = 0;

var integerZero = 0;
var stringZero = '0';
var booleanVariable = false;
var cat = {
    feet: 4,
    eyes: 2,
    name: 'Nickay'
};

function showmyHtmlDocument() {
   document.body.getElementsByTagName('div')[0].innerHTML ="HTML is shown";
   
}
function showMycat() {
    alert(`My cat's name is ${cat.name}`)
    document.getElementById('cat-name').innerHTML = message;
}

function isZeroEqual() {
    const isZero = integerZero === stringZero;
    alert(`Integer Zero is equals to String Zero: ${isZero}`);
}



function sayHello() {
    count++;
    alert('Hello this is my first javascript code');

}

function addCount() {
    count++;
    alert(count);
}