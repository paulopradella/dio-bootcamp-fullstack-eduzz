//configuração do banco de dados

import { Pool } from "pg";

const connectionString='postgres://tuvyqaqt:RxfRd4R8gHa3CW586j6vj9Dau_mrbNyt@kesavan.db.elephantsql.com/tuvyqaqt';

const db = new Pool({connectionString});

export default db;