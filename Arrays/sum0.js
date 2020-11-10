let givenArray=[1,2,-3,-4,-1,7,5,6,-2];
function find3numbers()
{
for (let i = 0; i < givenArray.length; i++) {
    for (let j = i + 1; j < givenArray.length; j++) {
        for (let k= j + 1; k < givenArray.length; k++) {
            if (givenArray[i] + givenArray[j] + givenArray[k] == 0) {
                console.log("Numbers found : " + givenArray[i] + "," + givenArray[j] + " and " + givenArray[k]);
            }
        }
    }
}
}
find3numbers();

