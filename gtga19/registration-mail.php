<?php
if(isset( $_POST['salut']))
  $salut = $_POST['salut'];
if(isset( $_POST['title']))
  $title = $_POST['title'];
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
if(isset( $_POST['comment']))
  $comment = $_POST['comment'];

header('Content-Type: application/json');

if ($salut === ''){
  print json_encode(array('message' => 'Salutation cannot be empty', 'code' => 0));
  exit();
}
if ($title === ''){
  print json_encode(array('message' => 'Title cannot be empty', 'code' => 0));
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

$content="Salutation: $salut
\nTitle: $title
\nFirstname: $firstname
\nLastname: $lastname
\nAffiliation: $affiliation
\nPosition: $position
\nEmail: $email
\nComment: $comment";
$recipient = "email@uni.de";
$subject = "Registration $firstname $lastname";
$mailheader = "From: $email \r\n";
mail($recipient, $subject, $content, $mailheader) or die("Error!");
print json_encode(array('message' => 'Registration successful!', 'code' => 1));
exit();
?>
