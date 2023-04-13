# Fibonacci Api Rest

Get fibonacci number by index. Api created with nodejs, typescript and expressjs.

## [⭐ Documentation ⭐](https://documenter.getpostman.com/view/7899354/2s93XwyimP)

### Running Locally

**1. Clone Repo**

```bash
git clone https://github.com/j4iro/fibonacci-api
```

**2. Install Dependencies**

```bash
npm i
```

**3. Run App**

```bash
npm run dev
```

**4. Run Tests**

```bash
npm run test
```

### Descripción (es):

La función principal se encuentra en `src/services/fibonacci.services.ts#getFibonacciByIndex`, esta función utiliza el bucle `for` para calcular el número de Fibonacci, se utilizan tres variables: `numberA`, `numberB` y `numberC`, `numberA` y `numberB` se inicializan en 0 y 1 respectivamente, ya que estos son los dos primeros números de la secuencia. Luego, en cada iteración, `numberC` se establece como la suma de `numberA` y `numberB`, `numberA` se actualiza a `numberB`, y `numberB` se actualiza a `numberC`. De esta manera, en cada iteración se calcula el siguiente número de la secuencia.

Finalmente, la función devuelve `numberC`, que es el número de Fibonacci correspondiente al índice indicado

Adicionalmente, la api contiene rutas versionadas: `/v1/fibonacci` para que sea escalable cuando llegue la `v2`, test unitarios, logs en archivos de texto y test unitarios.

### ¿Cómo la mejoraria?

Usaria el uso de caché para mejorar el rendimiento, esto implica almacenar los resultados calculados en caché para evitar volver a calcularlos. La implementación sería así:

```ts
type objectNumber = Record<number, number>

class FibonacciServices {
  private cacheResults: objectNumber = {}

  getFibonacciByIndex(index: number): number {
    // search in cache
    if (this.cacheResults[index]) return this.cacheResults[index]

    let numberA = 0
    let numberB = 1
    let numberC = 0

    for (let i = 2; i <= index; i++) {
      numberC = numberA + numberB
      numberA = numberB
      numberB = numberC
    }

    // save result in cache for next requests
    this.cacheResults[index] = numberC

    return numberC
  }
}
```

## Stack

- Typescript
- Logger: [Winston](https://www.npmjs.com/package/winston)
- Tests: [Jest](https://jest.io)
- Validation: [Joi](https://joi.dev/)
- Linter: [Eslint](https://eslint.org/)
- Format: [Prettier](https://prettier.io/)
