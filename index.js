
const range_volume = document.querySelector(".range_volume");
const range_price = document.querySelector(".range_price");
const tarif_volumeCircle = document.querySelector(".tarif_volume-circle");
const tarif_priceCircle = document.querySelector(".tarif_price-circle");
const range = document.querySelector(".range");

range.oninput = (()=>{
    let value = range.value;
    range_volume.innerHTML = `${value}GB`;
    range_price.innerHTML = `${value*3}$`
    // range_volume.style.left = (value/3.2) + "px";
    // range_price.style.left = (value/3.2) + "px";
    tarif_volumeCircle.innerHTML = `${value}GB`;
    tarif_priceCircle.innerHTML = `${value*3}$`;
    if (value > 999){
        range_volume.innerHTML = "1Tb";
        range_price.innerHTML = "< 3000$";
        tarif_volumeCircle.innerHTML = "1Tb";
        tarif_priceCircle.innerHTML = "< 3000$";
    }
})

