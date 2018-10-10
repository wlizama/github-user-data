<template>
    <section class="tab-contanier">
        <v-tabs color="light-blue darken-2" dark slider-color="cyan lighten-3">
            <v-tab>Overview</v-tab>
            <v-tab @click="searchRepos">Repositories ({{ user_tab_content_props.public_repos }})</v-tab>
            <v-tab-item>
                <v-container>
                    <v-layout row class="row-item">
                        <v-flex xs4 class="font-weight-bold">ID:</v-flex>
                        <v-flex xs8>
                            {{ user_tab_content_props.id }}
                        </v-flex>
                    </v-layout>
                    <v-layout row class="row-item">
                        <v-flex xs4 class="font-weight-bold">Company:</v-flex>
                        <v-flex xs8>
                            {{ user_tab_content_props.company }}
                        </v-flex>
                    </v-layout>
                    <v-layout row class="row-item">
                        <v-flex xs4 class="font-weight-bold">e-mail:</v-flex>
                        <v-flex xs8>
                            <a :href="'mailto:' + user_tab_content_props.email">{{ user_tab_content_props.email }}</a>
                        </v-flex>
                    </v-layout>
                    <v-layout row class="row-item">
                        <v-flex xs4 class="font-weight-bold">Blog:</v-flex>
                        <v-flex xs8>
                            <a :href="user_tab_content_props.blog">{{ user_tab_content_props.blog }}</a>
                        </v-flex>
                    </v-layout>
                    <v-layout row class="row-item">
                        <v-flex xs4 class="font-weight-bold">Location:</v-flex>
                        <v-flex xs8>
                            {{ user_tab_content_props.location }}
                        </v-flex>
                    </v-layout>
                    <v-layout row class="row-item">
                        <v-flex xs4 class="font-weight-bold">Followers:</v-flex>
                        <v-flex xs8>
                            {{ user_tab_content_props.followers }}
                        </v-flex>
                    </v-layout>
                    <v-layout row class="row-item">
                        <v-flex xs4 class="font-weight-bold">Following:</v-flex>
                        <v-flex xs8>
                            {{ user_tab_content_props.following }}
                        </v-flex>
                    </v-layout>
                </v-container>
            </v-tab-item>
            <v-tab-item>
                <v-list two-line>
                    <UserTabContentRepoWrap 
                        v-for="user_repo in user_repos"
                        :key="user_repo.id"
                        :user_repo="user_repo">
                    </UserTabContentRepoWrap>
                </v-list>
            </v-tab-item>
        </v-tabs>
    </section>
</template>

<script>
    import ghAPI from "../api"
    import UserTabContentRepoWrap from "./UserTabContentRepoWrap.vue"

    export default {
        name : "userTabContent",
        data () {
            return {
                user_repos : []
            }
        },
        props : ["user_tab_content_props"],
        methods : {
            searchRepos() {
                let username = this.user_tab_content_props.login
                ghAPI.getUserRepos(username, (err, data) => {
                    if (!err)
                        this.user_repos = data;
                    else
                        this.user_repos = []
                })
            }
        },
        components : {
            UserTabContentRepoWrap
        }
    }
</script>

<style>
    .tab-contanier {
        padding-top: 1em
    }
    .row-item {
        padding-bottom: 1em
    }
</style>
