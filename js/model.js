export default class Model {

    constructor() {
        this.view = null;
        this.manageView = null;
        this.all = JSON.parse(localStorage.getItem('all'));

        if (!this.all || this.all.length === 0) {
            this.currentId = 1;
            this.all = [];
        } else {
            this.currentId = this.all[this.all.length - 1].id + 1;
        }
    }

    /**
     * Set the data to the View Class.
     * @param {*} view 
     */
    setView(view) {
        this.view = view;
    }

    setManageView(manageView) {
        this.manageView = manageView;
    }

    getAll() {
        return this.all.map(every => ({
            ...every
        }));
    }

    addEvery(
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
        const every = {
            id: this.currentId++,
            type,
            model,
            quantity,
            price,
            color,
            dimentionHigh,
            dimentionWide,
            dimentionLong,
            capacity
        }

        this.all.push(every);

        /* Save the information of the object in the
        LocalStorage. */
        this.save();

        /* var salvado = localStorage.getItem('all');
        console.log('Los datos guardados son: ' + salvado); */

        return {
            ...every
        };
    }

    findEvery(id) {
        return this.all.findIndex(t => t.id === id);
    }

    editEvery(
        id,
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
        /* const update = {
            id: id,
            type: type,
            model: model,
            quantity: quantity,
            price: price,
            color: color,
            dimentionHigh: dimentionHigh,
            dimentionWide: dimentionWide,
            dimentionLong: dimentionLong,
            capacity
        } */

        const index = this.findEvery(id);
        var realIndex = (index + 1);
        
        /* console.log('Index: ' + index);
        console.log('Real Index: ' + realIndex);
        console.log('ALL: ', this.all);
        console.log('ALL with specific index: ', this.all[realIndex]); */

        /* this.all[realIndex].id = id; */
        this.all[realIndex].type = type;
        this.all[realIndex].model = model;
        this.all[realIndex].quantity = quantity;
        this.all[realIndex].price = price;
        this.all[realIndex].color = color;
        this.all[realIndex].dimentionHigh = dimentionHigh;
        this.all[realIndex].dimentionWide = dimentionWide;
        this.all[realIndex].dimentionLong = dimentionLong;
        this.all[realIndex].capacity = capacity;
        
        console.log('ALL with specific index and mods: ', this.all[realIndex]);
        console.log('ALL: ', this.all);

        this.save();

        // setTimeout("location.reload(true);", 500);
    }

    removeEvery(id) {
        const index = this.findEvery(id);
        this.all.splice(index, 1);
        this.save();
    }

    toogleCompleted(id) {
        const index = this.findEvery(id);
        const every = this.all[index];
        every.completed = !every.completed;
        this.save;
    }

    save() {
        localStorage.setItem('all', JSON.stringify(this.all));
    }

}