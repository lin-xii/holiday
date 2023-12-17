export { holidayMap, vacationMap, overtimeMap, leaveMap };

interface Holiday {
  name: string;
  tip: string;
}

interface DayMap {
  [day: number]: Holiday;
}

interface MonthMap {
  [month: number]: DayMap;
}

export interface YearMap {
  [year: number]: MonthMap;
}

const holidayMap: YearMap = {
  2023: {},
  2024: {
    1: {
      1: {
        name: "元旦",
        tip: "9天：请4休3连2",
      },
    },
    2: {
      9: {
        name: "除夕",
        tip: "希望能放假🙄",
      },
      10: {
        name: "春节",
        tip: "16天：请6休8连2",
      },
    },
    4: {
      4: {
        name: "清明",
        tip: "8天：请3休3连2",
      },
    },
    5: {
      1: {
        name: "劳动",
        tip: "9天：请3休5连1",
      },
    },
    6: {
      10: {
        name: "端午",
        tip: "9天：请4休3连2",
      },
    },
    9: {
      17: {
        name: "中秋",
        tip: "8天：请3休3连2",
      },
    },
    10: {
      1: {
        name: "国庆",
        tip: "10天：请2休7连1",
      },
    },
  },
};

const vacationMap: Record<number, any> = {
  2023: {
    12: [30, 31],
  },
  2024: {
    1: [1],
    2: [10, 11, 12, 13, 14, 15, 16, 17],
    4: [4, 5, 6],
    5: [1, 2, 3, 4, 5],
    6: [8, 9, 10],
    9: [15, 16, 17],
    10: [1, 2, 3, 4, 5, 6, 7],
  },
};

const overtimeMap: Record<number, any> = {
  2023: {},
  2024: { 2: [4, 9, 18], 4: [7, 28], 5: [11], 9: [14, 29], 10: [12] },
};

const leaveMap: Record<number, any> = {
  2023: {},
  2024: {
    1: [2, 3, 4, 5],
    2: [18, 19, 20, 21, 22, 23],
    4: [1, 2, 3, 28, 29, 30],
    6: [11, 12, 13, 14],
    9: [18, 19, 20, 29, 30],
  },
};

// TODO：替换复杂的数据结构
const holidaysMap = [
  {
    "2024-01-01": {
      holiday: "元旦",
      tip: "9天：请4休3连2",
      type: "休",
    },
  },
];
