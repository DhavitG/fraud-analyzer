# Fraud Wallet Risk Analyzer + Incident Reporter

A full-stack application for analyzing Ethereum wallet addresses to assess fraud risk and manage reports. Features real-time data processing and a modern responsive UI.

## Features
- **Risk Assessment**: Scan Ethereum wallets for fraud risk levels
- **Incident Management**: Submit/view fraud reports with detailed metadata
- **Modern Stack**: Built with React, Node.js, and MongoDB
- **Cloud Deployment**: Hosted on Render with CI/CD pipeline

## Tech Stack

| Component       | Technologies                          |
|-----------------|---------------------------------------|
| **Frontend**    | React 18 + Vite + TailwindCSS         |
| **Backend**     | Node.js 20 + Express                  |
| **Database**    | MongoDB (Mongoose ODM)                |
| **Hosting**     | Render (Static Site & Node Service)   |

## Project Structure
```
fraud-analyzer/
├── client/            # React frontend (Vite)
│   ├── src/           # Application source
│   └── dist/          # Production build
├── backend/           # Express API server
│   ├── models/        # MongoDB schemas
│   └── routes/        # API endpoints
└── README.md          # Project documentation
```

## Prerequisites
- Node.js v16+
- MongoDB (Local or Atlas)
- Git
  
## Deployment
[Production URL](https://fraud-analyzer-dhavit.onrender.com)

## Local Development

### 1. Clone Repository
```
git clone https://github.com/DhavitG/fraud-analyzer.git
cd fraud-analyzer
```

### 2. Backend Setup
```
cd backend
npm install
echo "MONGO_URI=" > .env
npm start  # http://localhost:5001
```

### 3. Frontend Setup
```
cd ../client
npm install
npm run dev  # http://localhost:5173
```


### Frontend
1. Build production bundle:
```
cd client && npm run build
```
2. Deploy `dist/` to Render as Static Site
3. Configure proxy in `vite.config.js`:
```
server: {
  proxy: {
    "/api": "https://fraud-analyzer-backend.onrender.com"
  }
}
```

### Backend
1. Deploy as Node.js service on Render
2. Set environment variables:
```
MONGO_URI=
NODE_ENV=production
```

## API Reference

| Method | Endpoint                  | Description                     |
|--------|---------------------------|---------------------------------|
| GET    | `/api/risk/:walletAddress`| Get risk assessment & history   |
| POST   | `/api/report`             | Submit fraud report             |

**Sample Request**
```
curl -X POST https://fraud-analyzer-backend.onrender.com/api/report \
  -H "Content-Type: application/json" \
  -d '{"walletAddress":"0xD34DB33F...","reason":"Phishing scam"}'
```

## Test Addresses
- `0xD34DB33F0000000000000000000000000000B4D`
- `0xABADFACECAFEBABE0000000000000000000DEAD`
- `0xFEEDC0DE123456789000000000000000000BEEF`
- `0xC0FFEE000000000000000000000000000000CAFE`
- `0xBAADF00D0000000000000000000000000000DEAD`
- `0xFACEB00C0000000000000000000000000000BADA`

## Contributing
1. Fork repository
2. Create feature branch: `git checkout -b feat/new-feature`
3. Commit changes: `git commit -m "Add new feature"`
4. Push to branch: `git push origin feat/new-feature`
5. Open Pull Request

## Part 2
- Created a second branch to add further functionalities. (might merge)

## License
MIT - See [LICENSE](LICENSE) for details

---

**Maintained by [DhavitG](https://github.com/DhavitG)**  


