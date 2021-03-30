const timer = (timer, deadline) => {

    const getTime = () => {
        const time = Date.parse(deadline) - Date.parse(new Date()),
              seconds = Math.floor(time / 1000 % 60),
              minutes = Math.floor(time / 1000 / 60 % 60),
              hours = Math.floor(time / 1000 / 60 / 60 % 24),
              days = Math.floor(time / 1000 / 60 / 60 / 24);
        return {
            time: time,
            seconds: seconds,
            minutes: minutes,
            hours: hours,
            days: days,
        }
    };

    const setTime = function() {

        const timerWrapper = document.querySelector(timer),
              seconds = timerWrapper.querySelector('#seconds'),
              minutes = timerWrapper.querySelector('#minutes'),
              hours = timerWrapper.querySelector('#hours'),
              days = timerWrapper.querySelector('#days'),
              update = setInterval(() => {
                  updateTime();
              }, 1000);


        function updateTime() {

            function addZero(item) {
                if (item < 9) {
                    return `0${item}`
                } else {
                    return item
                }
            }

            seconds.textContent = `${addZero(getTime().seconds)}`;
            minutes.textContent = `${addZero(getTime().minutes)}`;
            hours.textContent = `${addZero(getTime().hours)}`;
            days.textContent = `${addZero(getTime().days)}`;

            

            if (getTime().time <= 0) {
                clearInterval(update);
                seconds.textContent = `00`;
                minutes.textContent = `00`;
                hours.textContent = `00`;
                days.textContent = `00`;
            }

            
        }

        updateTime();

    }

    setTime();

};

export default timer;