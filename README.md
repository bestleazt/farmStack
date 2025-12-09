# FastAPI + React + Nginx + Docker Compose

โปรเจกต์นี้ประกอบด้วย Backend (FastAPI), Frontend (React), และ Nginx สำหรับ serve frontend + reverse proxy  
รองรับ Docker Compose ให้สามารถรันทั้งหมดได้เพียงคำสั่งเดียว

---

## 🧱 Tech Stack
- **FastAPI** (Python)
- **React** (Create React App)
- **Nginx** (Reverse proxy + static hosting)
- **Docker Compose**
- (Optional) MongoDB or Database ที่จะต่อภายหลัง

--- 

---

## 🚀 การใช้งานแบบไม่ใช้ Docker

### 1) Backend (FastAPI)

#### Install dependencies
```bash
cd backend
pip install -r requirements.txt
Run FastAPI server
bash
คัดลอกโค้ด
python src/server.py
หรือใช้ Uvicorn:

bash
คัดลอกโค้ด
uvicorn src.server:app --reload
API Docs:
👉 http://localhost:8000/docs

2) Frontend (React)
bash
คัดลอกโค้ด
cd frontend
npm install
npm start
Frontend จะรันที่:
👉 http://localhost:3000/

🐳 การรันด้วย Docker Compose (แนะนำ)
จาก root project:

bash
คัดลอกโค้ด
docker compose up --build
