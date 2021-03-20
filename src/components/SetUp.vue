<template>
  <div>
    <div>
      <nav class="level">
        <span class="level-item has-text-centered">
          <h1 class="title">Set up</h1>
        </span>
      </nav>
    </div>
    <div class="columns">
      <div class="column is-one-quarter"></div>
      <div v-show="success" class="column is-half">
        <p class="is-size-4 mt-4 ">
          Those look great, why don't you check out your power useage for<br />
          <router-link :to="{name: 'home'}">today</router-link>
        </p>
      </div>
      <div v-show="!success" class="column is-half">
        <p class="is-size-4 mt-4 ">
          Hello! You need to grab your user details from octopus.<br />
          You can do that
          <a href="https://octopus.energy/dashboard/developer/">here</a>
        </p>

        <form v-on:submit.prevent="save()">
          <p class=" mt-4 is-size-4">
            First we need an api key.
          </p>
          <div class="field">
            <div class="control is-expanded">
              <input
                class="input is-medium is-fullwidth "
                type="text"
                v-model="apiKey"
                placeholder="Api Key"
                :class="{ 'is-danger': error === 'apiKey' }"
                :disabled="loading"
              />
            </div>
          </div>
          <p class="mt-4 is-size-4">
            Your electricity meter-point’s MPAN .
          </p>
          <div class="field">
            <div class="control is-expanded">
              <input
                class="input is-medium is-fullwidth"
                type="text"
                v-model="electrictityMeterPoint"
                placeholder="e.g. 2001000312329"
                :class="{ 'is-danger': error === 'electricity' }"
                :disabled="loading"
              />
            </div>
          </div>
          <p class="mt-4 is-size-4">
            Your electricity meter-point’s serial number.
          </p>
          <div class="field">
            <div class="control is-expanded">
              <input
                class="input is-medium is-fullwidth"
                type="text"
                v-model="electricitySerialNumber"
                placeholder="e.g. 35A10332046"
                :class="{ 'is-danger': error === 'electricity' }"
                :disabled="loading"
              />
            </div>
          </div>
          <p class="mt-4 is-size-4">
            Your gas meter-point’s MPAN .
          </p>
          <div class="field">
            <div class="control is-expanded">
              <input
                class="input is-medium is-fullwidth"
                type="text"
                v-model="gasMeterPoint"
                placeholder="e.g. 8428144496"
                :class="{ 'is-danger': error === 'gas' }"
                :disabled="loading"
              />
            </div>
          </div>
          <p class="mt-4 is-size-4">
            Your gas meter-point’s serial number.
          </p>
          <div class="field">
            <div class="control is-expanded">
              <input
                class="input is-medium is-fullwidth"
                type="text"
                v-model="gasSerialNumber"
                placeholder="e.g. A1Q21373723634"
                :class="{ 'is-danger': error === 'gas' }"
                :disabled="loading"
              />
            </div>
          </div>
          <p v-show="error === 'apiKey'" class="help is-danger is-size-4">
            Sorry looks like that api key is wrong
          </p>
          <p v-show="error === 'electricity'" class="help is-danger is-size-4">
            Sorry looks like the electricity information is wrong
          </p>
          <p v-show="error === 'gas'" class="help is-danger is-size-4">
            Sorry looks like the gas information is wrong
          </p>
          <button :disabled="loading" class="button is-large">
            save
          </button>
        </form>
      </div>
    </div>
  </div>
</template>
<script>
import backend from "@/backend";
export default {
  data() {
    let result = { loading: false, error: "", success: false };
    backend.user.keys.forEach((x) => {
      result[x] = backend.user[x] || "";
    });
    return result;
  },
  methods: {
    check() {
      this.loading = true;
      backend.check().then(
        () => {
          this.loading = false;
          this.success = true;
        },
        (fail) => {
          this.loading = false;
          this.error = fail;
        }
      );
    },
    save() {
      backend.user.keys.forEach((x) => {
        backend.user[x] = this[x];
      });
      this.check();
    },
    setUp() {
      this.loading = false;
      if (backend.user.apiKey) {
        this.check();
      }
    },
    cleanError() {
      this.apiError = false;
    },
  },
};
</script>
