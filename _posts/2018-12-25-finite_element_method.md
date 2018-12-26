---
layout: post
title: Finite element Method
categories: fem
tags: linear-algebra
eye_catch: https://images.springer.com/sgw/books/medium/9783642332869.jpg
mathjax: "true"
---

<!--more-->

# Hilbert's spaces

Sea $$\mathbb{R}^\infty$$ que contiene todos los vectores $$v=(v_1,v_2,\ldots)$$ con una sucesión infinita de componentes. Este espacio es actualmente muy grande cuando no existe control en el tamaño de las componentes $$v_j$$. Una idea mucho mejor es mantener la definición familiar de *longitud*, usando la suma de los cuadrados, e incluir solo aquellos vectores que tengan una **longitud finita**.

$$
\textbf{Longitud cuadrada}\quad \|v\|^2= v_1^2+v_2^2+v_3^2+\cdots
$$

Esta serie infinita debe converger a una suma finita. Vectores con longitud finita pueden ser sumados, multiplicados por escalares, así ellos forman un espacio vectorial. En este espacio de Hilbert es la forma natural de crecer el n煤mero de dimensiones hasta el infinito, y al mismo tiempo mantener la geometría ordinaria de un espacio euclidiano. Las elipses serán elipsoides de dimensión infinita, y rectas perpendiculares serán exactamente como antes. Los vectores $$v$$ y $$w$$ son ortogonales cuando su producto interno es cero:

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