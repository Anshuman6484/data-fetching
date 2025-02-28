import PropTypes from 'prop-types'

export default function SearchBox({ query, setQuery }) {
  return (
    <input
      type="text"
      placeholder="Search for a beer..."
      value={query || ''}
      onChange={(e) => setQuery(e.target.value)}
      className="w-full max-w-md p-3 border rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-orange-400"
    />
  )
}

SearchBox.propTypes = {
  query: PropTypes.string.isRequired,
  setQuery: PropTypes.func.isRequired,
}
