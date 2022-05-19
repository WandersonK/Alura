defmodule MeuModulo.Enum do
    # # Uilizando Pattern Matching
    def primeiro([]), do: nil
    def primeiro(lista), do: hd(lista)
        
        # # Utilizando o UNLESS
        # unless length(lista) == 0 do
        #     hd(lista)
        # end

        # # Utilizando o IF
        # if length(lista) == 0 do
        #     nil
        # else
        #     hd(lista)
        # end
end