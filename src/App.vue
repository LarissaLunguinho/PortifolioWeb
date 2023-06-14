<template>
  <v-app>
    <v-row class="ma-2 pa-2">
      <v-col cols="4" md="2">
        <!-- CARD ESQUERDO -->
        <v-navigation-drawer>
          <!--  CARD NOME E FUNÇÃO -->
          <v-list>
            <v-list-item>
              <v-img
                src="https://media.licdn.com/dms/image/D4E03AQFYO6ZTnGBBvQ/profile-displayphoto-shrink_800_800/0/1665001802783?e=2147483647&v=beta&t=vy8eWLKDqv3NqGNkwZKH-jxGa6-gw3bKjO2Wuddi32M"
                width="100%" permanent></v-img>
            </v-list-item>

            <v-list-item @click="home">
              <v-list-item-content>
                <v-list-item-title class="text-h7">
                  Larissa Lunguinho
                </v-list-item-title>
                <v-list-item-subtitle>Desenvolvedora back-end</v-list-item-subtitle>
              </v-list-item-content>
            </v-list-item>
          </v-list>

          <!-- DIVIS HORIZONT -->
          <v-divider></v-divider>

          <!-- ITENS -->
          <v-list nav dense>
            <v-list-item @click="aboutme">
              <v-list-item-icon>
                <v-icon>mdi-account</v-icon>
              </v-list-item-icon>
              <v-list-item-title>Sobre mim</v-list-item-title>
            </v-list-item>

            <v-list-item @click="portifolio">
              <v-list-item-icon>
                <v-icon>mdi-folder</v-icon>
              </v-list-item-icon>
              <v-list-item-title>Portifólio</v-list-item-title>
            </v-list-item>

            <v-list-item @click="skills">
              <v-list-item-icon>
                <v-icon>mdi-tools</v-icon>
              </v-list-item-icon>
              <v-list-item-title>Skills</v-list-item-title>
            </v-list-item>
          </v-list>
        </v-navigation-drawer>
      </v-col>

      <!-- CARD Conteúdo da página -->
      <v-col cols="8" md="10">
        <v-card class="conteudo">
          <router-view>
          <v-col>
            <MainView />
          </v-col>
        </router-view>
        </v-card>
      </v-col>
    </v-row>

    <!-- RODAPÉ -->
    <v-footer dark>
      <v-spacer></v-spacer>
      <v-card-title>
        <strong class="subheading">Formas de contato</strong>

        <v-btn class="mx-4" dark icon
          href="https://mail.google.com/mail/u/0/#inbox?compose=GTvVlcSHwClzMgvbwnrxhZGwXCwjXlkmHZJRPJtKXPWSdhJtQBHWHgSjKQFshNGjBtgxQNHbkTvKj"
          target="_blank">
          <v-icon size="24px">mdi-email</v-icon>
        </v-btn>

        <v-btn class="mx-4" dark icon href="https://github.com/LarissaLunguinho" target="_blank">
          <v-icon size="24px">mdi-github</v-icon>
        </v-btn>

        <v-btn class="mx-4" dark icon href="https://www.linkedin.com/in/larissa-lunguinho/" target="_blank">
          <v-icon size="24px">mdi-linkedin</v-icon>
        </v-btn>

        <v-btn class="mx-4" dark icon href="https://www.instagram.com/larilunguinho/" target="_blank">
          <v-icon size="24px">mdi-instagram</v-icon>
        </v-btn>

      </v-card-title>
    </v-footer>
  </v-app>
</template>

<script>
import MainView from './views/MainView';

export default {
  name: 'App',

  components: {
    MainView,
  },

  data: () => ({
    //
  }),
  methods: {
    home() {
      this.$router.push('/');
    },
    aboutme() {
      this.$router.push('/sobremim');
    },
    skills() {
      this.$router.push('/skills');
    },
    portifolio() {
      this.$router.push('/portifolio');
    },
  },

};
</script>

<style scoped>
.card {
  display: inline-block;
}
.conteudo {
  width: 97%;
  height: 100%;
}
.v-footer {
  background-color: #785c5c;
}
</style>