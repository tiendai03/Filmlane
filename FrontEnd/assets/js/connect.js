const sql = require('mssql/msnodesqlv8');

const config = {
    user: 'sa',
    password: 'Ntd2003',
    server: 'DESKTOP-90S4DOS',
    database: 'XEMPHIM',
    driver: 'msnodesqlv8'
};

const conn = new sql.ConnectionPool(config).connect().then(pool => {
    return pool;
});

module.exports = {
    conn: conn,
    sql: sql
}