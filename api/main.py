from fastapi import FastAPI

app = FastAPI(
    docs_url="/"
)

@app.get("/api")
def read_root():
    return {"message": "Hello, World!"}
