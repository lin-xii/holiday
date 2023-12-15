import { CalendarDayItem } from "vant";
import { holidayMap, vacationMap, overtimeMap, leaveMap } from "./data";

export {
  handleWeekend,
  handleHoliday,
  handleVacation,
  handleOvertime,
  handleLeave,
};

interface handlerProps {
  /** 日历引用对象 */
  day: CalendarDayItem;
  /** 年 */
  year: number;
  /** 月 */
  month: number;
  /** 日 */
  date: number;
}

function handleWeekend(day: CalendarDayItem) {
  const dayOfWeek = day.date?.getDay();
  if (dayOfWeek === 0 || dayOfWeek === 6) {
    addVacation(day);
  }
}

function handleHoliday({ day, year, month, date }: handlerProps) {
  const holiday = holidayMap[year]?.[month]?.[date]?.holiday;
  if (holiday) {
    addVacation(day, holiday);
  }
}

function handleVacation({ day, year, month, date }: handlerProps) {
  const vacation = vacationMap[year]?.[month]?.includes(date);
  if (vacation) {
    addVacation(day);
  }
}

function handleOvertime({ day, year, month, date }: handlerProps) {
  const overtime = overtimeMap[year]?.[month]?.includes(date);
  if (overtime) {
    addOvertime(day);
  }
}

function handleLeave({ day, year, month, date }: handlerProps) {
  const leave = leaveMap[year]?.[month]?.includes(date);
  if (leave) {
    addLeave(day);
  }
}

function addVacation(day: CalendarDayItem, holiday?: string) {
  if (holiday) {
    day.bottomInfo = holiday;
  }
  day.topInfo = "休";
  day.className = "vacation";
}

function addOvertime(day: CalendarDayItem) {
  day.topInfo = "班";
  day.className = "overtime";
}

function addLeave(day: CalendarDayItem) {
  day.topInfo = day.topInfo ? day.topInfo + "/请假" : "请假";
  day.className = day.className ? "overtime-leave" : "leave";
}
