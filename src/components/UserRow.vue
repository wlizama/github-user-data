<template>
    <div class="row">
        <div class="col s5 m3 l3">
            <div class="card">
                <div class="card-image">
                    <img :src="user_row_props.avatar_url">
                </div>
            </div>
        </div>
        <div class="col s7 m9 l9">
            <h1 class="flow-text main-text-1">{{ user_row_props.name }}</h1>
            <span class="flow-text">
                <a :href="user_row_props.html_url">@{{ user_row_props.login }}</a>
            </span>
        </div>

        <div class="col s12 m12 l12">
            <div class="flow-text">
                {{ user_row_props.bio ? user_row_props.bio : "" }}
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name : "userRow",
        props : ["user_row_props"]
    }
</script>

<style>

</style>
