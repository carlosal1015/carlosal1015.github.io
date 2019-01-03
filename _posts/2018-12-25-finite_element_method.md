---
layout: post
title: Finite element Method
categories: fem
tags: linear-algebra
eye_catch: https://images.springer.com/sgw/books/medium/9783642332869.jpg
---

# Hilbert's spaces

Sea $$\mathbb{R}^\infty$$ que contiene todos los vectores con una sucesión infinita de componentes. Este espacio es actualmente muy grande cuando no existe control en el tamaño de las componentes $$v_j$$. Una idea mucho mejor es mantener la definición familiar de *longitud*, usando la suma de los cuadrados, e incluir solo aquellos vectores que tengan una **longitud finita**.

<!--more-->

$$
\textbf{Longitud cuadrada}\quad \|v\|^2= v_1^2+v_2^2+v_3^2+\cdots   
$$

Esta serie infinita debe converger a una suma finita. Vectores con longitud finita pueden ser sumados, multiplicados por escalares, así ellos forman un espacio vectorial. En este espacio de Hilbert es la forma natural de crecer el número de dimensiones hasta el infinito, y al mismo tiempo mantener la geometría ordinaria de un espacio euclidiano. Las elipses serán elipsoides de dimensión infinita, y rectas perpendiculares serán exactamente como antes. Los vectores $$v$$ y $$w$$ son ortogonales cuando su producto interno es cero:

$$
\tag{1}\mathbf{Ortogonalidad}\quad v^Tw=v_1w_1+v_2w_2+v_3w_3+\cdots =0
$$

Esta suma está garantizada cuando converge, y para cualesquiera dos vectores debe continuar obedeciendo la desigualdad de Schwarz $$\vert v^Tw\vert\le \|v\|\|w\|$$. El coseno, incluso en espacios de Hilbert, es nunca mayor que $$1$$.

Existe otra característica notable acerca de este espacio: Se encuentra bajo una gran cantidad de disfraces. Estos "vectores" pueden convertirse en funciones, el cual es el segundo punto.

# Longitudes y productos internos

Suponga que $$f(x)=\sin x$$ sobre el intervalo $$0\le x\le 2\pi$$. Esta $$f$$ es como un vector con todas sus componentes continuas, los valores de $$\sin x$$ a lo largo de todo el intervalo. Para encontrar la longitud de tal vector, usar la regla usual de sumar los cuadrados de las componentes se vuelve imposible. Esta suma es reemplazada, de modo natural e inevitable, por la *integración*:


$$
\tag{2}\textbf{Longitud de }\|\bm{f}\|\textbf{ la función }\quad\|f\|^2=\int_0^{2\pi}{\left(f(x)\right)}^2\mathrm{d}x=\int_0^{2\pi}{\sin x}^2\mathrm{d}x=\pi.
$$

Nuestro espacio de Hilbert se convirtió en *espacio funcional*. Los vectores son funciones, tenemos una manera natural de medir su longitud, y el espacio contiene todas las funciones que tiene una longitud finita, justo como en la ecuación $$(1)$$. Este espacio no pueden contener a la función $$F(x)=1/x$$, porque la integral de $$1/x^2$$ es infinita.

La misma idea de reemplazar la sumatoria por integración produce su **producto interno de dos funciones**: Si $$f(x)=\sin x$$ y $$g(x)=\cos x$$, entonces su producto interno es

$$
\tag{3}\langle f,g\rangle=\int_{0}^{2\pi}f(x)g(x)\mathrm{d}x=\int_{0}^{2\pi}\sin x\cos x\mathrm{d}x=0.
$$

Esto exactamente como el producto de interno de vectores $$f^Tg$$. Esto mantiene relación con la longitud dada por $$\langle f,f\rangle=\|f\|^2$$. La desigualdad de Schwarz se mantiene satisfecha: $$\vert\langle f,g \rangle\vert\le \|f\|\|g\|$$. Por supuesto, dos funciones como $$\sin x$$ y $$\cos x$$, cuyo producto interno es cero, deberán ser llamadas ortogonales. Ellas son incluso ortonormales luego de dividir por su longitud $$\sqrt{\pi}$$.

# Series de Fourier

Las series de Fourier de una función es una expansión de senos y cosenos:

$$
f(x)=a_0+a_1\cos x+b_1\sin x+a_2\cos 2x+b_2\sin 2x+\cdots.
$$

Para calcular los coeficientes como $$b_1$$, multiplique ambos lados por la función correspondiente $$\sin x$$ e integra desde $$0$$ hasta $$2\pi$$. (La función $$f(x)$$ es dado sobre ese intervalo.) En otras palabras, puede ver las longitudes de $$A$$, $$B$$, $$C$$ en la diagonal de $R$. Los vectores ortonormales $$q_1$$, $$q_2$$, $$q_3$$, los cuales son todos posibles ortogonalizar, son el primer factor de $$Q$$.

Quizas $$QR$$ no es tán bello como $$LU$$ (debido a las raíces cuadradas). Factorizando ambos lados tome el producto interno en ambos lados con $$\sin x$$:

$$
\int_0^{2\pi}f(x)\sin x\mathrm{d}x=a_0\int_0^{2\pi}\sin x\mathrm{d}x+a_1\int_0^{2\pi}\cos x\sin x\mathrm{d}x+ b_1\int_0^{2\pi}{(\sin x)}^2\mathrm{d}x+\cdots
$$

En el lado derecho de la ecuación, cualquier integral es cero excepto una, la única en cual $$\sin x$$ se multiplica con sí misma. Los *senos y cosenos son mutuamente ortogonales* como en la ecuación $$(3)$$. Por lo tanto $$b_1$$ es el lado izquierdo de la ecuación dividido por una integral no nula:

$$
b_1=\frac{\displaystyle\int_{0}^{2\pi}f(x)\sin x\mathrm{d}x}{2}
$$

## Hat's functions

{% highlight matlab %}
function grafica_hat(j, a, b, n, s)
% n segmentos
x = linspace(a, b, n + 1);
if j == 1
    xx = [x(1), x(2), x(n + 1)];
    yy = [1, 0, 0];
else
    if j == n
        xx = [x(1), x(n), x(n + 1)];
        yy = [0, 0, 1];
    else
        xx = [x(1), x(j - 1), x(j), x(j + 1), x(n + 1)];
        yy = [0, 0, 1, 0, 0];
    end
end
plot(xx, yy, s)
shg
end
{% endhighlight %}