<template>
  <div class="calender">
    <div class="months-wrapper">
      <div v-for="(month, index) in monthsDisplayed" :key="index" class="month">
        <div class="name">
          <p>{{ month }}</p>
        </div>
        <div class="days">
          <div v-for="(day, i) in days" :key="i">
            <p>{{ day }}</p>
          </div>
        </div>
        <div>
          
        </div>
      </div>
    </div>
    <div class="controls">
      <div @click.stop="goToPrev">
        <img src="@/assets/icons/navigate_before-24px.svg" alt="previous" />
      </div>
      <div @click.stop="goToNext">
        <img src="@/assets/icons/navigate_next-24px.svg" alt="next" />
      </div>
    </div>
  </div>
</template>

<script>
import { getMonth, startOfMonth, addMonths, startOfWeek, getTime, endOfMonth } from "date-fns";

export default {
  name: "MonthCalender",
  data() {
    return {
      startDate: 0,
      startMonth: 0,
      days: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"],
      months: [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December"
      ],
      dates: [],
      events: []
    };
  },
  computed: {
    nextMonth() {
      return this.startMonth + 1 > 11 ? this.startMonth - 11 : this.startMonth + 1;
    },
    next2Month() {
      return this.startMonth + 2 > 11 ? this.startMonth + 1 - 11 : this.startMonth + 2;
    },
    monthsDisplayed() {
      return [
        this.months[this.startMonth],
        this.months[this.nextMonth],
        this.months[this.next2Month]
      ];
    }
  },
  created() {
    this.startMonth = getMonth(Date.now());
    this.startDate = Date.now();
    this.calcDates();
  },
  methods: {
    addEvent() {},
    goToPrev() {
      this.startMonth = this.startMonth === 0 ? 11 : this.startMonth - 1;
    },
    goToNext() {
      this.startMonth = this.startMonth + 1 > 11 ? 0 : this.startMonth + 1;
    },
    calcDates() {
      // const calenderStart = getTime(startOfWeek(monthStart));
      // Number of seconds in a day
      const numMilliSecondsInDay = 86400000;
      const numMilliSecondsInWeek = 604800000;
      const calenderStart = getTime(startOfMonth(this.startDate));
      let monthArr = [];
      let numOfMonthsToShow = 3;
      for (let k = 0; k < numOfMonthsToShow; k++) {
        // const numDaysInMonth = Math.ceil((monthEnd - monthStart) / numMilliSecondsInDay);
        const monthStart = getTime(addMonths(startOfMonth(calenderStart), k));
        const monthEnd = getTime(endOfMonth(monthStart));
        const numWeeksInMonth = Math.ceil((monthEnd - monthStart) / numMilliSecondsInWeek);
        let arr = [];
        for (let i = 0; i < numWeeksInMonth; i++) {
          let weekArr = [];
          let weekStart = getTime(startOfWeek(monthStart + i * numMilliSecondsInWeek));
          for (let j = 0; j < 7; j++) {
            let dayStart = weekStart + j * numMilliSecondsInDay;
            if (dayStart >= weekStart && dayStart < monthEnd && dayStart >= monthStart) {
              weekArr.push(dayStart);
            } else {
              weekArr.push("");
            }
          }
          arr.push(weekArr);
        }
        monthArr.push(arr);
      }
      this.dates = monthArr
    }
  }
};
</script>

<style lang="scss" scoped>
p {
  font-size: 14px;
}
.calender {
  padding: 1rem 4rem;
}
.months-wrapper {
  display: flex;
  padding: 1rem 0rem;
  justify-content: space-between;
}
.month {
  width: 300px;
  height: 250px;
  background-color: white;
  border: 1px solid #e5e5e5;
  display: flex;
  flex-direction: column;
  .name {
    display: flex;
    justify-content: center;
    padding: 0.75rem;
    width: 100%;
  }
  .days {
    display: flex;
    p {
      font-size: 12px;
    }
    justify-content: space-around;
  }
}
.controls {
  display: flex;
  justify-content: center;
  padding: 0.5rem;
  > div {
    padding: 0.5rem;
    cursor: pointer;
  }
}
</style>
