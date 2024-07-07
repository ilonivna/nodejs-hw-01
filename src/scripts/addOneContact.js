import { PATH_DB } from '../constants/contacts.js';
import { createFakeContact } from '../utils/createFakeContact.js';
import * as fs from "node:fs/promises"

export const addOneContact = async () => {
    try {
        const newContact = createFakeContact(1);
        const data = await fs.readFile(PATH_DB, "utf-8");
        const contacts = await JSON.parse(data);
        const updatedContacts = JSON.stringify([...contacts, newContact], undefined, 2);
        await fs.writeFile(PATH_DB, updatedContacts, "utf-8");
        console.log(`A contact ${newContact.name} was added`)
    } catch (error) {
        console.error(error);
    }


};

addOneContact();
