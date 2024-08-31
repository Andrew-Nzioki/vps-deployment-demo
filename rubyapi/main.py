from fastapi import FastAPI

app = FastAPI(
    docs_url="/"
)

@app.get("/rubyapi")
def read_root():
    return {"message": "Goodbye, World!"}
