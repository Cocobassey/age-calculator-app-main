function calculate() {
    const day = document.getElementById('day').value;
    const month = document.getElementById('month').value;
    const year = document.getElementById('year').value;
    
    Number(day);
    Number(month);
    Number(year);

    if (day > 31) 
        alert('Must be a valid day');
    else if (month > 12)
        alert('Must be a valid month');
    else if (year > 2023)
        alert('Must be in the past');
    else {
        const dateOfBirth = new Date(year, month - 1, day);
        const currentDate = new Date();

        const timeDiff = currentDate.getTime() - dateOfBirth.getTime();
        
        const dayDiff = Math.floor(timeDiff / (1000 * 60 * 60 * 24));

        const yearDiff = Math.floor(dayDiff / 365);

        const monthDiff = Math.floor((dayDiff % 365) / 30.44);

        const remainingDays = Math.floor(dayDiff - yearDiff * 365 - monthDiff * 30.44);

        document.querySelector('.year').innerHTML = yearDiff;
        document.querySelector('.month').innerHTML = monthDiff;
        document.querySelector('.day').innerHTML = dayDiff;
    }


}