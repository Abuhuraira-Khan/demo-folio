///////// search area ////////

function mySearch(){
    document.getElementById("search").style.width="180px";
    document.getElementById("search").style.background="#fff";
    document.getElementById("closs-search").style.display="inline-block";
    document.getElementById("closs-search").style.border="none";
}

function mys(){
    document.getElementById("search").style.width="0px";
    document.getElementById("search").style.background="none";
    document.getElementById("search").style.border="none";
    document.getElementById("closs-search").style.display="none";
    document.getElementById('search').value= "";

}

function clossSearch(){
    document.getElementById('search').value= "";
}