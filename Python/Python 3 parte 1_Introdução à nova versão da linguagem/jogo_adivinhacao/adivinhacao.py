print("*********************************")
print("Bem vindo ao jogo de Adivinhação!")
print("*********************************")

numero_secreto = 42

chute = int(input("Digite o seu número: "))

if chute == numero_secreto:
    print("Parabéns, você acertou!")
else:
    print("Que pena, você errou.")
    print("Teste")
