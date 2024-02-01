<%--
  Created by IntelliJ IDEA.
  User: Anisr
  Date: 31/01/2024
  Time: 15:32
  To change this template use File | Settings | File Templates.
--%>
<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib uri="http://www.springframework.org/tags/form" prefix="form" %>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<html>
<head>
    <title>Ninja Gold Game</title>
</head>
<body>
<h2>Your Gold : ${gold}</h2>
<form>
    <fieldset>
        <h3>Farm</h3>
        <p>(earns 10-20 gold)</p>
        <input type="hidden" name="action" value="farm">
        <button type="submit">Find Gold!</button>
    </fieldset>
</form>
<form>
    <fieldset>
        <h3>Cave</h3>
        <p>(earns 5-10 gold)</p>
        <input type="hidden" name="action" value="cave">
        <button type="submit">Find Gold!</button>
    </fieldset>
</form>
<form>
    <fieldset>
        <h3>House</h3>
        <p>(earns 2-5 gold)</p>
        <input type="hidden" name="action" value="house">
        <button type="submit">Find Gold!</button>
    </fieldset>
</form>
<form>
    <fieldset>
        <h3>Quest</h3>
        <p>(earns 0-50 gold)</p>
        <input type="hidden" name="action" value="quest">
        <button type="submit">Find Gold!</button>
    </fieldset>
</form>
<h2>Activities:</h2>
<fieldset>
    <ul>
        <ul>
            <c:forEach var="entry" items="${log}">
                <li>${entry}</li>
            </c:forEach>
        </ul>
    </ul>
</fieldset>
</body>
</html>
