import { City, CityData } from '@/types/locale'
import axios from 'axios'
import { useEffect, useState } from 'react'

export function useFetchCities() {
  const [cities, setCities] = useState<City[]>([])

  const fetchCities = async () => {
    const response = await axios.get<CityData[]>(
      'https://servicodados.ibge.gov.br/api/v1/localidades/municipios?view=nivelado',
    )

    const cities = response.data.map((city) => ({
      municipioId: city['municipio-id'],
      municipioNome: city['municipio-nome'],
      microrregiaoId: city['microrregiao-id'],
      microrregiaoNome: city['microrregiao-nome'],
      mesorregiaoId: city['mesorregiao-id'],
      mesorregiaoNome: city['mesorregiao-nome'],
      regiaoImediataId: city['regiao-imediata-id'],
      regiaoImediataNome: city['regiao-imediata-nome'],
      regiaoIntermediariaId: city['regiao-intermediaria-id'],
      regiaoIntermediariaNome: city['regiao-intermediaria-nome'],
      UFId: city['UF-id'],
      UFSigla: city['UF-sigla'],
      UFNome: city['UF-nome'],
      regiaoId: city['regiao-id'],
      regiaoSigla: city['regiao-sigla'],
      regiaoNome: city['regiao-nome'],
    }))

    setCities(cities)
  }

  useEffect(() => {
    fetchCities()
  }, [])

  return { cities }
}
