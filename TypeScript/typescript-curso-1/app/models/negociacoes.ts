import { Negociacao } from "./negociacao.js";

export class Negociacoes {
    private negociacoes: Negociacao[] = [];  // Negociacao[] é o mesmo que Array<Negociacao>
    
    adiciona(negociacao: Negociacao) {
        this.negociacoes.push(negociacao);
    }

    lista(): readonly Negociacao[] {   // readonly Negociacao[] é o mesmo que ReadonlyArray<Negociacao>
        return this.negociacoes;
    }
}