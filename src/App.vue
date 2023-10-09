<template>
  <v-app>
    <v-row class="ma-2 pa-2">
      <v-col cols="4" md="2" class="col_esquerda" :clipped="false">
        <!-- CARD ESQUERDO -->
        <v-navigation-drawer permanent>
          <!--  CARD NOME E FUNÇÃO -->
          <v-list>
            <v-list-item>
              <v-img
                :src="require('@/assets/perfil.jpeg')"
                width="100%" permanent></v-img>
            </v-list-item>

            <v-list-item @click="home" class="container_titulo">
              <v-list-item-content class="content_titulo">
                <v-list-item-title class="text-h7 item_nome">
                  Larissa Lunguinho
                </v-list-item-title>
                <v-list-item-subtitle class="item_funcao">
                  Desenvolvedora fullstack
                </v-list-item-subtitle>
              </v-list-item-content>
            </v-list-item>
          </v-list>

          <!-- DIVIS HORIZONT -->
          <v-divider></v-divider>

          <!-- ITENS -->
          <v-list nav dense class="container_itens">
            <v-list-item class="content_item" @click="aboutme">
              <v-list-item-icon><v-icon>mdi-account</v-icon></v-list-item-icon>
              <v-list-item-title>Sobre mim</v-list-item-title>
            </v-list-item>

            <v-list-item class="content_item" @click="portifolio">
              <v-list-item-icon><v-icon>mdi-folder</v-icon></v-list-item-icon>
              <v-list-item-title>Portifólio</v-list-item-title>
            </v-list-item>

            <v-list-item class="content_item" @click="skills">
              <v-list-item-icon><v-icon>mdi-tools</v-icon></v-list-item-icon>
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
        <div class="footer_icones">
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
        </div>

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
@media (max-width: 480px) {
  .col_esquerda {
    margin: 0;
    padding: 0;
  }
  .container_titulo {
    padding: 0;
    margin: 0;
  }
  .content_titulo {
    margin: 0;
    padding: 0 0;

    display: flex;
    flex-direction: column;
    text-align: center;
  }
  .item_nome, .item_funcao {
    flex-wrap: wrap;
    white-space: wrap;
  }
  .container_itens {
    margin: 0;
    padding: 0;
  }
  .content_item {
    margin: 0;
    padding: 0;
    display: block;
  }
  .footer_icones {
    display: flex;
  }
}
</style>