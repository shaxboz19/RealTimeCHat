<template>
    <div>
        <div class="grey darken-1 empty-layout">
      <form class="card auth-card" @submit.prevent="login">
        <div class="card-content">
          <span class="card-title">Login</span>
          <div class="input-field">
            <input id="name" type="text"  v-model="name" />
            <label for="name">Имя</label>
            <small v-if="error" class="invalid"> {{error}} </small>
          </div>
        </div>
        <div class="card-action">
          <div>
            <button
              class="btn waves-effect waves-light auth-submit"
              type="submit"
              
            >
              Войти
              <i class="material-icons right">send</i>
            </button>
          </div>
        </div>
      </form>
    </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            error : null,
            name : ''
        }
    },
    methods: {
        login() {
            if(this.name) {
                this.$store.commit('login')
                this.$store.commit('setName', this.name)
                this.$router.push('/chat')
            } else {
                this.error = 'Пожалуйста введите свое имя'
            }
        }
    },
}
</script>

<style scoped>
.invalid {
    color: red;
}
</style>