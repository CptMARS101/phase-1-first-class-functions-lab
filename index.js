// Code your solution in this file!
const driversArray = ['Antonia', 'Nuru', 'Amari', 'Mo']
const returnFirstTwoDrivers = function(driversArray) {
return driversArray.slice(0, 2);
};
const returnLastTwoDrivers = function(driversArray) {
    return driversArray.slice(-2);
};
const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]
function createFareMultiplier(integer) {
    return function(fare) {
        return  fare * integer
    };
};
const fareDoubler = createFareMultiplier(2);
const fare = 10
const doubledFare = fareDoubler(fare);
const fareTripler = createFareMultiplier(3);
const tripledFare = fareTripler(fare);
function selectDifferentDrivers(driversArray, returnFirstTwoDrivers) {
    return returnFirstTwoDrivers(driversArray)
}
