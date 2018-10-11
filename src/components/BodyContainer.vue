<template>
    <v-content>
        <v-card flat class="transparent">
            <v-container fluid>
                <div v-if="show_content">
                    <slot></slot>
                </div>
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
