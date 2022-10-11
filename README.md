# Burger Queen

## Índice

* [1. Resumen del proyecto](#1-resumen-del-proyecto)
* [2. Historias de usuario](#2-historias-de-usuario)
* [3. Prototipo de baja fidelidad](#3-prototipo-de-baja-fidelidad)
* [4. Prototipo de alta fidelidad](#4-prototipo-de-alta-fidelidad)
* [5. Objetivos de aprendizaje](#5-objetivos-de-aprendizaje)

***

## 1. Resumen del proyecto

Burger Spot es un pequeño restaurante de hamburguesas, que está creciendo, necesita una
interfaz en la que puedan tomar pedidos usando una _tablet_, y enviarlos
a la cocina para que se preparen ordenada y eficientemente (a través de un
_backend_ del que nos darán detalles más adelante).

Esta es la información que tenemos del cliente:

> Somos **Burger Spot**, una cadena de comida 24hrs.
>
> Nuestra propuesta de servicio 24hrs ha tenido muy buena acogida y, para
> seguir creciendo, necesitamos un sistema que nos ayude a tomar los pedidos de
> nuestros clientes.
>
> Tenemos 2 menús: uno muy sencillo para el desayuno:
>
> | Ítem                      |Precio $|
> |---------------------------|------|
> | Café americano            |    5 |
> | Café con leche            |    7 |
> | Sandwich de jamón y queso |   10 |
> | Jugo de frutas natural              |    7 |
>
> Y otro menú para el resto del día:
>
> | Ítem                      |Precio|
> |---------------------------|------|
> |**Hamburguesas**           |   **$**   |
> |Hamburguesa simple         |    10|
> |Hamburguesa doble          |    15|
> |**Acompañamientos**        |   **$**   |
> |Papas fritas               |     5|
> |Aros de cebolla            |     5|
> |**Para tomar**             |   **$**   |
> |Agua 500ml                 |     5|
> |Agua 750ml                 |     7|
> |Bebida/gaseosa 500ml       |     7|
> |Bebida/gaseosa 750ml       |     10|
>
> **Importante:** Los clientes pueden escoger entre hamburguesas de res,
> de pollo, o vegetariana. Además, por $ 1 adicional, pueden agregarle queso
> o huevo.
>
> Nuestros clientes son bastante indecisos, por lo que es muy común que cambien
> su pedido varias veces antes de finalizarlo.

La interfaz debe mostrar los dos menús (desayuno y resto del día), cada uno
con todos sus _productos_. El usuario debe poder ir eligiendo qué _productos_
agregar y la interfaz debe ir mostrando el _resumen del pedido_ con el
costo total.

El objetivo principal de este proyecto es aprender a construir una _interfaz web_
usando el _framework_ Angular. Así que esta experiencia espera familiarizarte con 
el concepto de _estado de pantalla_, y cómo cada cambio sobre el estado se va a 
ir reflejando en la interfaz (por ejemplo, cada vez que agregamos un _producto_ a un _pedido_, 
la interfaz debe actualizar la lista del pedido y el total).

## 2. Historias de usuario

#### [Historia de usuario 1] Mesero/a debe poder tomar pedido de cliente

Yo como meserx quiero tomar el pedido de un cliente para no depender de mi mala
memoria, para saber cuánto cobrar, y enviarlo a la cocina para evitar errores y
que se puedan ir preparando en orden.

##### Criterios de aceptación

Lo que debe ocurrir para que se satisfagan las necesidades del usuario)

* Anotar nombre de cliente.
* Agregar productos al pedido.
* Eliminar productos.
* Ver resumen y el total de la compra.
* Enviar pedido a cocina (guardar en alguna base de datos).
* Se ve y funciona bien en una _tablet_

##### Definición de terminado

Lo acordado que debe ocurrir para decir que la historia está terminada.

* Debes haber recibido _code review_ de al menos una compañera.
* Haces _test_ unitarios y, además, has testeado tu producto manualmente.
* Hiciste _tests_ de usabilidad e incorporaste el _feedback_ del usuario.
* Desplegaste tu aplicación y has etiquetado tu versión (git tag).

***

#### [Historia de usuario 2] Jefe de cocina debe ver los pedidos

Yo como jefx de cocina quiero ver los pedidos de los clientes en orden y
marcar cuáles están listos para saber qué se debe cocinar y avisar a lxs meserxs
que un pedido está listo para servirlo a un cliente.

##### Criterios de aceptación

* Ver los pedidos ordenados según se van haciendo.
* Marcar los pedidos que se han preparado y están listos para servirse.
* Ver el tiempo que tomó prepara el pedido desde que llegó hasta que se
  marcó como completado.

##### Definición de terminado

* Debes haber recibido _code review_ de al menos una compañera.
* Haces _test_ unitarios y, además, has testeado tu producto manualmente.
* Hiciste _tests_ de usabilidad e incorporaste el _feedback_ del usuario.
* Desplegaste tu aplicación y has etiquetado tu versión (git tag).

***

#### [Historia de usuario 3] Meserx debe ver pedidos listos para servir

Yo como meserx quiero ver los pedidos que están preparados para entregarlos
rápidamente a los clientes que las hicieron.

##### Criterios de aceptación

* Ver listado de pedido listos para servir.
* Marcar pedidos que han sido entregados.

##### Definición de terminado

* Debes haber recibido _code review_ de al menos una compañera.
* Haces _test_ unitarios y, además, has testeado tu producto manualmente.
* Hiciste _tests_ de usabilidad e incorporaste el _feedback_ del usuario.
* Desplegaste tu aplicación y has etiquetado tu versión (git tag).
* Los datos se deben mantener íntegros, incluso después de que un pedido ha
  terminado. Todo esto para poder tener estadísticas en el futuro.
  
## 3. Prototipo de baja fidelidad
  
![prototipo-baja](https://user-images.githubusercontent.com/105658044/194975099-fe1b1c00-3c92-4d29-a57b-9fce877143d8.PNG)

## 4. Prototipo de alta fidelidad

Visita el siguiente link para interactuar con el prototipo:
https://www.figma.com/proto/Ao0qzGVmLg9zONrHIrqBRF/Burger-Queen?page-id=0%3A1&node-id=2%3A2&viewport=711%2C328%2C0.17&scaling=scale-down&starting-point-node-id=2%3A2&show-proto-sidebar=1

![prototipo-alta](https://user-images.githubusercontent.com/105658044/194975422-774d4a37-5a71-4c60-93f8-6568b5881bac.PNG)

### Vista principal

![vista-principal](https://user-images.githubusercontent.com/105658044/194975971-50369253-9003-4cca-9518-4b8e69d22cb0.png)

### Vista mesero

#### Vista para ingresar nombre del cliente

![vista-nombre-cliente](https://user-images.githubusercontent.com/105658044/194976090-5eed30ec-db2c-4441-b1a8-fcd09d82a49f.png)

#### Vista para hacer pedido

![vista-hacer-pedido](https://user-images.githubusercontent.com/105658044/194975991-ab12e049-fd3a-48eb-bc92-4cdef4947806.png)

#### Vista para ver estado de pedidos

![vista-ver-pedido](https://user-images.githubusercontent.com/105658044/194976109-0fcb7084-1c1a-4619-9c5c-d1746dbd2cb9.PNG)

### Vista chef

![vista-chef](https://user-images.githubusercontent.com/105658044/194976118-8d2e4c71-79d4-437b-8a0a-09207ceb766a.PNG)

## 5. Objetivos de aprendizaje

Reflexiona y luego marca los objetivos que has llegado a entender y aplicar en tu proyecto. Piensa en eso al decidir tu estrategia de trabajo.

### HTML

- [x] **Uso de HTML semántico**

### CSS

- [x] **Uso de selectores de CSS**

- [x] **Modelo de caja (box model): borde, margen, padding**

- [x] **Uso de flexbox en CSS**

- [x] **Uso de CSS Grid Layout**

- [ ] **Uso de media queries**

### JavaScript

- [x] **Arrays (arreglos)**

- [x] **Objetos (key, value)**

- [x] **Diferenciar entre tipos de datos primitivos y no primitivos**

- [x] **Uso de condicionales (if-else, switch, operador ternario, lógica booleana)**

- [x] **Funciones (params, args, return)**

- [x] **Pruebas unitarias (unit tests)**

- [x] **Pruebas asíncronas**

- [x] **Uso de mocks y espías**

- [x] **Módulos de ECMAScript (ES Modules)**

- [x] **Uso de linter (ESLINT)**

- [x] **Uso de identificadores descriptivos (Nomenclatura y Semántica)**

- [x] **Diferenciar entre expresiones (expressions) y sentencias (statements)**

- [x] **Callbacks**

- [x] **Promesas**

### Control de Versiones (Git y GitHub)

- [x] **Git: Instalación y configuración**

- [x] **Git: Control de versiones con git (init, clone, add, commit, status, push, pull, remote)**

- [x] **Git: Integración de cambios entre ramas (branch, checkout, fetch, merge, reset, rebase, tag)**

- [x] **GitHub: Creación de cuenta y repos, configuración de llaves SSH**

- [x] **GitHub: Despliegue con GitHub Pages (Netlify)**

- [x] **GitHub: Colaboración en Github (branches | forks | pull requests | code review | tags)**

- [x] **GitHub: Organización en Github (projects | issues | labels | milestones | releases)**

### user-centricity

- [x] **Diseñar y desarrollar un producto o servicio poniendo a las usuarias en el centro**

### product-design

- [x] **Crear prototipos de alta fidelidad que incluyan interacciones**

- [x] **Seguir los principios básicos de diseño visual**

### research

- [x] **Planear y ejecutar testeos de usabilidad de prototipos en distintos niveles de fidelidad**

### Firebase

- [ ] **Firebase Auth**

- [x] **Firestore**

### Angular

- [x] **Components & templates**

- [x] **Directivas estructurales (ngIf / ngFor)**

- [x] **@Input | @Output**

- [x] **Creación y uso de servicios**

- [x] **Manejo de rutas**

- [x] **Creación y uso de Observables.**

- [ ] **Uso de HttpClient**

- [x] **Estilos de componentes (ngStyle / ngClass)**

## 6. Autoras

Desarrollado por : \
 :octocat: [Bella Sheryl](https://github.com/Bellasacc) :woman_technologist: \
 :octocat: [Jannery Briceño](https://github.com/jannerymbf) :woman_technologist:
