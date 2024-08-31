from fastapi import FastAPI

app = FastAPI(
    docs_url="/"
)

@app.get("/health")
def read_root():
    return {"message": "Hello, World!"}
