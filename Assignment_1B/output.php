<h1>With Ajax</h1>
<?php
$fname = $_POST['fname'];
$lname = $_POST['lname'];
$email = $_POST['email'];
$phone = $_POST['phone'];
$blood_type = $_POST['blood_type'];
$donation_history = $_POST['donation_history'];
$disease_history = $_POST['disease_history'];
$allergy_history = $_POST['allergy_history'];
$medication_history = $_POST['medication_history'];
echo "<div> Hi," . $fname . " " . $lname . "</div>";
echo "<div> Your details are: </div>";
echo "<div> Mobile Number:" . $phone . "</div>";
echo "<div> Mail id: " . $email . "</div>";
echo "<div> Blood Group: " . $blood_type . "</div>";
echo "<div> You have donated blood before: " . $donation_history . "</div>";
echo "<div> You have any diseases:" . $disease_history . "</div>";
echo "<div> You have any allergy:" . $allergy_history . "</div>";
echo "<div> You have any active medications:" . $medication_history . "</div>";
?>