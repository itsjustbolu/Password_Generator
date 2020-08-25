import random

# its annoying a lot of websites have a list of requirements to make your passwords.

print("Welcome to the Password Generator")

num_of_xters = int(input("Enter the total number of characters you want in your password: "))

num_of_upper_case_xters = int(input("Enter the number of upper case characters you would like: "))

num_of_numbers = int(input("Enter the number of digits you would like:"))

num_of_special_characters = int(input("Enter the number of special characters: "))

total_sum_xters = num_of_upper_case_xters + num_of_numbers + num_of_special_characters

num_of_lower_case_xters = num_of_xters - total_sum_xters

upper_cases_password = ""
lower_cases_password = ""
numbers_password = ""
special_xters_password = ""


for i in range(num_of_upper_case_xters):
    rand_upper = chr(random.randint(65, 90))      # generate a random integer between 65 and 90 and covert to upper case
    upper_cases_password += rand_upper            # add random value generated to the upper case empty string
print(upper_cases_password)                       # print string

for i in range(num_of_numbers):
    rand_numbers = chr(random.randint(48, 57))
    numbers_password += rand_numbers
print(numbers_password)

for i in range(num_of_special_characters):
    rand_special_xters = chr(random.randint(33, 47))
    special_xters_password += rand_special_xters
print(special_xters_password)

for i in range(num_of_lower_case_xters):
    rand_lower = chr(random.randint(97, 122))
    lower_cases_password += rand_lower
print(lower_cases_password)


unshuffled_final_password = str(upper_cases_password) + str(numbers_password) + str(lower_cases_password) + \
                            str(special_xters_password)


print("unshuffled final password", unshuffled_final_password)

final_password = ""

for i in range(num_of_xters):
    finalp = random.randint(0, num_of_xters - 1)
    print(finalp)
    final_password += unshuffled_final_password[finalp]

print("final password", final_password)
