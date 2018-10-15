<template>
    <v-content>
        <v-card flat class="transparent">
            <v-container fluid v-if="show_content">
                <slot></slot>
            </v-container>
        </v-card>
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
    
</style>
