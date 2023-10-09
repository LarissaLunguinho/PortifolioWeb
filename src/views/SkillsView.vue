<template>
    <v-list-item class="lista-item-div">
        <div class="conteudo-div">
            <v-list-item-title class="title_content">Aprendizados no curso técnico de informática:</v-list-item-title>
            <v-row class="linha-itens">
                <v-col class="column-img" v-for="(item, index) in tec_info" :key="index">
                    <img :src="item.img" :alt="item.alt">
                </v-col>
            </v-row>
            <v-list-item-title class="title_content mt-3">Experiências adquiridas como Desenvolvedora Fullstack na Hepta
                Tecnologia e Informática:</v-list-item-title>

            <v-row class="linha-itens">
                <v-col class="column-img" v-for="(item, index) in hepta" :key="index">
                    <img :src="item.img" :alt="item.alt">
                </v-col>
            </v-row>

            <v-list-item-title class="title_content mt-3">Aprendizados por cursos/bootcamp:</v-list-item-title>
            <v-row class="linha-itens">
                <v-col class="column-img" v-for="(item, index) in cursos" :key="index">
                    <img :src="item.img" :alt="item.alt">
                </v-col>
            </v-row>

        </div>
    </v-list-item>
</template>

<script>
export default {
    name: 'SkillsView',

    data: () => {
        return {
            tec_info: [
                {
                    img: 'https://cdn-icons-png.flaticon.com/512/919/919827.png',
                    alt: 'Icone HTML',
                },
                {
                    img: 'https://cdn-icons-png.flaticon.com/512/5968/5968242.png',
                    alt: 'Icone CSS',
                },
                {
                    img: 'https://cdn.iconscout.com/icon/free/png-256/free-javascript-2038874-1720087.png',
                    alt: 'Icone JavaScript',
                },
                {
                    img: 'https://cdn-icons-png.flaticon.com/512/5968/5968332.png',
                    alt: 'Icone PHP',
                }
            ],
            hepta: [
                {
                    img: 'https://cdn3.iconfinder.com/data/icons/logos-and-brands-adobe/512/267_Python-512.png',
                    alt: 'Icone Python',
                },
                {
                    img: 'https://cdn.icon-icons.com/icons2/2415/PNG/512/django_line_logo_icon_146560.png',
                    alt: 'Icone Django',
                },
                {
                    img: 'https://cdn.worldvectorlogo.com/logos/fastapi-1.svg',
                    alt: 'Icone FastAPI',
                },
                {
                    img: 'data:image/png;base64,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',
                    alt: 'Icone Docker',
                },
                {
                    img: 'https://cdn-icons-png.flaticon.com/512/919/919853.png',
                    alt: 'Icone VueJS',
                },
                {
                    img: 'https://raw.githubusercontent.com/docker-library/docs/01c12653951b2fe592c1f93a13b4e289ada0e3a1/postgres/logo.png',
                    alt: 'Icone Postgres',
                },
                {
                    img: 'https://techsparx.com/img/logo-mysql-mysql.png',
                    alt: 'Icone MySQL',
                },
                {
                    img: 'https://git-scm.com/images/logos/downloads/Git-Icon-1788C.png',
                    alt: 'Icone Git',
                },
                {
                    img: 'https://cdn-icons-png.flaticon.com/512/25/25231.png',
                    alt: 'Icone GitHub',
                },
                {
                    img: 'https://cdn-icons-png.flaticon.com/512/5968/5968853.png',
                    alt: 'Icone GitLab',
                },
            ],
            cursos: [
                {
                    img: 'https://cdn-icons-png.flaticon.com/512/226/226777.png',
                    alt: 'Icone Java',
                },
                {
                    img: 'https://static-00.iconduck.com/assets.00/file-type-angular-icon-1907x2048-tobdkjt1.png',
                    alt: 'Icone Angular',
                },
            ]
        }
    }
}
</script>

<style scoped>
.lista-item-div {
    max-width: 1000px;
    min-height: 450px;
}
.conteudo-div {
    width: 100%;
}
.title_content {
    text-align: center;
    font-weight: 500;
    font-size: large;
    margin: 10px 10px;
}
.linha-itens{
    display: flex;
    align-items: center;
    justify-content: center;
}
.column-img {
    max-width: 70px;
}
.column-img > img {
        width: 60px;
        margin: 0 auto;
    }
@media (max-width: 480px) {
    .lista-item-div {
        margin: 0 auto;
        padding: 0;
    }

    .conteudo-div {
        max-width: 100%;
    }
    .title_content{
        margin-bottom: 2px;
        white-space: normal;
        text-align: center;
    }
    .column-img > img {
        width: 60px;
    }
}
</style>