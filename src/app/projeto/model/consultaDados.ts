export interface ConsultaDados {
    realizadas: CategoriaQuantidade[],
    marcadas: CategoriaQuantidade[]
}

interface CategoriaQuantidade {
    especialidade: string,
    quantidade: number
}
