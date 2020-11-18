import { mother } from "./module/config.js";
import motherItemSheet from "./module/sheets/motherItemSheet.js";

Hooks.once("init", function () {
    console.log("mother | Initializing Mothership System");

    CONFIG.mother = mother;

    Items.unregisterSheet("core", ItemSheet);
    Items.registerSheet("mother", motherItemSheet, { makeDefault: true });
});