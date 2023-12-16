<template>
  <van-calendar title="摸鱼摸鱼🦑" :allow-same-day="true" type="range" :min-date="minDate" :max-date="maxDate"
    :show-confirm="false" :poppable="false" @confirm="onConfirm" :formatter="formatter">
  </van-calendar>
  <van-back-top right="1vw" bottom="2vh" />
</template>

<script lang="ts">
import { CalendarDayItem, showNotify } from 'vant';
import * as dayjs from "dayjs";
import { handleWeekend, handleHoliday, handleVacation, handleOvertime, handleLeave, extractHolidays } from './util';
import { holidayMap } from './data';

export default {
  setup() {
    const today = dayjs().date();
    const formatter = (day: CalendarDayItem) => {
      // 初始化全部周末
      handleWeekend(day);

      const year = day.date?.getFullYear();
      const month = day.date?.getMonth() !== undefined ? day.date?.getMonth() + 1 : 0;
      const theDay = day.date!.getDate();
      if (year && month && theDay) {
        const params = {
          year,
          month,
          date: theDay,
        };

        handleHoliday({ day, ...params });
        handleVacation({ day, ...params });
        handleOvertime({ day, ...params });
        handleLeave({ day, ...params });
      }

      if (day.type === 'start' || day.type === 'end') {
        day.className = undefined
      }

      return day;
    };

    const onConfirm = (values: Date[]) => {
      const [start, end] = values;
      const restDays = dayjs(end).diff(dayjs(start), 'day') + 1;
      let message = `摸鱼${restDays}天`;

      extractHolidays(holidayMap).forEach(time => {
        if (time >= start.getTime() && time <= end.getTime()) {
          const date = new Date(time)
          const holiday = holidayMap[date.getFullYear()][date.getMonth() + 1][date.getDate()]
          if (holiday.name && holiday.tip) {
            message = `${holiday.name}${holiday.tip}` + "\n" + message;
          }
        }
      });

      showNotify({
        type: "primary",
        duration: 3000,
        message,
      });
    };

    return {
      formatter,
      onConfirm,
      minDate: new Date(2023, 11, today),
      maxDate: new Date(2024, 11, 31),
    };
  },
};

</script>