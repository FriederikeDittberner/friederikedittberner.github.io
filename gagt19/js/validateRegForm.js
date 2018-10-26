<script>
function validateRegForm() {
    var firstname =  document.getElementById('firstname').value;
    if (firstname == "") {
        document.getElementById('status').innerHTML = "First name cannot be empty";
        return false;
    }
    var lastname =  document.getElementById('lastname').value;
    if (lastname == "") {
        document.getElementById('status').innerHTML = "Last name cannot be empty";
        return false;
    }
    var affiliation =  document.getElementById('affiliation').value;
    if (affiliation == "") {
        document.getElementById('status').innerHTML = "Affiliation cannot be empty";
        return false;
    }
    var position =  document.getElementById('position').value;
    if (position == "") {
        document.getElementById('status').innerHTML = "Position cannot be empty";
        return false;
    }
    var email =  document.getElementById('email').value;
    if (email == "") {
        document.getElementById('status').innerHTML = "Email cannot be empty";
        return false;
    } else {
        var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if(!re.test(email)){
            document.getElementById('status').innerHTML = "Email format invalid";
            return false;
        }
    }
    document.getElementById('status').innerHTML = "Sending...";
    // document.getElementById('contact-form').submit();
    formData = {
        'salut'     : $('input:radio[name=salut]:checked').val(),
        'title'     : $('input[name=title]').val(),
        'firstname'     : $('input[name=firstname]').val(),
        'lastname'     : $('input[name=lastname]').val(),
        'affiliation'     : $('input[name=affiliation]').val(),
        'position'     : $('input[name=position]').val(),
        'email'    : $('input[name=email]').val(),
        'comment'  : $('textarea[name=comment]').val(),
    };

    $.ajax({
      url : "registration-mail.php",
      type: "POST",
      data : formData,
      success: function(data, textStatus, jqXHR)
      {
          $('#status').text(data);
          if (data.code) //If mail was sent successfully, reset the form.
          $('#contact-form').closest('form').find("input[type=text], textarea").val("");
      },
      error: function (jqXHR, textStatus, errorThrown)
      {
          $('#status').text(jqXHR);
      }
    });
}
</script>
