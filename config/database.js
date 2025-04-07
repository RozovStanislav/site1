const { Client } = require('pg');

const client = new Client({
    user: 'postgres.lbywewuxdspuufppebny',
    host: 'aws-0-us-east-1.pooler.supabase.com',
    database: 'postgres',
    password: 'lIBUUzubN5GPF9da',
    port: 6543,
    ssl: {
        rejectUnauthorized: true
    },
    connectionString: 'postgres://postgres.lbywewuxdspuufppebny:lIBUUzubN5GPF9da@aws-0-us-east-1.pooler.supabase.com:6543/postgres?sslmode=require&supa=base-pooler.x'
});

client.connect()
    .then(() => console.log('Connected to PostgreSQL database'))
    .catch(err => console.error('Connection error', err.stack));

module.exports = client;
