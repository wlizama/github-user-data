<template>
    <div class="row">
        <div class="col s12">
            <ul id="tbContent" class="tabs">
                <li class="tab col s3">
                    <a href="#contentGeneral" :class="{ active: is_active }" @click="selectTab">Overview</a>
                </li>
                <li class="tab col s3">
                    <a href="#contentRepos" @click="selectTab">Repositories (<span id="cantRepos">{{ user_tab_content_props.public_repos }}</span>)</a>
                </li>
            </ul>
        </div>
        <div id="contentGeneral" class="col s12 content-tab">
            <div class="row">
                <div class="col s4 l3 lbl-column-1">ID:</div>
                <div id="lblID" class="col s8 l9 lbl-column-2">{{ user_tab_content_props.id }}</div>
            </div>
            <div class="row">
                <div class="col s4 l3 lbl-column-1">Company:</div>
                <div id="lblCompany" class="col s8 l9 lbl-column-2">{{ user_tab_content_props.company }}</div>
            </div>
            <div class="row">
                <div class="col s4 l3 lbl-column-1">e-mail:</div>
                <div class="col s8 l9 lbl-column-2">
                    <a id="lblEmail" :href="'mailto:' + user_tab_content_props.email">{{ user_tab_content_props.email }}</a>
                </div>
            </div>
            <div class="row">
                <div class="col s4 l3 lbl-column-1">Blog:</div>
                <div class="col s8 l9 lbl-column-2">
                    <a id="lblBlog" :href="user_tab_content_props.blog">{{ user_tab_content_props.blog }}</a>
                </div>
            </div>
            <div class="row">
                <div class="col s4 l3 lbl-column-1">Location:</div>
                <div id="lblLocation" class="col s8 l9 lbl-column-2">{{ user_tab_content_props.location }}</div>
            </div>
            <div class="row">
                <div class="col s4 l3 lbl-column-1">Followers:</div>
                <div id="lblFollowers" class="col s8 l9 lbl-column-2">{{ user_tab_content_props.followers }}</div>
            </div>
            <div class="row">
                <div class="col s4 l3 lbl-column-1">Following:</div>
                <div id="lblFollowing" class="col s8 l9 lbl-column-2">{{ user_tab_content_props.following }}</div>
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
    //active
    export default {
        name : "userTabContent",
        data()  {
            return {
                is_active : false
            }
        },
        props : ["user_tab_content_props"],
        methods : {
            selectTab(event) {
                this.is_active = true
                // let href = event.target.href
                // href = href.substring(href.indexOf("#")).replace("#","")
                // console.log(href);
            }
        }
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
