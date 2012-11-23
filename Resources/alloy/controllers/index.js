function Controller() {
    function doClickMenu(e) {
        alert("menu was clicked: " + e.source.title);
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    var $ = this, exports = {};
    $.__views.index = A$(Ti.UI.createWindow({
        fullscreen: !0,
        id: "index"
    }), "Window", null);
    $.addTopLevelView($.__views.index);
    $.__views.index.activity.onCreateOptionsMenu = function(e) {
        var __alloyId2 = {
            showAsAction: Ti.Android.SHOW_AS_ACTION_IF_ROOM,
            icon: "images/action_about.png",
            title: "About",
            id: "menu1"
        };
        $.__views.menu1 = A$(e.menu.add(_.pick(__alloyId2, [ "itemId", "groupId", "title", "order" ])), "MenuItem", e.menu);
        _.each(__alloyId2, function(v, k) {
            $.__views.menu1[k] = v;
        });
        $.__views.menu1.on("click", doClickMenu);
        var __alloyId3 = {
            showAsAction: Ti.Android.SHOW_AS_ACTION_IF_ROOM,
            icon: "images/action_settings.png",
            title: "Settings",
            id: "menu2"
        };
        $.__views.menu2 = A$(e.menu.add(_.pick(__alloyId3, [ "itemId", "groupId", "title", "order" ])), "MenuItem", e.menu);
        _.each(__alloyId3, function(v, k) {
            $.__views.menu2[k] = v;
        });
        $.__views.menu2.on("click", doClickMenu);
    };
    $.__views.label = A$(Ti.UI.createLabel({
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        color: "#000",
        text: "Hello, World",
        id: "label"
    }), "Label", $.__views.index);
    $.__views.index.add($.__views.label);
    _.extend($, $.__views);
    $.index.open();
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._, A$ = Alloy.A;

module.exports = Controller;