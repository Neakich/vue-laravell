<template>
    <v-container fluid fill-height>
        <v-layout align-center justify-center>
          <v-flex xs12 sm8 md4>
            <v-card class="elevation-12">
              <v-toolbar dark color="primary">
                <v-toolbar-title>Форма регистрации</v-toolbar-title>
              </v-toolbar>
              <v-card-text>
                    <v-form 
                        ref="form" 
                        @submit.prevent="addUser" 
                    >
                        <v-container  fluid>
                            <v-layout wrap>
                            <v-flex xs12>
                                <v-text-field
                                    prepend-icon="person" 
                                    :rules="rules.name"
                                    v-model="form.name"
                                    label="Имя"
                                    required
                                ></v-text-field>
                            </v-flex>
                            <v-flex xs3>
                                <v-select
                                    :rules="rules.phonePrefix"
                                    prepend-icon="phone" 
                                    v-model="form.phonePrefix"
                                    :items="phonePrefixes"
                                    required
                                    hint="Код"
                                    persistent-hint
                                ></v-select>
                            </v-flex>
                            <v-flex xs8 offset-xs1>
                                <v-text-field
                                    :rules="rules.phone"
                                    v-model="form.phone"
                                    hint="Номер Вашего телефона"
                                    persistent-hint
                                    required
                                    :disabled="!form.phonePrefix"
                                ></v-text-field>
                            </v-flex>
                            <v-flex xs12>
                                <v-select
                                    :rules="rules.sex"
                                    v-model="form.sex"
                                    :items="sex"
                                    label="Пол"
                                    required
                                ></v-select>
                            </v-flex>
                            <v-flex xs12>
                                <v-checkbox
                                    v-model="form.terms"
                                    color="green"
                                >
                                <div slot="label">
                                    Соглашаюсь на
                                    <a href="https://www.atinternet.com/en/glossary/processing/" target="_blank">обработку персональных данных</a>
                                </div>
                                </v-checkbox>
                            </v-flex>
                            <v-flex xs12>
                                <v-btn 
                                    color="primary" 
                                    type="submit"
                                    :loading="loading"    
                                >Зарегистрироваться</v-btn>
                            </v-flex>
                            </v-layout>
                        </v-container>
                    </v-form>
              </v-card-text>
            </v-card>
          </v-flex>
        </v-layout>
        <v-layout row justify-center>
            <v-dialog v-model="dialog" max-width="290">
                <v-card>
                    <v-alert
                        :value="true"
                        :type="response.type"
                    >
                        {{ response.msg }} 
                    </v-alert>
                <div class="text-xs-center">
                    <v-btn
                        color="green darken-1"
                        flat="flat"
                        @click="dialog = false"
                    >
                        Ok
                    </v-btn>
                </div>
                </v-card>
            </v-dialog>
            </v-layout>
      </v-container>
</template>

<script>
import axios from 'axios';
export default {
    data(){
        return {
            valid: false,
            rules: {
                name: [
                    v => !!v || 'Введите Ваше Имя',
                ],
                phonePrefix: [
                    v => !!v || 'Укажите код',
                ],
                phone: [
                    v => !!v || 'Введите номер Вашего телефона'
                ],
                sex: [
                    v => !!v || 'Введите номер Вашего телефона'
                ]
            },
            form: {
                name: '',
                phonePrefixes: '',
                phone: '',
                terms: false,
                form: ''
            },
            phonePrefixes: ['+380', '+7', '+375'],
            sex: ['Мужской', 'Женский'],
            response: {
                msg: '',
                type: 'success'
            },
            dialog: false,
            loading: false
        }
    },
    methods: {
        async addUser(name){
            if (this.$refs.form.validate()) {
                this.loading = true;
                try {
                    const postdata = {
                        first_name: this.form.name,
                        phone: `${this.form.phonePrefix}${this.form.phone}`,
                        sex: this.form.sex,
                        personal_data: this.form.terms,
                    };
                    // axios.defaults.headers.post['Access-Control-Allow-Origin'] = '*';
                    axios.defaults.headers.post['Content-Type'] ='application/x-www-form-urlencoded';
                    const data = await axios.post('http://127.0.0.1:3000/registration', 
                        postdata 
                    )
                    if(data.status === 200) {
                        this.dialog = true;
                        this.response.msg = "Ваша регистрация прошла успешно!";
                        this.response.type = "success";
                    } 
                } catch (e){
                    console.log(e.name + ': ' + e.message);
                    const exist = e.message.indexOf('422') > 0;
                    if(exist) {
                        this.dialog = true;
                        this.response.msg = "Пользователь с таким именем уже зарегистрирован!";
                        this.response.type = "warning";
                    } else {
                        this.dialog = true;
                        this.response.msg = 'Ошибка соединения';
                        this.response.type = "error";
                    }
                }
                this.loading = false;
            }
        }
    }
}
</script>

