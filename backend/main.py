from fastapi import FastAPI
from azureSQL import connect_api
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()
app.add_middleware(
    CORSMiddleware,
    allow_origins=["https://ambitious-plant-097b5610f.5.azurestaticapps.net"],  # Frontend origin
    allow_credentials=True,
    allow_methods=["GET", "POST"],  # Only allow methods you use
    allow_headers=["Authorization", "Content-Type"],  # Only allow headers you use
)

app.include_router(connect_api.router)

@app.get("/")



async def root():# request asyncronic
    return "¡Hola Api!"