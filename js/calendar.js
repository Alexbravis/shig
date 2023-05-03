const prev = document.querySelector('.prev');
const next = document.querySelector('.next');

const date = new Date();

function animationCalendar() {
    const month = document.querySelector('.month');
    const year = document.querySelector('.year');
    const daysWeek = document.querySelector('.days_week');
    const days = document.querySelector('.days');
    const dayStartMonth = new Date(date.getFullYear(), date.getMonth()).getDay();
    const lastDayOfMonth = new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();

    const prevDayOfMonth = new Date(date.getFullYear(), date.getMonth(), 0).getDate();
    const lastDayOfWeek = new Date(date.getFullYear(), date.getMonth() + 1, 0).getDay();
    const nextDay = 7 - lastDayOfWeek - 1;

    const days_week = ['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Вс'];
    const monthOfYear = ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'];
    const dayOfMonth = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];


    let prevDay = new Date(date.getFullYear(), date.getMonth(), 0).getDay();

    let dw = '';
    for (let i = 0; i < days_week.length; i++) {
        dw += `<p class="dw">${days_week[i]}</p>`;
        daysWeek.innerHTML = dw;
    }
    month.textContent = monthOfYear[date.getMonth()];
    year.textContent = date.getFullYear();


    let day = '';

//Возможно придется доделать
//------------------------------------------------------------------
    let today = date.getDay();  //Техническая переменная которая обозначает день недели


    if (dayStartMonth != 1) {
        // if (today == 0 || today == 1 || today == 2 || today == 3 || today == 4 || today == 5 || today == 6) {
        //     today = today + 7;
        //     const forFerstDay = date.getDate() % 7; //Делим по модулю сегодняшнее число на 7 узнаем остаток
        //     let firstDay = today - forFerstDay;     //Вычитаем из дня недели наш остаток
        //     for(let i = firstDay; i > 0; i--) {     //Лепим на основе получившего значения цикл
        //         day += `<p class="last day"> ${prevDayOfMonth - i + 1}</p>`;
        //         days.innerHTML = day;
        //     }
        // } else {
        //     const forFerstDay = date.getDate() % 7;
        //     const firstDay = today - forFerstDay;
        //     for(let i = firstDay; i > 0; i--) {
        //         day += `<p class="last day"> ${prevDayOfMonth - i + 1}</p>`;
        //         days.innerHTML = day;
        //     }
        // }

            for (let i = prevDay - 1; i >= 0; i--) {
                day += `<p class="last day"> ${prevDayOfMonth - i}</p>`;
                days.innerHTML = day;
            }



                    
    }
//------------------------------------------------------------------
    for (let i = 0; i < lastDayOfMonth; i++) {
        if (i === date.getDate() - 1 && date.getMonth() === new Date().getMonth() && date.getFullYear() === new Date().getFullYear()) {
            day += `<p class="day now">${dayOfMonth[date.getDate() - 1]}</p>`;
        } else {
            day += `<p class="day">${dayOfMonth[i]}</p>`;
        }
        days.innerHTML = day;
    }

    for (let i = 0; i <= nextDay; i++) {
        if (lastDayOfWeek != 0) {
            day += `<p class="last day">${dayOfMonth[i]}</p>`;
            days.innerHTML = day; 
        }
    }

}
animationCalendar();

prev.addEventListener('click', function() {
    date.setMonth(date.getMonth() - 1);
    animationCalendar();
});
next.addEventListener('click', function() {
    date.setMonth(date.getMonth() + 1);
    animationCalendar();
});


