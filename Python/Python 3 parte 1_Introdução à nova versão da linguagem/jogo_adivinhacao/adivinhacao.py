import random

def jogar():

    print("")
    print("*********************************")
    print("Bem vindo ao jogo de Adivinhação!")
    print("*********************************")

    numero_secreto = random.randrange(1,101)
    total_de_tentativas = 3
    # rodada = 1 # Para utilizar com While
    pontos = 1000

    print("Qual nível de Dificuldade?")
    print("(1) Fácil (2) Médio (3) Difícil")

    nivel = int(input("Defina o nível: "))

    if (nivel == 1):
        total_de_tentativas = 20
    elif (nivel == 2):
        total_de_tentativas = 10
    else:
        total_de_tentativas = 5


    for rodada in range(1, total_de_tentativas + 1):
    # while rodada <= total_de_tentativas:
        print("")
        print("Tentativa {} de {}.".format(rodada, total_de_tentativas))
        
        chute = int(input("Digite o seu número: "))

        if(chute < 1 or chute > 100):
            print("Você deve digitar um número entre 1 e 100!")
            continue

        acertou = chute == numero_secreto
        chute_maior = chute > numero_secreto
        chute_menor = chute < numero_secreto


        if(acertou):
            print("Parabéns, você acertou e fez {} pontos.".format(pontos))
            break
        else:
            pontos_perdidos = abs(numero_secreto - chute)
            pontos -= pontos_perdidos
            if (chute_maior):
                print("Você errou! Seu chute foi maior que o número secreto.")
            elif (chute_menor):
                print("Você errou! Seu chute foi menor que o número secreto.")
                
        # rodada += 1 # Para utilizar com While

    if (acertou):
        print("")
    else:
        print("Fim do Jogo, o número secreto era {}".format(numero_secreto))

    # print("Você finalizou com {}".format(pontos))


if (__name__ == "__main__"):
    jogar()