/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package folderCalculator;

import java.io.IOException;
import java.io.PrintWriter;
import javax.servlet.RequestDispatcher;
import javax.servlet.ServletException;
import javax.servlet.http.Cookie;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

/**
 *
 * @author Victor
 */
public class calculator extends HttpServlet {
    protected void processRequest(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        response.setContentType("text/html;charset=UTF-8");
        try (PrintWriter out = response.getWriter()) {
            double n1= Double.parseDouble(request.getParameter("num1"));
            double n2= Double.parseDouble(request.getParameter("num2"));
            String opr = request.getParameter("opr");
            double resultado = 0;
            Cookie[] cookies = request.getCookies();
            int count = 0;
            String valorCount = "";
            for(Cookie cookie:cookies){
                if(cookie.getName().equals("tarefa1")){
                    count = Integer.parseInt(cookie.getValue());
                    count++;
                    valorCount= Integer.toString(count);
                    cookie.setValue(valorCount);  
                    response.addCookie(cookie);
                }
            }
            if (count==0){
                        Cookie cookie = new Cookie("tarefa1", "1");
                        cookie.setMaxAge(24*60*60*10);
                        response.addCookie(cookie);
            }
            if(opr.equals("+"))
                resultado=n1+n2;
            if(opr.equals("-"))
                resultado=n1-n2;
            if(opr.equals("x"))
                resultado=n1*n2;
            if(opr.equals("/"))
                resultado=n1/n2;
            
            //out.println("<h1>count");
            //out.println("<BLOCKQUOTE> "+n1+" "+opr+" "+n2+" = "+result);
            //out.println("</body></html>");
            request.setAttribute("resultado", resultado);
            RequestDispatcher rd = request.getRequestDispatcher("resultado.jsp");
            rd.forward(request, response);
        }
    }
    

    // <editor-fold defaultstate="collapsed" desc="HttpServlet methods. Click on the + sign on the left to edit the code.">
    /**
     * Handles the HTTP <code>GET</code> method.
     *
     * @param request servlet request
     * @param response servlet response
     * @throws ServletException if a servlet-specific error occurs
     * @throws IOException if an I/O error occurs
     */
    @Override
    protected void doGet(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        processRequest(request, response);
    }

    /**
     * Handles the HTTP <code>POST</code> method.
     *
     * @param request servlet request
     * @param response servlet response
     * @throws ServletException if a servlet-specific error occurs
     * @throws IOException if an I/O error occurs
     */
    @Override
    protected void doPost(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        processRequest(request, response);
    }

    /**
     * Returns a short description of the servlet.
     *
     * @return a String containing servlet description
     */
    @Override
    public String getServletInfo() {
        return "Short description";
    }// </editor-fold>

}
