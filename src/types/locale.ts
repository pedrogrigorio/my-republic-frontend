export interface City {
  municipioId: number
  municipioNome: string
  microrregiaoId: number
  microrregiaoNome: string
  mesorregiaoId: number
  mesorregiaoNome: string
  regiaoImediataId: number
  regiaoImediataNome: string
  regiaoIntermediariaId: number
  regiaoIntermediariaNome: string
  UFId: number
  UFSigla: string
  UFNome: string
  regiaoId: number
  regiaoSigla: string
  regiaoNome: string
}

export interface CityData {
  'municipio-id': number
  'municipio-nome': string
  'microrregiao-id': number
  'microrregiao-nome': string
  'mesorregiao-id': number
  'mesorregiao-nome': string
  'regiao-imediata-id': number
  'regiao-imediata-nome': string
  'regiao-intermediaria-id': number
  'regiao-intermediaria-nome': string
  'UF-id': number
  'UF-sigla': string
  'UF-nome': string
  'regiao-id': number
  'regiao-sigla': string
  'regiao-nome': string
}
