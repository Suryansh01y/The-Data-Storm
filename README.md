# The Data Hub – RESTful API Server

## About the Project
The Data Hub is a RESTful API built using Node.js, Express.js, MongoDB, and Mongoose. It provides APIs to create, retrieve, and delete posts. Each post can be associated with a user, allowing author details to be retrieved using Mongoose populate.

## Technologies Used
- Node.js
- Express.js
- MongoDB Atlas
- Mongoose
- Postman
- dotenv
 
## Links

Live:- https://the-data-storm-7j9f.onrender.com/

Video:- https://drive.google.com/file/d/1u7qFXvATzFr7tDi-N6FqBC6arjw5nkW7/view?usp=drive_link

## Features
- Create new posts using a POST request.
- Retrieve all posts from the database.
- Delete posts using their ID.
- Associate posts with users using MongoDB ObjectId references.
- Retrieve author details using Mongoose `populate()`.
- Fetch the three most recent posts.
- Handle invalid IDs and posts that do not exist.
- Store application configuration in environment variables.

## Project Setup

### 1. Clone the Repository
```bash
git clone <your-repository-url>
```

Navigate to the project directory:

```bash
cd <project-folder>
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Configure Environment Variables

Create a `.env` file in the root directory and add:

```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
```

Replace `your_mongodb_connection_string` with your MongoDB Atlas connection string.

**Important:** Never upload your `.env` file or expose your database credentials on GitHub.

### 4. Start the Server

Run the development server:

```bash
npm run dev
```

If the project does not have a `dev` script, use the start command defined in `package.json`.

The server will run on the configured port, for example:

`http://localhost:5000`

## API Endpoints

| HTTP Method | Endpoint | Description |
|---|---|---|
| GET | `/` | Check API status |
| POST | `/posts` | Create a new post |
| GET | `/posts` | Retrieve all posts |
| DELETE | `/posts/:id` | Delete a post by ID |
| GET | `/posts/recent` | Retrieve the three most recent posts |

## API Testing

The API endpoints were tested using Postman.

Testing included:
- Creating posts.
- Retrieving all posts.
- Deleting posts.
- Retrieving the three most recent posts.
- Checking author details using `populate()`.
- Testing invalid IDs and non-existent posts.

## Database

MongoDB Atlas is used as the cloud database, and Mongoose manages database connections, schemas, and models.

The project includes Post and User models. Posts can reference users through ObjectId references, making it possible to retrieve associated author details.



