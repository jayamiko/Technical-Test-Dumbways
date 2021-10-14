const shopping = document.getElementById("shopping")
const buy = document.getElementById("buy")
const diskon = document.getElementById("diskon")
const returning = document.getElementById("returning")

// VOUCHER DUMBWAYS JOSS
const diskonJoss = 21.1 / 100;
const maxDiskonJoss = 20000;

// VOUCHER DUMBWAYS MANTAP
const diskonMantap = 30 / 100;
const maxDiskonMantap = 40000;


function dumbwaysJoss() {
    if (shopping.value >= 50000) {
        let sumDiscont = shopping.value * diskonJoss;

        if (sumDiscont < maxDiskonJoss) {
            let result = shopping.value - sumDiscont;
            let again = shopping.value - result;

            diskon.innerText = "Diskon : Rp." + parseInt(sumDiscont)
            buy.innerText = "Yang Harus Dibayar : Rp." + result
            returning.innerText = "Kembalian : Rp." + again

            console.log("Diskon : Rp." + parseInt(sumDiscont))
            console.log("Yang Harus Dibayar : Rp." + result)
            console.log("Kembalian : Rp." + again);
        } else {
            let result = shopping.value - maxDiskonJoss;
            let again = shopping.value - result;

            diskon.innerText = "Diskon : Rp." + parseInt(maxDiskonJoss)
            buy.innerText = "Yang Harus Dibayar : Rp." + result
            returning.innerText = "Kembalian : Rp." + again

            console.log("Diskon : Rp." + parseInt(maxDiskonJoss))
            console.log("Yang Harus Dibayar : Rp." + result)
            console.log("Kembalian : Rp." + again);
        }
    } else {
        let result = shopping.value - !diskonJoss
        let again = shopping.value - result;

        diskon.innerText = "Diskon : Rp." + 0
        buy.innerText = "Yang Harus Dibayar : Rp." + result
        returning.innerText = "Kembalian : Rp." + again

        console.log("Diskon : Rp." + 0)
        console.log("Yang Harus Dibayar : Rp." + result)
        console.log("Kembalian : Rp." + again);
    }
}

function dumbwaysMantap() {
    if (shopping.value >= 80000) {
        let sumDiscont = shopping.value * diskonMantap;

        if (sumDiscont < maxDiskonMantap) {
            let result = shopping.value - sumDiscont;
            let again = shopping.value - result;

            diskon.innerText = "Diskon : Rp." + parseInt(sumDiscont)
            buy.innerText = "Yang Harus Dibayar : Rp." + result
            returning.innerText = "Kembalian : Rp." + again

            console.log("Diskon : Rp." + parseInt(sumDiscont))
            console.log("Yang Harus Dibayar : Rp." + result)
            console.log("Kembalian : Rp." + again);
        } else {
            let result = shopping.value - maxDiskonMantap;
            let again = shopping.value - result;

            diskon.innerText = "Diskon : Rp." + parseInt(maxDiskonMantap)
            buy.innerText = "Yang Harus Dibayar : Rp." + result
            returning.innerText = "Kembalian : Rp." + again

            console.log("Diskon : Rp." + parseInt(maxDiskonMantap))
            console.log("Yang Harus Dibayar : Rp." + result)
            console.log("Kembalian : Rp." + again);


        }
    } else {
        let result = shopping.value - !diskonJoss
        let again = shopping.value - result;

        diskon.innerText = "Diskon : Rp." + 0
        buy.innerText = "Yang Harus Dibayar : Rp." + result
        returning.innerText = "Kembalian : Rp." + again

        console.log("Diskon : Rp." + 0)
        console.log("Yang Harus Dibayar : Rp." + result)
        console.log("Kembalian : Rp." + again);


    }

}