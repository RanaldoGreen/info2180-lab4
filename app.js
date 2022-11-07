document.addEventListener('DOMContentLoaded',function(){
    var  btn = document.getElementsByClassName("btn");
    btn.item(0).addEventListener('click', function(f){
        f.preventDefault();
        var name = document.getElementById('name').value;        
        if(name.length==0){
            var xhttp = new XMLHttpRequest();
            xhttp.open("GET", "superheroes.php?name="+name, false);
            xhttp.send();
            response = xhttp.responseText;
            document.getElementById("result").innerHTML = response;
        }
        else{
            var request = new XMLHttpRequest();
            request.open("GET", "superheroes.php?name="+name, false);
            request.send();
            response = request.responseText;
            document.getElementById("result").innerHTML = response;
        }
    });
})

