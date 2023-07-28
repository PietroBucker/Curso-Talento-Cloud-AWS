def elevator_for():
    for andar in range(21):
        if andar == 13:
            continue
        print(andar)


# elevator_for()


def elevator_while():
    andar = 0
    while andar < 20:
        andar += 1
        if andar == 13:
            continue
        print(andar)


# elevator_while()


def elevator_reverse():
    for andar in range(20, -1, -1):
        if andar == 13:
            continue
        print(andar)


elevator_reverse()
