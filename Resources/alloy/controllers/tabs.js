function Controller() {
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    var $ = this;
    var exports = {};
    $.__views.main = Ti.UI.createTabGroup({
        id: "main"
    });
    $.__views.win1 = Ti.UI.createWindow({
        title: "Window 1",
        id: "win1"
    });
    $.__views.__alloyId11 = Ti.UI.createLabel({
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        color: "#000",
        font: {
            fontSize: "18sp"
        },
        text: "Tab 1",
        id: "__alloyId11"
    });
    $.__views.win1.add($.__views.__alloyId11);
    $.__views.tab1 = Ti.UI.createTab({
        title: "Tab 1",
        window: $.__views.win1,
        id: "tab1"
    });
    $.__views.main.addTab($.__views.tab1);
    $.__views.win2 = Ti.UI.createWindow({
        title: "Window 2",
        id: "win2"
    });
    $.__views.__alloyId12 = Ti.UI.createLabel({
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        color: "#000",
        font: {
            fontSize: "18sp"
        },
        text: "Tab 2",
        id: "__alloyId12"
    });
    $.__views.win2.add($.__views.__alloyId12);
    $.__views.tab2 = Ti.UI.createTab({
        title: "Tab 2",
        window: $.__views.win2,
        id: "tab2"
    });
    $.__views.main.addTab($.__views.tab2);
    $.__views.main && $.addTopLevelView($.__views.main);
    exports.destroy = function() {};
    _.extend($, $.__views);
    $.main.addEventListener("open", function() {
        if (Ti.Platform.Android.API_LEVEL >= 11) {
            var actionBar = $.main.getActivity().actionBar;
            actionBar.setTitle("Tabs");
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