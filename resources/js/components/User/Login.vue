<template>
    <div class="container_registration">
        <form class="registrationForm" method="post" @submit.prevent="">
            <div class="input_container">
                <label class="label_input" for="email">Ваша почта:</label>
                <input
                    id="email"
                    class="input_form"
                    type="email"
                    placeholder="example@example.com"
                    v-model="email"
                />

                <label class="label_input" for="password">Пароль:</label>
                <input
                    id="password"
                    type="password"
                    class="input_form"
                    v-model="password"
                />
            </div>
            <button type="submit" id="btn" @click="login" class="send-btn btns">
                Войти
            </button>
        </form>
    </div>
</template>
<script>
export default {
    name: "Login",
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
