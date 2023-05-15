export const saveToLocalStorage = (key, state) => {
    try {
        const serialisedState = JSON.stringify(state);
        localStorage.setItem(key, serialisedState);
    } catch (e) {
        console.warn(e);
    }
}
