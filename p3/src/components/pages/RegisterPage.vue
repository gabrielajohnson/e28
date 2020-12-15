<template>
    <div id="account-page">


        <div id="registerForm">
            <h2>Register</h2>
            <div>
                <label
                    >Name:
                    <input
                        type="text"
                        data-test="name-input"
                        v-model="newUser.name"
                /></label>
            </div>
            <div>
                <label
                    >Email:
                    <input
                        type="text"
                        data-test="email-input"
                        v-model="newUser.email"
                /></label>
            </div>
            <div>
                <label
                    >Password:
                    <input
                        type="password"
                        data-test="password-input"
                        v-model="newUser.password"
                /></label>
            </div>

            <button @click="register" data-test="register-button">Register</button>

            <ul v-if="errors">
                <li class="error" v-for="(error, index) in errors" :key="index">
                    {{ error }}
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
import { axios } from '@/common/app.js';
export default {
    data() {
        return {
            errors: null,
            newUser: {
                name: '',
                email: '',
                password: ''
            }
        };
    },
    computed: {
        // Get our user and trips state from the Vuex store
        user() {
            return this.$store.state.user;
        }
    },
    methods: {
        register(){
            axios.post('register', this.newUser).then((response) => {
                if (response) {
                    console.log(response);
                }
            });
        }
    }
};
</script>