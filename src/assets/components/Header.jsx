function Header () {
  return (
    <header
      className="relative bg-cover bg-center h-75 flex items-center justify-center"
      style={{ backgroundImage: "url('src/assets/Header.jpg')" }}
    >
      <div className="absolute inset-0 bg-black/70 z-0"></div>
      <div className="relative z-10 text-center text-white px-4">
        <h1 className="text-3xl md:text-5xl font-bold mb-2">
          ¡Pizzería Mamma Mia!
        </h1>
        <p className="text-sm md:text-lg">
          ¡Las mejores pizzas de Santiago en un solo lugar!
        </p>
      </div>
    </header>
  )
}

export default Header