def calculator(n1, n2, op):
    if op == "+":
        return n1 + n2
    if op == "-":
        return n1 - n2
    if op == "*":
        return n1 * n2
    if op == "/":
        return f"{n1 / n2:.2f}"
    else:
        return 0


print(calculator(2, 3, "//"))
