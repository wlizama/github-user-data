<template>
    <v-toolbar color="cyan darken-3">
        <v-text-field
            v-model="input_props.username"
            @keyup.prevent.enter="input_props.doKeyup"
            prepend-inner-icon="person"
            append-icon="search"
            label="Github user here ..."
            color="blue-grey"
            @click:clear="input_props.doClickClose"
            flat
            clearable
            solo
            >
        </v-text-field>
  </v-toolbar>
</template>

<script>
    export default {
        name : "inputSearch",
        props : ["input_props"]
    }
</script>

<style>
    
</style>
