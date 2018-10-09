<template>
    <v-app>
        <v-container class="main-container">
            <v-layout row wrap justify-center>
                <v-flex sm12 lg8 xl6>


                    <InputSearch :input_props="input_props" />
                    <BodyContainer :show_content="show_content">
                        <StatusRequest v-if="show_status_req" :status_req_props="status_req_props" />
                        <ResultContainer v-else>
                            <UserRow :user_row_props="user_data" />
                            <UserTabContent :user_tab_content_props="user_data" />
                        </ResultContainer>
                    </BodyContainer>


                </v-flex>
            </v-layout>
        </v-container>
    </v-app>
</template>

<script>
    //# CSS imports
    import "./assets/styles/common.css"

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
                    doKeyup: this.searchUser,
                    doClickClose : this.clearSearch
                },
                status_req_props : {
                    type: ""
                },
                show_status_req: false,
                show_content: false,
                user_data: {},
            }
        },
        methods : {
            searchUser() {
                let username = this.input_props.username.trim()

                if(username !== "") {
                    this.show_content = true
                    this.show_status_req = true
                    this.status_req_props.type = "loading"
    
                    ghAPI.getUser(username, (err, data) => {
                        if (!err){
                            this.user_data = data;
                            this.show_status_req = false
                        }
                        else {
                            this.user_data = {}
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
    .main-container {
        padding: 0;
        margin-top: 0;
    }
</style>