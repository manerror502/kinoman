export default function filterGenresArr (arr) {
  const genres = arr
  const genresFormated = genres.map(genre => genre.genre).join(', ')

  return genresFormated
}
