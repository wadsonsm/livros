


//$(document).ready(function () {
    // function onAdd() {
    //     var $ul, li, $li, $label, $div, livro;
    //     livro = $('.js-novo-livro').val();

    //     if(livro ==='')
    //     {
    //         return;
    //     }

    //     $ul = $('ul');
    //     $li = $('<li>').appendTo($ul);
    //     $div = $('<div>')
    //             .addClass('checkbox')
    //             .appendTo($li);
        
    //     $label = $('<label>').appendTo($div);
    //     $('<input>')
    //                 .attr('type','checkbox')
    //                 .addClass('js-livro')
    //                 .attr('name','list')
    //                 .click(toggleRemovido)
    //                 .appendTo($label);

    //     $label.append(livro);
    //     $('.js-novo-livro').val('');
    // }

    // /**
    //  * evento de click do checkbox
    //  */
    // function toggleRemovido(ev)
    // {
    //     var $el;
    //     $el = $(ev.currentTarget);
    //     $el.closest('li').toggleClass('removido');
    // }

//     function onAdd(){
//     var $ul, li, $li, $label, $div, livro, autor;
//     livro = $('.js-novo-livro').val();
//     autor = $('.js-novo-autor').val();

//     console.log(livro + ' -- ' + autor);
//     //valida se livro está vazio
//     if(livro ===''){
//         return;
//     }

//     $ul = $('ul');
//     $li = $('<li>').appendTo($ul);
//     $div = $('<div>')
//             .addClass('checkbox')
//             .appendTo($li);

//     $label = $('<label>').appendTo($div);
//     $('<input>')
//         .attr('type', 'checkbox')
//         .addClass('js-livro')
//         .attr('name','list')
//         .click(toggleRemovido)
//         .appendTo($label);

//     $('<big>')
//             .appendTo($label)
//             .append(livro);

//     $label.append(" - ");

//     $('<small>')
//             .appendTo($label)
//             .append(autor);
//     $('.js-novo-livro, .js-novo-autor').val('');

// }

//     function toggleRemovido(ev)
//     {
//         var $el;
//         $el = $(ev.currentTarget);
//         $el.closest('li').toggleClass('removido');
//     }

//     $('.js-add').click(onAdd);
//     $('.js-livro').click(toggleRemovido);

// })