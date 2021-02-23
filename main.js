var images = ["download.jpg", "download.png", "images.jpg"];
var names = ["Welcome to My Family book", "Prisha", "Sonia"];
var member = 0;
function nextslide() {    
    member = member + 1;
    document.getElementById("page_img").src = images[member];
    document.getElementById("member_name").innerHTML = names[member];
    if (member == 2) {
        member = (0 - 1);
    }
}