import pg from 'pg';

const db=new pg.Pool({
    user: "postgres",
    host: "localhost",
    database: "Amazon",
    password: "2004",
    port: 5432,
});

export default db;