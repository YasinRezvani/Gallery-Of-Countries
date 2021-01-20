let items = document.querySelector('.items');
let image = document.querySelectorAll('.image');


    window.onload = () =>{
        items.onclick= (selected) =>{
            if (selected.target.classList.contains('item')){
                items.querySelector('.all').classList.remove('all');
                selected.target.classList.add('all');
            }
        }
    }

