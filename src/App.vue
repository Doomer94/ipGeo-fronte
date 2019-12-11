<template>
  <div id="app">
    <div class="bg-head"></div>
    <div class="container main">
      <div class="row">
        <div class="col pt-3 text-right">
          <b-button v-b-modal.modal-1>+</b-button>
        </div>
      </div>
      <div class="row">
        <div class="col">
          <b-table class hover :items="data" :fields="fields"></b-table>
        </div>
      </div>
    </div>

    <b-modal reg="modal" id="modal-1" title="add ip" hide-footer>
      <p class="my-4">
        <!-- <input class="form-control" v-model="ip" placeholder="0.0.0.0" /> -->
        <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" v-model="ip" placeholder="0.0.0.0"></textarea>
        <b-button class="mt-3" block @click="add(ip)">Add</b-button>
      </p>
    </b-modal>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "app",
  data() {
    return {
      msg: "Welcome to Your Vue.js App",
      data: null,
      fields: ["ip", "country", "city"],
      ip: null,
      modalShow: false
    };
  },
  created: function() {
    this.get();
  },
  methods: {
    get: function() {
      axios
        .post("http://localhost:8081/api/domain@get")
        .then(response => {
          this.data = response.data;
        })
        .catch(error => {
          console.log(error);
          this.errored = true;
        })
        .finally(() => (this.loading = false));
    },
    add: function(ip) {

      let arr = ip.split(';');
      for (let index = 0; index < arr.length; index++) {
          axios
          .post("http://localhost:8081/api/domain@add?ip=" + arr[index])
          .then()
          .catch()
          .finally(this.get, this.$bvModal.hide("modal-1"), (this.ip = null));
      }
    }
  }
};
</script>

<style>
#app {
  background: #fff;
  height: 100%;
  width: 100%;
  position: absolute;
}
.main {
  margin: 50px 0 0;
  background: #fff;
}
.main {
  margin: -90px auto 0 auto;
  background: #fff;
  border-radius: 5px;
  -webkit-box-shadow: 0px 30px 54px -39px rgba(0, 0, 0, 0.24);
  -moz-box-shadow: 0px 30px 54px -39px rgba(0, 0, 0, 0.24);
  box-shadow: 0px 30px 54px -39px rgba(0, 0, 0, 0.24);
  width: 650px;
  max-width: 90%;
}
.bg-head {
  background: #e1efff;
  height: 150px;
  width: 100%;
}
.table th {
  border: 0;
}
</style>
