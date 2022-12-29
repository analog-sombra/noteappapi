import { Status } from "@prisma/client";
import { response } from "express";
import { Stats } from "fs";
import { prisma } from ".."
import { errorToString } from "../utils/utilsfunction";

const createNote = async (title: string, description: string): Promise<response> => {
    let response: response = { status: false, data: [], message: "Something went wrong try again!", function: "addNote2" };
    try {
        const res = await prisma.notes.create({ data: { title: title, description: description } });
        response = { status: true, data: [res], message: "New note added!", function: "addNote" };
    } catch (e: unknown) {
        const err = errorToString(e);
        response = { status: false, data: [], message: err, function: "addNote" };
    }
    return response;
}

const getAllNotes = async (): Promise<response> => {
    let response: response = { status: false, data: [], message: "Something went wrong try again!", function: "getAllNotes" };
    try {
        const notes = await prisma.notes.findMany();
        if (notes.length == 0) {
            response = { status: false, data: [], message: "Here is not notes!", function: "getAllNotes" };
        } else {
            response = { status: true, data: notes, message: "Notes fached successufuly", function: "getAllNotes" };
        }
    } catch (e: unknown) {
        const err = errorToString(e);
        response = { status: false, data: [], message: err, function: "addNote" };
    }
    return response;
}


const getNoteById = async (id: string): Promise<response> => {
    let response: response = { status: false, data: [], message: "Something went wrong try again!", function: "getNotesByID" };
    try {
        const note = await prisma.notes.findUnique({ where: { id: id } });
        if (note === null) {
            response = { status: false, data: [], message: "No note exist with this is!", function: "getNotesByID" };
        } else {
            response = { status: false, data: [note], message: "note fatched sucessfully", function: "getNotesByID" };
        }
    } catch (e: unknown) {
        const err = errorToString(e);
        response = { status: false, data: [], message: err, function: "getNotesByID" };
    }
    return response;

}

const getNoteCount = async () => {
    let response: response = { status: false, data: [], message: "Something went wrong try again!", function: "getNoteCount" };
    try {
        const result = await prisma.notes.count();
        response = { status: true, data: [{ count: result }], message: `fatched note count`, function: "getNoteCount" };

    } catch (e: unknown) {
        const err = errorToString(e);
        response = { status: false, data: [], message: err, function: "getNoteCount" };
    }
    return response;
}
const deleteNote = async (id: string): Promise<response> => {
    let response: response = { status: false, data: [], message: "Something went wrong try again!", function: "deleteNote" };
    try {
        const result = await prisma.notes.delete({ where: { id: id } });
        response = { status: true, data: [result], message: `${result.title} has been deleted!`, function: "deleteNote" };

    } catch (e: unknown) {
        const err = errorToString(e);
        response = { status: false, data: [], message: err, function: "deleteNote" };
    }
    return response;
}
const deleteAllNotes = async (): Promise<response> => {
    let response: response = { status: false, data: [], message: "Something went wrong try again!", function: "deleteAllNote2" };
    try {
        await prisma.notes.deleteMany({});
        response = { status: true, data: [], message: `All noteshas been deleted!`, function: "deleteAllNote" };

    } catch (e: unknown) {
        const err = errorToString(e);
        response = { status: false, data: [], message: err, function: "deleteNote" };
    }
    return response;

}
const upadteNote = async (id: string): Promise<response> => {
    let response: response = { status: false, data: [], message: "Something went wrong try again!", function: "upadteNote" };
    try {
        await prisma.notes.update({ where: { id: id }, data: { status: Status.COMPLETED } });
        response = { status: true, data: [], message: `Note upadated!`, function: "upadteNote" };

    } catch (e: unknown) {
        const err = errorToString(e);
        response = { status: false, data: [], message: err, function: "upadteNote" };
    }
    return response;
}
export { createNote, getAllNotes, deleteNote, deleteAllNotes, getNoteById, getNoteCount, upadteNote };

