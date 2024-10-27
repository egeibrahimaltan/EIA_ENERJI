from sqlalchemy import create_engine, inspect
from main import app, db

def check_tables():
    with app.app_context():
        # Veritabanı bağlantısını al
        engine = db.engine
        # SQLAlchemy inspector kullanarak tablo isimlerini al
        inspector = inspect(engine)
        tables = inspector.get_table_names()
        print(tables)

if __name__ == "__main__":
    check_tables()
