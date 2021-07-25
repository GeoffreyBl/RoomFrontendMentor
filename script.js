
var leftarrow = document.querySelector(".left");
var rightarrow = document.querySelector(".right");
var righttitle = document.querySelector(".righttitle");
var rightp = document.querySelector(".rightp");
var image = document.querySelector(".headerslide_picture")

leftarrow.addEventListener("click", function(){
    change("left");
});
rightarrow.addEventListener("click", function(){
    change("right");
});

var state = 1;

function change(direction){
    if (direction == "left"){
        if (state < 3){
            state++;
        } else if (state == 3){
            state = 1;
        }
    } else if(direction == "right"){
        if (state > 1){
            state--;
        } else if (state == 1){
            state = 3;
        }
    }
    refresh();
}
function refresh(){
    switch (state){
        case 1:  
            rightp.textContent = "We provide unmatched quality, comfort, and style for property owners across the country. Our experts combine form and function in bringing your vision to life. Create a room in your own style with our collection and make your property a reflection of you and what you love.";
            righttitle.textContent = "Discover innovative ways to decorate";
            image.style.backgroundImage = "url('images/desktop-image-hero-1.jpg')";
            break;
        case 2:
            rightp.textContent = "With stores all over the world, it's easy for you to find furniture for your home or place of business. Locally, we’re in most major cities throughout the country. Find the branch nearest you using our store locator. Any questions? Don't hesitate to contact us today.";
            righttitle.textContent = "We are available all across the globe";
            image.style.backgroundImage = "url('images/desktop-image-hero-2.jpg')";
            break;
        case 3:
            rightp.textContent = "  Our modern furniture store provide a high level of quality. Our company has invested in advanced technology to ensure that every product is made as perfect and as consistent as possible. With three decades of experience in this industry, we understand what customers want for their home and office.";
            righttitle.textContent = "Manufactured with the best materials";
            image.style.backgroundImage = "url('images/desktop-image-hero-3.jpg')";
            break;
        default:
            state = 1;
    }
}