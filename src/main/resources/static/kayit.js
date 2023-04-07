function kayit(){
    const musteri={
        isim : $("#isim").val(),
        adres : $("#adres").val()
    };
    $.get("/kayit",musteri,function (){

    });
    $("#isim").val("");
    $("#adres").val("");
    window.location.href="index.html";
}