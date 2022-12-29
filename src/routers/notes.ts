import express, { NextFunction, Request, Response } from "express";
import { createNote, deleteAllNotes, deleteNote, getAllNotes, getNoteById, getNoteCount, upadteNote } from "../controllers/notes";

const noteRouter = express.Router();

type fetchedNote = {
    title: string,
    description: string
}
type NoteID = {
    id: string
}


noteRouter.get("/note", async (req: Request, res: Response, next: NextFunction) => {
    let response: response = { status: false, data: [], message: "Something went wrong try again!", function: "getAllNotes" };
    const result = await getAllNotes();
    response = result;
    res.send(response);
    res.end();
});

noteRouter.get("/note/:id", async (req: Request, res: Response, next: NextFunction) => {
    let response: response = { status: false, data: [], message: "Something went wrong try again!", function: "getNotesByID" };
    const id = req.params.id;
    const result = await getNoteById(id);
    response = result;
    res.send(response);
    res.end();
});



noteRouter.post("/note", async (req: Request, res: Response, next: NextFunction) => {
    let response: response = { status: false, data: [], message: "Something went wrong try again!", function: "addNote1" };
    const data: unknown = (req.body);
    if ((<fetchedNote>data).title === undefined) {
        response = { status: false, data: [], message: "title is required!", function: "addNote" };
    } else if ((<fetchedNote>data).description === undefined) {
        response = { status: false, data: [], message: "description is required!", function: "addNote" };
    }
    else {
        const result = await createNote((<fetchedNote>data).title, (<fetchedNote>data).description);
        response = result;
    }
    res.send(response);
    res.end();
});


noteRouter.patch("/note", async (req: Request, res: Response, next: NextFunction) => {
    let response: response = { status: false, data: [], message: "Something went wrong try again!", function: "getNoteCount" };
    const result = await getNoteCount();
    response = result;
    res.send(response);
    res.end();
});


noteRouter.delete("/note/:id", async (req: Request, res: Response, next: NextFunction) => {
    let response: response = { status: false, data: [], message: "Something went wrong try again!", function: "deleteNote" };
    const id = req.params.id;
    const result = await deleteNote(id);
    response = result;
    res.send(response);
    res.end();
});

noteRouter.delete("/note", async (req: Request, res: Response, next: NextFunction) => {
    let response: response = { status: false, data: [], message: "Something went wrong try again!", function: "deleteAllNotes1" };
    const result = await deleteAllNotes();
    response = result;
    res.send(response);
    res.end();
});

noteRouter.put("/note/:id", async (req: Request, res: Response, next: NextFunction) => {
    let response: response = { status: false, data: [], message: "Something went wrong try again!", function: "deleteAllNotes1" };
    const id = req.params.id;
    const result = await upadteNote(id);
    response = result;
    res.send(response);
    res.end();
})


export { noteRouter };