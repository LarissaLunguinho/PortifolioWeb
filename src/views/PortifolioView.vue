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