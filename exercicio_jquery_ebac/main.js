$(document).ready(function(){
    
    $('#adionarTarefa').on('click', function(){
        var tarefaInput = $('#nomeTarefa').val();
        valorTarefa(tarefaInput)
    })

    function valorTarefa(text){
        $('#tarefalist').append('<li><span></span>' + text + '</li>');
    }

    $(document).on('click','li', function(){
        $(this).toggleClass('feito');
    });

})
