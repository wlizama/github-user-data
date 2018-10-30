<template>
    <div class="text-xs-center" v-if="show_pagination">
        <v-pagination
            v-model="page"
            :length="cant_paginas"
            @input="emit_page_number">
        </v-pagination>
    </div>    
</template>

<script>
    import ghAPI from "../api/index.js";

    export default {
        name: "userTabContentReposPages",
        props: ["repos_length"],
        data () {
            return  {
                page: 1,
            }
        },
        methods: {
            emit_page_number () {
                this.$emit('search_repos_by_page', this.page)
            }
        },
        computed : {
            show_pagination () {
                return this.repos_length > ghAPI.MAX_REPOS_X_PAGE
            },
            cant_paginas () {
                let mas_if_impar = (this.repos_length % ghAPI.MAX_REPOS_X_PAGE != 0) ? 1 : 0
                return Math.floor(this.repos_length / ghAPI.MAX_REPOS_X_PAGE) + mas_if_impar
            }
        }
    }
</script>

<style>

</style>
