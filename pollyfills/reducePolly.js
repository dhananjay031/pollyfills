// reduce function ka pollyfill


const numbers = [1,2,3,4,5,6];
numbers.myReduce = myReduce;

function myReduce(callback,acc){
    var myAcc = acc;
    for(let i=0; i < this.length; i++){
        myAcc= myAcc?callback(myAcc,this[i],i,this):this[i];
    }
     return myAcc;
}


const reduceResult = numbers.myReduce((acc,val)=>{
    return acc + val;
});

console.log(reduceResult,'reduce result');

