"use strict";
// Create and use a type guard
function exercise29() {
    // TODO: implement isWidget function to be a type guard
    function isWidget(arg) {
        return false;
    }
    function printThingDescription(arg) {
        // TODO: uncomment the following code
        // if (isWidget(arg)) {
        //   console.log(arg.name);
        // } else {
        //   console.log(arg.os);
        // }
    }
    printThingDescription({ name: "widget" });
    printThingDescription({ os: "android" });
}
exercise29();
