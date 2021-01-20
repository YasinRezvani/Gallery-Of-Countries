let items = document.querySelector('.items');
let image = document.querySelectorAll('.image');


    window.onload = () =>{
        items.onclick= (selected) =>{
            if (selected.target.classList.contains('item')){
                console.log(items.querySelector('.active'));
            }

            else{
                console.log('nooo')
            }
        }
    }
