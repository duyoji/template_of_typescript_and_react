import * as React from "react";
import * as ReactDOM from "react-dom";
import { Hello } from "./components/Hello";

export default (compiler = "TypeScript", framework = "React") => {
    ReactDOM.render(
        <Hello compiler={compiler} framework={framework} />,
        document.getElementById("example")
    );
};
