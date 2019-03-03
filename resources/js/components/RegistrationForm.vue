<template>
   <div>
    <h1>Registration</h1>
    <div>
        имя {{ user.name }} <br />
        телефон {{ user.phone }} <br />
        пол {{ user.sex }} <br />
        согласие {{ user.checked }} <br />
    </div>
    <form @submit.prevent="addUser">
        <div class="row">
            <div class="col-md-6">
                <div class="form-group">
                    <label>Имя:</label>
                    <input type="text" class="form-control" v-model="user.name">
                </div>
            </div>
        </div>

        <div class="row">
            <div class="col-md-6">
                <div class="form-group">
                    <label>Телефон:</label>
                    <input type="text" class="form-control" v-model="user.phone">
                </div>
            </div>
        </div>

        <div class="row">
            <div class="col-md-6">
                <div class="form-group">
                    <label>Пол:</label>
                    <select v-model="user.sex">
                        <option>Мужской</option>  
                        <option>Женский</option>  
                    </select>
                    {{user.sex}}
                </div>
            </div>
        </div>

        <div class="row">
            <div class="col-md-6">
                <div class="form-group">
                    <input type="checkbox" id="checkbox" v-model="user.checked">
                    <label for="checkbox">Согласие на обработку персональных данных: {{ checked }}</label>
                </div>
            </div>
        </div>

        <div class="form-group">
          <button class="btn btn-primary" @click="addUser">Sign in</button>
        </div>
    </form>
  </div>
</template>

<script>
    export default {
        data(){
        return {
          user:{
                name: '',
                phone: '',
                sex: '',
                checked: false
          }
        }
    },
    methods: {
      addUser(){
            let uri = 'http://localhost/api/user/create';
            this.axios.post(uri, this.user).then((response) => {
                // this.$router.push({name: 'posts'});
                console.log(response);
            });
      }
    }
  }
</script>