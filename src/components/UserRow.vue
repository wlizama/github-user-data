<template>
    <v-container fluid>
        <v-layout row wrap justify-center>


            <v-flex xs12 lg8>
                <v-card>
                    <v-layout align-center row fill-height>
                        <v-avatar tile size="240px">
                            <v-img :src="user_row_props.avatar_url"  contain></v-img>
                        </v-avatar>
                        <v-flex xs6>
                            <v-card-title primary-title>
                                <div>
                                    <div class="headline">{{ user_row_props.name }}</div>
                                    <div>
                                        <a :href="user_row_props.html_url" class="user-url">@{{ user_row_props.login }}</a>
                                    </div>
                                    <div>{{ user_row_props.bio ? user_row_props.bio : "" }}</div>
                                </div>
                            </v-card-title>
                        </v-flex>
                    </v-layout>
                </v-card>
            </v-flex>


        </v-layout>
    </v-container>
</template>

<script>
    export default {
        name: "userRow",
        props: ["user_row_props"]
    }
</script>

<style>
    .user-url {
        text-decoration: none
    }
</style>