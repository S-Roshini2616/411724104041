from fastapi import APIRouter
router=APIRouter()
@router.get("/users")
def get_data():
    return "Get Data"

@router.post("/users/post")
def post_data():
    return "Post Data"

@router.put("/users/put")
def put_data(id):
    return "Put Data"+id

@router.patch("/users/patch")
def patch_data():
    return "Patch Data"
@router.delete("/users/delete")
def delete_data():
    return "Delete Data"
