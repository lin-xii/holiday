<template>
  <van-calendar :allow-same-day="true" :min-date="minDate" :max-date="maxDate" :show-confirm="false" title="日历"
    :poppable="false" type="range" @confirm="onConfirm" :formatter="formatter" />
</template>

<script lang="ts">
import { CalendarDayItem } from 'vant';
import * as dayjs from "dayjs";
import { handleWeekend, handleHoliday, handleVacation, handleOvertime, handleLeave } from './util';

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
      console.debug(start, end)
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