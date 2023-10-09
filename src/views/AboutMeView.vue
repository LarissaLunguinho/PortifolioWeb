<template>
    <v-container>
        <section>
            <v-row>
                <v-col class="mt-8">
                    <h2>SOBRE MIM</h2>
                </v-col>
                <v-col col="6" md="5" class="container_contatos d-flex">
                    <div class="d-flex align-center">
                        <p class="ml-2">larissapereira.dev@gmail.com</p>
                    </div>
                    <div class="d-flex align-center">
                        <p class="ml-6">(61) 98561-4045</p>
                    </div>
                </v-col>
            </v-row>
            <br>
            <v-list-item class="container_texto">
                <v-list-item-content class="d-flex flex-column align-center">
                    <v-card-text class="content_texto font-weight-medium">
                        Me chamo Larissa Lunguinho, tenho 24 anos e
                        sou desenvolvedora fullstack.
                    </v-card-text>
                    <v-card-text class="content_texto">
                        Estou cursando Análise e Desenvolvimento de
                        Sistemas no Centro Universitário Descomplica e formada em
                        Técnico em informática.
                    </v-card-text>
                    <v-card-text class="content_texto">
                        Ao finalizar o curso técnico em Informática percebi que ser desenvolvedora
                        se tornaria minha maior paixão,<br> desde então não desisti e continuei estudando dia após dia.
                    </v-card-text>
                    <v-card-text class="content_texto">
                        Conquistei o cargo como Suporte Técnico N1 na Hepta Tecnologia
                        e Informática e após 6 meses fui promovida <br>para Desenvolvedora FullStack Júnior
                        na equipe DevOps da empresa, serei eternamente grata pela experiênia e aprendizados.
                    </v-card-text>
                    <v-card-text class="content_texto">
                        Atualmente participo voluntariamente do projeto Big Whale na equipe front-end utilizando 
                        a linguagens HTML, CSS, JS e Angular e estudo também no Bootcamp Angular/Java da Santender pela DioMe. 
                    </v-card-text>
                    <v-card-text>
                        Meus hobbies são:
                        <ul>
                            <li>Estudar sobre banco de dados e desenvolvimento</li>
                            <li>Ler livros</li>
                            <li>Jogar League of Legends e FallGuys</li>
                        </ul>
                    </v-card-text>
                    <v-card-text class="content_texto">
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

<style>
@media (max-width: 480px) {
    .container_contatos {
        display: flex;
        flex-direction: column;
        margin: 0;
        padding: 0;
        font-size: small;
    }
    .container_texto {
        margin: 0;
        padding: 0;
    }
    .content_texto {
        margin: 5px 0;
        padding: 0;
    }
}
</style>