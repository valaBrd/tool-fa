function add(){
    let box = document.getElementById('demo');
    let items = document.getElementById('lists');
    
    if(box.value !== ""){
        let makeli = document.createElement('LI');
        makeli.appendChild(document.createTextNode(box.value));
        
        items.appendChild(makeli);
        
        box.value ="";
         makeli.addEventListener('click',function (){
            this.parentNode.removeChild(this); 
         });
    }
    else{
                alert('please write something in the box');
    }
