function Controller() {
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    var $ = this;
    var exports = {};
    $.__views.index = Ti.UI.createWindow({
        fullscreen: false,
        exitOnClose: "true",
        id: "index"
    });
    $.__views.index && $.addTopLevelView($.__views.index);
    $.__views.__alloyId6 = Ti.UI.createTableViewRow({
        width: Ti.UI.FILL,
        height: "48dp",
        font: {
            fontSize: "18sp"
        },
        title: "Actions & Overflow",
        value: "actions",
        id: "__alloyId6"
    });
    var __alloyId7 = [];
    __alloyId7.push($.__views.__alloyId6);
    $.__views.__alloyId8 = Ti.UI.createTableViewRow({
        width: Ti.UI.FILL,
        height: "48dp",
        font: {
            fontSize: "18sp"
        },
        title: "Tabs",
        value: "tabs",
        id: "__alloyId8"
    });
    __alloyId7.push($.__views.__alloyId8);
    $.__views.__alloyId9 = Ti.UI.createTableViewRow({
        width: Ti.UI.FILL,
        height: "48dp",
        font: {
            fontSize: "18sp"
        },
        title: "Other",
        value: "other",
        id: "__alloyId9"
    });
    __alloyId7.push($.__views.__alloyId9);
    $.__views.table = Ti.UI.createTableView({
        data: __alloyId7,
        id: "table"
    });
    $.__views.index.add($.__views.table);
    exports.destroy = function() {};
    _.extend($, $.__views);
    $.table.addEventListener("click", function(e) {
        var controller = Alloy.createController(e.row.value);
        controller.getView().open();
    });
    $.index.open();
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;