import "dotenv/config";
import { PrismaPg } from "@prisma/adapter-pg";
import { PrismaClient } from "../../generated/prisma/client.ts";

const adapter = new PrismaPg({ connectionString: process.env.DATABASE_URL });
const prisma = new PrismaClient({
    adapter,
    log: process.env.NODE_ENV === "development" ? ["query", "error", "warn"] : ["error"],
});
  const connectDB = async () => {
    try {
      await prisma.$connect();
      console.log("Database connected successfully");
    } catch (error) {
      console.error("Database connection error:", error);
      process.exit(1); // Exit the process with an error code
    }
  };
    const disconnectDB = async () => {
    try {
      await prisma.$disconnect();
      console.log("Database disconnected successfully");
    } catch (error) {
      console.error("Database disconnection error:", error);
      process.exit(1); // Exit the process with an error code
    }
  }
    
  

export { prisma, connectDB, disconnectDB };