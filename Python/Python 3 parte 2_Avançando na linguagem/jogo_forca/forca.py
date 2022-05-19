from dataclasses import replace


def jogar():
    print("*********************************")
    print("** Bem vindo ao Jogo da Forca! **")
    print("*********************************")

    acertou = False
    enforcou = False
    palavra_sevreta = "abacaxi"
    apresentacao = ["_ "]*len(palavra_sevreta)

    while(not enforcou and not acertou):
        
        
        print(apresentacao)
        chute = input("\nQual letra? ").strip()
        
        index = 0
        for letra in palavra_sevreta:
            if chute.upper() == letra.upper():
                # print("Encontrei a letra {} na posição {}.".format(chute, index))
                print(f"Letra {chute} posição {index}.")
                
            
                
            
            index = index + 1
            
        print("Jogando...")
        
    print("Fim do Jogo!")


if (__name__ == "__main__"):
    jogar()
