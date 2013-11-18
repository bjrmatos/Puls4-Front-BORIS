$(document).ready(function(){

    window.views.app = new Puls4.Views.App($('body'));
    window.routers.base = new Puls4.Routers.Base();

    window.ponyExpress = new PonyExpress({
        io : window.location.origin
    });

    window.ponyExpress.bind('connect', function(){
        window.plugs.article = new PonyExpress.BackbonePlug({
            collection: window.collections.articles
        });
    });

    window.collections.articles = new Puls4.Collections.Articles();
    window.collections.articles.on('add', function(model){
        //Aqui agregaremos una vista para cada uno de nuestros articulos
        var view = new Puls4.Views.Article({ model: model});
        view.render();
        view.$el.prependTo('.posts');
    });

    var xhr = window.collections.articles.fetch();

    xhr.done(function(){
        Backbone.history.start({
            root : "/",
            pushState : true
        });
    });
});
