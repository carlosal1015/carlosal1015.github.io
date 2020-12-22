---
layout: post
title: Cuerpos gaussianos y cadenas de Markov
categories: math
tags: algebra UNI elliptic-curves markov-chain
eye_catch: http://mateapliunt.edu.pe/xii_fast/imagenes/map1.png
---

# XII International Fast WorkShop on Applied and Computational Mathematics

Como es costumbre, durante los primeros días de cada año, la [Universidad Nacional de Trujillo (UNT)](www.unt.edu.pe) reune a matemáticos, amigos, estudiantes y profesores de distintas latitudes. En esta edición la Universidad Nacional de Ingeniería estará presente con dos exposiciones *Mordell's Theorem on the Fiele Gaussian* y *Stability of Singular Linear Systems with associated with a Markov chain*. Otras exposiciones interesantes se comentará a lo largo del post.

<!--more-->

# El teorema de Mordell sobre el cuerpo gaussiano


El teorema de **Mordell-Weil** afirma que si $$E\coloneqq y^2=f(x)$$ es una curva elíptica racional no singular, esto es que $$f$$ y $$\mathrm{d}f$$ no tengan raíces comunes, entonces el grupo de los puntos racionales $$E(\mathbb{Q})$$ es un grupo abeliano finitamente generado.


Es decir, este grupo va a ser isomorfo a el producto $$r$$ veces de $$\mathbb{Z}$$ multiplicados a su vez por una cierta cantidad de grupos finitos, es decir,

$$
E(\mathbb{Q})\approx \overbrace{\mathbb{Z}\oplus\cdots\oplus\mathbb{Z}}^{r\text{ veces}}\oplus\frac{\mathbb{Z}}{p_1^{\lambda_1}\mathbb{Z}}\oplus\cdots\frac{\mathbb{Z}}{p_s^{\lambda_s}}
$$

En 1922, el matemático británico (1888-1972), representante estudioso de la teoría de números, demostró que el conjunto de puntos racionales de una curva elíptica $$E(\mathbb{Q})$$ es un grupo abeliano generado por un número finito de puntos racionales, años más tarde, en 1928, el matemático francés André Weil (1906-1998) obtuvo un resultado que extendió la validez del teorema anterior sobre el dominio de cualquier cuerpos numérico.


## Curvas elípticas

Son expresiones de la forma

$$
\tag{1}y^2+a_1xy+a_3y=x^2+a_2x^2+a_4x+a_6
$$

donde $$\{a_1,a_2,a_3,a_4,a_6\}\subset\mathbb{K}$$ y $$(1)$$ no presenta puntos singulares, en la literatura también es llamada *ecuación de Weierstrass*.

Si omitimos cuerpos los cuerpos de característica $$2$$ y $$3$$, se obtendría una expresión como

$$
y^2=x^3+Ax+B
$$

con $$\{A,B\}\subset\mathbb{K}$$.

Si definimos la operación de adición de una curva elíptica, como la reflexión sobre el eje $$x$$ del punto de intersección que se obtiene al trazar una recta sobre los dos puntos que deseamos adicionar, se verificará que el conjunto $$\mathcal{O}\eqqcolon (x,y)\in\mathbb{K}\times\mathbb{K}\,\forall x,y\in\mathbb{K}$$ unido con el punto en cuestión, posee la estructura de grupo abeliano.

Se desea estudiar ecuaciones del tipo

$$
y^2+axy+by+x^3+cx^2+dx+e=0
$$

con $$\{a,b,c,d\}\subset\mathbb{K}$$ que fueron estudiados por los matemáticos griegos, y en particular, por Diofanto de Alejandría.

Muy bien, ya hemos presentando a las **curvas elípticas**.

Como consecuencia del resultado de Weil, se tiene que cualquier solución racional de $$E(\mathbb{Q})$$ divide en dos partes, una parte *libre* y otras *con torsión*.

$$
E(\mathbb{Q})\simeq E(\mathbb{Q})_{\text{tors}}\oplus\mathbb{Z}^r
$$

Pero, se estudiará solo $$E(\mathbb{Q})_{\text{tors}}$$, esto es, todos los puntos racionales de orden finito. Gracias al

## Teorema de Nagell-Lutz

Sea

$$
E=y^2=f(x)=x^3+ax^2+bx+c
$$
una curva elíptica no singular, con coeficientes $$\{a,b,c\}\subset\mathbb{Z}$$ y sea

$$
D=-4a^3c+a^2b^2+18abc-4b^3-27c^2
$$

entonces un punto $$P=(x,y)$$ de orden finito cumple que $$y=0$$.

> Pregunta natural: ¿Será posible valida estos resultados en un cuerpo gaussiano?

Claro, el campo de los números *conmensurables* comparte muchas propiedades que el de los cuerpos gaussianos.

El anillo de enteros gaussianos es un dominio euclidiano, de factorización única.

## Motivación

Para cuáles $$x$$ se cumple que $$1^2+2^2+3^2+\cdots +x^2$$ es un cuadrado perfecto, esta misma formulación matemática expresada en curvas elípticas equivale a encontrar las soluciones enteras positivas de

$$
y^2=\frac{x(x+1)(2x+1)}{6}=\frac{1}{3}x^3+\frac{1}{2}x^2+\frac{1}{6}x
$$

lo que es igual a

$$
x^3-\frac{3}{2}x^2+\frac{1}{2}x=0
$$

## New Fractals as Images of Fractals Classic under a Complex Polinomial Transformation

La justificación rigurosa de la existencia de conjuntos fractales clásicos tales como el Conjunto de Cantar, Triángulo de Sierpinski, Alfombra de Serpienski, Curva de Koch, etc, se fundamenta en base al Operador de Hutchinsone