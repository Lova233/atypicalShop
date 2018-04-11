window.onload = function(){ 
    $("#modal").iziModal();
    $("#modal2").iziModal();


    $(document).on('click', '.trigger', function (event) {
        event.preventDefault();
        $('#modal').iziModal('open');
    })
    $(document).on('click', '.trigger2', function (event) {
        event.preventDefault();
        $('#modal2').iziModal('open');
    });
}
