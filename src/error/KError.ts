export default class KError extends Error {
    public constructor(message?: string) {
        super("[k.js] "+ message);
    }
}
