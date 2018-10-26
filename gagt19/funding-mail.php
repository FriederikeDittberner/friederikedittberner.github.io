<?php
if(isset( $_POST['salut']))
  $salut = $_POST['salut'];
if(isset( $_POST['firstname']))
  $firstname = $_POST['firstname'];
if(isset( $_POST['lastname']))
  $lastname = $_POST['lastname'];
if(isset( $_POST['affiliation']))
  $affiliation = $_POST['affiliation'];
if(isset( $_POST['position']))
  $position = $_POST['position'];
if(isset( $_POST['email']))
  $email = $_POST['email'];
if(isset( $_POST['homepage']))
  $homepage = $_POST['homepage'];
if(isset( $_POST['interests']))
  $interests = $_POST['interests'];
if(isset( $_POST['cv']))
  $cv = $_POST['cv'];
if(isset( $_POST['comment']))
  $comment = $_POST['comment'];

header('Content-Type: application/json');

if ($salut === ''){
  print json_encode(array('message' => 'Salutation cannot be empty', 'code' => 0));
  exit();
}
if ($firstname === ''){
  print json_encode(array('message' => 'First name cannot be empty', 'code' => 0));
  exit();
}
if ($lastname === ''){
  print json_encode(array('message' => 'Last name cannot be empty', 'code' => 0));
  exit();
}
if ($affiliation === ''){
  print json_encode(array('message' => 'Affiliation cannot be empty', 'code' => 0));
  exit();
}
if ($position === ''){
  print json_encode(array('message' => 'Position cannot be empty', 'code' => 0));
  exit();
}
if ($email === ''){
  print json_encode(array('message' => 'Email cannot be empty', 'code' => 0));
  exit();
} else {
  if (!filter_var($email, FILTER_VALIDATE_EMAIL)){
  print json_encode(array('message' => 'Email format invalid.', 'code' => 0));
  exit();
  }
}
if ($homepage === ''){
  print json_encode(array('message' => 'Homepage cannot be empty', 'code' => 0));
  exit();
}
if ($interests === ''){
  print json_encode(array('message' => 'Interests cannot be empty', 'code' => 0));
  exit();
}
if ($cv === ''){
  print json_encode(array('message' => 'CV cannot be empty', 'code' => 0));
  exit();
}

$content="Salutation: $salut
\nFirstname: $firstname
\nLastname: $lastname
\nAffiliation: $affiliation
\nPosition: $position
\nEmail: $email
\nHomepage: $homepage
\nInterests: $interests
\nCV: $cv
\nComment: $comment";
$recipient = "email@uni.de";
$subject = "Registration $firstname $lastname";
$mailheader = "From: $email \r\n";
mail($recipient, $subject, $content, $mailheader) or die("Error!");
print json_encode(array('message' => 'Funding application successful!', 'code' => 1));
exit();
?>
