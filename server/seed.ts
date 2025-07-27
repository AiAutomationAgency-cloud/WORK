// This file is deprecated - the application now uses in-memory storage
// with built-in seeding. See server/storage.ts for the current implementation.

export async function seedDatabase() {
  // No longer used - replaced by MemoryStorage.seedData() method
  console.log("⚠️ This seeding method is deprecated - using in-memory storage instead");
  
  // The application now uses MemoryStorage which seeds data automatically
  // when storage.seedData() is called in server/index.ts
  return Promise.resolve();
}