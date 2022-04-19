export interface ResumoDados {
    consultas: periodoConsultas,
    faturamento: faturamento
}

interface periodoConsultas {
    consultas_30dias_anteiores: number,
    consultas_30dias_posteriores: number
}

interface faturamento {
    anterior: {
        valor: number,
        comparativo: number
    },
    previsao: {
        valor: number,
        comparativo: number
    }
}

