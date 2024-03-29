<%--
  Created by IntelliJ IDEA.
  User: Anisr
  Date: 30/01/2024
  Time: 14:30
  To change this template use File | Settings | File Templates.
--%>
<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<html>
<head>
    <title>Receipt</title>
</head>
<body>
<h1>Receipt</h1>
<table>
    <tr>
        <th>Name:</th>
        <td><c:out value="${name}"/></td>
    </tr>
    <tr>
        <th>Item Name:</th>
        <td><c:out value="${itemName}"/></td>
    </tr>
    <tr>
        <th>Price:</th>
        <td><c:out value="${price}"/></td>
    </tr>
    <tr>
        <th>Description:</th>
        <td><c:out value="${description}"/></td>
    </tr>
    <tr>
        <th>Vendor:</th>
        <td><c:out value="${vendor}"/></td>
    </tr>
</table>
</body>
</html>
