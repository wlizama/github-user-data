<template>
    <section class="main">
        <InputSearch />
        <BodyContainer>
            <StatusRequest />
            <ResultContainer>
                <UserRow />
                <UserTabContent />
            </ResultContainer>
        </BodyContainer>
    </section>
</template>

<script>
    //# CSS imports
    import "./assets/styles/common.css"
    import 'materialize-css/dist/css/materialize.min.css';

    // import ghAPI from "./api"
    import "materialize-css"

    //# Components imports
    import InputSearch from "./components/InputSearch.vue"
    import BodyContainer from "./components/BodyContainer.vue"
    import StatusRequest from "./components/StatusRequest.vue"
    import ResultContainer from "./components/ResultContainer.vue"
    import UserRow from "./components/UserRow.vue"
    import UserTabContent from "./components/UserTabContent.vue"
    

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