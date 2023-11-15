class Character:
    def __init__(self,name):
        self.name = name
        self.power = 50
        self.health = 50
        self.defence = 30
        self.ability = 10

    def attack(self,enemy):
        enemy.health-=self.power/2
        enemy.defence-=20
        print(f"[ATTACK] {self.name} attacked {enemy.name} and caused damage of {self.power}")
        return self
    def __repr__(self):
        return f"[NAME] : {self.name}\n[POWER] : {self.power}\n[HEALTH] : {self.health}\n[DEFENCE] : {self.defence}\n[ABILITY] : {self.ability}"
    
    def defend(self, damage):
        self.health-=(damage-(self.defence))
        print(f"[DEFEND] {self.name} defended and Attack and reduces the damage by {self.defence}")


bob = Character("Bob")
mad_max = Character("Mad Max")

print("BEFORE ATTACK : \n",bob)
mad_max.attack(bob)
print("AFTER ATTACK : \n",bob)
