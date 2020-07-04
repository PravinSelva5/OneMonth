
states = { 'NY': 'New York', 'PA': 'Pennsylvania', 'CA': 'California'}

#--------------------------------------------------------#
# To pull out a specifc value out of a dictionary
#--------------------------------------------------------#

print(states['NY'])


#--------------------------------------------------------#
# To print out all the keys
#--------------------------------------------------------#

print(states.keys())

#--------------------------------------------------------#
# To print out all the values
#--------------------------------------------------------#

print(states.values())

#--------------------------------------------------------#
# To append a new key & value pair
#--------------------------------------------------------#

states['FL'] = 'Florida'
print(states)

# -----------------------------------------------------------#
#   Dictionaries and Lists can be inside of each other
#------------------------------------------------------------#

animal_sounds = {
    "cat":["meow", "purr"],
    "dog":["woof", "bark"],
    "fox":[]
}

mattan = {'name': 'Mattan', 'height': 70, 'shoe size': 10.5, 'hair': 'Brown', 'eyes': 'Brown'}
chris = {'name': 'Chris', 'height': 68, 'shoe size': 10, 'hair': 'Brown', 'eyes': 'Brown'}
sarah = {'name': 'Sarah', 'height': 72, 'shoe size': 8, 'hair': 'Brown', 'eyes': 'Brown'}

people = [ mattan, chris, sarah]
print(people)

for person in people:
    print(person['height'])


#----------------------------------------------------------------------------#
# If you're not use if every element in your dictionary has the same key
# Make sure to understand the data types you are dealing with to avoid common
# errors
#----------------------------------------------------------------------------#

for person in people:
    print(person.get('height'))
