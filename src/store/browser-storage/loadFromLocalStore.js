export const loadFromLocalStore = (key) => {

    try {
        const serialisedState = localStorage.getItem(key);
        if (serialisedState === null) return undefined;
        return JSON.parse(serialisedState);
    } catch (e) {
        console.warn(e);
        return undefined;
    }
}
