export default function filterCountriesArr (arr) {
  const countries = arr
  const countriesFormated = countries
    .map(country => country.country)
    .join(', ')

  return countriesFormated
}
