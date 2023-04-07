$(function (){
    hepsiniGetir();
});

function hepsiniGetir(){
    $.get("/hepsiniGetir", function (data){
        bilgiDuzenle(data);
    });
}

function bilgiDuzenle(musteriler){
    let yaz="<table class='table table-striped'>"+
        "<tr>"+
        "<th>Isim</th><th>Adres</th>"+
        "</tr>";
    for(const musteri of musteriler){
        yaz+="<tr><td>"+musteri.isim+"</td><td>"+musteri.adres+"</td></tr>"
    }
    $("#musteriler").html(yaz);
}

function hepsiniSil(){
    const ok=confirm("Hepsini silmek istediginize emin misiniz?");
    if(ok){
        $.get("/hepsiniSil",function (){
            hepsiniGetir();
        });
    }
}