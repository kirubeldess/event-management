import mongoose from 'mongoose'

const MONGODB_URI = process.env.MONGODB_URI

let cached = (global as any).mongoose || {conn:null, promise:null};     //stores a cached connection in the global object (global.mongoose) to prevent unnecessary reconnections.

export const connectToDatabase = async()=>{ 
    if (cached.conn) return cached.conn;    //If cached.conn (an existing connection) is available, it is returned immediately to avoid creating a new connection.

    if(!MONGODB_URI) throw new Error("MONGODB_URI is missing");

    cached.promise = cached.promise || mongoose.connect(MONGODB_URI, {
        dbName: 'eventEase',
        bufferCommands: false,
    })

    cached.conn = await cached.promise;

    return cached.conn;
}

