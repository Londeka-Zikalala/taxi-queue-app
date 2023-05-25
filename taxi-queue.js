//function to join the queue must increment the commutercount and add a person to the commuter in queue
//function to leave queue must decrement the commuter count and remove a person from the commuter in queue
// function to join taxi queue must increment the taxi count and add a taxi to the taxiqueue length
// the queue length must return the commuter count 
//the  queuelengthx must return the taxi count
//the taxi depart must check if the commuters are equal or more than 12 and decrement the taxicount, and pop a taxi from the taxi queue length



function TaxiQueue() {
var commuterCount = 0
var taxiCount = 0
var commuterInQueue = [];
var taxiInQueue= [];



	function joinQueue() {
    commuterCount++;
    commuterInQueue.push(1);
  }

	function leaveQueue() {
		if (commuterCount > 0) {
		  commuterCount--;
		  commuterInQueue.shift();
		}
	  }

	  function joinTaxiQueue() {
		taxiCount++;
		taxiInQueue.push(1);
	  }

	function queueLength() {
		return taxiCount
	}

	function queueLengthx() {
		return commuterCount
	}


	function taxiDepart() {
		if (commuterInQueue.length >= 12 && taxiCount > 0) {
		  taxiCount--;
		  commuterCount -= 12;
		}
		return taxiCount
	  }

	  function taxiQueueLength(){
		return taxiCount
	}
	

	

	return {
		joinQueue,
		leaveQueue,
		joinTaxiQueue,
		queueLength,
		queueLengthx,
		taxiDepart,
		taxiQueueLength
	}
}