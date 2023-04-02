let temat = document.querySelector(".subject");
let emailTest = "/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.";

if(document.querySelector(".typeSelect").value == "inny"){
    temat.innerHTML = `<br><input type="text" name="Temat">`
}

document.querySelector(".typeSelect").addEventListener("change", _=>{
    temat.innerHTML = "";
    if(document.querySelector(".typeSelect").value == "inny"){
        temat.innerHTML = `<br><input type="text" name="Temat">`
    }
})

document.querySelector(".Submit").addEventListener("click", _=>{
    if(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(document.querySelector('input[name="email"]').value) == false){
        alert("Wypełnij wszystkie pola!");
        return;
    }
    else if(document.querySelector(".opis").value.length <= 0){
        alert("Wypełnij wszystkie pola!");
        return;
    }
    else{
        alert("Przesłano!");
    }
})