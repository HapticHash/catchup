
  // Get a reference to the database service
  var database = firebase.database();

  function writeUserData( eventName, eventAdd, eventTime, eventStartDate, eventEndDate) {
    
    firebase.database().ref('Events').push({
      name: eventName,
      address: eventAdd,
      time : eventTime,
      startDate : eventStartDate,
      endDate : eventEndDate
    });
  }