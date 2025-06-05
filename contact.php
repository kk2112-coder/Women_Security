<?php
// Database configuration
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "woman_security_system";

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Process form data when form is submitted
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Validate and sanitize input data
    $name = sanitizeInput($_POST['name']);
    $email = sanitizeInput($_POST['email']);
    $message = sanitizeInput($_POST['message']);
    
    // Validate email
    if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        http_response_code(400);
        echo "Invalid email format";
        exit;
    }
    
    // Prepare and bind
    $stmt = $conn->prepare("INSERT INTO contacts (name, email, message, created_at) VALUES (?, ?, ?, NOW())");
    $stmt->bind_param("sss", $name, $email, $message);
    
    // Execute the statement
    if ($stmt->execute()) {
        // Send success response
        http_response_code(200);
        echo "Thank you for your message! We will get back to you soon.";
    } else {
        // Send error response
        http_response_code(500);
        echo "Error: " . $stmt->error;
    }
    
    // Close statement
    $stmt->close();
}

// Close connection
$conn->close();

// Function to sanitize form inputs
function sanitizeInput($data) {
    $data = trim($data);
    $data = stripslashes($data);
    $data = htmlspecialchars($data);
    return $data;
}
?>