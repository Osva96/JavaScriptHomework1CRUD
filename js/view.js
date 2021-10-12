import addCup from "./components/addCup.js";

export default class View {
    constructor() {
        this.model = null;
        this.addCupForm = new addCup();

        /* When the user makes clic in the form this send the
        values of the paramethers to the method. */
        this.addCupForm.onClick((t, m, q, p, c, dh, dw, dl, cty) => this.addCup(t, m, q, p, c, dh, dw, dl, cty));
    }

    setModel(model) {
        this.model = model;
    }

    /**
     * All the paramethers will be saved in LocalStorage.
     * @param {*} type Type of the cup. String.
     * @param {*} model Model of the cup. String.
     * @param {*} quantity Quantity of cups. Number.
     * @param {*} price Price of the cup. Number.
     * @param {*} color Color of the cup. String.
     * @param {*} dimentionHigh High of the cup. Number.
     * @param {*} dimentionWide Wide of the cup. Number.
     * @param {*} dimentionLong Long of the cup. Number.
     * @param {*} capacity Capacity of the cup. Number.
     */
    addCup(
        type,
        model,
        quantity,
        price,
        color,
        dimentionHigh,
        dimentionWide,
        dimentionLong,
        capacity
    ) {
        /* Print the data that recibe */
        // console.log("Tipo: " + type);
        // console.log("Modelo: " + model);
        // console.log("Cantidad: " + quantity);
        // console.log("Precio: " + price);
        // console.log("Color: " + color);
        // console.log("Dimención (alto): " + dimentionHigh);
        // console.log("Dimención (ancho): " + dimentionWide);
        // console.log("Dimención (largo): " + dimentionLong);
        // console.log("Capacidad: " + capacity);

        /* Call the method addEvery that is located in model.js */
        const every = this.model.addEvery(
            type,
            model,
            quantity,
            price,
            color,
            dimentionHigh,
            dimentionWide,
            dimentionLong,
            capacity
        );
    }

    /**
     * Remove an object indicated by the ID paramether.
     * @param {*} id ID of the object that will be deleted.
     */
    removeEvery(id) {
        this.model.removeEvery(id);
        document.getElementById(id).remove();
    }

    /**
     * One completed the load.
     * @param {*} id 
     */
    toogleCompleted(id) {
        this.model.toogleCompleted(id);
    }
}