def greet(name):
    return f"Hey {name}!"

print(greet("Mattan"))

def concatenate(word_one, word_two):
    return word_one + word_two

print(concatenate('Mattan ', 'Griffel'))
print(concatenate(word_two='Mattan ', word_one='Griffel'))


def age_in_dog_years(age):
    return age*7

print(age_in_dog_years(4))

#-------------------------------------------#
# A function can return only one thing!
#------------------------------------------#


#-------------------------------------------#
#  FUNCTIONS CHALLENGE
#------------------------------------------#

def uppercase_and_reverse(text):
    
    return text.upper()[::-1].strip('.')

print(uppercase_and_reverse("Do not go gentle into that good night."))