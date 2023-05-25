// write your DOM code here.

function taxiJoin() {
    taxiQueue.joinTaxiQueue();
    taxiQueueCountElement.innerHTML = taxiQueue.taxiQueueLength();
    addToLocalStorage();
  }
  
  function passengersJoin() {
    taxiQueue.joinQueue();
    passengerQueueCountElement.innerHTML = taxiQueue.queueLengthx();
    addToLocalStorage();
  }
  
  function taxiLeave() {
    taxiQueueCountElement.innerHTML = taxiQueue.taxiQueueLength();
    passengerQueueCountElement.innerHTML = taxiQueue.queueLengthx();
    taxiLeaveCountElement.innerHTML = taxiQueue.taxiDepart()
    addToLocalStorage();
  }
  function passengerLeave() {
    taxiQueue.leaveQueue();
    passengerQueueCountElement.innerHTML = taxiQueue.queueLengthx();
    addToLocalStorage();
  }
  // Get local storage key 
  const countsKey = 'queueCounts'
// parse the values and add to the local storage
var taxiQueue = JSON.parse(localStorage.getItem(countsKey));
if (!taxiQueue) {
  taxiQueue = TaxiQueue();
  addToLocalStorage();
}
// get values from the local storage
function addToLocalStorage() {
    localStorage.setItem(countsKey, JSON.stringify(taxiQueue));
  }
  


// DOM element references
passengerQueueCountElement = document.querySelector('.passenger_queue_count')
passengerJoinQueueBtn =document.querySelector('.join_queue')
PassengerLeaveQueueBtn = document.querySelector('.leave_queue')
taxiQueueCountElement =document.querySelector('.taxi_queue_count')
taxiLeaveCountElement = document.querySelector('taxi_queue_depart')
taxiJoinQueueBtn =document.querySelector('.join_taxi_queue')
taxiDepartBtn = document.querySelector('.depart')
// create Factory Function instance

 taxiQueue = TaxiQueue();

// DOM events

passengerJoinQueueBtn.addEventListener('click', passengersJoin);
PassengerLeaveQueueBtn.addEventListener('click', passengerLeave);
taxiJoinQueueBtn.addEventListener('click', taxiJoin);
taxiDepartBtn.addEventListener('click', taxiLeave);
