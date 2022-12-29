"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.errorToString = void 0;
const errorToString = (e) => {
    let err = "";
    if (typeof e === "string") {
        err = e.toUpperCase();
    }
    else if (e instanceof Error) {
        err = e.message;
    }
    return err;
};
exports.errorToString = errorToString;
