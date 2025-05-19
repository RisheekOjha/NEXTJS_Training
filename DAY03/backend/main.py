# backend/main.py
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel

app = FastAPI()

# Allow CORS for your Next.js frontend (adjust the URL accordingly)
origins = [
    "http://localhost:3000",  # Next.js dev server
    # add your deployed frontend URL here later
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

class Item(BaseModel):
    key: str

@app.post("/data")
async def receive_data(item: Item):
    # You can process the item here
    return {"message": f"Received: {item.key}"}
