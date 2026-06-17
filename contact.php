<?php
include 'includes/db.php';

$message = "";

if(isset($_POST['submit'])){

    $name=mysqli_real_escape_string($conn,$_POST['name']);
    $email=mysqli_real_escape_string($conn,$_POST['email']);
    $subject=mysqli_real_escape_string($conn,$_POST['subject']);
    $msg=mysqli_real_escape_string($conn,$_POST['message']);

    $sql="INSERT INTO contacts(name,email,subject,message)
    VALUES('$name','$email','$subject','$msg')";

    if(mysqli_query($conn,$sql)){
        $message="Message Sent Successfully!";
    }else{
        $message="Failed to Send Message!";
    }

}
?>

<?php include 'includes/header.php'; ?>
<?php include 'includes/navbar.php'; ?>

<section class="contact-page">

<h1 class="section-title">Contact Me</h1>

<div class="contact-container">

<div class="contact-info">

<h2>Let's Connect</h2>

<p><i class="fas fa-user"></i> SURYA MANOHAR REDDY GOLUGURI</p>

<p><i class="fas fa-envelope"></i> suryareddy5377@gmail.com</p>

<p><i class="fas fa-phone"></i> +91 9796143143</p>

<p><i class="fas fa-map-marker-alt"></i> Parvathipuram, Andhra Pradesh</p>

<div class="social-links">

<a href="https://github.com/SuryaReddy-5377" target="_blank">
<i class="fab fa-github"></i>
</a>

<a href="https://www.linkedin.com/in/surya-manohar-reddy-goluguri-110299366" target="_blank">
<i class="fab fa-linkedin"></i>
</a>

</div>

</div>

<div class="contact-form">
    Response within 24 hours

<?php
if($message!=""){
echo "<div class='success'>$message</div>";
}
?>

<form method="POST">

<input type="text" name="name" placeholder="Your Name" required>

<input type="email" name="email" placeholder="Your Email" required>

<input type="text" name="subject" placeholder="Subject" required>

<textarea name="message" rows="6" placeholder="Your Message" required></textarea>

<button type="submit" name="submit" class="btn">
Send Message
</button>

</form>

</div>

</div>

</section>

<?php include 'includes/footer.php'; ?>