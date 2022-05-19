defmodule MeuModulo.Calendario do
    def abreviacao_dia_semana(dia_semana) do
        if dia_semana == :Segunda do
            "Seg"
        else
            if dia_semana == :Terca do
                "Ter"
            else
                if dia_semana == :Quarta do
                    "Qua"
                else
                    if dia_semana == :Quinta do
                        "Qui"
                    else
                        if dia_semana == :Sexta do
                            "Sex"
                        else
                            if dia_semana == :Sabado do
                                "Sab"
                            else
                                "Dom"
                            end
                        end
                    end
                end
            end
        end
    end

    def abreviacao_dia_semana2(dia_semana) do
        case dia_semana do
            :Segunda -> "Seg"
            :Terca -> "Ter"
            :Quarta -> "Qua"
            :Quinta -> "Qui"
            :Sexta -> "Sex"
            :Sabado -> "Sab"
            :Domingo -> "Dom"
            _ -> "Dia Inválido"
        end
    end

    def abreviacao_dia_semana3(dia_semana) do
        cond do
            dia_semana == :Segunda -> "Seg"
            dia_semana == :Terca -> "Ter"
            dia_semana == :Quarta -> "Qua"
            dia_semana == :Quinta -> "Qui"
            dia_semana == :Sexta -> "Sex"
            dia_semana == :Sabado -> "Sab"
            dia_semana == :Domingo -> "Dom"
            true -> "Dia Inválido"
        end
    end

    def abreviacao_dia_semana4(:Segunda), do: "Seg"
    def abreviacao_dia_semana4(:Terca), do: "Ter"
    def abreviacao_dia_semana4(:Quarta), do: "Qua"
    def abreviacao_dia_semana4(:Quinta), do: "Qui"
    def abreviacao_dia_semana4(:Sexta), do: "Sex"
    def abreviacao_dia_semana4(:Sabado), do: "Sab"
    def abreviacao_dia_semana4(:Domingo), do: "Dom"
    def abreviacao_dia_semana4(_), do: "Dia Inválido"
end