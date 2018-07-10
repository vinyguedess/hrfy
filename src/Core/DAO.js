import * as fs from "fs";
import * as path from "path";


export default class DAO
{

    constructor(collection)
    {
        this.collection = collection;
    }

    find()
    {
        return this.loadCollection().data;
    }

    loadCollection()
    {
        return JSON.parse(fs.readFileSync(path.resolve("storage", `${this.collection}.json`), { encoding: "utf8" }));
    }

}