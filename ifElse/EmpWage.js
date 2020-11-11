const IS_PART_TIME = 1;
const IS_FULL_TIME = 2;
const PART_TIME_HOURS = 4;
const FULL_TIME_HOURS = 8;
const WAGE_PER_HOUR = 20;

function getWorkingHours(empCheck) {
    switch(empCheck){
        case IS_PART_TIME:
            return PART_TIME_HOURS;
        case IS_FULL_TIME:
            return FULL_TIME_HOURS;
        default:
            return 0;
    }
}

const NUM_OF_WORKING_DAYS = 20;
const MAX_HRS_IN_MONTH = 160;

function calcDailyWage(empHrs){
    return empHrs*WAGE_PER_HOUR;
}

let totalEmpHrs = 0;
let totalWorkingDays = 0;
let empDailyWageArray = new Array();
let empDailyWageMap = new Map();
while((totalEmpHrs<=MAX_HRS_IN_MONTH) && 
        (totalWorkingDays<NUM_OF_WORKING_DAYS)){
    totalWorkingDays++;
    let empCheck = Math.floor(Math.random()*10)%3;
    let empHrs=getWorkingHours(empCheck);
    totalEmpHrs = totalWorkingDays + empHrs;
    empDailyWageArray.push(calcDailyWage(empHrs));
    empDailyWageMap.set(totalWorkingDays, calcDailyWage(empHrs));
}

let empWage = calcDailyWage(totalEmpHrs);

console.log("Daily Wage Array: "+empDailyWageArray);
console.log("Emp hours: "+totalEmpHrs);
console.log("Emp wage: "+empWage)
console.log("Total working days: "+totalWorkingDays);

let totEmpWage = 0;
function sum(dailyWage){
    totEmpWage += dailyWage;
}
empDailyWageArray.forEach(sum);
console.log("Total days " +totalWorkingDays + "Total Hrs " +totalEmpHrs+ "Emp Wage: " +totEmpWage);

function totalWages(totalWage, dailyWage){
    return totalWage + dailyWage;
}
console.log("Employee wage with reduce " +empDailyWageArray.reduce(totalWages,0));

let dailyCntr = 0;
function mapDayWithWage(dailyWage){
    dailyCntr++;
    return dailyCntr + " = " +dailyWage;
}
let mapDayWithWageArr = empDailyWageArray.map(mapDayWithWage);
console.log("Daily wage Map");
console.log(mapDayWithWageArr);

function fullTimeWage(dailyWage){
    return dailyWage.includes("160");
}
let fullDayWageArr = mapDayWithWageArr.filter(fullTimeWage);
console.log("Daily Wge filter when Fulltime wage earned");
console.log(fullDayWageArr);

function findFulltimeWage(dailyWage){
    return dailyWage.includes("160");
}
console.log("First time fulltime wage wad earned on day: " +mapDayWithWageArr.find(findFulltimeWage));

function isAllFulltimeWage(dailyWage){
    return dailyWage.includes("160");
}
console.log("Check all elements have full time wage: " + fullDayWageArr.every(isAllFulltimeWage));

function isAnyPartTimeWage(dailyWage)
{
    return dailyWage.includes("80");
}
console.log("Check if any  part time wage: " +mapDayWithWageArr.some(isAnyPartTimeWage));

function totalDaysWorked(numOfDays, dailyWage){
    if(dailyWage>0) return numOfDays+1;
    return numOfDays;
}
console.log("Number of days employee worked: " +empDailyWageArray.reduce(totalDaysWorked,0));

console.log(empDailyWageMap);
function totalWages(totalWage, dailyWage){
    return totalWage + dailyWage;
}
console.log("Emp Wage map totalHrs: " + Array.from(empDailyWageMap.values()).reduce(totalWages, 0 ));