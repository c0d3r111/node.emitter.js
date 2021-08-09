export default class {
    constructor() {
        this.events = new Map();
    }

    clear    () {
        return void this.events.clear();
    }
    has      (name) {
        return this.events.has(name);
    }
    on       (name, method, context) {
        return void this.events.set(name, context ? method.bind(context) : method);
    }
    once     (name, data) {
        if (this.has(name)) {
            void this.emit(name, data);
            void this.remove(name);
        }

        return;
    }
    emit     (name, data) {
        return this.has(name)
            ? void this.events.get(name)(data)
            : void 0;
    }
    remove   (name) {
        return void this.events.delete(name);
    }
};