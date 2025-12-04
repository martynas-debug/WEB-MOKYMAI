let calculateButton = document.getElementById('calculate');


calculateButton.addEventListener('click', function() {
    // console.log('clicked');
    let employeesCount = parseInt(document.getElementById('employees-count').value);
    let employeeMakesPerDay = parseInt(document.getElementById('employee-makes-per-day').value);
    let dayReservations = parseInt(document.getElementById('day-reservations').value);

    let bakeryTotal = employeesCount * employeeMakesPerDay;
    let isBakeryGonnaMakeIt = bakeryTotal >= dayReservations;

    let logInfo = {
        bakeryTotal,
        isBakeryGonnaMakeIt
    };
    console.log(logInfo);
});