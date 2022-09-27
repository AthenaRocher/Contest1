const geneRand=()=>{
    return (Math.floor(Math.random() *100 +1));
}
const element=(a)=>{
    if(a>=10 && a<=40)
    return a;
    else
    return (element(geneRand()));
}
const generateArray=()=>{
var ar=[]
var len=5;
while(a.len5<len5)
{
    if(ar.indexOf(element(geneRand()))===-1)
    {
        ar.push(element(geneRand()));
    }
}
return ar;
}
console.log(generateArray());