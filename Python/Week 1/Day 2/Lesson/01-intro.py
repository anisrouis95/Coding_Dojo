# ? OOP : Object Oriented Programming
# ? Class : Template or blueprint to create objects (instances)

#Attributes : what the object can have : characteristics : nouns
# Methods : what the object can do : functions inside the class: Actions : Verbs

class Car:
    # Constructor
    def __init__(self, model_value, make_value, power_value, color_value, is_electric_value = True):
        # Attributes
        # Attributes = values
        self.miles = 0
        self.model = model_value
        self.make = make_value
        self.power = power_value
        self.color = color_value
        self.is_electric = is_electric_value

    def drive(self):
        self.miles += 10
        print(self.miles, "miles")
        return self
    
    def beep(self):
        print("Beeep Beeeeeep")
        return self
    
    
    # Methods 
tesla = Car("X1", "Tesla", 10, "Red")
print("First Car Object :", tesla)
print(f"MODEL : {tesla.model} \nMAKE : {tesla.make} \nPOWER : {tesla.power} \nCOLOR : {tesla.color}")
print(tesla.miles)
tesla.drive().drive().beep().drive().beep()