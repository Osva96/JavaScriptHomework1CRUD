export default class addCup {

    /**
     * Obtain all the values of the input components in the form
     * using the ID of the component.
     */
    constructor() {
        this.btnAdd = document.getElementById("add");
        this.type = document.getElementById("type");
        this.model = document.getElementById("model");
        this.quantity = document.getElementById("quantity");
        this.price = document.getElementById("price");
        this.color = document.getElementById("color");
        this.dimentionHigh = document.getElementById("dimentionHigh");
        this.dimentionWide = document.getElementById("dimentionWide");
        this.dimentionLong = document.getElementById("dimentionLong");
        this.capacity = document.getElementById("capacity");

        /* Call the alert component using the ID. */
        this.alertPlaceholder = document.getElementById('liveAlertPlaceholder');
        this.alertTrigger = document.getElementById('liveAlertBtn');
    }

    /**
     * Method when the program detect and event onClick of the button.
     * @param {*} callBack All the paramethers of the inputs.
     */
    onClick(callBack) {
        this.btnAdd.onclick = () => {
            if (this.type.value === '' &&
                this.model.value == '' &&
                this.price.value == 0 &&
                this.color.value == '' &&
                this.dimentionHigh.value == 0 &&
                this.dimentionWide.value == 0 &&
                this.dimentionLong.value == 0
            ) {
                this.alert('Danger, none of the inputs can be empty. Its necessary a value.', 'danger');
                return;
            } else {
                this.alert('Success inserting a new cup in the inventory!', 'success');

                // console.log(callBack);

                callBack(
                    this.type.value,
                    this.model.value,
                    this.quantity.value,
                    this.price.value,
                    this.color.value,
                    this.dimentionHigh.value,
                    this.dimentionWide.value,
                    this.dimentionLong.value,
                    this.capacity.value
                );

                this.type.value = '';
                this.model.value = '';
                this.quantity.value = '';
                this.price.value = '';
                this.color.value = '';
                this.dimentionHigh.value = '';
                this.dimentionWide.value = '';
                this.dimentionLong.value = '';
                this.capacity.value = '';
            }
        }
    }

    /**
     * Show a alert message when an action is completed.
     * @param {*} message  String text of the message.
     * @param {*} type Type of message that will be displayed (success, warning, info, danger, etc.).
     */
    alert(message, type) {
        var wrapper = document.createElement('div');

        wrapper.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" style="display: none;"><symbol id="check-circle-fill" fill="currentColor" viewBox="0 0 16 16"><path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"/></symbol></svg><div style="z-index: 3;" class="alert alert-' + type + ' d-flex align-items-center alert-dismissible" role="alert"> <svg class="bi flex-shrink-0 me-2" width="24" height="24" role="img" aria-label="Success:"><use xlink:href="#check-circle-fill"/></svg> <div> ' + message + ' <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button></div></div>';

        alertPlaceholder.append(wrapper);
    }

}