"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteAllNotes = exports.deleteNote = exports.getAllNotes = exports.createNote = void 0;
const __1 = require("..");
const utilsfunction_1 = require("../utils/utilsfunction");
const createNote = (title, description) => __awaiter(void 0, void 0, void 0, function* () {
    let response = { status: false, data: [], message: "Something went wrong try again!", function: "addNote2" };
    try {
        const res = yield __1.prisma.notes.create({ data: { title: title, description: description } });
        response = { status: true, data: [res], message: "New note added!", function: "addNote" };
    }
    catch (e) {
        const err = (0, utilsfunction_1.errorToString)(e);
        response = { status: false, data: [], message: err, function: "addNote" };
    }
    return response;
});
exports.createNote = createNote;
const getAllNotes = () => __awaiter(void 0, void 0, void 0, function* () {
    let response = { status: false, data: [], message: "Something went wrong try again!", function: "getAllNotes" };
    try {
        const notes = yield __1.prisma.notes.findMany();
        if (notes.length == 0) {
            response = { status: false, data: [], message: "Here is not notes!", function: "getAllNotes" };
        }
        else {
            response = { status: true, data: notes, message: "Notes fached successufuly", function: "getAllNotes" };
        }
    }
    catch (e) {
        const err = (0, utilsfunction_1.errorToString)(e);
        response = { status: false, data: [], message: err, function: "addNote" };
    }
    return response;
});
exports.getAllNotes = getAllNotes;
const deleteNote = (id) => __awaiter(void 0, void 0, void 0, function* () {
    let response = { status: false, data: [], message: "Something went wrong try again!", function: "deleteNote" };
    try {
        const result = yield __1.prisma.notes.delete({ where: { id: id } });
        response = { status: true, data: [result], message: `${result.title} has been deleted!`, function: "deleteNote" };
    }
    catch (e) {
        const err = (0, utilsfunction_1.errorToString)(e);
        response = { status: false, data: [], message: err, function: "deleteNote" };
    }
    return response;
});
exports.deleteNote = deleteNote;
const deleteAllNotes = () => __awaiter(void 0, void 0, void 0, function* () {
    let response = { status: false, data: [], message: "Something went wrong try again!", function: "deleteAllNote2" };
    try {
        yield __1.prisma.notes.deleteMany({});
        response = { status: true, data: [], message: `All noteshas been deleted!`, function: "deleteAllNote" };
    }
    catch (e) {
        const err = (0, utilsfunction_1.errorToString)(e);
        response = { status: false, data: [], message: err, function: "deleteNote" };
    }
    return response;
});
exports.deleteAllNotes = deleteAllNotes;
