from character import Character
class Barbarian(Character):
    def __init__(self, name):
        super().__init__(name)
        self.rage = 70
        self.power = self.power+20

conan = Barbarian("Conan")
print ("Rage: ",conan.rage)