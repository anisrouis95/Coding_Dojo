from ..config.mysqlconnection import connectToMySQL

class Moviemaker:
    def __init__(self,data):
        self.id = data['id']
        self.name = data['name']
        self.created_at = data['created_at']
        self.updated_at = data['updated_at']

    @classmethod
    def getall(cls):
        query = "SELECT * FROM filmmakers;"
        results = connectToMySQL ('filmmaker_db').query_db(query)
        makers = []
        for row in results:
            makers.append(cls(row))
        print(makers)
        return makers
    
    @classmethod
    def save(cls,data):
        query = "INSERT INTO filmmakers (name) VALUES(%(name)s);"
        results = connectToMySQL ('filmmaker_db').query_db(query,data)
        return results
    
    @classmethod
    def get_by_id(cls,data):
        query = "SELECT * FROM filmmakers WHERE id=%(id)s;"
        results = connectToMySQL ('filmmaker_db').query_db(query,data)
        return cls(results[0])
    
    @classmethod
    def edit(cls,data):
        query = "UPDATE filmmakers SET name = %(name)s WHERE id = %(id)s"
        results = connectToMySQL ('filmmaker_db').query_db(query,data)
        return results