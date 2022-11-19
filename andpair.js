function COUNTPAIR(arr)
{
    var coutn=0;
    for(i=0;i<arr.length;i++)
    {
        for(j=1+i;j<arr.length;j++)
        {
            if((arr[i]&arr[j])==0)
            {
                //console.log(arr[i],arr[j]);
                coutn++;
            }
        }
    }   
    return coutn;
}

var arr=[2,3,4]
console.log(COUNTPAIR(arr));