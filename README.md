# TWITTER

* **Curso:** _Creando tu primer sitio web interactivo_
* **Unidad:** _Creando interacción con Javascript_

## Objetivo

Replicar el **newsfeed** de **Twitter**, desarrollando las versiones siguientes:

Versión 0.0.1

* Diseñar un formulario que permita ingresar un texto y un botón para "twittear".
* Agregar un evento de click al botón o de submit al formulario.
* En el evento, obtener el texto.
* Agregar el texto al HTML.

Versión 0.0.2

* No ingresar texto vacío (deshabilitar el botón de "twittear").
* Contar la cantidad de caracteres de forma regresiva.

Versión 0.0.3

* Si pasa los 140 caracteres, deshabilitar el botón.
* Si pasa los 120 caracteres, mostrar el contador con OTRO color.
* Si pasa los 130 caracteres, mostrar el contador con OTRO color.
* Si pasa los 140 caracteres, mostrar el contador en negativo.

Versión 0.0.4

* Al presionar enter(/n) que crezca el textarea de acuerdo al tamaño del texto.

Versión 0.0.5 (Extra)

* Si la cantidad de caracteres ingresados (sin dar un enter), supera al tamaño del textarea por defecto, debe de agregarse una línea más para que no aparezca el scroll. (Si en caso aplica)

## Alumna
* Maria Cristina Ortiz Villafuerte.

## Descripción

Se muestra una replica del **newsfeed** de la página web **Twitter**. Para resolver dicho reto se hizo lo siguiente:

* Se creó un documento HTML donde figura: **header**(donde se encuentra la barra de navegación), **section-perfil** (se encuentra el perfil del usuario(link)), **section-tweets** (Donde se encuentra el input y donde se aplicaran los eventos: _focus_ y _click_ para agregar:  _textarea_ y los elementos que contienen los tweets).

* Se creó un archivo **main.css** donde se encuentran todos los estilos aplicados a todas la partes del body del documento HTML, y los estilos a los elementos creados en el archivo javascript.

* Se creo un archivo **javascript** donde se encuentran todos los eventos aplicados ( _focus_ y _click_ ) a la **section-tweets** y a los elementos creados en el DOM.


## Ejemplo usada para el replicado

![twitter Website](https://github.com/MariacristinaOrtiz/twitter/blob/master/assets/docs/giphy.gif)
