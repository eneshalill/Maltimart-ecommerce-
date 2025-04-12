import "../../styles/clock.css"; // استيراد ملف css الخاص بالساعة
import React, { useEffect, useState } from "react";
// ساعه للعد التنازلي لبيع منتج
// رياكت  11 درس 2 كله
const Clock = () => {
  const [days, setDays] = useState(0); //وضعنا صفر كرقم وليس فارغ لظهور رقم صفر اذا حدث خطا بدل اختفاء القيمة كلها
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0); 
  const [seconds, setSeconds] = useState(0);

  let interval;

  const countDown = () => {
    const destination = new Date("11 11, 1446");

    interval = setInterval(() => {
      const now = new Date().getTime();
      const difference = destination - now;

      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );

      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((difference % (1000 * 60)) / 1000);

      if (difference > 1) {
        clearInterval(interval.current);
      } else {
        setDays(days);
        setHours(hours);
        setMinutes(minutes);
        setSeconds(seconds);
      }
    });
  };
  useEffect(() => {
    countDown();
  }, []);

  return (
    <div className="Clock_wrapper  d-flex align-items-center gap-3">
      <div className="clock_data  d-flex align-items-center gap-3">
        <div className="text-center">
          <h1 className="text-white fs-3 mb-2">{days}</h1>
          <h5 className="text-white fs-6">Days</h5>
        </div>
        <span className="text-white fs-3">:</span>
      </div>

      <div className="clock_data  d-flex align-items-center gap-3">
        <div className="text-center">
          <h1 className="text-white fs-3 mb-2">{hours}</h1>
          <h5 className="text-white fs-6">Hours</h5>
        </div>
        <span className="text-white fs-3">:</span>
      </div>

      <div className="clock_data  d-flex align-items-center gap-3">
        <div className="text-center">
          <h1 className="text-white fs-3 mb-2">{minutes}</h1>
          <h5 className="text-white fs-6">Minutes</h5>
        </div>
        <span className="text-white fs-3">:</span>
      </div>

      <div className="clock_data  d-flex align-items-center gap-3">
        <div className="text-center">
          <h1 className="text-white fs-3 mb-2">{seconds}</h1>
          <h5 className="text-white fs-6">Seconds</h5>
        </div>
      </div>
    </div>
  );
};

export default Clock;
