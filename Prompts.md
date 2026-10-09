# Prompts.md — Sprint 10 AI Learning Log

AI assistance was used as a learning and debugging aid. I reviewed the concepts, verified implementation details, and tested the application myself.

## Learning and debugging prompts

1. Explain the difference between in-memory storage and persistent MongoDB storage.
2. Explain how MongoDB Atlas connects to an Express.js application through Mongoose.
3. Explain Mongoose schemas, models, validation, and timestamps.
4. Explain how to keep a MongoDB connection string in environment variables.
5. Explain how `Post.create()`, `Post.find()`, and `Post.findByIdAndDelete()` work.
6. Explain how to validate MongoDB ObjectIds and return appropriate HTTP status codes.
7. Explain how MongoDB references and Mongoose `.populate()` associate posts with users.
8. Explain how sorting by `createdAt: -1` and `.limit(3)` retrieves the three most recent posts.
9. Explain how to test POST, GET, and DELETE endpoints in Postman.
10. Help me diagnose database connection errors without exposing credentials.

## Learning outcomes

- Understood persistent storage with MongoDB Atlas.
- Practiced Mongoose model and schema design.
- Connected Express routes to database queries.
- Learned to validate requests and handle missing or invalid resources.
- Practiced references, `.populate()`, sorting, and limiting query results.
- Learned to keep credentials out of source control.
