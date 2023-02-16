<template>
  <div className="d-flex justify-content-center flex-column container py-3">
    <form id="addform" @submit="onSubmit">
      <div className="card form1">
        <div className="card-header">
          <h5 className="text-center">User Form</h5>
        </div>
        <div className="card-body">
          <div id="form" className="form-group row g-3 pb-3">
            <div className="col-md-4">
              <label htmlFor="fullName" className="form-label">
                Full Name
              </label>
              <input
                className="form-control form-control-sm"
                v-model="fullName"
                required
              />
            </div>
            <div className="col-md-4">
              <label htmlFor="universityName" className="form-label">
                University
              </label>
              <input
                className="form-control form-control-sm"
                id="universityName"
                v-model="univercity"
                required
              />
            </div>
            <div className="col-md-4">
              <label htmlFor="entranceYear" className="form-label">
                Entrance Year
              </label>
              <input
                type="date"
                className="form-control form-control-sm"
                required
              />
            </div>
            <div className="col-md-4">
              <label htmlFor="graduationYear" className="form-label">
                Graduation Year
              </label>
              <input
                type="date"
                className="form-control form-control-sm"
                id="graduationYear"
                required
              />
            </div>
            <div className="col-md-4">
              <label htmlFor="faculty" className="form-label"> Faculty </label>
              <input
                className="form-control form-control-sm"
                v-model="faculty"
                required
              />
            </div>
            <div className="col-md-4">
              <label htmlFor="academicLevel" className="form-label">
                Academic Type
              </label>
              <input
                className="form-control form-control-sm"
                v-model="type"
                required
              />
            </div>
            <div className="col-md-12 mt-1">
              <RouterLink to="/students">
                <button
                  @click="addItem"
                  className="btn btn-primary float-end mt-4"
                  type="submit"
                >
                  Save
                </button>
              </RouterLink>
            </div>
          </div>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
import { RouterLink, RouterView } from "vue-router";
import { store } from "../store/store.js";

export default {
  name: "AddStudent",
  data() {
    return {
      store,
      errors: [],
      fullName: "",
      univercity: "",
      entranceYear: "",
      graduationYear: "",
      faculty: "",
      type: "",
    };
  },
  methods: {
    addItem() {
      const item = {
        id: store.studentList.length + 1,
        name: this.fullName.slice(0, 2),
        fullName: this.fullName,
        universityName: this.univercity,
        faculty: this.faculty,
        academicType: this.type,
      };
      store.studentList.push(item);
      console.log(item);
    },
    checkForm: function (e) {
      if (
        this.fullName &&
        this.univercity &&
        this.entranceYear &&
        this.graduationYear &&
        this.faculty && this.type
      ) {
        return true;
      }
      this.errors = [];
      if (!this.fullName) this.errors.push("Full name required.");
      if (!this.univercity) this.errors.push("Univercity required.");
      if (!this.entranceYear) this.errors.push("Entrance year required.");
      if (!this.graduationYear) this.errors.push("Graduation year required.");
      if (!this.faculty) this.errors.push("Faculty required.");
      if (!this.type) this.errors.push("Type required.");
    },
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
