export const loadFromLocalStore = () => {

    try {
        const serialisedState = localStorage.getItem("todoList");
        if (serialisedState === null) return undefined;
        return JSON.parse(serialisedState);
    } catch (e) {
        console.warn(e);
        return undefined;
    }
}
