<template>
    <div class="row">
        <div class="col s5 m3 l3">
            <div class="card">
                <div class="card-image">
                    <img id="imgUser" src="">
                </div>
            </div>
        </div>
        <div class="col s7 m9 l9">
            <h1 class="flow-text main-text-1" id="lblUserName"></h1>
            <span class="flow-text"><a id="aUserGithubPage" href="#"></a></span>
        </div>

        <div class="col s12 m12 l12">
            <div id="pUserBio" class="flow-text"></div>
        </div>
    </div>
</template>

<script>
    export default {
        name : "userRow"
    }
</script>

<style>

</style>
