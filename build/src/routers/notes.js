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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.noteRouter = void 0;
const express_1 = __importDefault(require("express"));
const notes_1 = require("../controllers/notes");
const noteRouter = express_1.default.Router();
exports.noteRouter = noteRouter;
noteRouter.post("/note", (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    let response = { status: false, data: [], message: "Something went wrong try again!", function: "addNote1" };
    const data = (req.body);
    if (data.title === undefined) {
        response = { status: false, data: [], message: "title is required!", function: "addNote" };
    }
    else if (data.description === undefined) {
        response = { status: false, data: [], message: "description is required!", function: "addNote" };
    }
    else {
        const result = yield (0, notes_1.createNote)(data.title, data.description);
        response = result;
    }
    res.send(response);
    res.end();
    // if (!("title" in (data as any))) {
    //     response = { status: false, data: [], message: "title is required!", function: "addNote" };
    // } else if (!("description" in (data as any))) {
    //     response = { status: false, data: [], message: "description is required!", function: "addNote" };
    // }
}));
noteRouter.get("/note", (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    let response = { status: false, data: [], message: "Something went wrong try again!", function: "getAllNotes" };
    const result = yield (0, notes_1.getAllNotes)();
    response = result;
    res.send(response);
    res.end();
}));
noteRouter.delete("/note", (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    let response = { status: false, data: [], message: "Something went wrong try again!", function: "deleteNote" };
    const data = (req.body);
    if (data.id === undefined) {
        response = { status: false, data: [], message: "Id is required!", function: "deleteNote" };
    }
    else {
        const result = yield (0, notes_1.deleteNote)(data.id);
        response = result;
    }
    res.send(response);
    res.end();
}));
noteRouter.post("/deleteall", (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    let response = { status: false, data: [], message: "Something went wrong try again!", function: "deleteAllNotes1" };
    const result = yield (0, notes_1.deleteAllNotes)();
    response = result;
    res.send(response);
    res.end();
}));
