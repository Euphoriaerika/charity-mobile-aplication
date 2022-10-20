async function addvolonteer() {
    // alert('email: ')


    const fio = document.getElementById('FIO').value,
    telephoneNumber = document.getElementById('TelephoneNumber').value,
    arrivalLocation = document.getElementById('ArrivalLocation').value,
    targetDestination = document.getElementById('TargetDestination').value,
    carDescription = document.getElementById('CarDescription').value,
    capacity = document.getElementById('Capacity').value,
    dateAndTimeOfDeparture = document.getElementById('DateAndTimeOfDeparture').value;

    let formData = new FormData();
    formData.append('FIO', fio);
    formData.append('TelephoneNumber', telephoneNumber);
    formData.append('ArrivalLocation', arrivalLocation);
    formData.append('TargetDestination', targetDestination);
    formData.append('CarDescription', carDescription);
    formData.append('Capacity', capacity);
    formData.append('DateAndTimeOfDeparture', dateAndTimeOfDeparture);

    const res = await fetch('https://charity-mobile-aplication.herokuapp.com/volounteers/Create', {
        method: 'POST',
        body: formData
    });

    const data = await res.json();
}