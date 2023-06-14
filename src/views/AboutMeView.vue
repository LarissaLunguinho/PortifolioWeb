<template>
    <v-container>
        <section>
            <v-row>
                <v-col class="mt-8">
                    <h2>SOBRE MIM</h2>
                </v-col>
                <v-col col="6" md="5" class="d-flex">
                    <div class="d-flex align-center">
                        <p class="ml-2">larissapereira.dev@gmail.com</p>
                    </div>
                    <div class="d-flex align-center">
                        <p class="ml-8">(61) 98561-4045</p>
                    </div>
                </v-col>
            </v-row>
            <br>
            <v-list-item>
                <v-list-item-content class="d-flex flex-column align-center">
                    <v-card-text class="font-weight-medium">
                        Me chamo Larissa Lunguinho, tenho 24 anos e
                        sou desenvolvedora backend júnior.
                    </v-card-text>
                    <v-card-text>
                        Estou cursando Análise e Desenvolvimento de
                        Sistemas no Centro Universitário Descomplica e formada em
                        Técnico em informática.
                    </v-card-text>
                    <v-card-text>
                        Ao finalizar o curso técnico em Informática percebi que ser desenvolvedora
                        se tornaria minha maior paixão,<br> desde então não desisti e continuei estudando dia após dia.
                    </v-card-text>
                    <v-card-text>
                        Conquistei o cargo como Suporte Técnico N1 na Hepta Tecnologia
                        e Informática e após 6 meses fui promovida <br>para Desenvolvedora FullStack Júnior
                        na equipe DevOps da empresa, serei eternamente grata pela experiênia e aprendizados.
                    </v-card-text>
                    <v-card-text>
                        Meus hobbies são:
                        <ul>
                            <li>Estudar sobre banco de dados e desenvolvimento</li>
                            <li>Ler livros</li>
                            <li>Jogar League of Legends e FallGuys</li>
                        </ul>
                    </v-card-text>
                    <v-card-text>
                        Sou fascinada por técnologia, por isso estou sempre estudando
                        e me atualizando.
                    </v-card-text>
                </v-list-item-content>
            </v-list-item>

        </section>
    </v-container>
</template>
  
<script>
export default {
    name: 'AboutMeView',

    data: () => ({
        //
    }),
}
</script>