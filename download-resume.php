<?php
$file = "resume/Resume.pdf";

if (file_exists($file)) {
    header("Content-Type: application/pdf");
    header("Content-Disposition: attachment; filename=Resume.pdf");
    readfile($file);
    exit;
} else {
    echo "Resume not found!";
}
?>