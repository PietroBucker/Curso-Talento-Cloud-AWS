def age_person(birth, year, name):
    age = year - birth
    if 0 < age < 105:
        return print(
            f"""
          Nome: {name}
          Age: {age}
          """
        )
    else:
        raise Exception("dados invalidos")


while True:
    try:
        birth = int(input("Digite ano de nacimento: "))
        year = int(input("Digite ano atual: "))
        name = input("Digite seu nome: ")

        age_person(birth, year, name)
        break
    except Exception as err:
        print(err)
        continue
