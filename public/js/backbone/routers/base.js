Puls4.Routers.Base = Backbone.Router.extend({
    routes : {
        "" : "root",
        "article/:id" : "articleSingle"
    },
    root : function() {
        console.log('Root');

        window.app.state = "root";
        window.app.article = null;
    },
    articleSingle : function(id) {
        console.log('Article');

        window.app.state = "articleSingle";
        window.app.article = id;
    }
});