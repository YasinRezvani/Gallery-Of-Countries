let items = document.querySelector('.items');
let image = document.querySelectorAll('.image');


    window.onload = () =>{
        items.onclick= (selected) =>{
            if (selected.target.classList.contains('item')){
                items.querySelector('.all').classList.remove('all');
                selected.target.classList.add('all');
                let filtername = selected.target.getAttribute("data-name");
                image.forEach((img) => {
                    let filterimage = img.getAttribute("data-name");
                    

                    if((filtername == filterimage) || filtername == "all"){
                    img.classList.remove("hide");
                    img.classList.add("show");
                }
                else{
                    img.classList.add("hide");
                    img.classList.remove("show");                   
                }
                

                });
                
                
            }
        }
    }
