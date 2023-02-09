<template>
  <div className="d-flex justify-content-center flex-column container py-3">
    <form id="addform" className="was-validated" onSubmit="{handleSubmit}">
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
                id="fullName"
                v-model="fullName"
                required
              />
              <div className="invalid-feedback">
                Please fill out this field.
              </div>
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
              <div className="invalid-feedback">
                Please fill out this field.
              </div>
            </div>
            <div className="col-md-4">
              <label htmlFor="entranceYear" className="form-label">
                Entrance Year
              </label>
              <input
                type="date"
                className="form-control form-control-sm"
                id="entranceYear"
                required
              />
              <div className="invalid-feedback">
                Please fill out this field.
              </div>
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
              <div className="invalid-feedback">
                Please fill out this field.
              </div>
            </div>
            <div className="col-md-4">
              <label htmlFor="faculty" className="form-label"> Faculty </label>
              <input
                className="form-control form-control-sm"
                id="faculty"
                v-model="faculty"
                required
              />
              <div className="invalid-feedback">
                Please fill out this field.
              </div>
            </div>
            <div className="col-md-4">
              <label htmlFor="academicLevel" className="form-label">
                Academic Type
              </label>
              <input
                className="form-control form-control-sm"
                id="academicLevel"
                v-model="type"
                required
              />
              <div className="invalid-feedback">
                Please fill out this field.
              </div>
            </div>
            <div className="col-md-12 mt-1">
              <RouterLink to="/students">
                <button @click="addItem" className="btn btn-success float-end mt-4" type="submit">
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
      store.studentList.push(item)
      console.log(item);
    },
  },
};
</script>

<style>
</style>