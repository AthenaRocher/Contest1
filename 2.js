var col=5;
var n=5; //given in the question
for(let i=1;i<=n;i++)
{   var str='';
    for(let j=1;j<=col;j++)
    {   
        if(i==1||i==n )
        str=str+'*';
        else
        {
            if(j==1||j==col)
            str+='*';
            else
            str+=' ';
        }
    }
    console.log(str);
}


