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
exports.upadteNote = exports.getNoteCount = exports.getNoteById = exports.deleteAllNotes = exports.deleteNote = exports.getAllNotes = exports.createNote = void 0;
const client_1 = require("@prisma/client");
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
const getNoteById = (id) => __awaiter(void 0, void 0, void 0, function* () {
    let response = { status: false, data: [], message: "Something went wrong try again!", function: "getNotesByID" };
    try {
        const note = yield __1.prisma.notes.findUnique({ where: { id: id } });
        if (note === null) {
            response = { status: false, data: [], message: "No note exist with this is!", function: "getNotesByID" };
        }
        else {
            response = { status: false, data: [note], message: "note fatched sucessfully", function: "getNotesByID" };
        }
    }
    catch (e) {
        const err = (0, utilsfunction_1.errorToString)(e);
        response = { status: false, data: [], message: err, function: "getNotesByID" };
    }
    return response;
});
exports.getNoteById = getNoteById;
const getNoteCount = () => __awaiter(void 0, void 0, void 0, function* () {
    let response = { status: false, data: [], message: "Something went wrong try again!", function: "getNoteCount" };
    try {
        const result = yield __1.prisma.notes.count();
        response = { status: true, data: [{ count: result }], message: `fatched note count`, function: "getNoteCount" };
    }
    catch (e) {
        const err = (0, utilsfunction_1.errorToString)(e);
        response = { status: false, data: [], message: err, function: "getNoteCount" };
    }
    return response;
});
exports.getNoteCount = getNoteCount;
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
const upadteNote = (id) => __awaiter(void 0, void 0, void 0, function* () {
    let response = { status: false, data: [], message: "Something went wrong try again!", function: "upadteNote" };
    try {
        yield __1.prisma.notes.update({ where: { id: id }, data: { status: client_1.Status.COMPLETED } });
        response = { status: true, data: [], message: `Note upadated!`, function: "upadteNote" };
    }
    catch (e) {
        const err = (0, utilsfunction_1.errorToString)(e);
        response = { status: false, data: [], message: err, function: "upadteNote" };
    }
    return response;
});
exports.upadteNote = upadteNote;
