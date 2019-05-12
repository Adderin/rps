function getSleepHours(day) {
switch(day) {
  case 'monday': return 7;
  case 'tuesday': return 9;
  case 'wednesday': return 6;
  case 'thursday': return 7;
  case 'friday': return 9;
  case 'saturday': return 8;
  case 'sunday': return 8;
}  

}
function getActualSleepHours() {
  var totalHours = getSleepHours('monday');
  totalHours += getSleepHours('tuesday');
  totalHours += getSleepHours('wednesday');
  totalHours += getSleepHours('thursday');
  totalHours += getSleepHours('friday');
  totalHours += getSleepHours('saturday');
  totalHours += getSleepHours('sunday');
  return totalHours;
}
function getIdealSleepHours() {
  const idealHours = 7.5;
  return idealHours*7;
}
function calculateSleepDebt() {
  var actualSleepHours = getActualSleepHours();
  var idealSleepHours = getIdealSleepHours();
  console.log('');
if(actualSleepHours < idealSleepHours) {
  var debt = idealSleepHours - actualSleepHours;
  console.log('Your sleep debts is: ', debt);
}
  else if (actualSleepHours===idealSleepHours){
    console.log('Your sleep hours are ideal!');
  }
  else {
    console.log('Your sleep too much!');
  }
}
calculateSleepDebt();