export { holidayMap, vacationMap, overtimeMap, leaveMap };

interface Holiday {
  name: string;
  tip?: string;
}

interface DayMap {
  [day: number]: Holiday;
}

interface MonthMap {
  [month: number]: DayMap;
}

interface YearMap {
  [year: number]: MonthMap;
}

const holidayMap: YearMap = {
  2023: {},
  2024: {
    1: {
      1: {
        name: "元旦",
        tip: "请4休3连2=9天",
      },
    },
    2: {
      9: {
        name: "除夕",
        tip: "",
      },
      10: {
        name: "春节",
        tip: "请6休8连2=16天",
      },
    },
    4: {
      4: {
        name: "清明",
        tip: "请3休3连2=8天",
      },
    },
    5: {
      1: {
        name: "劳动",
        tip: "请3休5连1=9天",
      },
    },
    6: {
      10: {
        name: "端午",
        tip: "请4休3连2=9天",
      },
    },
    9: {
      17: {
        name: "中秋",
        tip: "请3休3连2=8天",
      },
    },
    10: {
      1: {
        name: "国庆",
        tip: "请2休7连1=10天",
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
