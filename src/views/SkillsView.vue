<template>
    <div class="mx-auto">
        <v-list-item>
            <v-list-item-content class="d-flex flex-column align-center">
                <v-list-item-title class="mb-2">Aprendizados no curso técnico de informática:</v-list-item-title>
                <v-row>
                    <v-col class="d-flex align-self-center">
                        <img src="https://cdn-icons-png.flaticon.com/512/919/919827.png" alt="Icone HTML"
                            style="width: 60px;">
                        <img src="https://cdn-icons-png.flaticon.com/512/5968/5968242.png" alt="Icone CSS"
                            style="width: 60px;">
                        <img src="https://cdn.iconscout.com/icon/free/png-256/free-javascript-2038874-1720087.png"
                            alt="Icone JavaScript" style="width: 60px;">
                        <img src="https://cdn-icons-png.flaticon.com/512/5968/5968332.png" alt="Icone PHP"
                            style="width: 60px;">
                    </v-col>
                </v-row>
                <v-list-item-title class="mb-2 mt-3">Experiências adquiridas como Desenvolvedora Fullstack na Hepta
                    Tecnologia e Informática:</v-list-item-title>

                <v-row>
                    <v-col class="d-flex align-self-center">
                        <img src="https://cdn3.iconfinder.com/data/icons/logos-and-brands-adobe/512/267_Python-512.png"
                            alt="Icone Python" style="width: 60px;">
                        <img src="https://cdn.icon-icons.com/icons2/2415/PNG/512/django_line_logo_icon_146560.png"
                            alt="Icone Django" style="width: 60px;">
                        <img src="https://cdn.worldvectorlogo.com/logos/fastapi-1.svg" alt="Icone FastAPI"
                            style="width: 60px;">
                        <img src="data:image/png;base64,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"
                            alt="Icone VueJS" style="width: 60px;">
                        <img src="https://cdn-icons-png.flaticon.com/512/919/919853.png" alt="Icone Docker"
                            style="width: 60px;">
                        <img src="https://raw.githubusercontent.com/docker-library/docs/01c12653951b2fe592c1f93a13b4e289ada0e3a1/postgres/logo.png"
                            alt="Icone Postgres" style="width: 60px;">
                        <img src="https://techsparx.com/img/logo-mysql-mysql.png" alt="Icone MySQL" style="width: 60px;">
                        <img src="https://git-scm.com/images/logos/downloads/Git-Icon-1788C.png" alt="Icone Git"
                            style="width: 60px;">
                        <img src="https://cdn-icons-png.flaticon.com/512/25/25231.png" alt="Icone GitHub"
                            style="width: 60px;">
                        <img src="https://cdn-icons-png.flaticon.com/512/5968/5968853.png" alt="Icone GitLab"
                            style="width: 60px;">
                    </v-col>
                </v-row>
                <v-list-item-title class="mb-2 mt-3">Aprendizados por cursos/vídeos:</v-list-item-title>
                <v-row>
                    <v-col class="d-flex align-self-center">
                        <img src="https://cdn-icons-png.flaticon.com/512/226/226777.png" alt="Icone Java"
                            style="width: 60px;">
                    </v-col>
                </v-row>

            </v-list-item-content></v-list-item>
    </div>
</template>

<script>
export default {
    name: 'SkillsView',

    data: () => ({
        //
    })
}
</script>

<style scoped></style>