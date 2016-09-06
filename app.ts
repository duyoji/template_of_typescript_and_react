import index from "./ts/index";
import * as $ from "jquery";

$(() => {
    let compiler = "this is comileper";
    let framework = "this is framework";

    index(compiler, framework);
});
