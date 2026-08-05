<?php

$conn = new mysqli("localhost", "root", "", "transport");

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

$payment_type = "PAID";   // Since this is paid.html

$booking_date = date("Y-m-d");

$from_location = $_POST['from_location'];
$to_location = $_POST['to_location'];

$sender_name = $_POST['sender_name'];
$sender_contact = $_POST['sender_contact'];
$sender_gst = $_POST['sender_gst'];
$sender_address = $_POST['sender_address'];

$receiver_name = $_POST['receiver_name'];
$receiver_contact = $_POST['receiver_contact'];
$receiver_gst = $_POST['receiver_gst'];
$receiver_address = $_POST['receiver_address'];

$charges = $_POST['charges'];

$actual_wt = $_POST['actual_wt'];
$charged_wt = $_POST['charged_wt'];
$wt_rate = $_POST['wt_rate'];
$wt_amt = $_POST['wt_amt'];
$fix_amt = $_POST['fix_amt'];

$invoice = $_POST['invoice'];
$declared_val = $_POST['declared_val'];

$remarks = $_POST['remarks'];

$delivery_at = $_POST['delivery_at'];

$booked_by = $_POST['booked_by'];

$sql = "INSERT INTO book
(
payment_type,
booking_date,
from_location,
to_location,
sender_name,
sender_contact,
sender_gst,
sender_address,
receiver_name,
receiver_contact,
receiver_gst,
receiver_address,
charges,
actual_wt,
charged_wt,
wt_rate,
wt_amt,
fix_amt,
invoice,
declared_val,
remarks,
delivery_at,
booked_by
)
VALUES
(
'$payment_type',
'$booking_date',
'$from_location',
'$to_location',
'$sender_name',
'$sender_contact',
'$sender_gst',
'$sender_address',
'$receiver_name',
'$receiver_contact',
'$receiver_gst',
'$receiver_address',
'$charges',
'$actual_wt',
'$charged_wt',
'$wt_rate',
'$wt_amt',
'$fix_amt',
'$invoice',
'$declared_val',
'$remarks',
'$delivery_at',
'$booked_by'
)";

if ($conn->query($sql)) {
    echo "Booking Saved Successfully.";
} else {
    echo "Error : " . $conn->error;
}

$conn->close();

?>