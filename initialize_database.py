import psycopg2

def initialize_database():
    conn = psycopg2.connect(
        user="postgres",
        password="",
        host="localhost",
        port="5432",
        database="mydb"
    )
    
    cur = conn.cursor()

    try:
        # Drop existing tables if they exist
        cur.execute("DROP TABLE IF EXISTS challenges;")
        cur.execute("DROP TABLE IF EXISTS employees;")
        cur.execute("DROP TABLE IF EXISTS users;")
        
        # Create users table
        cur.execute("""
            CREATE TABLE users (
                id SERIAL PRIMARY KEY,
                email TEXT UNIQUE,
                password TEXT,
                isAdmin BOOLEAN DEFAULT FALSE
            );
        """)

        # Create employees table
        cur.execute("""
            CREATE TABLE employees (
                id SERIAL PRIMARY KEY,
                userId INTEGER REFERENCES users(id),
                employeeNumber TEXT UNIQUE
            );
        """)

        # Create challenges table
        cur.execute("""
            CREATE TABLE challenges (
                id SERIAL PRIMARY KEY,
                userId INTEGER REFERENCES users(id),
                points INTEGER,
                challenge TEXT
            );
        """)

        conn.commit()
        print("Database initialized successfully.")
    except Exception as e:
        conn.rollback()
        print("Error initializing database:", e)
    finally:
        cur.close()
        conn.close()

if __name__ == "__main__":
    initialize_database()
