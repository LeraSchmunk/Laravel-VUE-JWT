<template>
    <div class="container_registration">
        <form class="registrationForm" method="post" @submit.prevent="">
            <label class="label_input" for="email">Ваше имя:</label>
            <input
                id="name"
                class="input_form"
                @change="setEmail(this.email)"
                type="text"
                placeholder="ФИО"
                v-model="name"
            />
            <label class="label_input" for="email">Ваша почта:</label>
            <input
                id="email"
                class="input_form"
                @change="setEmail(this.email)"
                type="email"
                placeholder="example@example.com"
                v-model="email"
            />

            <label class="label_input" for="password">Пароль:</label>
            <input
                id="password"
                @change="setPassword(this.password)"
                type="password"
                class="input_form"
                v-model="password"
            />
            <label class="label_input" for="confirm_password"
                >Подтвердите пароль:</label
            >
            <input
                id="confirm-password"
                @change="setPassword(this.password)"
                type="password"
                class="input_form"
                v-model="confirm_password"
            />

            <button
                type="submit"
                id="btn"
                @click="sendRegistration"
                class="send-btn btns"
            >
                Зарегистрироваться
            </button>
        </form>
    </div>
</template>
<script>
export default {
    name: "Registration",
    data() {
        return {
            name: null,
            email: null,
            password: null,
            confirm_password: null,
        };
    },
    methods: {
        store() {
            axios.post;
        },
    },
};
</script>
<style scoped>
.container_registration {
    height: 545px;
}

.registrationForm {
    width: 550px;
    display: flex;
    flex-direction: column;
    margin: 40px auto;
}

.input_container {
    display: flex;
    flex-direction: column;
    height: 250px;
}

.input_form {
    margin-top: 2rem;
    height: 45px;
    padding-left: 1rem;
    border: 1px solid lightgrey;
    border-radius: 5px;
}

.label_input {
    margin-top: 1rem;
    font-family: Montserrat, sans-serif;
    font-size: 16px;
}
button {
    border: none;
    height: 40px;
    margin-bottom: 30px;
    background-color: #ffffff;
    border-radius: 10px;
    font-family: Montserrat, sans-serif;
}

.send-btn {
    margin-top: 1.5rem;
    height: 40px;
    border-radius: 10px;
    font-family: Montserrat, sans-serif;
    background-color: #174dff9a;
    color: white;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 2px;
}
</style>
