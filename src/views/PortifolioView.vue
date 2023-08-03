<template>
    <div class="d-flex flex-wrap justify-space-around mb-6">
        <!-- PRIMEIRO CARD -->
        <v-card class="mx-auto my-8" max-width="374">
            <template slot="progress">
                <v-progress-linear color="deep-purple" height="10" indeterminate></v-progress-linear>
            </template>

            <v-img height="200" src="https://pbs.twimg.com/media/Fym11BuWIAwV2Cn?format=jpg&name=900x900"></v-img>

            <v-card-title>To do List</v-card-title>

            <v-card-text>
                <div class="mb-2 text-subtitle-1">
                    HTML, CSS e PHP
                </div>

                <div>Gerenciador de tarefas com funcionalidades de incluir, visulizar, editar e excluir.</div>
            </v-card-text>

            <v-divider class="mx-4"></v-divider>
            <v-card-actions>
                <v-btn color="deep-purple lighten-2" text>
                    <a href="https://www.linkedin.com/feed/update/urn:li:activity:7075206824043364352/" target="_blank">Visualizar</a>
                </v-btn>
            </v-card-actions>
        </v-card>
        <!-- SEGUNDO CARD -->
        <v-card class="mx-auto my-8" max-width="374">
            <template slot="progress">
                <v-progress-linear color="deep-purple" height="10" indeterminate></v-progress-linear>
            </template>

            <v-img height="200" src="https://pbs.twimg.com/media/FzK0e0BWwAEx5SA?format=png&name=small"></v-img>

            <v-card-title>Cardápio Ilustrativo</v-card-title>

            <v-card-text>
                <div class="mb-2 text-subtitle-1">
                    JAVA SPRING, REACT e TYPESCRIPT
                </div>

                <div>Cardápio de alimentos com função de incluir e visualizar, com campos de 'título, valor e imagem'.</div>
            </v-card-text>

            <v-divider class="mx-4"></v-divider>
            <v-card-actions>
                <v-btn color="deep-purple lighten-2" text>
                    <a href="https://www.linkedin.com/feed/update/urn:li:ugcPost:7077359061129674752/" target="_blank">Visualizar</a>
                </v-btn>
            </v-card-actions>
        </v-card>
        <!-- TERCEIRO CARD -->
        <v-card class="mx-auto my-8" max-width="374">
            <template slot="progress">
                <v-progress-linear color="deep-purple" height="10" indeterminate></v-progress-linear>
            </template>

            <v-img height="200" src="https://pbs.twimg.com/media/F2nWz0bacAEMjJL?format=png&name=900x900"></v-img>

            <v-card-title>Projeto Automóveis</v-card-title>

            <v-card-text>
                <div class="mb-2 text-subtitle-1">
                    HTML e JAVASCRIPT
                </div>

                <div>Projeto de carros e motos com função de visualizar detalhes e excluir, com campos de 'nome, descrição e imagem', possuindo também a funcionalidade de alterar o tema da páginae entre dark e light.</div>
            </v-card-text>

            <v-divider class="mx-4"></v-divider>
            <v-card-actions>
                <v-btn color="deep-purple lighten-2" text>
                    <a href="https://www.linkedin.com/feed/update/urn:li:activity:7092880596066066432/" target="_blank">Visualizar</a>
                </v-btn>
            </v-card-actions>
        </v-card>

    </div>
</template>

<script>
export default {
    name: 'PortifolioView',

    data: () => ({
        //
    })
}
</script>

<style scoped></style>