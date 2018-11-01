$(function () {
  $('.validateRegForm').click(function (event) {
    var firstname =  document.getElementById('registration-firstname').value;
    if (firstname == "") {
        document.getElementById('registration-status').innerHTML = "<span style='color:red'> First name cannot be empty </span>";
        return false;
    }
    var lastname =  document.getElementById('registration-lastname').value;
    if (lastname == "") {
        document.getElementById('registration-status').innerHTML = "<span style='color:red'> Last name cannot be empty </span>";
        return false;
    }
    var affiliation =  document.getElementById('registration-affiliation').value;
    if (affiliation == "") {
        document.getElementById('registration-status').innerHTML = "<span style='color:red'> Affiliation cannot be empty </span>";
        return false;
    }
    var position =  document.getElementById('registration-position').value;
    if (position == "") {
        document.getElementById('registration-status').innerHTML = "<span style='color:red'> Position cannot be empty </span>";
        return "hello";
        // return false;
    }
    var email =  document.getElementById('registration-email').value;
    if (email == "") {
        document.getElementById('registration-status').innerHTML = "<span style='color:red'> Email cannot be empty </span>";
        return false;
    } else {
        var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if(!re.test(email)){
            document.getElementById('registration-status').innerHTML = "<span style='color:red'> Email format invalid </span>";
            return false;
        }
    }
    document.getElementById('registration-status').innerHTML = "Sending...";
    document.getElementById('registration-form').submit();
    //
    // if ((document.cform.name.value != "") && (filter.test(email.value)) && (document.cform.message.value != "")) {
    //     //hide the form
    //     //$('.contactForm').hide();
    //     //show the loading bar
    //     $('.loader').append($('.bar'));
    //     $('.bar').css({display:'block'});
    //     /*document.cform.name.value = '';
    //     document.cform.e-mail.value = '';
    //     document.cform.phone.value = '';
    //     document.cform.message.value = '';*/
    //     //send the ajax request
    //     $.post('mail.php',{name:$('#name').val(),
    //         email:$('#e-mail').val(),
    //         phone:$('#phone').val(),
    //         message:$('#message').val()},
    //         //return the data
    //         function(data){
    //           //hide the graphic
    //           $('.bar').css({display:'none'});
    //           $('.loader').append(data);
    //         });
    //         //waits 2000, then closes the form and fades out
    //         //setTimeout('$("#backgroundPopup").fadeOut("slow"); $("#contactForm").slideUp("slow")', 2000);
    //         //stay on the page
    //         return false;
    //     }





    // formData = {
    //     'registration-salut'     : $('input:radio[name=registration-salut]:checked').val(),
    //     'registration-title'     : $('input[name=registration-title]').val(),
    //     'registration-firstname'     : $('input[name=registration-firstname]').val(),
    //     'registration-lastname'     : $('input[name=registration-lastname]').val(),
    //     'registration-affiliation'     : $('input[name=registration-affiliation]').val(),
    //     'registration-position'     : $('input[name=registration-position]').val(),
    //     'registration-email'    : $('input[name=registration-email]').val(),
    //     'registration-comment'  : $('textarea[name=registration-comment]').val(),
    // };
    // $.ajax({
    //   url : "registration-mail.php",
    //   type: "POST",
    //   data : formData,
    //   success: function(data, textStatus, jqXHR)
    //   {
    //       $('#registration-status').text(data);
    //       if (data.code) //If mail was sent successfully, reset the form.
    //       $('#registration-form').closest('registration-form').find("input[type=text], textarea").val("");
    //   },
    //   error: function (jqXHR, textStatus, errorThrown)
    //   {
    //       $('#registration-status').text(jqXHR);
    //   }
    // });
  });
});
