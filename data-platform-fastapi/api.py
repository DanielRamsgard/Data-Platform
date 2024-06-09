from fastapi import FastAPI, HTTPException
from pydantic import BaseModel
import numpy as np
import scipy

app = FastAPI()


class Matrix(BaseModel):
    tensor: list
    vector: list


class Tensor(BaseModel):
    matrix: list


@app.post("/gausselim")
def rref(matrix : Matrix):
    try:
        solution = np.linalg.solve(matrix.tensor, matrix.vector)
        return solution.tolist()
    except Exception as e:
        return HTTPException(status_code=500, detail=f"Exception: {e}")
    

@app.post("/eigen")
def eigen(tensor : Tensor):
    try:
        eigenvalues, eigenvectors = np.linalg.eig(tensor.matrix)
        return {"Eigenvalues": eigenvalues.tolist(), "Eigenvectors": eigenvectors.tolist()}
    except Exception as e:
        return HTTPException(status_code=500, detail=f"Exception: {e}")
    

@app.post("/svd")
def eigen(tensor : Tensor):
    try:
        U, s, Vt = np.linalg.svd(tensor.matrix)
        return {"U": U.tolist(), "s": s.tolist(), "Vt": Vt.tolist()}
    except Exception as e:
        return HTTPException(status_code=500, detail=f"Exception: {e}")
    

@app.post("/qr")
def eigen(tensor : Tensor):
    try:
        Q, R = np.linalg.qr(tensor.matrix)
        return {"Q": Q.tolist(), "R": R.tolist()}
    except Exception as e:
        return HTTPException(status_code=500, detail=f"Exception: {e}")
    

@app.post("/lu")
def eigen(tensor : Tensor):
    try:
        P, L, U = scipy.linalg.lu(tensor.matrix)
        return {"P": P.tolist(), "L": L.tolist(), "U": U.tolist()}
    except Exception as e:
        return HTTPException(status_code=500, detail=f"Exception: {e}")