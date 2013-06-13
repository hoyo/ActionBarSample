function Controller() {
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    var $ = this;
    var exports = {};
    $.__views.main = Ti.UI.createWindow({
        fullscreen: false,
        id: "main"
    });
    $.__views.main && $.addTopLevelView($.__views.main);
    $.__views.main.activity.onCreateOptionsMenu = function(e) {
        var __alloyId1 = {
            onClick: "doClickMenu",
            showAsAction: Ti.Android.SHOW_AS_ACTION_ALWAYS,
            icon: "images/action_about.png",
            title: "About",
            id: "menu1"
        };
        $.__views.menu1 = e.menu.add(_.pick(__alloyId1, Alloy.Android.menuItemCreateArgs));
        $.__views.menu1.applyProperties(_.omit(__alloyId1, Alloy.Android.menuItemCreateArgs));
        var __alloyId2 = {
            onClick: "doClickMenu",
            showAsAction: Ti.Android.SHOW_AS_ACTION_ALWAYS,
            icon: "images/action_settings.png",
            title: "Settings",
            id: "menu2"
        };
        $.__views.menu2 = e.menu.add(_.pick(__alloyId2, Alloy.Android.menuItemCreateArgs));
        $.__views.menu2.applyProperties(_.omit(__alloyId2, Alloy.Android.menuItemCreateArgs));
        var __alloyId3 = {
            onClick: "doClickMenu",
            showAsAction: Ti.Android.SHOW_AS_ACTION_NEVER,
            icon: "images/action_settings.png",
            title: "Help",
            id: "menu3"
        };
        $.__views.menu3 = e.menu.add(_.pick(__alloyId3, Alloy.Android.menuItemCreateArgs));
        $.__views.menu3.applyProperties(_.omit(__alloyId3, Alloy.Android.menuItemCreateArgs));
    };
    $.__views.__alloyId4 = Ti.UI.createLabel({
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        color: "#000",
        font: {
            fontSize: "18sp"
        },
        text: "Action Buttons",
        id: "__alloyId4"
    });
    $.__views.main.add($.__views.__alloyId4);
    exports.destroy = function() {};
    _.extend($, $.__views);
    $.main.addEventListener("open", function() {
        if (Ti.Platform.Android.API_LEVEL >= 11) {
            var actionBar = $.main.getActivity().actionBar;
            actionBar.setTitle("Actions & Overflow");
            actionBar.setDisplayHomeAsUp(true);
            actionBar.onHomeIconItemSelected = function() {
                $.main.close();
            };
            $.main.getActivity().invalidateOptionsMenu();
        }
    });
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;