# Proyecto Pizzería Mamma Mía

# Este proyecto utiliza **React + Vite**
---

## Cambios realizados:

### 1. Subida del primer Hito 17.08.2025
- Se realiza el primer upload del primer hito 

### 2. Reubicacion de los componentes 24.08.2025
- Antes se intentaba importar con rutas incorrectas como:

### 3. Corrección de imports absolutos/relativos 24.08.2025
- Antes se intentaba importar con rutas incorrectas como:
  ```js
  import Home from 'src/assets/components/Home.jsx'; // ❌

### 4. Creacion de formularios de registro y de ingreso
- Se crea el formulario de registro y el formulario de log in con las condiciones del desafio.

### 5. Corrección del tipo del input 
- pasa de type="text" a type="email"

### 6. Corrección modelo de las cartas y body
- armonización del diseño de la sección de cartas, se agrega además la fuente Roboto.

### 7. Actualizacion del archivo de data y la cantidad de cartas a renderizar
- Se trae un nuevo archivo externo para renderizar los formatos de pizzas. 
- Se crea una lista con los ingredientes
- Se renderizan 6 cartas en Home.

### 8. Creacion de un cart con obrenderizacion dinamica
- Se crea un el componente Cart.
- Se renderizan las pizzas de pizzaCart
- Se crea funcion donde se crean estados [cart, setCart] para actualizar las cantidades del carrito.
- Se crea funcion para aumentar o disminuir cantidades dentro del carrito:
    1. updateCount(id, delta): - Con id se identifica el producto a actualizar y con delta se actualiza en 1 unidad las cantidades al presionar los botones (+) o (-)
    2. setCart((prevCart) => ...) - Callback para mantener actualizada a la version mas reciente del carrito.
    3. prevCart.map((item) => ...) -  Recorre y actualiza cada item del carrito, en caso de ser necesario.
    4. item.id === id ? ... : item - Verifica si el ID actualizar coincide con el ID del item, en caso de que si, lo actualiza; en el caso contrario lo deja sin modifficaciones.
    5. { ...item, count: Math.max(item.count + delta, 0) } - Con el operador Spread (...item), se traen todas las propiedades originales del item. con la funcion count: Math.max(item.count + delta, 0) se suma o resta segun la accion del usuario. Math.max asegura que el minimo sea 0.

### 9. Hito 4: Consumo de datos de APIs
- Se traen datos de las pizzas desde una API con useEffect.

### 10. Hito 5: React Router I
- Se actualiza version de React para que funcione con react router.
- Se distribuyen y crean paginas segun lo especificado en la rubrica del desafio.
- Se generan las rutas para cada pagina. 