(function(){

    window.onload = init;

    var txtSearch;
    var lblStatusReq;
    var statusRequest;

    function init() {
        document.getElementById("btnClearInput").onclick = clearSearch;
        txtSearch = document.getElementById("txtSearch");
        lblStatusReq = document.getElementById("lblStatusReq");
        statusRequest = document.getElementById("statusRequest");

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

                var request = new XMLHttpRequest();
                var userName = txtSearch.value;
                var url = "https://api.github.com/users/" + escape(userName.trim());

                request.onreadystatechange = function() {

                    statusRequest.style.display = "block";

                    if(request.readyState == 1){
                        lblStatusReq.innerHTML = "Realizando Petición...";
                    }
                    if(request.readyState == 2){
                        lblStatusReq.innerHTML = "Procesando...";
                    }
                    if(request.readyState == 3){
                        lblStatusReq.innerHTML = "Descargando...";
                    }
                    if(request.readyState == 4){
                        lblStatusReq.innerHTML = "Completo!";

                        statusRequest.style.display = "none";
                        document.getElementById("resultContainer").innerHTML = request.responseText;
                    }
                };
                request.open('GET', url, true);
                request.send(null);
                txtSearch.blur();
            }
        }
        catch(e){
            if (statusRequest)
                statusRequest.style.display = "none";
            alert("Error de ejecución\nNombre: " + e.name + "\nMensaje: " + e.message);
        }
    }

}());