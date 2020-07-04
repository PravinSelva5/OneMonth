the_count = [1, 2, 3, 4, 5, 6]
stocks = ["AAPL", "GOOG", "TSLA"]
random_things = ["Puppies", 55, "Anthony Weiner", 1/2, ["Oh no", "A list inside a list"]]

#--------------------------------------------------------------------------------#
# this for-loop goes through a list
#--------------------------------------------------------------------------------#

for number in the_count:
    print("This is count", number)

#--------------------------------------------------------------------------------#
# this is the same as above
#--------------------------------------------------------------------------------#

for stock in stocks:
    print("Stock ticker:", stock)

#--------------------------------------------------------------------------------#
# we can go through mixed lists too
# I called it i (short for item) since I don't know what's in it
#--------------------------------------------------------------------------------#

for i in random_things:
    print("Here's a random thing: ", i)

#--------------------------------------------------------------------------------#
# We can also build lists
#--------------------------------------------------------------------------------#

people = []
people.append("Mattan")
people.append("Praveen")
people.append("Sarah")
people.append("Chris")

#--------------------------------------------------------------------------------#
# now we can print it out
#--------------------------------------------------------------------------------#

print(people)

#--------------------------------------------------------------------------------#
# and remove some
#--------------------------------------------------------------------------------#

people.remove("Sarah")
print(people)

for person in people:
    print("Person is:",person)

#--------------------------------------------------------------------------------#
# Challenge: Print out the square of the numbers 1 to 10
#--------------------------------------------------------------------------------#

numbers = [1,2,3,4,5,6,7,8,9,10]
for i in numbers:
    print(i, "squared is:", i**2)

#--------------------------------------------------------------------------------#
# Another way to  get the challenge done
#--------------------------------------------------------------------------------#

numbers = list(range(1,11))
for i in numbers:
    print(i,"squared is:", i**2)

#--------------------------------------------------------------------------------#
# An even shorter way to do this
#--------------------------------------------------------------------------------#

for i in (range(1,11)):
    print(i,"squared is:", i**2)


#--------------------------------------------------------------------------------#
# Here's how to access elements of a list
#--------------------------------------------------------------------------------#

animals = ["bear", "tiger", "penguin", "zebra"]
first_animal = animals[0]
third_animal = animals[2]

print("There are this many things:", len(random_things))
