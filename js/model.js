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
        const update = {
            id: Number(id),
            type: type,
            model: model,
            quantity: quantity,
            price: price,
            color: color,
            dimentionHigh: dimentionHigh,
            dimentionWide: dimentionWide,
            dimentionLong: dimentionLong,
            capacity
        }

        var existing = localStorage.getItem('all');
        console.log('Exist: ', existing);

        var item = JSON.parse(localStorage.getItem('all'));
        // console.log('Test: ', item);

        const indexfind = this.findEvery(Number(id));
        this.all.splice(indexfind, 1);

        this.all.push(update);

        console.log('TODO UPDATE', this.all);

        this.save();

        setTimeout("location.reload(true);", 500);
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