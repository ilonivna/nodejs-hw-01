
import { PATH_DB } from '../constants/contacts.js';
import * as fs from "node:fs/promises"

export const getAllContacts = async () => {
    try {
        const data = await fs.readFile(PATH_DB, "utf-8");
        const contacts = JSON.parse(data);
        console.log("Here are the contacts for you");
        return contacts;

    } catch (error) {
        console.error(error);
    }
};

console.log(await getAllContacts());
