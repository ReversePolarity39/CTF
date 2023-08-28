import pkg from 'pg';
const { Client } = pkg;

const client = new Client({
    user: 'postgres',
    host: 'localhost',
    database: 'mydb',
    password: 'admin',
    port: 5432,
});

async function initializeDatabase() {
    try {
        console.log('Connecting to database...');
        await client.connect();
        console.log('Connected to database.');

        const createTableQuery = `
            CREATE TABLE IF NOT EXISTS users (
                id SERIAL PRIMARY KEY,
                email TEXT UNIQUE,
                password TEXT,
                isAdmin BOOLEAN DEFAULT FALSE
            );

            CREATE TABLE IF NOT EXISTS employees (
                id SERIAL PRIMARY KEY,
                userId INTEGER REFERENCES users(id),
                employeeNumber TEXT UNIQUE
            );

            CREATE TABLE IF NOT EXISTS challenges (
                id SERIAL PRIMARY KEY,
                userId INTEGER REFERENCES users(id),
                points INTEGER,
                challenge TEXT
            );
        `;

        console.log('Executing query to create tables...');
        await client.query(createTableQuery);
        console.log('Tables created');

        console.log('Database initialization complete');
    } catch (error) {
        console.error('Error initializing database', error);
    }
}

async function checkCredentials(employeeNumber, password) {
    try {
        console.log('Checking credentials...');
        const query = `
            SELECT e.id
            FROM employees AS e
            JOIN users AS u ON e.userId = u.id
            WHERE e.employeeNumber = $1 AND u.password = $2
        `;
        console.log('Executing query to check credentials...');
        const result = await client.query(query, [employeeNumber, password]);
        console.log('Credentials checked');
        return result.rowCount > 0;
    } catch (error) {
        console.error('Error checking credentials', error);
        return false;
    }
}


async function insertUser(email, password, isAdmin) {
    try {
        console.log('Inserting user...');
        const insertQuery = `
            INSERT INTO users (email, password, isAdmin)
            VALUES ($1, $2, $3)
        `;
        console.log('Executing query to insert user...');
        await client.query(insertQuery, [email, password, isAdmin]);
        console.log('User inserted');
    } catch (error) {
        console.error('Error inserting user', error);
    }
}

async function insertEmployee(userId, employeeNumber) {
    try {
        console.log('Inserting employee...');
        const insertQuery = `
            INSERT INTO employees (userId, employeeNumber)
            VALUES ($1, $2)
        `;
        await client.query(insertQuery, [userId, employeeNumber]);
        console.log('Employee inserted');
    } catch (error) {
        console.error('Error inserting employee', error);
    }
}

async function insertChallenge(userId, points, challenge) {
    try {
        console.log('Inserting challenge...');
        const insertQuery = `
            INSERT INTO challenges (userId, points, challenge)
            VALUES ($1, $2, $3)
        `;
        await client.query(insertQuery, [userId, points, challenge]);
        console.log('Challenge inserted');
    } catch (error) {
        console.error('Error inserting challenge', error);
    }
}

export { initializeDatabase, checkCredentials, insertUser, insertEmployee, insertChallenge };
