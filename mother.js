import motherItemSheet from "./module/sheets/motherItemSheet.js";

Hooks.once("init", function () {
    console.log("mother | Initializing Mothership System");

    Items.unregisterSheet("core", ItemSheet);
    Items.registerSheet("mother", motherItemSheet, { makeDefault: true });
});