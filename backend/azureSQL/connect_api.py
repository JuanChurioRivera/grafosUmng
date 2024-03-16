from fastapi import APIRouter
from .connect_logic import azure_con

router = APIRouter()

@router.get("/Allrows")
async def get_Allrows():
    result = azure_con().getTable()
    return {'result:': result}

@router.post("/insertRows")
async def post_insertRow():
    result = azure_con().insertRow()
    return result
