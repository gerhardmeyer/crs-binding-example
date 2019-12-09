import {createTodoItem} from "./src/todo-item.js"

export class ViewModel {
    static get properties() {
        return ["items", "searchText"]
    }

    get items() {
        return this._items;
    }

    set items(newValue) {
        this._items = newValue;
    }

    get searchText() {
        return this._searchText;
    }

    set searchText(newValue) {
        this._searchText = newValue;
        console.log(newValue);
    }

    constructor() {
        this.title = "Todo Application";
        this.items = crsbinding.observation.observe([]);
        crsbinding.events.enableEvents(this);
    }

    dispose() {
        crsbinding.events.disableEvents(this);
    }

    add() {
        const todo = prompt("Todo item title");
        this.items.push(createTodoItem(todo));
    }
}