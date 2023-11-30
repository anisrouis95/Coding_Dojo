from flask_app.config.mysqlconnection import connectToMySQL
from flask_app import DATABASE
from flask import flash
import re

EMAIL_REGEX = re.compile(r'^[a-zA-Z0-9.+-]+@[a-zA-Z0-9._-]+.[a-zA-Z]+$')

class User:
    def __init__(self,data):
        self.id = data['id']
        self.first_name = data['first_name']
        self.last_name = data['last_name']
        self.email = data['email']
        self.password = data['password']
        self.created_at = data['created_at']
        self.updated_at = data['updated_at']

    @classmethod
    def create(cls,data):
        query = """
                INSERT INTO users (first_name,last_name, email, password)
                        VALUES (%(first_name)s,%(last_name)s, %(email)s, %(password)s);"""
        
        return connectToMySQL(DATABASE).query_db(query,data)

    
    @classmethod
    def get_by_id(cls,data):
        query = """ SELECT * FROM users WHERE id=%(id)s;"""
        result = connectToMySQL(DATABASE).query_db(query,data)
        print ("*****",result,"*****")
        user = cls(result[0])
        return user
    
    @classmethod
    def get_by_email(cls,data):
        query = """ SELECT * FROM users WHERE email=%(email)s;"""
        result = connectToMySQL(DATABASE).query_db(query,data)
        print ("*****",result,"*****")
        if result:
            return cls(result[0])
        return False
    
    @staticmethod
    def validate(data):
        is_valid=True
    # First Name Validation
        if len(data ['first_name'])<2:
            flash("First Name must be at least 3 caracters","reg")
            is_valid=False
    # Last Name Validation
        if len(data ['last_name'])<2:
            flash("Last Name is required","reg")
            is_valid=False
    
    # EMAIL Validation
        if not EMAIL_REGEX.match(data['email']): 
            flash("Email is not Valid!","reg")
            is_valid = False

    # PASSWORDS Validation
        if len(data['password'])<6:
            flash("Password must be 6 characters!","reg")
            is_valid=False
    # PASSWORD CONFIM Validation
        elif data['password']!= data['confirm_password']:
            flash("Passwords must match!", "reg")
            is_valid=False

        return is_valid