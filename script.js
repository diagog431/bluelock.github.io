let likes_total = 0;

function like(){
    likes_total++;
    const like = document.getElementById("likes_show");
    like.innerHtml = "Likes: "+likes_total;
    console.log(like)
    
}