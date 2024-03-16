from fastapi import FastAPI
from azureSQL import connect_api


app = FastAPI()

app.include_router(connect_api.router)

@app.get("/")



async def root():# request asyncronic
    return "¡Hola Api!"