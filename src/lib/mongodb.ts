import mongoose from "mongoose";

const MONGODB_URI = process.env.MONGODB_URI as string;

if (!MONGODB_URI) {
    throw new Error("Please define the MONGODB_URI environment variable");
}

let cached = (global as any).mongoose || { conn: null, promise: null };

async function ConnectMonogDB() {
    if (cached.conn) return cached.conn;
    if (!cached.promise) {
        cached.promise = await mongoose.connect(MONGODB_URI, {
            dbName: "coinX",
            bufferCommands: false,
        }).then((mongoose) => mongoose);
    }
    cached.conn = await cached.promise;
    return cached.conn;
}

export default ConnectMonogDB;
