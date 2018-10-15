<template>
    <div>
        <v-list-tile avatar :key="user_repo.id">
            <v-list-tile-avatar tile size="32">
                <img :src="img_avatar">
            </v-list-tile-avatar>

            <v-list-tile-content>
                <v-list-tile-title v-html="full_name_title"></v-list-tile-title>
                <v-list-tile-sub-title v-html="user_repo.description" class="text--primary"></v-list-tile-sub-title>
                <v-list-tile-sub-title v-html="user_repo.language"></v-list-tile-sub-title>
            </v-list-tile-content>

            <v-list-tile-action>
                <v-list-tile-action-text>
                    <v-icon>star</v-icon>
                    {{ user_repo.stargazers_count }}
                </v-list-tile-action-text>
                
            </v-list-tile-action>
        </v-list-tile>
        <v-divider></v-divider>
    </div>
</template>

<script>

    export default {
        name: "UserTabContentRepoWrap",
        props : ["user_repo"],
        computed : {
            full_name_title () {
                let full_name = this.user_repo.full_name.split("/")
                return `<a href='${this.user_repo.html_url}'>${full_name[0]}/<b>${full_name[1]}</b>`
            },
            img_avatar() {
                return this.user_repo.fork ? require('ImgAssets/github_repo.png') : require('ImgAssets/github_repo-forked.png')
            }
        }
    }
</script>

<style>
    
</style>
