import Model from "./model.js";
import View from "./view.js"

/**
 * Listen a event when the user make a interaction with a component
 * that is described as listener.
 */
document.addEventListener("DOMContentLoaded", () => {
    const model = new Model();
    const view = new View();

    model.setView(view);
    view.setModel(model);
});