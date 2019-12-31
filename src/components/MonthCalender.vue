<template>
  <div class="calender">
    <div class="profile-details">
      <div class="profile-name flex">
        <h3>{{ user.name }}</h3>
        <img
          v-if="user.isVerified"
          class="icon"
          src="@/assets/icons/verified_user-24px.svg"
          alt=""
        >
      </div>
      <div class="action-buttons">
        <base-button
          text="Message Photographer"
          btn-action="messagePhotographer"
          type="secondary"
          @messagePhotographer="handleMessagePhotographer(true)"
        />
        <base-button
          text="Book Now"
          btn-action="bookNow"
          type="primary"
          @bookNow="handleBookAppointment(true)"
        />
      </div>
    </div>
    <div class="months-wrapper">
      <div
        v-for="(month, index) in dates"
        :key="index"
        class="month"
      >
        <div class="name">
          <p>{{ monthsDisplayed[index] }}</p>
        </div>
        <div class="days">
          <div
            v-for="(day, i) in days"
            :key="i"
          >
            <p>{{ day }}</p>
          </div>
        </div>
        <div class="weeks">
          <div
            v-for="(weeks, idx) in month"
            :key="idx"
            class="days"
          >
            <div
              v-for="(date, j) in weeks"
              :key="j"
              :class="[date ? 'date' : '', date && appointmentDate === date ? 'selected-date' : '']"
              @click.stop="handleAppointmentDate(date)"
            >
              <p>{{ getReadableDate(date) }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="controls">
      <div @click.stop="goToPrev">
        <img
          src="@/assets/icons/navigate_before-24px.svg"
          alt="previous"
        >
      </div>
      <div class="circle" />
      <div @click.stop="goToNext">
        <img
          src="@/assets/icons/navigate_next-24px.svg"
          alt="next"
        >
      </div>
    </div>
  </div>
</template>

<script>
import {
  getMonth,
  startOfMonth,
  addMonths,
  startOfWeek,
  getTime,
  endOfMonth,
  format,
  subMonths
} from 'date-fns'
import { mapMutations, mapState } from 'vuex'

export default {
  name: 'MonthCalender',
  data() {
    return {
      startDate: 0,
      startMonth: 0,
      days: ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'],
      months: [
        'January',
        'February',
        'March',
        'April',
        'May',
        'June',
        'July',
        'August',
        'September',
        'October',
        'November',
        'December'
      ],
      dates: [],
      events: []
    }
  },
  computed: {
    ...mapState(['appointmentDate', 'user']),
    nextMonth() {
      return this.startMonth + 1 > 11
        ? this.startMonth - 11
        : this.startMonth + 1
    },
    next2Month() {
      return this.startMonth + 2 > 11
        ? this.startMonth + 1 - 11
        : this.startMonth + 2
    },
    monthsDisplayed() {
      return [
        this.months[this.startMonth],
        this.months[this.nextMonth],
        this.months[this.next2Month]
      ]
    }
  },
  created() {
    this.startMonth = getMonth(Date.now())
    this.startDate = Date.now()
    this.handleAppointmentDate(Date.now())
    this.calcDates()
  },
  methods: {
    ...mapMutations([
      'handleMessagePhotographer',
      'handleBookAppointment',
      'handleAppointmentDate'
    ]),
    goToPrev() {
      this.startMonth = this.startMonth === 0 ? 11 : this.startMonth - 1
      this.startDate = getTime(subMonths(this.startDate, 1))
      this.calcDates()
    },
    goToNext() {
      this.startMonth = this.startMonth + 1 > 11 ? 0 : this.startMonth + 1
      this.startDate = getTime(addMonths(this.startDate, 1))
      this.calcDates()
    },

    calcDates() {
      // Number of seconds in a day
      const numMilliSecondsInDay = 86400000
      const numMilliSecondsInWeek = 604800000
      const calenderStart = getTime(startOfMonth(this.startDate))
      let monthArr = []
      let numOfMonthsToShow = 3
      for (let k = 0; k < numOfMonthsToShow; k++) {
        const monthStart = getTime(addMonths(startOfMonth(calenderStart), k))
        const monthEnd = getTime(endOfMonth(monthStart))
        const numWeeksInMonth = Math.ceil(
          (monthEnd - monthStart) / numMilliSecondsInWeek
        )
        let arr = []
        for (let i = 0; i < numWeeksInMonth; i++) {
          let weekArr = []
          let weekStart = getTime(
            startOfWeek(monthStart + i * numMilliSecondsInWeek)
          )
          for (let j = 0; j < 7; j++) {
            let dayStart = weekStart + j * numMilliSecondsInDay
            if (
              dayStart >= weekStart &&
              dayStart < monthEnd &&
              dayStart >= monthStart
            ) {
              weekArr.push(dayStart)
            } else {
              weekArr.push('')
            }
          }
          arr.push(weekArr)
        }
        monthArr.push(arr)
      }
      this.dates = monthArr
    },
    getReadableDate(date) {
      if (date) {
        return format(new Date(date), 'd')
      } else {
        return ''
      }
    }
  }
}
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
    > div {
      width: 1.8rem;
      padding: 0.2rem;
      display: flex;
      justify-content: center;
      align-items: center;
      height: 1.8rem;
    }
  }
  .weeks {
    display: flex;
    flex-direction: column;
    width: 100%;
  }
  .week {
    display: flex;
  }
  .date {
    cursor: pointer;
  }
  .selected-date {
    background-color: $primary-color;
    border-radius: 50%;
    p {
      color: white;
    }
  }
}
.profile-details {
  display: flex;
  justify-content: space-between;
  margin-bottom: 2rem;
  .action-buttons {
    display: flex;
    > *:not(:last-child) {
      margin-right: 1rem;
    }
  }
}
.profile-name {
  > *:first-child {
    margin-right: 0.5rem;
  }
}
.controls {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.5rem;
  > div {
    margin: 0rem 0.25rem;
    padding: 0.5rem;
    cursor: pointer;
  }
  .circle {
    width: 1rem;
    background-color: $font-color;
    border-radius: 50%;
    height: 1rem;
    cursor: default;
  }
}
</style>
