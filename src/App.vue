<template>
    <section class="main">
        <InputSearch />
    </section>
</template>

<script>
    import "./assets/styles/common.css"
    import 'materialize-css/dist/css/materialize.min.css';

    // import ghAPI from "./api"

    import InputSearch from "./components/InputSearch.vue"

    export default {
        name : "mainApp",
        methods : {
            // micl() {
            //     ghAPI.getUser("wlizama", (err, data) => {
            //         if (!err)
            //             console.log(data);
            //         else
            //             console.log(err);
            //     })
            // }
        },
        components : {
            InputSearch
        }
    }
</script>

<style>
    .main {
        min-height: 100%;
        margin: 0 auto;
        display: flex;
        flex-direction: column;
        align-items: center;
        position: relative;
        max-width: 50em;
    }
</style>