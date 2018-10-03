<template>
    <div class="row">
        <div class="col s12">
            <ul id="tbContent" class="tabs">
                <li class="tab col s3"><a class="active" href="#contentGeneral">Overview</a></li>
                <li class="tab col s3"><a href="#contentRepos">Repositories (<span id="cantRepos"></span>)</a></li>
            </ul>
        </div>
        <div id="contentGeneral" class="col s12 content-tab active">
            <div class="row">
                <div class="col s4 l3 lbl-column-1">ID:</div>
                <div id="lblID" class="col s8 l9 lbl-column-2"></div>
            </div>
            <div class="row">
                <div class="col s4 l3 lbl-column-1">Company:</div>
                <div id="lblCompany" class="col s8 l9 lbl-column-2"></div>
            </div>
            <div class="row">
                <div class="col s4 l3 lbl-column-1">e-mail:</div>
                <div class="col s8 l9 lbl-column-2"><a id="lblEmail" href="mailto:"></a></div>
            </div>
            <div class="row">
                <div class="col s4 l3 lbl-column-1">Blog:</div>
                <div class="col s8 l9 lbl-column-2"><a id="lblBlog" href="#"></a></div>
            </div>
            <div class="row">
                <div class="col s4 l3 lbl-column-1">Location:</div>
                <div id="lblLocation" class="col s8 l9 lbl-column-2"></div>
            </div>
            <div class="row">
                <div class="col s4 l3 lbl-column-1">Followers:</div>
                <div id="lblFollowers" class="col s8 l9 lbl-column-2"></div>
            </div>
            <div class="row">
                <div class="col s4 l3 lbl-column-1">Following:</div>
                <div id="lblFollowing" class="col s8 l9 lbl-column-2"></div>
            </div>
        </div>
        <div id="contentRepos" class="col s12 content-tab">
            <div class="row">
                <div class="col s12">
                    <ul id="ulReposCollection" class="collection">
                    </ul>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name : "userTabContent"
    }
</script>

<style>
    .content-tab{
        border: 1px solid #efefef;
        background-color: rgba(228, 228, 228, 0.06);
    }
    .content-tab > .row:first-child{
        padding-top: 1em;
    }
    .content-tab > .row:last-child{
        padding-bottom: 1em;
    }
</style>
