# Refactoring, API REST, Automatizacion de pruebas con GitHub Actions, Estilos con ESLint

Este proyecto lee un archivo `explorers.json` que contiene una lista de explorers con información que necesitamos procesar. Con este script se logró:
- Obtener la lista de explorers que solo están en la mision node.
- Obtener la cantidad de explorers que están en la mission node.
- Obtener la lista de usuarios de github de los explorers que están en la mission node.
- Se necesitó crear una validación llamada FizzBuzz, si el explorer tiene un score que sea divisible entre 3 (revisa cómo hacer esto), deberá tener un campo `trick` que diga `FIZZ`, cualquier otro caso el valor de este nuevo campo deberá ser el score mismo. Esta validación nos sirve porque necesitamos aplicarla a la lista de todos los explorers y saber cuáles son FIZZ.
- Después necesitamos una validación muy similar pero para cuando el score sea divisible entre 5, entonces el valor del nuevo campo `trick` será BUZZ, cualquier otro caso el valor será el score.
- Pero después volvimos a necesitar otro caso para cuando el valor del score fuera divisible entre 3 y también entre 5, entonces el valor del campo `trick` debe ser FIZZBUZZ, de lo contrario tendrá el valor del score. 

Actualmente las últimas 3 validaciones se corren independientemente y se juntan en un excel. Se necesita una misma validación que apliqué las tres reglas a toda la lista:
- Si el campo score del explorer es divisible entre 3, entonces se agrega un campo nuevo llamado `trick` cuyo valor será `FIZZ`.
- Si el campo score del explorer es divisible entre 5, entonces se agrega un campo nuevo llamado `trick` cuyo valor será `BUZZ`.
- Si el campo score del explorer es divisible entre 3 y 5, entonces se agrega un campo nuevo llamado `trick` cuyo valor será `FIZZBUZZ`.
- Si el campo score no es divisible por ninguna de las reglas anteriores, se agrega un campo nuevo llamado `trick` cuyo valor será el del score.

## Requerimientos:

1. Refactorizar el script legado (app.js) y rehacerlo con mucho cuidado ya que es información muy sensible.
2. Crea un API para usar la funcionalidad anterior:
3. Crea un endpoint para recibir un número y aplicar la validación del fizzbuzz.


## Requerimiento 1 - Refactoring

### Creacion de metodo reader el cual permite leer archivos json por medio de una ruta el cual es utilizado para leer la lista de explorers a procesar:<br>
![reader](https://github.com/Urivan07/fizzbuzz/blob/master/assets/img/reader.JPG)

### Se genera script ExplorerService para obtener la lista de explorers que estan en las diferentes misiones asi como cantidad y usuarios: <br>
![ExplorerService](https://github.com/Urivan07/fizzbuzz/blob/master/assets/img/ExplorerService.JPG)

### Se genera script FizzbuzzService para realizar las validaciones sobre el score de los explorer:<br>
![FizzbuzzService](https://github.com/Urivan07/fizzbuzz/blob/master/assets/img/FizzbuzzService.JPG)

### Test con JEST para ExplorerService
* test 1: <br>
![test1](https://github.com/Urivan07/fizzbuzz/blob/master/assets/img/test/explorerservice/test1.JPG)
* test 2: <br>
![test2](https://github.com/Urivan07/fizzbuzz/blob/master/assets/img/test/explorerservice/test2.JPG)
* test 3: <br>
![test3](https://github.com/Urivan07/fizzbuzz/blob/master/assets/img/test/explorerservice/test3.JPG)

### Test con JEST para FizzbuzzService
* test 1: <br>
![test1](https://github.com/Urivan07/fizzbuzz/blob/master/assets/img/test/fizzbuzz/test1.JPG)
* test 2: <br>
![test1](https://github.com/Urivan07/fizzbuzz/blob/master/assets/img/test/fizzbuzz/test2.JPG)
* test 3: <br>
![test1](https://github.com/Urivan07/fizzbuzz/blob/master/assets/img/test/fizzbuzz/test3.JPG)
* test 4: <br>
![test1](https://github.com/Urivan07/fizzbuzz/blob/master/assets/img/test/fizzbuzz/test4.JPG)


## Requerimiento 2 - Creacion de api para funcionalidad:
### API REST con Express.js
![apis](https://github.com/Urivan07/fizzbuzz/blob/master/assets/img/apis.JPG)

### Test
* Test 1 - lista de explorers que solo están en la mision node: <br>
![test1](https://github.com/Urivan07/fizzbuzz/blob/master/assets/img/test/api/test2ExplorersNode.JPG)
* Test 2 - cantidad de explorers que están en la mission node: <br>
![test2](https://github.com/Urivan07/fizzbuzz/blob/master/assets/img/test/api/test3ExplorersQuantity.JPG)
* Test 3 - lista de usuarios de github de los explorers que están en la mission node. : <br>
![test3](https://github.com/Urivan07/fizzbuzz/blob/master/assets/img/test/api/test4ExplorersUsername.JPG)


## Requerimiento 3 - Creacion de endpoint para recibir un número y aplicar la validación del fizzbuzz.
### Metodo con funcionalidad: <br>
![fizzbuzzNumber](https://github.com/Urivan07/fizzbuzz/blob/master/assets/img/fizzbuzzNumber.JPG)
### Api: <br>
![api_fizzbuzz](https://github.com/Urivan07/fizzbuzz/blob/master/assets/img/apiFizzBuzz.JPG)

### Test
* Test 1: <br>
![test](https://github.com/Urivan07/fizzbuzz/blob/master/assets/img/test/api/test5Fizzbuzz.JPG)


## Automatizacion de pruebas GitHub Actions
* Configuracion: <br>
![conf](https://github.com/Urivan07/fizzbuzz/blob/master/assets/img/conf_yaml_github_workflows.JPG)
* Pruebas automatizadas GitHub Actions: <br>
![GHA_test](https://github.com/Urivan07/fizzbuzz/blob/master/assets/img/automatizacion_pruebas_yaml.JPG)

## Estilos ESLint
* Configuracion: <br>
![style_conf](https://github.com/Urivan07/fizzbuzz/blob/master/assets/img/EstilosEslint.JPG)
