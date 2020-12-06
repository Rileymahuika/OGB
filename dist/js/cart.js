function cartToggle() {
    if(document.getElementById('cart')) {
        if (document.getElementById('cart').classList.contains("cart--closed")) {
            document.getElementById('cart').classList.remove('cart--closed');
        }else {
            document.getElementById('cart').classList.add('cart--closed');
        }
    }
}