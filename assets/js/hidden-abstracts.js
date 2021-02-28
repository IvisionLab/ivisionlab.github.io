$(document).ready(function(){
    $('.toggle-abstract').click(function(){
        $('tr.' + $(this).prop('id')).not(this).slideToggle('fast');
        $('p.' + $(this).prop('id')).not(this).slideToggle('fast');
    });
});
