from ..config.mysqlconnection import connectToMySQL

class Movie:
    def __init__(self,data):
        self.id = data['id']
        self.title = data['title']
        self.year = data['year']
        self.created_at = data['created_at']
        self.updated_at = data['updated_at']
        self.filmmaker_id = data['filmmaker_id']

    @classmethod
    def getall(cls):
        query = "SELECT * FROM movies;"
        results = connectToMySQL ('filmmaker_db').query_db(query)
        movies = []
        for row in results:
            movies.append(cls(row))
        print(movies)
        return movies
    
    @classmethod
    def save(cls,data):
        query = "INSERT INTO movies (title,year,filmmaker_id) VALUES(%(title)s,%(year)s,%(filmmaker_id)s);"
        results = connectToMySQL ('filmmaker_db').query_db(query,data)
        return results
    
    @classmethod
    def get_by_id(cls,data):
        query = "SELECT * FROM movies WHERE id=%(id)s;"
        results = connectToMySQL ('filmmaker_db').query_db(query,data)
        return cls(results[0])
    
    @classmethod
    def edit(cls,data):
        query = "UPDATE movies SET title = %(title)s, year = %(year)s WHERE id = %(id)s"
        results = connectToMySQL ('filmmaker_db').query_db(query,data)
        return results