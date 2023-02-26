let baglantilar = document.querySelectorAll("div#menu a")


baglantilar.forEach(eleman => {
    eleman.addEventListener('click', olay => {
        olay.preventDefault() //a veya form etiketlerinin davranışlarını durdurur

        //mevcut aktif bağlantı classını kaldıralım
        let aktifBaglanti = document.querySelector("a.aktif")
        aktifBaglanti.classList.remove("aktif")

        //tıklanan a etiketine aktif classı ekle
        let tiklananEleman = olay.currentTarget
        tiklananEleman.classList.add("aktif")

        let divno = tiklananEleman.dataset.divno //alınan veriler string tipindedir
        //mevcut aktif içerik classını kaldıralım
        let aktifDiv = document.querySelector("div.aktif")
        aktifDiv.classList.remove("aktif")

        /*
        // her içerik divine bir id verilmesi gerekir. <div id="icerik1" .....

        let aktiflestirilecekIcerik = document.querySelector("#icerik" + divno)
        aktiflestirilecekIcerik.classList.add("aktif")
        */

        let icerikDivleri = document.querySelectorAll(".icerik")
        icerikDivleri.forEach( (eleman,elemanSirasi) => {
            if( elemanSirasi + 1 === parseInt(divno)) { //div no 1 den başladığımız için 1 ekledik
                eleman.classList.add("aktif")
            }
        })

    })
})