<template>
    <div class="mb-6">
        <v-row>
            <v-card 
            class="card_content mx-auto" 
            max-width="274" 
            v-for="(item, index) in itens" 
            :key="index">
                <v-img height="200" :src="item.img"></v-img>
    
                <v-card-title>{{item.titulo}}</v-card-title>
    
                <v-card-text>
                    <div class="mb-2 text-subtitle-1">
                        {{item.subtitulo}}
                    </div>
                    <div>{{ item.descricao }}</div>
                </v-card-text>
    
                <v-divider class="mx-4"></v-divider>
                
                <v-card-actions>
                    <v-btn color="deep-purple lighten-2" text>
                        <a href="item.link" target="_blank">Visualizar</a>
                    </v-btn>
                </v-card-actions>
            </v-card>
        </v-row>
    </div>
</template>

<script>
export default {
    name: 'PortifolioView',

    data: () => {
        return {
            itens: [
                {
                    img: "https://pbs.twimg.com/media/Fym11BuWIAwV2Cn?format=jpg&name=900x900",
                    titulo:"To do List" ,
                    subtitulo:"HTML, CSS e PHP" ,
                    descricao:"Gerenciador de tarefas com funcionalidades de incluir, visulizar, editar e excluir.", 
                    link:"https://www.linkedin.com/feed/update/urn:li:activity:7075206824043364352/"
                },
                {
                    img: "https://pbs.twimg.com/media/FzK0e0BWwAEx5SA?format=png&name=small",
                    titulo:"Cardápio Ilustrativo" ,
                    subtitulo:"JAVA SPRING, REACT e TYPESCRIPT" ,
                    descricao:"Cardápio de alimentos com função de incluir e visualizar, com campos de 'título, valor e imagem'.", 
                    link:"https://www.linkedin.com/feed/update/urn:li:ugcPost:7077359061129674752/"
                },
                {
                    img: "https://pbs.twimg.com/media/F2nWz0bacAEMjJL?format=png&name=900x900",
                    titulo:"Projeto Automóveis" ,
                    subtitulo:"HTML e JAVASCRIPT" ,
                    descricao:"Projeto de carros e motos com função de visualizar detalhes e excluir, com campos de 'nome, descrição e imagem', possuindo também a funcionalidade de alterar o tema da página entre dark e light.", 
                    link:"https://www.linkedin.com/feed/update/urn:li:activity:7092880596066066432/"
                },
                {
                    img: "https://camo.githubusercontent.com/ad87a97f6e9dd87c1642c0908c7c8b447e3d52cc7783a2cc1c46869d29ffb8bf/68747470733a2f2f7062732e7477696d672e636f6d2f6d656469612f46363937734750586741416f4839583f666f726d61743d6a7067266e616d653d6d656469756d",
                    titulo:"Blog em Angular" ,
                    subtitulo:"HTML, CSS e Angular" ,
                    descricao:"Durante bootcamp Angular e Java da Santander produzimos um blog em angular.", 
                    link:"https://github.com/LarissaLunguinho/angular-WillianPsic"
                },
                {
                    img: "https://pbs.twimg.com/media/F72ruEIWkAAjhJh?format=jpg&name=large",
                    titulo:"Site Willian Psicólogo" ,
                    subtitulo:"HTML, CSS e Angular" ,
                    descricao:"A pedido de um amigo codei seu site para contato e divulgação.", 
                    link:"https://github.com/LarissaLunguinho/angular-WillianPsic"
                },
                {
                    img: "https://pbs.twimg.com/media/F72toUvWAAAewuk?format=jpg&name=large",
                    titulo:"Pokedex" ,
                    subtitulo:"HTML, CSS e Javascript" ,
                    descricao:"Aprendendo a consumir API juntamento com Javascript.", 
                    link:"https://github.com/LarissaLunguinho/js-developer-pokedex"
                },
            ]
        }
    }
}
</script>

<style scoped>
</style>