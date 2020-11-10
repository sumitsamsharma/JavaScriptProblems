var check = [11,22,33,44,55,66,77,88,99];
var arr=[];
var list=[];
var doubleList=[];
var i;
for(i = 0; i<100; i++) 
{
    arr.push(Math.floor(Math.random()*(100)));
}
arr.sort();
console.log("Array is: "+arr);
i=0;
while(i!=100)
    {
        if(arr[i]==arr[i+1])
        {
            if(arr[i]==arr[i+4])
            {
                i=i+5;
            }
            else if(arr[i]==arr[i+3])
            {
                i=i+4;
            }
            else if(arr[i]==arr[i+2])
            {
                i=i+3;
            }
            else
            {
                list.push(arr[i]);
                i=i+2;
            }

        } 
        else
        { 
           i=i+1;
        }      
    }
let len=list.length;
console.log("Numbers repeated twice length are: "+len+" Numbers are"+list);

for(let j=0;j<len;j++)
{
    for(let k=0;k<9;k++)
    {
        if(arr[j]==check[k])
        {
            doubleList.push(arr[j]);
            break;
        }
    }
}
len=doubleList.length;
console.log("Numbers repeated exactly twice length is: "+len+" Numbers are: "+doubleList);    


