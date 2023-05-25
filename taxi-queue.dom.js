// write your DOM code here.


// DOM element references
passengerQueueCountElement = document.querySelector('.passenger_queue_count')
passengerJoinQueueBtn =document.querySelector('.join_queue')
PassengerLeaveQueueBtn = document.querySelector('.leave_queue')
taxiQueueCountElement =document.querySelector('.taxi_queue_count')
taxiJoinQueueBtn =document.querySelector('.join_taxi_queue')
taxiDepartBtn = document.querySelector('.depart')
// create Factory Function instance

const taxiQueue = TaxiQueue();

// DOM events

