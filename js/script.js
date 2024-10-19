
//مصفوفة علشان اخزن فيها السعر
let prices = [];

// مصفوفة علشان اخزن فيها اسماء المنتجات
let productNames = [];

var div=document.getElementById("total-product")
var show= document.getElementById("show-prices")
var btn=document.getElementById("btn-total")

// علشان اضيف المنتج للديف لما اضغط علي الزرار
document.querySelectorAll("#btn").forEach(button => {
    button.addEventListener("click", function(event) {
        // علشان الصفحة متحملش تاني 
        event.preventDefault(); 

        // السعر واسم المنتج
        let productCard = this.closest('.card');
        let productName = productCard.querySelector('h2').innerText;
        let price = +(parseFloat(productCard.getAttribute("price")));
        

        //علشان يضيف الاسم للديف 
        productNames.push(productName);
        prices.push(price);

        // عرض المنتج في الديف
        div.innerHTML = productNames.join(" , ");

        if(div.innerHTML !=""){
            div.style.display="block";
            btn.style.display="block";
        }
    });
});

// علشان يحسبلي ويظهرلي السعر الكلي 
    btn.addEventListener("click", function() {
    let totalPrice = prices.reduce((total, price) => total + price, 0)
    btn.innerText = "Total price : EGP" + totalPrice
    // OR
    // btn.innerText = `Total price : EGP ${totalPrice}`;
});


