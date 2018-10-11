<template>
    <section>
        <div v-if="status_req_props.type === 'loading'">
            <span>Please wait...</span>
            <v-progress-linear :indeterminate="true"></v-progress-linear>
        </div>
        <div v-if="status_req_props.type === 'error'" class="text-md-center">
            <h1 class="display-3">404</h1>
            <p class="title">User not found</p>
        </div>
    </section>
</template>

<script>
    export default {
        name : "statusRequest",
        props: ["status_req_props"]
    }
</script>

<style>

</style>
