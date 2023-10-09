<template>
  <v-container>
    <v-row class="main__row-rigth">
      <v-col cols="12" md="10">
        &lt;head&gt; <br><br>
        &emsp;&lt;body&gt; <br><br>

        &emsp;&emsp;&lt;h1&gt;
        <h1 class="nome">
          Olá,<br>
          Me chamo Larissa Lunguinho 
        </h1>
        &emsp;&emsp;&lt;/h1&gt; <br><br>

        &emsp;&emsp;&lt;p&gt;
        <p class="profissao">&emsp;&emsp;&emsp;Desenvolvedora fullstack</p>
        &emsp;&emsp;&lt;/p&gt; <br><br>

        &emsp;&lt;/body&gt; <br><br>
        &lt;/head&gt; <br><br>
      </v-col>

      <v-col cols="4" md="2">
        <img class="avatar" src="../assets/avatareu.png" alt="avatar Larissa">
      </v-col>
    </v-row>

    <v-row class="linha-botao">
          <v-btn class="button"
            elevation="5"
            outlined
            rounded
            href="https://mail.google.com/mail/u/0/#inbox?compose=GTvVlcSHwClzMgvbwnrxhZGwXCwjXlkmHZJRPJtKXPWSdhJtQBHWHgSjKQFshNGjBtgxQNHbkTvKj"
            target="_blank"
            >
            Vamos conversar!</v-btn>

    </v-row>

  </v-container>
</template>

<script>
export default {
  name: 'MainView',

  data: () => ({
    //
  }),
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Manrope:wght@300;500;700&family=Montserrat&family=Pacifico&display=swap');

* {
  margin: 0;
  padding: 0;
  font-family: 'Manrope', sans-serif;
  display: inline-block;
}
.v-container {
  width: 70%;
}
.linha-botao {
  display: flex;
  justify-content: start;
  margin-left: 150px;
}
.button{
  display: flex;
  text-align: center;
}
@media (max-width: 480px) {
  .profissao {
    text-align: center;
  }
}
</style>