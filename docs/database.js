const Database = require("better-sqlite3");

// Database for user (id, username, password, name, age, wake_up_time, bedtime)
const user_db = new Database("user.db");

const stmt = user_db.prepare(`
    SELECT name FROM sqlite_master WHERE type='table' and name='userinfo';
`);

let row = stmt.get();

if (row == undefined) {
    const sqlInit = `
        CREATE TABLE userinfo (
        id INTEGER PRIMARY KEY,
        username TEXT,
        password TEXT,
        name TEXT,
        age NUMBER,
        wake_up_goal NUMBER,
        bedtime_goal NUMBER,
    );
    `;
    user_db.exec(sqlInit);
}

// Database for user logs based on their id (id, date, first_meal_time, last_meal_time)
const log_db = new Database("log.db");

stmt = log_db.prepare(`
    SELECT name FROM sqlite_master WHERE type='table' and name='userlog';
`);

row = stmt.get();

if (row == undefined) {
    const sqlInit = `
        CREATE TABLE userlog(
        id NUMBER,
        date NUMBER,
        first_meal_time NUMBER,
        last_meal_time NUMBER,
        wake_up_time NUMBER,
        bedtime NUMBER,
    );
    `;
    log_db.exec(sqlInit);
}

module.exports = {user_db, log_db};



