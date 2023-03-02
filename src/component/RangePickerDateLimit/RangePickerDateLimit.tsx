import React, { useState } from 'react';
import { DatePicker } from 'antd';
import type { Dayjs } from 'dayjs';
import dayjs from 'dayjs';
import { RangePickerProps } from 'antd/es/date-picker';
const { RangePicker } = DatePicker;

type RangeValue = [Dayjs | null, Dayjs | null] | null;

type Props={
 LimitDayNum?:number
}&RangePickerProps
const RangePickerDateLimit: React.FC = ({LimitDayNum,value,...Props}:Props) => {
  const [dates, setDates] = useState<RangeValue>(null);
  const disabledDate = (current: Dayjs) => {   
    if (!dates) {
      return false;
    }
    if (LimitDayNum) {
      const tooLate = dates[0] && current.diff(dates[0], 'days') > LimitDayNum;
      const tooEarly = dates[1] && dates[1].diff(current, 'days') > LimitDayNum;
      console.log("tooEarly",tooEarly);
      console.log("tooLate",tooLate);
      return !!tooEarly || !!tooLate;
    }
    return false;
  
  };
  const onOpenChange = (open: boolean) => {
    if (open) {
      setDates([null, null]);
    } else {
      setDates(null);
    }
  };
  const onCalendarChange=(val:RangeValue)=>{
    // console.log("onCalendarChange",val);
    setDates(val)
  }


  return (
      <RangePicker
      value={dates || value}
      disabledDate={disabledDate}
      onCalendarChange={onCalendarChange}
   
      onOpenChange={onOpenChange}
     {...Props}
    />

  );
};

export default RangePickerDateLimit;