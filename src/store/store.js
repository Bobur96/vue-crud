import { reactive } from 'vue'

export const store = reactive({
  userId: 1,
  studentList: [
    {
      id: 1,
      name: "BU",
      fullName: "Bobur Usmonkhujaev",
      universityName: "TUIT",
      faculty: "TT va KT",
      academicType: "Bachelor",
    },
    {
      id: 2,
      name: "XM",
      fullName: "Xurshid Mutallibov",
      universityName: "TUIT",
      faculty: "TT va KT",
      academicType: "Bachelor",
    },
    {
      id: 3,
      name: "MJ",
      fullName: "Murodjon Jo'rayev",
      universityName: "TUIT",
      faculty: "TT va KT",
      academicType: "Bachelor",
    },
    {
      id: 4,
      name: "AA",
      fullName: "Abror Adhamov",
      universityName: "TUIT",
      faculty: "TT va KT",
      academicType: "Bachelor",
    },
  ],
})