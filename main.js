let arr1=[1,2,3];

let check=(arr1)=>{
    let arr2=[...arr1];
    arr2[1]=5;
    console.log(arr2);
    console.log(arr1);
    document.write(`arr1=${arr1} <br> arr2=${arr2}`)

}
check(arr1);

