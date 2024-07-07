import { PATH_DB } from '../constants/contacts.js';
import fs from "node:fs/promises";

export const countContacts = async () => {
    try {
        const data = JSON.parse(await fs.readFile(PATH_DB, "utf-8"));
        return data.length;
    } catch (error) {
        console.log(error);
    }
};

console.log(await countContacts());
