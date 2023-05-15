export const saveToLocalStorage = (state) => {
    try {
        const serialisedState = JSON.stringify(state);
        localStorage.setItem("todoList", serialisedState);
    } catch (e) {
        console.warn(e);
    }
}
