FROM python:3.10

COPY  data data
COPY routers routers
COPY static static
COPY main.py main.py
COPY requirements.txt requirements.txt

RUN pip install --no-cache-dir --upgrade -r requirements.txt

CMD ["uvicorn", "main:app", "--host", "0.0.0.0", "--port", "80"]