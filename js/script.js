$(document).ready(function () {
    $("form").submit(function () {
        // Получение ID формы
        var formID = $(this).attr('id');
        // Добавление решётки к имени ID
        var formNm = $('#' + formID);
        $.ajax({
            type: "POST",
            url: 'mail.php',
            data: formNm.serialize(),
            success: function (data) {
                // Вывод текста результата отправки
                $(formNm).html(data); 
            },
            error: function (jqXHR, text, error) {
                // Вывод текста ошибки отправки
                $(formNm).html(error);         
            }
        });
        return false;
    });
});


$(document).ready(function(){
02
    $("#top").on("click","a", function (event) {
03
        //отменяем стандартную обработку нажатия по ссылке
04
        event.preventDefault();
05
 
06
        //забираем идентификатор бока с атрибута href
07
        var id  = $(this).attr('top'),
08
 
09
        //узнаем высоту от начала страницы до блока на который ссылается якорь
10
            top = $(id).offset(10000).top;
11
         
12
        //анимируем переход на расстояние - top за 1500 мс
13
        $('body,html').animate({scrollTop: top}, 1500);
14
    });
15
});
