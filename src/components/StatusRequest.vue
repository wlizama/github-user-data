<template>
    <div>
        <div v-if="status_req_props.type === 'loading'">
            <div class="status-request">
                <span>Please wait...</span>
                <div class="progress">
                    <div class="indeterminate"></div>
                </div>
            </div>
        </div>
        <div v-if="status_req_props.type === 'error'">
            <div class="status-fail flow-text">
                <h1>404</h1>
                <p>User not found</p>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name : "statusRequest",
        props: ["status_req_props"]
    }
</script>

<style>
    .status-fail {
        text-align: center;
        font-size: 1.2em;
    }
    .status-fail > h1 {
        font-size: 5em;
        font-weight: bold;
    }
</style>
