var months=["January","February","March","April","May","June","July","August","September","October","November","December"];

function month()
{
    return months[Math.floor(Math.random() * 100) % 12 ];
}

let total_people=0;
let bdayMap=new Map();
let user_no=1;
let user=[];
while(user_no!=51)
{
    bdayMap.set(user_no,month());
    user_no++;
}

for(let i=0;i<12;i++)
{
    console.log(bdayMap.get(months[i])+" in "+months[i]);
}
user=bdayMap.get(months[0]);
console.log(user);
console.log(bdayMap.get(months[0])+" in "+months[0]);