jQuery(document).ready(function($) {
    $("#contact").submit(function() {
        var str = $(this).serialize();
        var formData = JSON.stringify($(this).serializeArray());
        console.log(str)
        $.ajax({
            type: "POST",
            url: "http://46.175.150.215:8000/contacts/",
            data: formData,
            success: function(msg) {
                if (msg == 'OK') {
                    result = '<script type="text/javascript">dataLayer.push({"event": "SendForm"});</script>';
                    $('#contact')[0].reset();
                    $('input[name="name"]').css({ 'border': 'none', 'border-bottom': '2px solid #000D08' });
                    $('input[name="phone"]').css({ 'border': 'none', 'border-bottom': '2px solid #000D08' });
                    $('.thanks-mask').addClass('open');
                    $('.thanks-body').addClass('open');
                    $('.sendFormOk').html(result);
                } else if (msg == 'name') {
                    $('input[name="name"]').css({ 'border': '1px solid red' });
                } else if (msg == 'phone') {
                    $('input[name="phone"]').css({ 'border': '1px solid red' });
                } else {
                    $('input[name="name"]').css({ 'border': '1px solid red' });
                    $('input[name="phone"]').css({ 'border': '1px solid red' });
                }

            }
        });
        return false;
    });
});



jQuery(document).ready(function($) {
    $("#contact2").submit(function() {
        var str = $(this).serialize();
        var formData = JSON.stringify($(this).serializeArray());
        $.ajax({
            type: "POST",
            url: "http://46.175.150.215:8000/contacts/",
            data: formData,
            success: function(data) {
                console.log(data);
                return data; 
              }
        });
        return false;
    });
});