import React from 'react';
import { getFirstDayOfWeek } from '@/lib/utils';

const Calendar: React.FC = () => {
  const date = new Date();
  const startOfWeek = getFirstDayOfWeek(date);
  const lastOfWeek = new Date(startOfWeek);
  lastOfWeek.setDate(lastOfWeek.getDate() + 6);

  return (
    <div className='w-full h-auto border'>
      {
        Array.from(Array(6), (e, number) => {
          return <></>;
        })
      }
    </div>
  );
};

Calendar.displayName = 'Calendar';

export default Calendar;
