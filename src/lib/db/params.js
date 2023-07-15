import { db } from '@base/db';

class ParamsRepository
{
    getUserParams()
    {
        return db.params.get(Params.userId);
    }
    
    updateUserParams(params)
    {
        return db.params.update(Params.userId, params);
    }
}

export const ParamsRepo = new ParamsRepository();
export class Params
{
    // Id used for user params
    static userId = "user";

    constructor()
    {
        this.id = Params.userId;
        this.favoriteAccountId = "";
        // XXX : not used yet, seems a bit overkill
        this.saveDataLocallyOnClose = true;
        this.saveImportedFiles = true;
    }
}