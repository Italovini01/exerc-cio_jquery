$(document).ready(function () {

    $('#form-tarefa').submit(function (event) {
        event.preventDefault();

        var novaTarefa = $('#input-tarefa').val();

        if (novaTarefa !== '') {

            $('#lista-tarefas').append('<li>' + novaTarefa + '</li>');


            $('#input-tarefa').val('');
        }
    });

    $(document).on('click', 'li', function () {
        $(this).toggleClass('feito');
    });
});
