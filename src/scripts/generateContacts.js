import { PATH_DB } from '../constants/contacts.js';
import { createFakeContact } from '../utils/createFakeContact.js';
import * as fs from "node:fs/promises";


const generateContacts = async (number) => {

    const newContacts = [];
    for (let i = 0; i < number; i++) {
        newContacts.push(createFakeContact());
    }

    try {
        const data = await fs.readFile(PATH_DB, "utf-8")
        const existingContacts = await JSON.parse(data);
        const updatedContacts = JSON.stringify([...existingContacts, ...newContacts], undefined, 2);
        await fs.writeFile(PATH_DB, updatedContacts, "utf-8");
        console.log(`${number} contacts generated`)
    } catch (error) {
        console.error("Following error occurred: ", error)
    }



};

generateContacts(5);



