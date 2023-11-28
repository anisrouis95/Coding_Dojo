from ..config.mysqlconnection import connectToMySQL

class Ninjas:
    def __init__(self,data):
        self.id = data['id']
        self.first_name = data['first_name']
        self.last_name = data['last_name']
        self.age = data['age']
        self.created_at = data['created_at']
        self.updated_at = data['updated_at']

    @classmethod
    def getallninjas(cls):
        query = "SELECT * FROM ninjas;"
        results = connectToMySQL ('dojos_and_ninjas_db').query_db(query)
        ninja = []
        for row in results:
            ninja.append(cls(row))
        print(ninja)
        return ninja
    
    @classmethod
    def saveninja(cls,data2):
        query = "INSERT INTO ninjas (first_name,last_name,age) VALUES(%(first_name)s,%(last_name)s,%(age)s);"
        results = connectToMySQL ('dojos_and_ninjas_db').query_db(query,data2)
        return results
    
    @classmethod
    def get_by_id_ninja(cls,data):
        query = "SELECT * FROM ninjas WHERE id=%(id)s;"
        results = connectToMySQL ('dojos_and_ninjas_db').query_db(query,data)
        return cls(results[0])
    