import { db } from '@lib/base/db/indexDB';
import { Params } from '@lib/models';

class ParamsRepo
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

export default new ParamsRepo();