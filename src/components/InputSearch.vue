<template>
    <nav class="main-search navbar-fixed">
        <div class="nav-wrapper cyan darken-3">
            <form autocomplete="off" @submit.prevent >
                <div class="input-field">
                    <input 
                        type="search"
                        required
                        placeholder="GitHub user here..."
                        v-model="input_props.username"
                        @keyup.prevent.enter="input_props.doKeyup" />
                    <label class="label-icon" for="search">
                        <i class="material-icons">search</i>
                    </label>
                    <i class="material-icons" @click="input_props.doClickClose">close</i>
                </div>
            </form>
        </div>
    </nav>    
</template>

<script>
    export default {
        name : "inputSearch",
        props : ["input_props"]
    }
</script>

<style>
    .main-search {
        max-width: inherit;
        display: inline-block;
    }
</style>
