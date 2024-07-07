import { PATH_DB } from '../constants/contacts.js';
import fs from "node:fs/promises";

export const removeAllContacts = async () => {
    try {
        await fs.writeFile(PATH_DB, JSON.stringify([]), "utf-8");
        console.log("Successfully cleared all!");
    } catch (error) {
        console.error(error);
    }
};

removeAllContacts();
