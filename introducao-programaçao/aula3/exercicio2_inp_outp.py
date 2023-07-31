def calculator():
    menu = """
    [+]Soma.
    [-]Subitração
    [*]Multiplicação
    [/]Divisão
    [E]Exit
    """
    while True:
        option = input(menu).upper()

        if option == "E":
            break

        n1 = int(input("Digite primeiro numero: "))
        n2 = int(input("Digite segunto numero: "))

        if option == "+":
            print(n1 + n2)
            continue
        if option == "-":
            print(n1 - n2)
            continue
        if option == "*":
            print(n1 * n2)
            continue
        if option == "/":
            print(f"{n1 / n2:.2f}")
            continue
        else:
            print("Essa opçao nao existe")
            continue


calculator()
