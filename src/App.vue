<template>
  <van-calendar :allow-same-day="true" :min-date="minDate" :max-date="maxDate" :show-confirm="false" title="摸鱼摸鱼🦑"
    :poppable="false" type="range" @confirm="onConfirm" :formatter="formatter" />

  <van-back-top right="1vw" bottom="2vh" />
</template>

<script lang="ts">
import { CalendarDayItem, showNotify } from 'vant';
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
      const rest = dayjs(end).diff(dayjs(start), 'day') + 1;
      showNotify({
        type: "primary",
        duration: 10000,
        message: `${dayjs(start).format('YYYY-MM-DD')} ～ ${dayjs(end).format('YYYY-MM-DD')}，摸鱼${rest}天`,
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