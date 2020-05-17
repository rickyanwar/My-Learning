
function getMahasiswa(url, succes){
    let xhr = new XMLHttpRequest;   
    xhr.onreadystatechange = function(){
    
     if(xhr.readyState ===4){
        if(xhr.status === 200){
            succes(xhr.response)
        }else if(xhr.status === 404){
            error();
        }
     }
    }
    xhr.open('get',url);
    xhr.send();

}


getMahasiswa('get','data/mahasiswa.json', results => {
    console.log(results);
})