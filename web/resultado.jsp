<%-- 
    Document   : resultado
    Created on : 20/09/2020, 16:06:43
    Author     : Victor
--%>

<%@page contentType="text/html" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
    <head>
        <title>Tarefa 01 - Calculadora (Victor Proença Batista de Carvalho)</title>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
	<link rel="stylesheet" href="assets/css/all.css" type="text/css"/>
	<link rel="stylesheet" href="assets/css/styles.css" type="text/css"/>
        <link rel="stylesheet" href="assets/css/bootstrap.css" type="text/css">
        <link rel="stylesheet" href="assets/css/bootstrap.css" type="text/css"/>
        <link rel="stylesheet" href="bootstrap/css/bootstrap.css" type="text/css">
        <link rel="stylesheet" href="bootstrap/css/bootstrap.css" type="text/css"/>


    </head>
    <body style="background-color: gray">
        <style>
            h5 {
                font-weight: 700;
                color: #ffffff;
            }
            FONT {
                font-weight: 300;
                color: #ffffff;
                font-size:19px;
            }
        </style>
        <nav class="navbar navbar-dark bg-dark navbar-expand-md fixed-top">
            <FONT>Tarefa 01: Calculadora online (Victor Proença Batista de Carvalho)</FONT>
        </nav>
        <header style="margin-top: 69px;"></header>
        <%
            double n1 = 0;
            double n2 = 0;
            double resultJSP = 0;
            
            String op = "";
            if(request.getParameter("num1")!=null)
                n1 = Double.parseDouble(request.getParameter("num1"));
            if(request.getParameter("num2")!=null)
                n2 = Double.parseDouble(request.getParameter("num2"));
            if(request.getParameter("opr")!=null)
                op = request.getParameter("opr");
            if(op.equals("+"))
                resultJSP=n1+n2;
            if(op.equals("-"))
                resultJSP=n1-n2;
            if(op.equals("x"))
                resultJSP=n1*n2;
            if(op.equals("/"))
                resultJSP=n1/n2;
        %>
        <div class="container">    
            <table border="2">
                <tr>
                    <td><h5>&nbsp; Resultado gerado no Servlet &nbsp;</h5></td>
                    <td><h5>&nbsp; Resultado gerado no JSP &nbsp;</h5></td>
                </tr>
                <tr>
                    <td><FONT>&nbsp; <%out.println(n1+" "+op+" "+n2+" = "+request.getAttribute("resultado"));%> &nbsp;</FONT></td>
                    <td><FONT>&nbsp; <%out.println(n1+" "+op+" "+n2+" = "+resultJSP);%> &nbsp;</FONT></td>
                </tr>
            </table>
            <h5>
                <%
                    Cookie[] cookies = request.getCookies();
                    for(Cookie cookie:cookies){
                        if(cookie.getName().equals("tarefa1")){
                            out.println("Contador de visitas: "+cookie.getValue());  
                        }
                    }
                %>
            </h5>
        </div>
    </body>
</html>
