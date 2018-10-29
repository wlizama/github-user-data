<template>
    <v-app class="my-bg">
        <v-container class="main-container">
            <v-layout row wrap justify-center>
                <v-flex sm12 lg8 xl6>
                    <InputSearch :input_props="input_props" />
                    <BodyContainer :show_content="show_content">
                        <StatusRequest v-if="show_status_req" :status_req_props="status_req_props" />
                        <ResultContainer v-else>
                            <UserRow :user_row_props="user_data" />
                            <UserTabContent :user_data="user_data" :user_repos="user_repos" @search_repos_by_page="search_repos_by_page"/>
                        </ResultContainer>
                    </BodyContainer>
                </v-flex>
            </v-layout>
        </v-container>
    </v-app>
</template>

<script>

    //# JS imports
    import ghAPI from "./api"

    //# Components imports
    import InputSearch from "./components/InputSearch.vue"
    import BodyContainer from "./components/BodyContainer.vue"
    import StatusRequest from "./components/StatusRequest.vue"
    import ResultContainer from "./components/ResultContainer.vue"
    import UserRow from "./components/UserRow.vue"
    import UserTabContent from "./components/UserTabContent.vue"
    

    export default {
        name : "mainApp",
        data() {
            return {
                input_props: {
                    username : "",
                    doKeyup: this.searchUserData,
                    doClickClose : this.clearSearch
                },
                status_req_props : {
                    type: ""
                },
                show_status_req: false,
                show_content: false,
                user_data: {},
                user_repos: []
            }
        },
        methods : {
            searchUserData() {
                let username = this.input_props.username.trim()

                if(username !== "") {
                    this.show_content = true
                    this.show_status_req = true
                    this.status_req_props.type = "loading"
    
                    ghAPI.getUser(username, (err, data) => {
                        if (!err){
                            this.user_data = data;

                            ghAPI.getUserReposByPage(username, ghAPI.DEFAULT_PAGE, (err, data) => {
                                if (!err)
                                    this.user_repos = data;
                                else
                                    this.user_repos = []
                                
                                this.show_status_req = false
                            })
                        }
                        else {
                            this.user_data = {}
                            this.user_repos = []
                            this.show_status_req = true
                            this.status_req_props.type = "error"
                        }
                    })
                }
            },
            clearSearch() {
                this.show_status_req = false
                this.show_content = false
                this.input_props.username = ""
                this.user_data = {}
            },
            search_repos_by_page (page) {
                console.log("here", page, this);
                ghAPI.getUserReposByPage(this.username, page, (err, data) => {
                    if (!err)
                        this.user_repos = data;
                    else
                        this.user_repos = []
                    console.log(this.user_repos);
                    
                })
            }
        },
        components : {
            InputSearch,
            BodyContainer,
            StatusRequest,
            ResultContainer,
            UserRow,
            UserTabContent
        }
    }
</script>

<style>
    .my-bg {
        background-image: url(~ImgAssets/github.png), url(~ImgAssets/textura_ln1.png) !important;
        background-repeat: no-repeat, repeat !important;
        background-position: center, left top !important;
        background-attachment: fixed, fixed !important;
        background-size: 15%, auto !important;
    }
    .main-container {
        padding: 0;
        margin-top: 0;
    }
    @media screen and (max-width: 1400px) {
        .my-bg {
            background-size: 15%, auto !important;
        }
    }
    @media screen and (max-width: 1200px) {
        .my-bg {
            background-size: 20%, auto !important;
        }
    }
    @media screen and (max-width: 900px) {
        .my-bg {
            background-size: 25%, auto !important;
        }
    }
    @media screen and (max-width: 720px) {
        .my-bg {
            background-size: 35%, auto !important;
        }
    }
</style>