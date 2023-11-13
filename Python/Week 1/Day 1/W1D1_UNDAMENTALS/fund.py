# Variable declaration:
# JS: var variableName = value
first_variable = "Hello World"
"""
JS:camelCase
Python : snake_case
C#/JAVA : PascalCase
"""

# GLOBAL _VARIABLE
APP_NAME = "E-COMMERCE"
PORT = 5000

# DATA Types
    #Primitive
        #String
first_name = "Alex"
last_name = "Max"
        # Number
            # int
age = 35
            # float
rate = 2.25
        # Boolean
is_admin = False
has_voted = True
        # NoneType
permit = None

print(first_name, last_name)
# F-String
# print(f"This is the age{age} injected inside this text")
# print(f"User fullname is {first_name} {last_name} he is {age} years old")
# print (type(first_name), type(age), type(rate), type(is_admin), type(permit))

    # Composite
# Lists = Arrays in JS
first_list = [1,2,3,4,5]
# print (first_list)
# print(type(first_list))
# print(len(first_list))

max_list = [1,2.5,True,"Yes",None, age, first_name, [10,20,30]]
print(max_list)
max_list.append('NO')
print(max_list)
max_list.pop()
print (max_list)



# Dictionaries = Object in JS {Key:Value}
first_dict = {
    "first_name": first_name,
    "last_name":last_name,
    "grades":[9.2,8.6,10],
    "user_age":28
}
print(first_dict["first_name"])
first_dict["is_admin"]=False
print(first_dict)

# Tuples:Similar to lists but cannot be changed
first_tuple = (1,2,3)
print(first_tuple[1])

# SET
numbers = [1,1,2,2,2,2,3,4,5,6,77,77]
first_set = set(numbers)
print(first_set)