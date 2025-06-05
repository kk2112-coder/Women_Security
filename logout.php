<?php
session_start();
session_unset();
session_destroy();
header("Location: Women_security.html");
exit();
?>