function displayTime(){
    const date = new Date();
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const seconds = date.getSeconds();
    const session = document.getElementById('session')

    document.getElementById('hours').innerHTML = hours;
    document.getElementById('minutes').innerHTML = minutes;
    document.getElementById('seconds').innerHTML = seconds;

    if(hours >= 12){
        session.innerHTML = 'PM'
    }else{
        session.innerHTML = 'AM'
    }
}
setInterval(displayTime, 10);