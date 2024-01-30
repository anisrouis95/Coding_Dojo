<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title>Omikuji Show</title>
</head>
<body>

<h2>Your Fortune</h2>

<p>Here's your Omikuji ${omikujiForm.name}!</p>
<p style="border: black 3px solid; width: 150px; background: cornflowerblue;">In 10 years, you will live in Nairobi with Bob Dylan as your roommate, selling origami for a living.

    The next time you see a ferret, you will have good luck.

    Also, you do not realize how happy you make others.

    The poster is blue with white text. It is unclear who created the poster or when it was created.

    I hope this helps!</p>

<a href="${pageContext.request.contextPath}/omikuji">Go back to Omikuji Form</a>

</body>
</html>
