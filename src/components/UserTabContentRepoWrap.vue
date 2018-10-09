<template>
    <div>
        <v-list-tile-avatar>
            <img :src="user_repo.fork ? gh_img_repo_forked : gh_img_repo">
        </v-list-tile-avatar>
        
        <div class="repo-title">
            <span class="repo-title--label">
                <a :href="user_repo.html_url">
                    {{ user_repo.full_name.split("/")[0] }}/<b>{{ user_repo.full_name.split("/")[1] }}</b>
                </a>
            </span>
            <span class="repo-title--star-count">
                <v-icon>star_rate</v-icon>
                <span class="stargazers-count">{{ user_repo.stargazers_count }}</span>
            </span>
        </div>
        <div>{{ user_repo.description }}</div>
        <div class="repo-lang">{{ user_repo.language }}</div>

    </div>
</template>

<script>
    import gh_img_repo from "../assets/images/github_repo.png"
    import gh_img_repo_forked from "../assets/images/github_repo-forked.png"

    export default {
        name: "UserTabContentRepoWrap",
        data() {
            return {
                gh_img_repo,
                gh_img_repo_forked
            }
        },
        props : ["user_repo"]
    }
</script>

<style>
    
</style>
