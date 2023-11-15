class Student:
    # Class Attribute: belongs only yo the class and accessible to all objectsof the class
    school_name = "MIT"

    # Constructor
    def __init__(self,dict_data):
        # Attributes
        self.name = dict_data['name'] 
        self.age = dict_data['age']
        self.group = dict_data['group']
        self.fav_food = dict_data['fav_food']

    def increase_age(self,years=1):
        self.age+=years
        print('Happy Birthday')
        return self
    
    def change_name(self, new_name):
        self.name = new_name
        return self
        
    @classmethod
    def change_school_name(cls, new_name):
        cls.school_name = new_name
    
    @staticmethod
    def validate_student(data):
        is_valid = True 
        if len(data['name'])<2:
            is_valid = False
        if data['name']<18:
            is_valid = False

        return is_valid




john_data = {'name':"John", 'age':21, 'group':"A3", "fav_food": "pizza"}
alex_data = {'name':"Alex", 'age':25, 'group':"C3", "fav_food": "pizza"}
john = Student(john_data)
alex = Student(alex_data)
print(alex.school_name)
print(john.school_name)
Student.change_school_name('NewSchool')
print(alex.school_name)
print(john.school_name)

# Instance Methods: methods accessible by the instances
#  can change instance attributes
#   default parameter: self
#   no decorator

# Class Methods : methods accessible only by the class
    # can change class attributes (school_name)
    # default parameter : cls
    # decorator : @classmethod