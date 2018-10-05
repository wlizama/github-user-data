<template>
    <v-content>
        <v-container fluid>
            <div v-if="show_content">
                <slot></slot>
            </div>
        </v-container>
    </v-content>
</template>

<script>
    export default {
        name : "bodyContainer",
        props : {
            show_content: Boolean,
            default: true
        }
    }
</script>

<style>
    .body-container {
        max-width: 50em;
        width: 100%;
        display: inline-block;
        background-color: rgba(255, 255, 255, 0.8);
        box-shadow: 0 0 10px #CCC;
        position: absolute;
        left:0;
        min-height: 100%;
        padding: 4.5em 1em 1em 1em;
    }
</style>
