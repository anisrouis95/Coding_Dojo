class Pet:
    def __init__(self,name,type,tricks):
        self.name = name
        self.type = type
        self.tricks = tricks
        self.health = 100
        self.energy = 100

    def sleep(self):
        self.energy += 25
        return self
    
    def eat(self):
        self.energy += 5
        self.health += 10
        return self
    
    def play(self):
        self.health += 5
        return self
    
    def run(self):
        self.energy -= 5
        return self
    
    def noise(self):
        if (self.type =="Dog"):
            print("Woof!")
        elif (self.type == "Cat"):
            print("Meow!")
        else:
            print("Mooooooo")
        return self

pet = Pet("Rex","Dog",["bite","lick"])
pet.sleep().eat().play().run().noise()
