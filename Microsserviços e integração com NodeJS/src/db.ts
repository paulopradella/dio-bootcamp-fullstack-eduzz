//configuração do banco de dados

import { Pool } from "pg";

const connectionString='/';

const db = new Pool({connectionString});

export default db;