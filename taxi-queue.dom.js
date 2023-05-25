// write your DOM code here.

function taxiJoin() {
    taxiQueue.joinTaxiQueue();
    taxiQueueCountElement.innerHTML = taxiQueue.taxiQueueLength();
  }
  
  function passengersJoin() {
    taxiQueue.joinQueue();
    passengerQueueCountElement.innerHTML = taxiQueue.queueLengthx();
  }
  
  function taxiLeave() {
    taxiQueue.taxiDepart();
    taxiQueueCountElement.innerHTML = taxiQueue.taxiQueueLength();
    passengerQueueCountElement.innerHTML = taxiQueue.queueLengthx();
    taxiLeaveCountElement.innerHTML = taxiQueue.taxiDepart()
  }
  function passengerLeave() {
    taxiQueue.leaveQueue();
    passengerQueueCountElement.innerHTML = taxiQueue.queueLengthx();
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

const taxiQueue = TaxiQueue();

// DOM events

passengerJoinQueueBtn.addEventListener('click', passengersJoin);
PassengerLeaveQueueBtn.addEventListener('click', passengerLeave);
taxiJoinQueueBtn.addEventListener('click', taxiJoin);
taxiDepartBtn.addEventListener('click', taxiLeave);
