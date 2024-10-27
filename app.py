from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from flask_mail import Mail
from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from flask_migrate import Migrate
app = Flask(__name__)

# Veritabanı ayarları
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///your_database.db'  # Veritabanı bağlantısı
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

# Mail ayarları
app.config['MAIL_SERVER'] = 'smtp.gmail.com'  # Gmail kullanıyorsanız
app.config['MAIL_PORT'] = 587
app.config['MAIL_USE_TLS'] = True
app.config['MAIL_USERNAME'] = 'your-email@gmail.com'
app.config['MAIL_PASSWORD'] = 'your-email-password'
app.config['MAIL_DEFAULT_SENDER'] = 'your-email@gmail.com'

# Veritabanı ve Mail nesneleri
db = SQLAlchemy(app)
mail = Mail(app)

# Blueprint'ler veya diğer route'lar burada eklenebilir
