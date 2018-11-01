$(function () {
      $('.SendRegEmail').click(function (event) {
        var email = 'gagt2019@gmail.com';
        var subject = 'Registration GAGT19';
        var emailBody = 'Dear organizers,%0d%0a%0d%0a I would like to register for the conference "Geometric Analysis meets Geometric Topology" in Heidelberg, February 25-28, 2019. %0d%0a%0d%0a Salutation: Ms. / Mrs. / Mr. %0d%0a Title: %0d%0a First name: %0d%0a Last name: %0d%0a Affiliation: %0d%0a Position: %0d%0a Email: %0d%0a%0d%0a With best regards,';
        document.location = "mailto:"+email+"?subject="+subject+"&body="+emailBody;
      });
    });
