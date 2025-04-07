const { Client } = require('pg');

const client = new Client({
    user: 'postgres.lbywewuxdspuufppebny',
    host: 'aws-0-us-east-1.pooler.supabase.com',
    database: 'postgres',
    password: '11111',
    pool_mode 'transaction',
    port: 6543,
});

client.connect();

module.exports = client;
