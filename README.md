# 📝 NoteIt

A lightweight, file-based note-taking web app built with **Node.js**, **Express**, and **EJS** — no database required. Notes are stored as plain `.txt` files on the server, keeping things simple and fast.

---

## ✨ Features

- Create notes with a title and content
- View any saved note on its own page
- Rename existing notes
- Clean dark UI styled with Tailwind CSS
- Zero database setup — everything lives in flat files

---

## 🛠️ Tech Stack

| Layer      | Technology              |
|------------|--------------------------|
| Runtime    | Node.js                  |
| Framework  | Express.js               |
| Templating | EJS                      |
| Styling    | Tailwind CSS (via CDN)   |
| Storage    | Local `.txt` files       |

---

## 🚀 Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/aryanbhagat20/noteit-node.git
cd noteit-node
```

### 2. Install dependencies

```bash
npm install
```

### 3. Start the server

```bash
node index.js
```

### 4. Open in your browser

```
http://localhost:3000
```

---

## 📁 Project Structure

```
noteit-node/
├── files/              # Stored notes (as .txt files)
├── public/
│   ├── images/
│   ├── javascripts/
│   └── stylesheets/
├── views/
│   ├── index.ejs       # Home page — list & create notes
│   ├── show.ejs        # View a single note
│   └── edit.ejs        # Rename a note
├── index.js            # Main Express server
├── package.json
└── README.md
```

---

## 📌 Notes

- Notes are saved as `.txt` files inside the `/files` directory.
- The `/files` folder is excluded from version control via `.gitignore` to keep personal data private.
- No authentication — this is intended for local or personal use.

---

## 🙌 Author

Made with ❤️ by **Aryan**  
Feel free to fork, star ⭐, and build on top of it!
