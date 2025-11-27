# AI Recommendation App

A simple AI-powered recommendation system using **FastAPI**, **OpenAI GPT**, and a **HTML/CSS/JS frontend**. Users type a query and get AI-generated responses in real-time.

---

## 🛠 Tech Stack
- **Backend:** FastAPI, Python 3.13, Uvicorn, OpenAI API  
- **Frontend:** HTML, CSS, JavaScript  
- **Environment:** `.env` for API keys (never upload to GitHub)

---

## 📂 Project Structure
```
ai-recommendation-app/
│
├── backend/
│   ├── main.py
│   └── .env
│
└── frontend/
    ├── index.html
    ├── style.css
    └── script.js
```

---

## ⚡ Run Locally

### 1️⃣ Backend
```bash
cd backend
pip install fastapi uvicorn python-dotenv langchain-openai
python -m uvicorn main:app --reload
```
Backend: `http://127.0.0.1:8000`

### 2️⃣ Frontend
Open `frontend/index.html` using Live Server.  
Frontend communicates with backend automatically.

---

## 🔗 API Endpoint
- **POST /recommend**  
Request:
```json
{"text": "What is AI?"}
```
Response:
```json
{"response": "AI stands for Artificial Intelligence..."}
```

---

## 📝 Features
- Real-time AI responses  
- Secure API key with `.env`  
- CORS enabled for frontend-backend communication  

---

## 📜 License
MIT License
