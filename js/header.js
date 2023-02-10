
let count = 0;
function menufn(){
    if (count == 0) {
        console.log("hello")
        document.querySelector(".menu-link").style.display = "block";
        

        count = 1;
        return;
    }
    if (count == 1) {
        document.querySelector(".menu-link").style.display = "none";
        count = 0;
        return;
        
    }
}   





let menuproduct = document.getElementById("menu-product");
menuproduct.addEventListener("click", menuproducthover);
menuproduct.addEventListener("mouseover", menuproducthover);
function menuproducthover() {
    
    document.getElementById("product-link").style.display = "inline-block";
    console.log("hello")


}
let productlink = document.getElementById("product-link");
productlink.addEventListener("mouseover", menuproducthover);

productlink.addEventListener("mouseout", menuproducthout);
function menuproducthout() {
    document.getElementById("product-link").style.display = "none";
}












let menucommunity= document.getElementById("menu-community");
let menusignup= document.getElementById("menu-signup");
let menussignin= document.getElementById("menu-signin");

menucommunity.addEventListener("mouseover", closeall);
menusignup.addEventListener("mouseover", closeall);
menussignin.addEventListener("mouseover", closeall);

function closeall(){
    
    menuproducthout();
}

