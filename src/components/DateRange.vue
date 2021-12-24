<template>
  <div>
    <nav class="level">
      <span class="level-item has-text-right">
        <router-link
          :to="{
            name: 'date',
            params: {
              month: previousDate.getMonth() + 1,
              year: previousDate.getFullYear(),
            },
          }"
          class="button is-info"
        >
          &#x2190; {{ monthName(previousDate) }}
          {{ previousDate.getFullYear() }}
        </router-link>
      </span>
      <span class="level-item has-text-centered">
        <h1 class="title">{{ monthName(currentDate) }} {{ year }}</h1>
      </span>
      <span class="level-item">
        <router-link
          :to="{
            name: 'date',
            params: {
              month: nextDate.getMonth() + 1,
              year: nextDate.getFullYear(),
            },
          }"
          class="button is-info"
        >
          {{ monthName(nextDate) }} {{ nextDate.getFullYear() }} &#x2192;
        </router-link>
      </span>
    </nav>
    <div v-if="future">
      <section class="hero">
        <div class="hero-body has-text-centered">
          <p class="title">
            No data is available
          </p>
          <p class="subtitle">
            I can't tell the future, I live in the now
          </p>
        </div>
      </section>
    </div>
    <div v-if="!future">
      <div v-graph="electricityData"></div>
      <div v-graph="gasData"></div>
    </div>
  </div>
</template>

<script>
import backend from "@/backend";
import translate from "@/services/data_to_graph.js";
import router from "@/router";
export default {
  name: "DateRange",
  props: ["year", "month"],
  components: {},
  data: function() {
    var config = {};
    return {
      future: false,
      electricityData: config,
      gasData: config,
    };
  },
  methods: {
    monthName: (someDate) => {
      return someDate.toLocaleString("default", { month: "long" });
    },
    update: function(year, month) {
      let today = new Date();
      if (year >= today.getFullYear()) {
        if (month > today.getMonth() + 1) {
          this.future = true;
          return;
        }
      }
      this.future = false;
      let self = this;
      let iyear = parseInt(year);
      let imonth = parseInt(month);
      backend.getMonthsElectricity(imonth, iyear).then(
        (x) => {
          self.electricityData = translate("Electricity consumption", x, 70);
        },
        () => {
          router.replace({ name: "setup" });
        }
      );
      backend.getMonthsGas(imonth, iyear).then(
        (x) => {
          self.gasData = translate("Gas consumption", x, 20);
        },
        () => {
          router.replace({ name: "setup" });
        }
      );
    },
  },
  computed: {
    currentDate: function() {
      return new Date(parseInt(this.year), parseInt(this.month - 1), 1);
    },
    nextDate: function() {
      const nextDate = new Date(this.currentDate);
      nextDate.setMonth(nextDate.getMonth() + 1);
      // if its in the future don't show the next date button
      return nextDate;
    },
    previousDate: function() {
      const previousDate = new Date(this.currentDate);
      previousDate.setMonth(previousDate.getMonth() - 1);
      return previousDate;
    },
  },
  beforeRouteUpdate: function(to) {
    this.update(to.params.year, to.params.month);
  },
  mounted: function() {
    this.update(this.currentDate.getFullYear(), this.currentDate.getMonth());
  },
};
</script>
