module.exports = function getZerosCount(number, base) {
var j = 1;
var i = 2;
var x = base;
var a = new Array();
do
{
 if (x % i == 0)
 {
  a[j] = i;
  j++;
  x = x / i;
 }
 else
 {
  i++;
 }
}
while (i < x);
a[j] = i;
var topVal = 0;
for (var i=1; i<a.length; ++i){
	if(a[i]>topVal){
		topVal = a[i];
	}
}
var count = 0;
for(var i = 0; i <= a.length; i++){
    if(a[i] == topVal){
        count += 1;
    }
}
var curVal;
var zerosCount = 0;
for (var i=1; i<500; i++){
	curVal = Math.pow(topVal, i);
	if (curVal<=number){
		zerosCount+=Math.floor(number/curVal);
	}
}
return Math.floor(zerosCount/count);
}