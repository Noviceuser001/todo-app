# Todo App

A full-stack todo application built with Node.js, Express.js, MongoDB, and EJS templating engine. This app allows users to create, read, update, and delete todos with a clean and responsive interface.

## Features

- ✅ **Create** new todos with title and description
- ✅ **View** all todos in a organized table format
- ✅ **Update** existing todos
- ✅ **Delete** todos with confirmation
- ✅ **Timestamps** showing when todos were created and updated
- ✅ **Responsive design** with clean CSS styling
- ✅ **MongoDB** database integration
- ✅ **RESTful API** structure

## Tech Stack

- **Backend:** Node.js, Express.js
- **Database:** MongoDB with Mongoose ODM
- **Frontend:** EJS templating engine, HTML5, CSS3
- **Development:** Nodemon for auto-restart

## Prerequisites

Before running this application, make sure you have the following installed:

- Node.js (v14.0.0 or higher)
- MongoDB (local installation or MongoDB Atlas account)
- npm (comes with Node.js)

## Installation

1. **Clone the repository**
```bash
git clone https://github.com/YOUR_USERNAME/todo_app.git
cd todo_app
```

2. **Install dependencies**
```bash
npm install
```

3. **Set up environment variables**
Create a `.env` file in the root directory:
```env
CONNECTION_URL=mongodb://localhost:27017/todoapp
PORT=6969
```

4. **Start MongoDB**
Make sure MongoDB is running on your system:
```bash
# For local MongoDB installation
mongod
```

5. **Run the application**
```bash
# Development mode (with nodemon)
npm start

# Or directly with node
node index.js
```

6. **Access the application**
Open your browser and navigate to: `http://localhost:6969`

## Project Structure

```
todo_app/
├── controllers/
│   └── todo.js              # Todo controllers (CRUD operations)
├── init/
│   └── mongodb.js           # MongoDB connection setup
├── models/
│   └── todo.js              # Todo model/schema
├── public/
│   └── css/
│       └── style.css        # Application styles
├── routes/
│   └── todo.js              # Express routes
├── views/
│   ├── partials/
│   │   ├── header.ejs       # Header partial
│   │   └── footer.ejs       # Footer partial
│   ├── index.ejs            # Home page (todo list)
│   ├── newTodo.ejs          # Add new todo page
│   ├── updateTodo.ejs       # Update todo page
│   └── deleteTodo.ejs       # Delete confirmation page
├── app.js                   # Express app configuration
├── index.js                 # Server entry point
├── package.json             # Dependencies and scripts
└── README.md                # Project documentation
```

## API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/` | Display all todos |
| GET | `/add-todo` | Show add todo form |
| POST | `/add-todo` | Create a new todo |
| GET | `/update-todo?id=:id` | Show update todo form |
| POST | `/update-todo/:id` | Update a specific todo |
| GET | `/delete-todo?id=:id` | Show delete confirmation |
| GET | `/confirm-delete` | Delete a specific todo |

## Database Schema

```javascript
{
  title: {
    type: String,
    required: true
  },
  desc: {
    type: String
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
  updatedAt: {
    type: Date,
    default: Date.now
  }
}
```

## Usage

1. **Adding a Todo:** Click "Add todo" button, fill in the title and description, then submit.

2. **Viewing Todos:** All todos are displayed on the home page with creation and update timestamps.

3. **Updating a Todo:** Click the "Edit" button next to any todo, modify the details, and save.

4. **Deleting a Todo:** Click the "Delete" button, confirm the action when prompted.

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is open source and available under the [MIT License](LICENSE).

## Contact

Your Name - your.email@example.com

Project Link: [https://github.com/Novice_user001/todo_app](https://github.com/Noviceuser001/todo_app)

## Acknowledgments

- Express.js for the web framework
- MongoDB for the database
- EJS for templating
- Moment.js for date formatting
