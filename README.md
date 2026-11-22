# 🐍 PythonQuest — Learn Python

<p align="center">
  <strong>Learn Python. Practice Every Day. Keep Growing.</strong>
</p>

<p align="center">
  An interactive Python learning website designed to make programming simple, engaging, and beginner-friendly.
</p>

<p align="center">
  <img src="https://img.shields.io/badge/PythonQuest-Learning%20Platform-3776AB?style=for-the-badge&logo=python&logoColor=white" />
  <img src="https://img.shields.io/badge/Lessons-30-blue?style=for-the-badge" />
  <img src="https://img.shields.io/badge/Technology-HTML%20%7C%20CSS%20%7C%20JS-orange?style=for-the-badge" />
  <img src="https://img.shields.io/badge/Platform-Web-success?style=for-the-badge" />
</p>

---

## 📖 About PythonQuest

**PythonQuest** is a beginner-friendly Python learning website that helps users learn Python programming from basic to advanced concepts through structured lessons, simple explanations, practical code examples, and interactive multiple-choice quizzes.

The platform includes 30 learning topics, a quiz-based progression system, XP rewards, learning progress tracking, English and Hinglish language options, and Dark and Light themes.

Built using HTML, CSS, JavaScript, and JSON, PythonQuest provides a simple and engaging environment for learning Python step by step.

## ✨ Features

- 📚 **30 Learning Topics** — Structured Python learning roadmap.
- 🧠 **Simple Explanations** — Understand programming concepts easily.
- 💻 **Code Examples** — Learn with practical Python examples.
- 📝 **Interactive MCQ Quizzes** — Test your knowledge after every lesson.
- 🔓 **Topic Unlock System** — Unlock topics by passing quizzes.
- ⭐ **XP Rewards** — Earn 25 XP for each newly completed topic.
- 📊 **Progress Tracking** — Track completed topics and total XP.
- 🌐 **Language Options** — English and Hinglish support.
- 🌙 **Dark & Light Themes** — Switch between visual themes.
- 🔊 **Sound Effects** — Interactive audio feedback.
- 💾 **LocalStorage** — Save progress and preferences in your browser.
- 📱 **Responsive Design** — User-friendly web interface.
- ⚡ **PWA Support** — Web app manifest and service worker caching.

## 📚 Learning Roadmap

PythonQuest includes 30 topics organized into five learning stages.

| Level | Topics |
|---|---|
| 🟢 Beginner | Python Introduction, Syntax, Variables, Data Types, Input & Output, Operators, If Else, Loops, Strings, Lists, Tuples, Sets & Dictionaries |
| 🔵 Core | Functions, Modules & Packages, Exceptions, File Handling, Comprehensions |
| 🟣 Intermediate | OOP Basics, OOP Advanced, Iterators & Generators |
| 🔴 Advanced | Decorators, Context Managers, Regex, JSON, Dates, pip, Virtual Environments, APIs, SQLite, Testing, Type Hints, Async, Security and more |
| 🏆 Master | Final Python Challenge |

## 🎮 How It Works

1. Open PythonQuest.
2. Start with the first available topic.
3. Read the lesson and understand its examples.
4. Complete the topic's MCQ quiz.
5. Score more than 50% to pass.
6. Earn 25 XP and unlock the next topic.
7. Track your learning progress.

**Progress System:**

- 25 XP per newly completed topic.
- 30 topics in total.
- Up to 750 XP across all topics.
- Previously completed topics do not award XP again.

## 🛠️ Technologies Used

| Technology | Purpose |
|---|---|
| HTML5 | Website structure |
| CSS3 | Design, layout and animations |
| JavaScript | Application functionality |
| JSON | Lessons and quiz data |
| LocalStorage | Progress and settings |
| Web Audio API | Sound effects |
| Service Worker | Caching and offline fallback |
| Web App Manifest | PWA configuration |

## 📂 Project Structure

```text
LearnPython/
│
├── index.html
├── manifest.json
├── service-worker.js
├── .htaccess
│
├── css/
│   └── style.css
│
├── js/
│   ├── app.js
│   ├── config.js
│   └── topic-files.js
│
├── concept/
│   ├── topic01_python-introduction.json
│   ├── topic02_python-syntax-comments.json
│   ├── topic03_variables.json
│   └── ... (30 lesson files)
│
└── mcq/
    ├── topic01_python-introduction.json
    ├── topic02_python-syntax-comments.json
    ├── topic03_variables.json
    └── ... (30 quiz files)
```

## ⚙️ Installation & Setup

You can run PythonQuest locally without installing any additional frameworks.

**Step 1 — Clone the Repository**

```bash
git clone YOUR_GITHUB_REPOSITORY_URL
```

**Step 2 — Open Project Folder**

```bash
cd LearnPython
```

**Step 3 — Start Local Server**

```bash
python -m http.server 8000
```

**Step 4 — Open in Browser**

```text
http://localhost:8000
```

That's it! Start learning Python. 🚀

> Make sure to run the project using a local web server because the application loads lesson and quiz JSON files using JavaScript fetch requests.

## 💾 Progress & Data Storage

PythonQuest uses browser LocalStorage to store learning progress and preferences.

| Storage Key | Purpose |
|---|---|
| `pqLang` | Selected language |
| `pqCompleted` | Completed topics |
| `pqXP` | Total XP |
| `pqTheme` | Selected theme |
| `pqSound` | Sound preference |

**Note:** Progress is stored locally in the browser. It is not synchronized between different devices or browsers. Clearing browser storage may remove saved progress.

## 🌍 Deployment

PythonQuest is a static website and can be hosted using:

- GitHub Pages
- Netlify
- Vercel
- Apache Hosting
- cPanel Hosting

No backend server or database is required for the current version.

## 🔧 Configuration

You can customize social links and quiz settings in:

```text
js/config.js
```

Available configuration options include:

- Social media links
- Quiz passing score
- XP reward per completed topic

## 📸 Screenshots

Screenshots of PythonQuest will be added here.

<!-- Add your screenshots inside a screenshots folder -->

```text
screenshots/
├── home.png
├── roadmap.png
├── lesson.png
└── quiz.png
```

## 🔮 Future Improvements

Some ideas for future development:

- [ ] Interactive Python code editor
- [ ] User accounts and cloud progress synchronization
- [ ] More practical coding challenges
- [ ] Additional language support
- [ ] Achievement badges
- [ ] Learning certificates
- [ ] Advanced progress statistics

## 🤝 Contributing

Suggestions, improvements, and bug reports are welcome!

If you want to contribute:

1. Fork the repository.
2. Create a new branch.
3. Make your changes.
4. Test your changes.
5. Submit a Pull Request.

Let's make Python learning easier for everyone!

## 👨‍💻 Developer

**Ashish Yadav**

- GitHub: https://github.com/ashishyadav210
- Instagram: https://instagram.com/6_hf0
- YouTube: https://youtube.com/@Unknown_Reason
- Telegram: https://t.me/Unknown_Reason

## 📜 License

No separate LICENSE file is currently included. Please contact the developer for permission before redistributing or reusing the project.

---

<p align="center">
  <strong>🐍 PythonQuest</strong>
  <br />
  Learn Smart. Practice More. Master Python.
  <br /><br />
  Made with ❤️ for Python learners.
</p>
