import Fruits from "../components/Fruits.vue";
import Login from "../components/User/Login.vue";
import Registration from "../components/User/Registration.vue";

export default [
    {
        path: "/fruits",
        name: "Fruits",
        component: Fruits,
    },
    {
        path: "/users/login",
        name: "user.login",
        component: Login,
    },
    {
        path: "/users/registration",
        name: "user.registration",
        component: Registration,
    },
];
