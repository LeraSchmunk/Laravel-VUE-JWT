<template>
    <div class="container">
        <div class="btns">
            <router-link :to="{ name: 'user.login' }"
                ><button>Login</button></router-link
            >
            <router-link :to="{ name: 'user.registration' }"
                ><button>Registration</button></router-link
            >
        </div>
    </div>

    <router-view></router-view>
</template>

<script>
export default {
    name: "App",
};
</script>

<style scoped>
.container {
    width: 550px;
    margin: 0 auto;
}
.btns {
    display: flex;
    justify-content: space-between;
}
button {
    margin-top: 1.5rem;
    height: 40px;
    border-radius: 10px;
    font-family: Montserrat, sans-serif;
    background-color: #174dff9a;
    color: white;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 2px;
    border: none;
    cursor: pointer;
}
</style>
