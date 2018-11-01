$(function () {
      $('.SendFundEmail').click(function (event) {
        var email = 'gagt2019.funding@gmail.com';
        var subject = 'Funding application for GAGT19';
        var emailBody = 'Dear organizers,%0d%0a%0d%0a I would like to apply for funding for the conference "Geometric Analysis meets Geometric Topology" in Heidelberg, February 25-28, 2019. %0d%0a%0d%0a Salutation: Ms. / Mrs. / Mr. %0d%0a First name: %0d%0a Last name: %0d%0a Affiliation: %0d%0a Position: Graduate student /post doc %0d%0a Email: %0d%0a Homepage: %0d%0a Interests in conference: %0d%0a%0d%0a Please find the CV attached. %0d%0a%0d%0a With best regards,';
        document.location = "mailto:"+email+"?subject="+subject+"&body="+emailBody;
      });
    });
