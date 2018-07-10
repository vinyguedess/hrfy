import * as fs from "fs";
import * as path from "path";


export default class DAO 
{

    constructor(collection) 
    {
        this.collection = collection;
    }

    find(search = {}, limit = null, offset = null) 
    {
        let results = this.loadCollection().data;
        results = results.filter(item => 
        {
            let okay = false;
            Object.keys(search).forEach(key => 
            {
                const value = search[key];
                if (!value)
                    return okay = true;

                if (item[key] === value || item[key] == value || item[key].includes(value))
                    okay = true;
            });

            return okay;
        });

        if (offset)
            results = results.filter((d, index) => index >= offset);

        if (limit)
            results = results.filter((d, index) => index <= limit);

        return results;
    }

    count(search = {}) 
    {
        let results = this.loadCollection().data;
        return results.filter(item => 
        {
            let okay = false;
            Object.keys(search).forEach(key => 
            {
                const value = search[key];
                if (!value)
                    return okay = true;

                if (item[key] === value || item[key] == value || item[key].includes(value))
                    okay = true;
            });

            return okay;
        }).length;
    }

    loadCollection() 
    {
        return JSON.parse(fs.readFileSync(path.resolve("storage", `${this.collection}.json`), { encoding: "utf8" }));
    }

}