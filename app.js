// implement polyfill for split

String.prototype.customSplit = function(sepr = ''){
  const output = [];
  let dummy = ''
  let str=this;
  for (let i = 0; i < str.length; i++) {
    const el = str[i]
    if (el === sepr || (sepr === '' && dummy)) {
      output.push(dummy)
      dummy = ''
    }
    if (el !== sepr) {
      dummy += el
    }
  }
  if (dummy) {
    output.push(dummy)
    dummy = ''
  }
  return output
}

const str = 'this is some string';
console.log(str.customSplit());



// CUstom JOin Function
Array.prototype.myJoin=function(joinSep = ''){
    const arr=this;
    let output='';
    for(let i=0;i<arr.length-1;i++){
        output+=""+arr[i]+joinSep;
    }
    output+=""+arr[arr.length-1];
    return output;
}
let arr=[1,2,3];
let string=arr.myJoin('-');
console.log(str);

// custom Reverse Function

Array.prototype.customReverse=function(){
    const arr=this;
    let j=arr.length-1;
    for(let i =0 ;i<arr.length/2;i++){
        let temp=arr[i];
        arr[i]=arr[j];
        arr[j]=temp;
        j--;
    }
}
let array=[1,2,3];
array.customReverse();
console.log(array);