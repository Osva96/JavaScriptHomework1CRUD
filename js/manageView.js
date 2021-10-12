export default class ManageView {

    constructor() {
        this.model = null;
        this.table = document.getElementById('table');

        /* Modal ID elements */
        this.idEdit = document.getElementById('idEdit');
        this.typeEdit = document.getElementById('typeEdit');
        this.modelEdit = document.getElementById('modelEdit');
        this.quantityEdit = document.getElementById('quantityEdit');
        this.priceEdit = document.getElementById('priceEdit');
        this.colorEdit = document.getElementById('colorEdit');
        this.dimentionHighEdit = document.getElementById('dimentionHighEdit');
        this.dimentionWideEdit = document.getElementById('dimentionWideEdit');
        this.dimentionLongEdit = document.getElementById('dimentionLongEdit');
        this.capacityEdit = document.getElementById('capacityEdit');
    }

    setModel(model) {
        this.model = model;
    }

    render() {
        const localStorageCups = this.model.getAll();
        const cupsCount = localStorageCups.length;

        if (localStorageCups.length > 0) {
            localStorageCups.forEach(t => this.createRow(t));
        } else if (localStorageCups.length == 0) {
            const row = this.table.getElementsByTagName('tbody')[0].insertRow();

            row.innerHTML = `
            <td colspan='9'>
                <div class='col-12 d-flex justify-content-center'>
                    <span class='fs-5'>
                        There is no data of cups in the LocalStorage.
                    </span>
                </div>
            </td>
            `;
        }

        /* if (localStorageCups && localStorageCups.length > 0) {
            localStorageCups.forEach(t => this.createRow(t));
        } */
    }

    editCupFunc(
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
        // console.log("ID a editar: " + id);
        console.log('Paso por ManageView');
        this.model.editEvery(
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
        );
    }

    deleteCupFunc(id) {
        this.model.removeEvery(id);
        document.getElementById(id).remove();
    }

    createRow(every) {
        const row = this.table.getElementsByTagName('tbody')[0].insertRow();

        row.setAttribute('id', every.id);

        /* row.innerHTML = `
        <td>${every.id}</td>
        <td>${every.type}</td>
        <td>${every.model}</td>
        <td>${every.quantity}</td>
        <td>$${every.price} MXN</td>
        <td>${every.color}</td>
        <td>${every.dimentionHigh}mm x ${every.dimentionWide}mm x ${every.dimentionLong}mm</td>
        <td>${every.capacity} ml</td>
        <td>
            <div class="row">
                <div class="col-12">
                    <div class="dropdown">
                        <button class="btn btn-secondary dropdown-toggle p-2" type="button"
                            id="dropdownMenuButton1" data-bs-toggle="dropdown"
                            aria-expanded="false">
                            <!-- Options -->
                            <i class="fas fa-cog"></i>
                        </button>
                        <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                            <li><a class="dropdown-item" style="cursor: pointer;"
                                    data-bs-toggle="modal"
                                    data-bs-target="#editProductModal">Update</a>
                            </li>
                            <li><a class="dropdown-item" style="cursor: pointer;"
                                    data-bs-toggle="modal"
                                    data-bs-target="#deleteProductModal">Delete</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </td>
        `; */


        row.innerHTML = `
        <td>${every.id}</td>
        <td>${every.type}</td>
        <td>${every.model}</td>
        <td>${every.quantity}</td>
        <td>$${every.price} MXN</td>
        <td>${every.color}</td>
        <td>${every.dimentionHigh}mm x ${every.dimentionWide}mm x ${every.dimentionLong}mm</td>
        <td>${every.capacity} ml</td>
        <td>
        </td>
        `;

        const divRow = document.createElement('div');
        divRow.classList.add('row');
        row.children[8].appendChild(divRow);

        const divCol1 = document.createElement('div');
        divCol1.classList.add('col-6', 'd-flex', 'justify-content-center');
        divRow.appendChild(divCol1);

        const divCol2 = document.createElement('div');
        divCol2.classList.add('col-6', 'd-flex', 'justify-content-center');
        divRow.appendChild(divCol2);

        const btnEdit = document.createElement('button');
        btnEdit.classList.add('btn', 'btn-warning', 'px-3', 'm-1');
        btnEdit.type = 'button';
        btnEdit.innerHTML = "Edit  ";
        btnEdit.onclick = () => {
            // console.log(every.id);
            // this.editCupFunc(every.id);

            /* Show Modal */
            $('#editProductModal').modal('show');

            /* Set the data of the Item in the inputs */
            this.idEdit.value = every.id;
            this.typeEdit.value = every.type;
            this.modelEdit.value = every.model;
            this.quantityEdit.value = every.quantity;
            this.priceEdit.value = every.price;
            this.colorEdit.value = every.color;
            this.dimentionHighEdit.value = every.dimentionHigh;
            this.dimentionWideEdit.value = every.dimentionWide;
            this.dimentionLongEdit.value = every.dimentionLong;
            this.capacityEdit.value = every.capacity;
        }
        divCol1.appendChild(btnEdit);

        const btnDelete = document.createElement('button');
        btnDelete.classList.add('btn', 'btn-danger', 'px-3', 'm-1');
        btnDelete.type = 'button';
        btnDelete.innerHTML = "Delete  ";
        btnDelete.onclick = () => this.deleteCupFunc(every.id);
        divCol2.appendChild(btnDelete);

        const icoBtnEdit = document.createElement('i');
        icoBtnEdit.classList.add('fas', 'fa-edit');
        btnEdit.appendChild(icoBtnEdit);

        const icoBtnDelete = document.createElement('i');
        icoBtnDelete.classList.add('fas', 'fa-trash');
        btnDelete.appendChild(icoBtnDelete);

        /* const deleteProduct = document.createElement('button');
        deleteProduct.classList.add('btn', 'btn-secondary');
        deleteProduct.onclick = () => this.deleteCupFunc(every.id);
        row.children[8].appendChild(deleteProduct);

        const icono = document.createElement('i');
        deleteProduct.classList.add('fas', 'fa-cog');
        deleteProduct.appendChild(icono); */
    }

}