(function(){

    window.onload = init;

    var txtSearch;
    var lblStatusReq;
    var statusRequest;
    var resultContainer;
    var statusFail;
    var ulReposCollection;
    var cantPerPage = 50;

    function init() {
        document.getElementById("btnClearInput").onclick = clearSearch;
        
        txtSearch = document.getElementById("txtSearch");
        lblStatusReq = document.getElementById("lblStatusReq");
        statusRequest = document.getElementById("statusRequest");
        resultContainer = document.getElementById("resultContainer");
        statusFail = document.getElementById("statusFail");
        ulReposCollection = document.getElementById("ulReposCollection");
        

        txtSearch.onkeydown = searchUser;
    }

    function clearSearch(evento) {
        var evt = window.event || evento;
        evt.preventDefault();
        txtSearch.value = "";
        txtSearch.focus();
    }

    function searchUser(evento) {
        try{
            var evt = window.event || evento;

            if (evt.keyCode == 13) { // ENTER KEY
                evt.preventDefault();

                var userName = txtSearch.value.trim();
                var url = "https://api.github.com/users/" + userName;

                if(userName !== ""){

                    var xhr = new XMLHttpRequest();

                    xhr.onreadystatechange = function() {

                        statusRequest.style.display = "block";
                        statusFail.style.display = "none";
                        resultContainer.style.display = "none";
                        lblStatusReq.innerHTML = "Please wait...";
                        
                        if(xhr.readyState == 4 && xhr.status == 200){

                            lblStatusReq.innerHTML = "Data User OK!";

                            renderUserData(JSON.parse(xhr.responseText));
                            searchUserRepos(userName);
                        }
                        else if(xhr.status == 404){ // NOT FOUND
                            
                            statusRequest.style.display = "none";

                            statusFail.innerHTML =
                                "<h1>404</h1>" +
                                "<p>User not found</p>";

                            statusFail.style.display = "block";
                        }
                    };
                    xhr.open('GET', url, true);
                    xhr.send(null);
                    txtSearch.blur();
                }
            }
        }
        catch(e){
            if (statusRequest)
                statusRequest.style.display = "none";
            alert("Error on searching user.\nName: " + e.name + "\nMessage: " + e.message);
        }
    }

    function renderUserData(rpt) {
        try{
            document.getElementById("imgUser").src = rpt.avatar_url;
            document.getElementById("lblUserName").innerHTML = rpt.name;
            document.getElementById("pUserBio").innerHTML = rpt.bio ? rpt.bio : "";
            document.getElementById("aUserGithubPage").href = rpt.html_url;
            document.getElementById("aUserGithubPage").innerHTML = rpt.login;

            document.getElementById("lblID").innerHTML = rpt.id;
            document.getElementById("lblCompany").innerHTML = rpt.company ? rpt.company : "";
            document.getElementById("lblEmail").innerHTML = rpt.email ? rpt.email : "";
            document.getElementById("lblEmail").href = "mailto:" + rpt.email ? rpt.email : "";
            document.getElementById("lblBlog").href = rpt.blog ? rpt.blog : "";
            document.getElementById("lblBlog").innerHTML = rpt.blog ? rpt.blog : "";
            document.getElementById("lblLocation").innerHTML = rpt.location ? rpt.location : "";
            document.getElementById("lblFollowers").innerHTML = rpt.followers;
            document.getElementById("lblFollowing").innerHTML = rpt.following;

            document.getElementById("cantRepos").innerHTML = rpt.public_repos;
            
        }
        catch(e){
            alert("Error on show data.\nName: " + e.name + "\nMessage: " + e.message);
        }
    }

    function searchUserRepos(userName) {
        try{
            if (userName !=="") {
                var url = "https://api.github.com/users/" + userName + "/repos?per_page=" + cantPerPage;
                var xhr = new XMLHttpRequest();

                xhr.onreadystatechange = function() {

                    statusRequest.style.display = "block";
                    statusFail.style.display = "none";
                    resultContainer.style.display = "none";
                    lblStatusReq.innerHTML = "Getting Repositories List...";
                    
                    if(xhr.readyState == 4 && xhr.status == 200){

                        lblStatusReq.innerHTML = "Sucess!";
                        statusRequest.style.display = "none";

                        resultContainer.style.display = "block";
                        $('#tbContent').tabs('select_tab', 'contentGeneral'); // seleccionando tab por defecto
                        renderUserRepos(JSON.parse(xhr.responseText));
                    }
                };
                xhr.open('GET', url, true);
                xhr.send(null);
            }
            
        }
        catch(e){
            if (statusRequest)
                statusRequest.style.display = "none";
            alert("Error on searching repositories.\nName: " + e.name + "\nMessage: " + e.message);
        }
    }

    function renderUserRepos(arrRepos) {
        try{

            if (arrRepos.length > 0) {
                var htmlRepos = "";
                for (var i = 0; i < arrRepos.length; i++) {
                    var clsNameTypeRepo = arrRepos[i].fork ? "github-fork": "github-repo";
                    var description = arrRepos[i].description == null ? "": arrRepos[i].description; 
                    var language = arrRepos[i].language == null ? "": arrRepos[i].language;
                    var arrfullName = arrRepos[i].full_name.split("/");
                    var fullName = arrfullName[0] + "/<b>" + arrfullName[1] + "</b>";


                    htmlRepos += 
                    "<li class=\"collection-item avatar\">" +
                        "<i class=\"circle white " + clsNameTypeRepo + "\">&nbsp;</i>" +
                        "<div class=\"repo-title\">" +
                            "<span class=\"repo-title--label\"><a href=\"" + arrRepos[i].html_url + "\">" + fullName + "</a></span>" +
                            "<span class=\"repo-title--star-count\"><i class=\"material-icons yellow-text text-darken-1\">grade</i><span class=\"stargazers-count\">" + arrRepos[i].stargazers_count +"</span></span>" +
                        "</div>" +
                        "<div>" + description + "</div>" +
                        "<div class=\"repo-lang\">" + language + "</div>" +
                    "</li>";
                }
                ulReposCollection.innerHTML = htmlRepos;

            }
            else{
                ulReposCollection.innerHTML = "<div class=\"no-repos\">No public repositories</div>"
            }
        }
        catch(e){
            alert("Error on searching repositories.\nName: " + e.name + "\nMessage: " + e.message);
        }   
    }

}());