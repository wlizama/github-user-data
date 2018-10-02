<template>
    <nav class="main-search navbar-fixed">
        <div class="nav-wrapper cyan darken-3">
            <form autocomplete="off">
                <div class="input-field">
                    <input type="search" required placeholder="GitHub user here..." />
                    <label class="label-icon" for="search"><i class="material-icons">search</i></label>
                    <i class="material-icons">close</i>
                </div>
            </form>
        </div>
    </nav>    
</template>

<script>
    export default {
        name : "inputSearch"
    }
</script>

<style>
    .main-search{
        max-width: inherit;
        display: inline-block;
    }
</style>
