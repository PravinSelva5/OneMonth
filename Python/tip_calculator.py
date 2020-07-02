'''
The script will take the bill amount as the input.

'''
# Taking user input and storing it as a float
bill_amount = input("How much do you have to pay? ")
bill_amount = float(bill_amount.replace("$", " "))


# Preforming the the tip calculations
fifteen_percent = bill_amount * (1.15)
eighteen_percent = bill_amount * (1.18)
twenty_percent = bill_amount * (1.2)

# Informing the user on what the recommended tip amounts should be
print("The following are the recommended tip amounts:")
print(f"Recommendation 1 (15%): ${fifteen_percent:.2f}")
print(f"Recommendation 2 (18%): ${eighteen_percent:.2f}")
print(f"Recommendation 3 (20%): ${twenty_percent:.2f}")

