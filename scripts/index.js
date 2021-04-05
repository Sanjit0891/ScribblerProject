
var createPostModel = document.getElementById("createPostModel") ;
var createBtn = document.getElementById("Create-Post-Modal") ;
var closeCP = document.getElementsByClassName("close")[2];

createBtn.onclick = function()
{
    createPostModel.style.display = "block";
}

closeCP.onclick = function() {
    createPostModel.style.display = "none";
}

function showCreatePost(){
    createPostModel.style.display = "flex";
}

function hideCreatePostModal(){
    createPostModel.style.display = "none";
}
