
window.onload = function(){
    
    var btns =  document.querySelectorAll('button');
    var scn = document.getElementById('screen').getElementsByTagName('p')[0];
    var val = null;

    btns.forEach(function(btn) {
        btn.addEventListener("click", function() {
            scn.innerHTML += btn.innerHTML 
        });
    });

};