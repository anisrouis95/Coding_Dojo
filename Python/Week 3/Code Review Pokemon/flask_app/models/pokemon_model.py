from flask_app.config.mysqlconnection import connectToMySQL
from flask_app import DATABASE
from flask import flash

class Pokemon:
    def __init__(self,data):
        self.id = data['id']
        self.name = data['name']
        self.type = data['type']
        self.power = data['power']
        self.hp = data['hp']
        self.img = data['img']
        self.created_at = data['created_at']
        self.updated_at = data['updated_at']
        self.user_id = data['user_id']

    @classmethod
    def get_all_for_user(cls,data):
        query = """
                SELECT p.* FROM pokemons p
                JOIN users u ON p.user_id = u.id
                WHERE u.id = %(user_id)s"""
        
        results = connectToMySQL(DATABASE).query_db(query,data)
        pokemons = []
        for result in results:
            pokemons.append(cls(result))
        return pokemons