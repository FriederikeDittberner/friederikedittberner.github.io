$(function () {
  $('.validateFundForm').click(function (event) {
        document.getElementById('funding-status').innerHTML = "Sending...";
    var firstname =  document.getElementById('funding-firstname').value;
    if (firstname == "") {
        document.getElementById('funding-status').innerHTML = "<span style='color:red'> First name cannot be empty </span>";
        return false;
    }
    var lastname =  document.getElementById('funding-lastname').value;
    if (lastname == "") {
        document.getElementById('funding-status').innerHTML = "<span style='color:red'> Last name cannot be empty </span>";
        return false;
    }
    var affiliation =  document.getElementById('funding-affiliation').value;
    if (affiliation == "") {
        document.getElementById('funding-status').innerHTML = "<span style='color:red'> Affiliation cannot be empty </span>";
        return false;
    }
    var position =  document.getElementById('funding-position').value;
    if (position == "") {
        document.getElementById('funding-status').innerHTML = "<span style='color:red'> Position cannot be empty </span>";
        return false;
    }
    var email =  document.getElementById('funding-email').value;
    if (email == "") {
        document.getElementById('funding-status').innerHTML = "<span style='color:red'> Email cannot be empty </span>";
        return false;
    } else {
        var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if(!re.test(email)){
            document.getElementById('funding-status').innerHTML = "<span style='color:red'> Email format invalid </span>";
            return false;
        }
    }
    var homepage =  document.getElementById('funding-homepage').value;
    if (homepage == "") {
        document.getElementById('funding-status').innerHTML = "<span style='color:red'> Homepage cannot be empty </span>";
        return false;
    }
    // var cv =  document.getElementById('funding-cv').value;
    // if (cv == "") {
    //     document.getElementById('funding-status').innerHTML = "<span style='color:red'> CV cannot be empty </span>";
    //     return false;
    // }
    document.getElementById('funding-status').innerHTML = "Sending...";
    document.getElementById('registration-form').setAttribute('action', 'https://formspree.io/' + 'gagt.funding2019' + '@' + 'gmail' + '.' + 'com');
    document.getElementById('funding-form').submit();
  });
});
