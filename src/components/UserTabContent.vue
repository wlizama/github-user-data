<template>
    <section class="tab-contanier">
        <v-tabs color="light-blue darken-2" dark slider-color="cyan lighten-3">
            <v-tab>Overview</v-tab>
            <v-tab>Repositories ({{ user_data.public_repos }})</v-tab>
            <v-tab-item>
                <v-container>
                    <v-layout row class="row-item">
                        <v-flex xs4 class="font-weight-bold">ID:</v-flex>
                        <v-flex xs8>
                            {{ user_data.id }}
                        </v-flex>
                    </v-layout>
                    <v-layout row class="row-item">
                        <v-flex xs4 class="font-weight-bold">Company:</v-flex>
                        <v-flex xs8>
                            {{ user_data.company }}
                        </v-flex>
                    </v-layout>
                    <v-layout row class="row-item">
                        <v-flex xs4 class="font-weight-bold">e-mail:</v-flex>
                        <v-flex xs8>
                            <a :href="'mailto:' + user_data.email">{{ user_data.email }}</a>
                        </v-flex>
                    </v-layout>
                    <v-layout row class="row-item">
                        <v-flex xs4 class="font-weight-bold">Blog:</v-flex>
                        <v-flex xs8>
                            <a :href="user_data.blog">{{ user_data.blog }}</a>
                        </v-flex>
                    </v-layout>
                    <v-layout row class="row-item">
                        <v-flex xs4 class="font-weight-bold">Location:</v-flex>
                        <v-flex xs8>
                            {{ user_data.location }}
                        </v-flex>
                    </v-layout>
                    <v-layout row class="row-item">
                        <v-flex xs4 class="font-weight-bold">Followers:</v-flex>
                        <v-flex xs8>
                            {{ user_data.followers }}
                        </v-flex>
                    </v-layout>
                    <v-layout row class="row-item">
                        <v-flex xs4 class="font-weight-bold">Following:</v-flex>
                        <v-flex xs8>
                            {{ user_data.following }}
                        </v-flex>
                    </v-layout>
                </v-container>
            </v-tab-item>
            <v-tab-item>
                <v-list two-line v-if="user_repos.length">
                    <UserTabContentRepoWrap 
                        v-for="user_repo in user_repos"
                        :key="user_repo.id"
                        :user_repo="user_repo">
                    </UserTabContentRepoWrap>
                    <div class="text-xs-center">
                        <v-pagination
                            v-model="page"
                            >
                        </v-pagination>
                    </div>
                </v-list>
                <v-card v-else>
                    <v-card-text>
                        <p class="text-xs-center title">No repositories found</p>
                    </v-card-text>
                </v-card>
            </v-tab-item>
        </v-tabs>
    </section>
</template>

<script>
    import UserTabContentRepoWrap from "./UserTabContentRepoWrap.vue"

    export default {
        name : "userTabContent",
        props : ["user_data", "user_repos"],
        data () {
            return  {
                page: 1
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
