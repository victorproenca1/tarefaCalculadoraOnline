/// <reference path="../../typings/globals/jquery/index.d.ts" />

$(function () {
   $('[data-toggle="tooltip"]').tooltip({ boundary: 'window' });
   $('[data-toggle="popover"]').popover();

   // $("#nome").addEventListener("blur", function() { nomeValidoFunction() }, false)
   $("#id-form").submit(function(e) { validaTudoFunction(e) })
});
//

function like(div2) {

   let like = $("#likes").data("likes");
   let like2 = $("#likes2").data("likes2");
   let likeB = $("#likes2");
   let deslike = $("#deslikes").data("deslikes");
   let deslike2 = $("#deslikes2").data("deslikes2");
   let deslikeB = $("#deslikes2");

   if(like2 == 0){
      if (deslike2 == 1){
         $("#deslikes2").data("deslikes2", 0);
         deslike -= 1;
         $("#deslikes").data("deslikes", deslike);
         $("#deslikes").text(deslike);
         deslikeB.addClass("far")
         deslikeB.removeClass("fas")
      }
      $("#likes2").data("likes2", 1);
      like += 1;
      $("#likes").data("likes", like);
      $("#likes").text(like);
      likeB.addClass("fas")
      likeB.removeClass("far")
   }else{
      $("#likes2").data("likes2", 0);
      like -= 1;
      $("#likes").data("likes", like);
      $("#likes").text(like);
      likeB.addClass("far")
      likeB.removeClass("fas")

   }

   
  


}

function deslike(div2) {


   let like = $("#likes").data("likes"); $(this).attr('id');
   let like2 = $("#likes2").data("likes2");
   let likeB = $("#likes2");
   let deslike2 = $("#deslikes2").data("deslikes2");
   let deslike = $("#deslikes").data("deslikes");
   let deslikeB = $("#deslikes2");


   if (deslike2 == 0){
      if (like2 ==1 ){
         $("#likes2").data("likes2", 0);
         like -= 1;
         $("#likes").data("likes", like);
         $("#likes").text(like);
         likeB.addClass("far")
         likeB.removeClass("fas")
      }
      $("#deslikes2").data("deslikes2", 1);
      deslike += 1;
      $("#deslikes").data("deslikes", deslike);
      $("#deslikes").text(deslike);
      deslikeB.addClass("fas")
      deslikeB.removeClass("far")
   }else{
      $("#deslikes2").data("deslikes2", 0);
      deslike -= 1;
      $("#deslikes").data("deslikes", deslike);
      $("#deslikes").text(deslike);
      deslikeB.addClass("far")
      deslikeB.removeClass("fas")
   }


}


$('.dislike1').click(function() {
   $(this).removeClass('far fa-thumbs-down');
   $(this).addClass('fas fa-thumbs-down');
});



$(document).ready(function() {              
   $('i.fa-thumbs-up, i.fa-thumbs-down').click(function(){    
       var $this = $(this),
       c = $this.data('count');    
       if (!c) c = 0;
       c++;
       $this.data('count',c);
       $('#'+this.id+'-bs3').html(c);
   });                                            
}); 

function validaTudoFunction(e) {
   e.preventDefault()

   let usuario_valido = usuarioValidoFunction()
   let sexo_valido = sexoValidoFunction()
   let senha_valido = senhaValidoFunction()
   let cartao_valido = cartaoValidoFunction()
   let endereco_valido = enderecoValidoFunction()
   let regiao_valido = regiaoValidoFunction()
   let condicao_valida = condicaoValidaFunction()

   if (usuario_valido && sexo_valido && regiao_valido && condicao_valida && senha_valido && cartao_valido && endereco_valido) {
      alert("Operação efetuada com sucesso")
   }
}

function condicaoValidaFunction() {
   let condicao1 = $("#condicao1")

   let feedback_condicao = $("#feedback-condicao")

   let botoes = $("input.condicao:checked")
   if (botoes.length === 0) {
      condicao1.addClass("is-invalid")
      condicao1.removeClass("is-valid")
      feedback_condicao.addClass("d-block")
      return false
   }
   else {
      condicao1.addClass("is-valid")
      condicao1.removeClass("is-invalid")
      feedback_condicao.removeClass("d-block")
      return true
   }
}

function regiaoValidoFunction() {
   let regiao = $("#regiao")

   if (regiao.val() === '') {
      regiao.addClass("is-invalid")
      regiao.removeClass("is-valid")
      return false
   }
   else {
      regiao.removeClass("is-invalid")
      regiao.addClass("is-valid")
      return true
   }
}

function sexoValidoFunction() {
   let sexo_masc = $("#sexo-masc")
   let sexo_fem = $("#sexo-fem")

   let sexo_feedback = $("#sexo-feedback")

   let botoes = $("input[name='sexo']:checked")
   if (botoes.length === 0) {
      sexo_masc.addClass("is-invalid")
      sexo_masc.removeClass("is-valid")
      sexo_fem.addClass("is-invalid")
      sexo_fem.removeClass("is-valid")
      sexo_feedback.addClass("d-block")
      return false
   }
   else {
      sexo_masc.removeClass("is-invalid")
      sexo_masc.addClass("is-valid")
      sexo_fem.removeClass("is-invalid")
      sexo_fem.addClass("is-valid")
      sexo_feedback.removeClass("d-block")
      return true
   }
}

function usuarioValidoFunction() {

   let usuario = $("#usuario")

   if (usuario.val() === '') {
      usuario.addClass("is-invalid")
      usuario.removeClass("is-valid")
      return false
   }
   else {
      usuario.removeClass("is-invalid")
      usuario.addClass("is-valid")
      return true
   }
}

function senhaValidoFunction() {

   let senha = $("#senha")

   if (senha.val() === '') {
      senha.addClass("is-invalid")
      senha.removeClass("is-valid")
      return false
   }
   else {
      senha.removeClass("is-invalid")
      senha.addClass("is-valid")
      return true
   }
}

function cartaoValidoFunction() {

   let cartao = $("#cartao")

   if (cartao.val() === '') {
      cartao.addClass("is-invalid")
      cartao.removeClass("is-valid")
      return false
   }
   else {
      cartao.removeClass("is-invalid")
      cartao.addClass("is-valid")
      return true
   }
}

function enderecoValidoFunction() {

   let endereco = $("#endereco")

   if (endereco.val() === '') {
      endereco.addClass("is-invalid")
      endereco.removeClass("is-valid")
      return false
   }
   else {
      endereco.removeClass("is-invalid")
      endereco.addClass("is-valid")
      return true
   }
}



