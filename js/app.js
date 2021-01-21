let items = document.querySelector('.items');
let image = document.querySelectorAll('.image');

window.onload = () => {
    items.onclick = (selected) => {
        if (selected.target.classList.contains('item')) {
            items.querySelector('.all').classList.remove('all');
            selected.target.classList.add('all');

            let filtername = selected.target.getAttribute("data-name");

            image.forEach((img) => {
                let filterimage = img.getAttribute("data-name");

                if ((filtername == filterimage) || filtername == "all") {
                    img.classList.remove("hide");
                    img.classList.add("show");
                } else {
                    img.classList.add("hide");
                    img.classList.remove("show");
                }
            });
        }
    }

    for (let i = 0; i < image.length; i++) {
        image[i].setAttribute('onclick', 'pre(this)');
    }
}

let previewbox = document.querySelector('.preview-box');
let icon = document.querySelector(".icon");
let country = document.querySelector(".title p");
let previewimg = previewbox.querySelector("img");
let shadow = document.querySelector(".shadow")

function pre(element) {
    document.querySelector('body').style.overflow = "hidden";
    selectedimg = element.querySelector("img").src;
    selectedcountry = element.getAttribute("data-name-1");
    country.textContent = selectedcountry;
    previewimg.src = selectedimg;
    shadow.classList.add("show");
    previewbox.classList.add("show");
    icon.onclick = () => {
        previewbox.classList.remove("show");
        shadow.classList.remove("show");
       
    }
}