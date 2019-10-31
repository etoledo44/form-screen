$(function(){
    $("#form_contact").validate({
   rules : {
         nome:{
                required:true,
                minlength:3
         },
         assunto: {
             required:true

         },
         email:{
                required:true
         },
         mensagem:{
                required:true
         }                                 
   },
   messages:{
         nome:{
                required:"Por favor, informe seu nome",
                minlength:"O nome deve ter pelo menos 3 caracteres"
         },
         email:{

                required:"Não esqueça seu e-mail"
         }, 
         assunto:{
             required: "Você esqueceu o assunto"
         },
         mensagem:{
                required:"A mensagem não pode ficar em branco"
         }      
   }
})
})