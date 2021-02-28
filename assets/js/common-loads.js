$(document).ready(function(){
    $('ul#menu-itens').load('ajax-menu.html');
    $('div#footer').load('ajax-copyright.html');
    var file = location.pathname.substr(location.pathname.lastIndexOf("/") + 1);
    switch(file) {
        case '' :
            case 'index.html' : $('div#content').load('ajax-home.html');
                                $('div#funding-content').load('ajax-funding.html');
                                var news = readNewsFile(1);
                                $('div#news-content').html(news);
                                break;
            case 'news.html'  : var news = readNewsFile(2);
                                $('div#content').html(news);
                                break;
    }
});
