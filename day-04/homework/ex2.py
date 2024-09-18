first = float(input("Enter first num: "))
operation = input("Enter operation you want to do: ")
second = float(input("Enter second num: "))


while operation == "":
  print("The operation you entered is not valid.")
  first = float(input("Enter first num: "))
  operation = input("Enter operation you want to do: ")
  second = float(input("Enter second num: "))
  
if operation == "+":
  print(f"The answer is:first + second")
elif operation == "-":
  print(f"The answer is: {first - second}")
elif operation == "*":
  print(f"The asnwer is: {first * second}")
elif operation == "/":
  print(f"The answer is: {first / second}")