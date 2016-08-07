import * as React from "react";
import * as ReactDOM from "react-dom";
import { Hello } from "./components/Hello";

export default (compiler = "TypeScript(default)", framework = "React(default)") => {
    ReactDOM.render(
        <Hello compiler={compiler} framework={framework} />,
        document.getElementById("example")
    );
};
