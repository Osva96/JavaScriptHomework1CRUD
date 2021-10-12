import Model from "./model.js";
import ManageView from "./manageView.js";
// import View from './view.js';

document.addEventListener("DOMContentLoaded", () => {
    const model = new Model();
    const manageView = new ManageView();

    model.setView(manageView);
    manageView.setModel(model);

    // var datos = model.getAll();
    // console.log(datos[0]);

    manageView.render();

    $('#saveEditModal').click(function () {
        // console.log('hey');
        /* console.log(manageView.idEdit.value);
        console.log(manageView.typeEdit.value); */

        manageView.editCupFunc(
            manageView.idEdit.value,
            manageView.typeEdit.value,
            manageView.modelEdit.value,
            manageView.quantityEdit.value,
            manageView.priceEdit.value,
            manageView.colorEdit.value,
            manageView.dimentionHighEdit.value,
            manageView.dimentionWideEdit.value,
            manageView.dimentionLongEdit.value,
            manageView.capacityEdit.value
        );
    });
});