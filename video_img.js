window.onload = function(){
    var img = document.getElementById('img');// идентификатор картинки
    img.onmouseenter = function(){
        var firstSrc = this.src;
        var self = this;
        this.src = "ПутьКГифке";
        setTimeout(function(){ // после показа видео - вернуть как было
            self.src = firstSrc;
        }, 1000); // тут устанавливаешь длительность видео в мс
    }
    }