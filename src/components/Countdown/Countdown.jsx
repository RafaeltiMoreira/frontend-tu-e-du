import { useState, useEffect, useCallback } from 'react';

const Countdown = () => {

  const [countdownDate] = useState(new Date('09/14/2024 16:00:00').getTime()); // Corrigido o formato da data para MM/DD/YYYY
  const [state, setState] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });
  const [message, setMessage] = useState('');

  const setNewTime = useCallback(() => {
    if (countdownDate) {
      const currentTime = new Date().getTime();
      const distanceToDate = countdownDate - currentTime;

      const now = new Date();
      const eventDay = new Date(countdownDate);
      const isToday = now.toDateString() === eventDay.toDateString();

      if (distanceToDate <= 0) {
        const hoursNow = now.getHours();
        const minutesNow = now.getMinutes();

        // Se a hora já passou de 01:45, mostra "Parabéns aos casados!"
        if (hoursNow > 16 || (hoursNow === 16 && minutesNow >= 0)) {
          setMessage('Que esta nova fase seja cheia de amor e união!');
        } else {
          // Se for o dia, mas ainda não chegou 01:45
          setMessage('O grande dia abençoado do nosso matrimônio chegou!');
        }
        return;
      }

      // Se for o dia do casamento, mas ainda não chegou 01:45
      if (isToday && !message) {
        setMessage('O grande dia abençoado do nosso matrimônio chegou!');
      }

      let days = Math.floor(distanceToDate / (1000 * 60 * 60 * 24));
      let hours = Math.floor((distanceToDate % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      let minutes = Math.floor((distanceToDate % (1000 * 60 * 60)) / (1000 * 60));
      let seconds = Math.floor((distanceToDate % (1000 * 60)) / 1000);

      const numbersToAddZeroTo = [1, 2, 3, 4, 5, 6, 7, 8, 9];

      days = `${days}`;
      if (numbersToAddZeroTo.includes(hours)) {
        hours = `0${hours}`;
      } else if (numbersToAddZeroTo.includes(minutes)) {
        minutes = `0${minutes}`;
      } else if (numbersToAddZeroTo.includes(seconds)) {
        seconds = `0${seconds}`;
      }

      setState({ days: days, hours: hours, minutes, seconds });
    }
  }, [countdownDate, message]);

  useEffect(() => {
    const intervalId = setInterval(() => setNewTime(), 1000);
    return () => clearInterval(intervalId);
  }, [setNewTime]);

  return (
    <>
      <div className="react-countdown">
        <div className='time-section'>
          <div className='time'>{state.days || '0'}</div>
          <small className="time-text">Dias</small>
        </div>
        <div className='time-section'>
          <div className='time'>{state.hours || '00'}</div>
          <small className="time-text">Horas</small>
        </div>
        <div className='time-section'>
          <div className='time'>{state.minutes || '00'}</div>
          <small className="time-text">Min.</small>
        </div>
        <div className='time-section'>
          <div className='time'>{state.seconds || '00'}</div>
          <small className="time-text">Seg.</small>
        </div>
      </div>
      <div className='time'>
        <h2>{message}</h2>
      </div>
    </>
  );
};

export default Countdown;