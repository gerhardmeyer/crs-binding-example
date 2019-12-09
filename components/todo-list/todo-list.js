import {BindableElement} from"./../../node_modules/crs-binding/crs-bindable-element.js";

class TodoList extends BindableElement {
    static get properties() {
        return ["items"];
    }

    get items() {
        return this.getProperty("items");
    }

    set items(newValue) {
        this.setProperty("items", newValue);
    }

    get html() {
        return import.meta.url.replace(".js", ".html");
    }

    async connectedCallback() {
        super.connectedCallback();
    }

    async disconnectedCallback() {
        this.items = null;
        super.disconnectedCallback();
    }
}

customElements.define("todo-list", TodoList);