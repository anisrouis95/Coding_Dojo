<%--
  Created by IntelliJ IDEA.
  User: Anisr
  Date: 30/01/2024
  Time: 15:17
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<html>
<head>
    <title>Fruit Store</title>

    <!-- Link Bootstrap CSS via CDN -->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-T3c6CoIi6uLrA9TneNEoa7RxnatzjcDSCmG1MXxSR1GAsXEV/Dwwykc2MPK8M2HN" crossorigin="anonymous">

    <style>
        /*body {*/
        /*    background-color: #ff98f0; !* Set the background color of the entire body to pink *!*/
        /*    padding: 20px; !* Added padding for better spacing *!*/
        /*}*/

        /*.container {*/
        /*    background-color: #ff98f0; !* Set the background color of the container to pink *!*/
        /*    padding: 20px; !* Added padding for better spacing *!*/
        /*    border-radius: 10px; !* Optional: Add border-radius for rounded corners *!*/
        /*}*/

        .fruit {
            margin-bottom: 10px;
        }

        #head {
            color: #ff98f0; /* Set the text color of the heading to white */
        }

        .table {
            background-color: #ff98f0;
            border: 4px solid #ff98f0/* Set the background color of the table to pink */
        }

    </style>
</head>
<body class="container">
<h1 id="head">Fruit Store</h1>
<c:forEach var="fruit" items="${fruits}">
    <div class="fruit">
        <table class="table table-hover even-row-color">
            <thead>
            <tr>
                <th>Name</th>
                <th>Price</th>
            </tr>
            </thead>
            <tbody>
            <tr>
                <td>${fruit.name}</td>
                <td>$${fruit.price}</td>
            </tr>
            </tbody>
        </table>
    </div>
</c:forEach>
</body>
</html>
