<template>
  <div class="d-flex justify-content-center flex-column container py-3">
    <div id="addform">
      <div class="card form1">
        <div class="card-header">
          <h5 class="text-center">User Form</h5>
        </div>
        <div class="card-body">
          <div id="form" class="form-group row g-3 pb-3">
            <div class="col-md-4">
              <label htmlFor="fullName" class="form-label">Full Name</label>
              <input type="text" class="form-control form-control-sm" v-model="state.fullName"/>
              <span v-if="v$.fullName.$error"> {{ v$.fullName.$errors[0].$message }} </span>
            </div>
            <div class="col-md-4">
              <label htmlFor="fullName" class="form-label">University</label>
              <input type="text" class="form-control form-control-sm" v-model="state.univercity"/>
              <span v-if="v$.univercity.$error"> {{ v$.univercity.$errors[0].$message }} </span>
            </div>
            <div class="col-md-4">
              <label htmlFor="entranceYear" class="form-label">Entrance Year</label>
              <input type="date" class="form-control form-control-sm" v-model="state.entranceYear"/>
              <span v-if="v$.entranceYear.$error"> {{ v$.entranceYear.$errors[0].$message }} </span>
            </div>
            <div class="col-md-4">
              <label htmlFor="graduationYear" class="form-label">Graduation Year</label>
              <input type="date" class="form-control form-control-sm" v-model="state.graduationYear"/>
              <span v-if="v$.graduationYear.$error"> {{ v$.graduationYear.$errors[0].$message }} </span>
            </div>
            <div class="col-md-4">
              <label htmlFor="faculty" class="form-label">Faculty</label>
              <input type="text" class="form-control form-control-sm" v-model="state.faculty"/>
              <span v-if="v$.faculty.$error"> {{ v$.faculty.$errors[0].$message }} </span>
            </div>
            <div class="col-md-4">
              <label htmlFor="academicLevel" class="form-label">Academic Type</label>
              <input type="text" class="form-control form-control-sm" v-model="state.type"/>
              <span v-if="v$.type.$error"> {{ v$.type.$errors[0].$message }} </span>
            </div>
            <div class="col-md-12 mt-1">
              <button
                @click="submitForm"
                class="btn btn-primary float-end mt-4"
                type="submit"
              >
                Save
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { RouterLink, RouterView } from "vue-router";
import { store } from "../store/store.js";
import { required } from "@vuelidate/validators";
import { reactive, computed } from "vue";
import useValidate from "@vuelidate/core";

export default {
  name: "AddStudent",
  setup() {
    const state = reactive({
      fullName: "",
      univercity: "",
      entranceYear: "",
      graduationYear: "",
      faculty: "",
      type: "",
    });
    const rules = computed(() => {
      return {
        fullName: { required },
        univercity: { required },
        entranceYear: { required },
        graduationYear: { required },
        faculty: { required },
        type: { required },
      };
    });
    const v$ = useValidate(rules, state);
    return { state, v$ };
  },
  data() {
    return {
      store,
    };
  },
  methods: {
    submitForm() {
      this.v$.$validate();
      console.log(this.v$.$error);
      // if (!this.v$.$error) {
      //   alert("Form successfully submitted.");
      // } else {
      //   alert("Form failed validation");
      // }
    },
    // addItem() {
    //   const item = {
    //     id: store.studentList.length + 1,
    //     name: this.fullName.slice(0, 2),
    //     fullName: this.fullName,
    //     universityName: this.univercity,
    //     faculty: this.faculty,
    //     academicType: this.type,
    //   };
    //   store.studentList.push(item);
    //   console.log(item);
    // },
  },
};
</script>

<style scoped>
input {
  background-color: rgb(107, 107, 107);
  color: #f4f5ed;
  font-weight: 400;
}
input:focus {
  background-color: rgb(163, 163, 163);
  color: #000000;
}
label,
h5 {
  color: #c2c4b1;
}
</style>
