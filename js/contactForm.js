$(function() {
    var name = $("#name");
    var mail = $("#email");
    var subject = $("#subject");
    var content = $("#message");
    var name_form = name.parent().parent();
    var mail_form = mail.parent().parent();
    var content_form = content.parent().parent();

    $("#contact").bind("click", function(event) {
        $(".contact-form").toggle(500);
        event.preventDefault();
    });

    function cleanForm() {
        name_form.removeClass("has-success");
        name_form.removeClass("has-error");
        mail_form.removeClass("has-success");
        mail_form.removeClass("has-error");
        content_form.removeClass("has-success");
        content_form.removeClass("has-error");
        name.val("");
        mail.val("");
        subject.val("");
        content.val("");
    }

    $(".hide-contact").bind("click", function(event) {
        $(".contact-form").toggle(500);
        cleanForm();
        event.preventDefault();
    });

    $("#contact-submit").bind("click", function(e) {

        var send = [false, false, false];

        if (name.val().trim().length == 0 || name.val().trim().length < 3 || name.val().trim().length > 50) {
            name_form.addClass("has-error");
            name_form.removeClass("has-success");
            send[0] = false;
        } else {
            name_form.addClass("has-success");
            name_form.removeClass("has-error");
            send[0] = true;
        }
        if (mail.val().trim().length < 5) {
            mail_form.addClass("has-error");
            mail_form.removeClass("has-success");
            send[1] = false;
        } else {
            mail_form.addClass("has-success");
            mail_form.removeClass("has-error")
            send[1] = true;
        }
        if (content.val().trim().length < 70) {
            content_form.addClass("has-error");
            content_form.removeClass("has-success");
            send[2] = false;
        } else {
            content_form.addClass("has-success");
            content_form.removeClass("has-error");
            send[2] = true;
        }
        var equals = send.every(function(value, index, array) {
            return value === array[0];
        });

        if (equals && send[0]) {
            $(".contact-form").toggle(700);
            cleanForm();
        }
        e.preventDefault();
    });
});
