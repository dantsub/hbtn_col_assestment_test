from fastapi.security import OAuth2PasswordBearer, OAuth2PasswordRequestForm


SECRET_KEY = "1cc31fff7581f76d084254d19012b0d12a721dce5cafb16464b4dcc1d4e75d8f"
ALGORITHM = "HS256"

ACCESS_TOKEN_EXPIRE_MINUTES = 30
oauth2_scheme = OAuth2PasswordBearer(tokenUrl="token")
