function update(i) {
    var kitty = document.getElementById('kitty');
    var k_img = document.getElementById('k_img');

    var dog = document.getElementById('dog');
    var d_img = document.getElementById('d_img');

    switch (i) {
        case 0:
            kitty.style.width = "95%";
            k_img.style.visibility = "visible";

            dog.style.width = "5%";
            d_img.style.visibility = "hidden";
            break;

        case 1:
            kitty.style.width = "50%";
            k_img.style.visibility = "visible";

            dog.style.width = "50%";
            d_img.style.visibility = "visible";
            break;

        case 2:
            kitty.style.width = "5%";
            k_img.style.visibility = "hidden";

            dog.style.width = "95%";
            d_img.style.visibility = "visible";
            break;
    }

}