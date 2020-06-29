function validar(){
    const name = document.getElementById('nomeid').value;
 

    if(!name){
        alert('O campo está vazio!');
    } else{
        sessionStorage.setItem('nomeid', name);
        location.replace("sala1.html");
  
    }
};