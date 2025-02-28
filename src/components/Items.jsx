import PropTypes from 'prop-types'

export default function Items({ products, isLoading }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-6 w-full max-w-6xl">
      {isLoading ? (
        <div className="col-span-full flex flex-col">
          <h1 className="text-2xl font-semibold text-center text-gray-600 mt-10">
            Loading...
          </h1>
        </div>
      ) : products.length === 0 ? (
        <div className="col-span-full flex flex-col">
          <h1 className="text-2xl font-semibold mt-4 text-gray-600">
            Oops! No items found
          </h1>
        </div>
      ) : (
        products.map((item) => (
          <div
            className="bg-white rounded-xl shadow-lg p-4 flex flex-col items-center cursor-pointer"
            key={item.id}
          >
            <img
              src={item.image}
              alt="Beer"
              className="w-32 h-32 object-cover rounded-lg"
            />
            <h2 className="text-lg font-bold mt-3">{item.name}</h2>
            <p className="text-gray-600 text-sm font-semibold">
              Price : {item.price}
            </p>
            <p className="text-gray-500 mt-2 text-center text-xs">
              Rating :{' '}
              {item.rating?.average ? item.rating.average.toFixed(2) : 'N/A'}
            </p>
          </div>
        ))
      )}
    </div>
  )
}

Items.propTypes = {
  products: PropTypes.array.isRequired,
  isLoading: PropTypes.bool.isRequired,
}
