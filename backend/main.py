from fastapi import FastAPI
from azureSQL import connect_api
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # Allows all origins
    allow_credentials=True,
    allow_methods=["*"],  # Allows all methods
    allow_headers=["*"],  # Allows all headers
)

app.include_router(connect_api.router)

@app.get("/")



async def root():# request asyncronic
    return "¡Hola Api!"