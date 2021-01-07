import dotenv from 'dotenv';

dotenv.config(); // busca el .env

const { ENV, PORT } = process.env;

export default {
    env: ENV,
    port: PORT,
}