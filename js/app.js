

var app = {};

$(document).ready(function () {

    "use strict";

    var homeTpl,
    	createTpl,
        favTpl,
        aboutTpl,
        mapTpl,
        favmapTpl;


    function renderHomeView() {
        $('body').html(homeTpl());
    }
    
    function renderCreateView() {
        $('body').html(createTpl());
    }

    function renderFavView() {
        $('body').html(favTpl());
    }

    function renderAboutView() {
        $('body').html(aboutTpl());
    }

    function renderMapView() {
        $('body').html(mapTpl());
        //window.location.href = "map.html";
    }

    function renderFavMapView() {
        $('body').html(favmapTpl());
        //window.location.href = "favmap.html";
    }

    function route() {
        var hash = window.location.hash;
        if (!hash || "#home" === hash) {
            renderHomeView();
            return;
        } else if ("#about" === hash) {
        	renderAboutView();
        	return;
        } else if ("#create" === hash) {
			renderCreateView();
        	return;
        } else if ("#fav" === hash) {
			renderFavView();
        	return;
        } else if ("#favmap" === hash) {
			renderFavMapView();
        	return;
        } else if ("#map" === hash) {
			renderMapView();
        	return;
        }
    }

    $(window).on('hashchange', route);

    $("body").on('click', ".small-pic", function () {
        $(".large-pic-bg").show();
        $(".large-pic").show();
    });

    $("body").on('click', ".large-pic", function () {
        $(".large-pic").hide();
        $(".large-pic-bg").hide();
    });

    app.templates.load("home", "create", "fav", "about"/*, "favmap", "map"*/).done(function () {
        homeTpl = app.templates.get("home");
        createTpl = app.templates.get("create");
        favTpl = app.templates.get("fav");
        aboutTpl = app.templates.get("about");
        //favmapTpl = app.templates.get("favmap");
        //mapTpl = app.templates.get("map");
        route();
    });
});
