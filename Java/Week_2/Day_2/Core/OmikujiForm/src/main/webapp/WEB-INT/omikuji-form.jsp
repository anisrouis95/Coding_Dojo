<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title>Omikuji Form</title>
</head>
<body>

<h2>Omikuji Form</h2>

<form action="${pageContext.request.contextPath}/omikuji/processForm" method="post">
    <label for="name">Your Name:</label>
    <input type="text" id="name" name="name" required><br>

    <label for="wish">Your Wish:</label>
    <input type="text" id="wish" name="wish" required><br>

    <button type="submit">Send</button>
</form>

</body>
</html>
