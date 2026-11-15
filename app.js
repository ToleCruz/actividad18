"use strict";
const GRUPO=window.GRUPO;
const LECT=[{"titulo": "Pasos para solucionar un problema", "min": 8, "html": "\n<p>Todos los días resuelves problemas: cómo llegar a tiempo a la escuela, cómo repartir tu dinero de la semana o\ncómo terminar tres tareas en una tarde. Muchas veces lo haces sin pensarlo, pero cuando el problema es más\ncomplicado conviene seguir un <b>método</b>. Esa forma ordenada de pensar es la base de la programación.</p>\n<div class=\"box def\"><b>Concepto clave: Problema</b><p>Situación en la que existe una diferencia entre lo que ocurre (estado actual) y lo que se desea (estado deseado), y no se sabe de inmediato cómo superarla.</p></div>\n<div class=\"box def\"><b>Concepto clave: Algoritmo</b><p>Conjunto <b>ordenado</b> y <b>finito</b> de pasos que permiten resolver un problema. Una receta de cocina, las instrucciones para armar un mueble o los pasos para inscribirte en una beca son algoritmos.</p></div>\n<h3>Un método con historia</h3>\n<p>El matemático <b>George Pólya</b>, en su libro <i>Cómo plantear y resolver problemas</i> (1945), propuso\ncuatro fases para resolver cualquier problema: comprenderlo, concebir un plan, ejecutar el plan y examinar la\nsolución obtenida. A partir de esa idea, en Cultura Digital trabajaremos con <b>cinco pasos</b>:</p>\n<ol class=\"pasos\">\n<li><b>Identificar el problema por resolver.</b> Reconocer que existe un problema y expresarlo con claridad.</li>\n<li><b>Comprender el problema.</b> Saber qué datos tienes, qué te piden y qué condiciones hay.</li>\n<li><b>Analizar alternativas de solución.</b> Pensar varias formas de resolverlo y compararlas.</li>\n<li><b>Seleccionar la mejor alternativa de solución.</b> Elegir con criterios, no por gusto.</li>\n<li><b>Utilizar métodos, técnicas o diagramas de flujo para resolver el problema.</b> Representar la solución paso a paso para aplicarla y comprobarla.</li>\n</ol>\n<h3>Un ejemplo de la vida diaria</h3>\n<table><tr><th>Paso</th><th>Ejemplo: “Llego tarde a la primera clase”</th></tr>\n<tr><td>1. Identificar</td><td>Esta semana llegué tarde tres días y perdí la asistencia.</td></tr>\n<tr><td>2. Comprender</td><td>Salgo de casa a las 6:50, el camión tarda 35 minutos y la clase empieza a las 7:20.</td></tr>\n<tr><td>3. Analizar alternativas</td><td>Salir más temprano, tomar otro transporte o preparar mi mochila desde la noche anterior.</td></tr>\n<tr><td>4. Seleccionar</td><td>Preparar la mochila en la noche y salir a las 6:35: no cuesta dinero y es fácil de cumplir.</td></tr>\n<tr><td>5. Resolver con un método</td><td>Escribo los pasos de mi rutina, los sigo y reviso si llego a tiempo durante una semana.</td></tr>\n</table>\n<div class=\"box tip\"><b>¿Sabías que...?</b><p>Estos pasos forman parte del <b>pensamiento computacional</b>, una forma de resolver problemas que usa ideas de la informática: dividir un problema grande en partes pequeñas (descomposición), encontrar lo que se repite (patrones), quedarse con lo importante (abstracción) y escribir los pasos de la solución (algoritmo).</p></div>\n"}, {"titulo": "Identificar el problema por resolver", "min": 7, "html": "\n<p>El primer paso parece sencillo, pero es donde más se falla: si identificas mal el problema, resolverás algo\nequivocado. Albert Einstein decía, según una frase muy citada, que si tuviera una hora para resolver un\nproblema dedicaría la mayor parte a pensar en el problema y solo unos minutos a la solución.</p>\n<div class=\"box def\"><b>Concepto clave: Identificar el problema</b><p>Reconocer que existe una situación que debe cambiar y describirla de forma clara, concreta y sin incluir todavía la solución.</p></div>\n<h3>Síntoma no es lo mismo que causa</h3>\n<p>Un <b>síntoma</b> es lo que se nota a simple vista; la <b>causa</b> es lo que realmente lo provoca. Por ejemplo,\n“mi celular se queda sin batería antes de mediodía” es un síntoma. La causa podría ser que hay aplicaciones\nfuncionando en segundo plano, que el brillo está al máximo o que la batería está dañada. Si solo atiendes el síntoma\n(cargar el celular a cada rato), el problema regresa.</p>\n<h3>La técnica de los 5 porqués</h3>\n<p>Consiste en preguntar <b>“¿por qué?”</b> varias veces, hasta llegar a la causa raíz:</p>\n<table><tr><th>Pregunta</th><th>Respuesta</th></tr>\n<tr><td>¿Por qué reprobé el examen?</td><td>Porque no estudié lo suficiente.</td></tr>\n<tr><td>¿Por qué no estudié?</td><td>Porque me desvelé la noche anterior.</td></tr>\n<tr><td>¿Por qué me desvelé?</td><td>Porque estuve viendo videos en el celular.</td></tr>\n<tr><td>¿Por qué estuve viendo videos?</td><td>Porque no tengo un horario para estudiar.</td></tr>\n<tr><td><b>Causa raíz</b></td><td><b>No organizo mi tiempo de estudio.</b></td></tr>\n</table>\n<h3>Cómo plantear bien un problema</h3>\n<p>Un buen planteamiento responde: <b>¿qué ocurre?, ¿a quién afecta?, ¿dónde y cuándo?</b> y <b>¿qué se quiere lograr?</b>\nUn formato útil es: <i>“¿Cómo podemos ______ para que ______?”</i>. Por ejemplo: <i>“¿Cómo podemos organizar\nnuestro tiempo de estudio para que todos lleguemos preparados a los exámenes?”</i></p>\n<div class=\"box alert\"><b>¡Importante!</b><p>Evita dos errores comunes: <b>plantear la solución como si fuera el problema</b> (“necesitamos comprar más computadoras”) y <b>plantear el problema de forma demasiado general</b> (“todo está mal en la escuela”). Ninguno de los dos te dice qué hay que resolver.</p></div>\n"}, {"titulo": "Comprender el problema", "min": 8, "html": "\n<p>Una vez que sabes cuál es el problema, necesitas <b>entenderlo a fondo</b> antes de intentar resolverlo. Muchas\npersonas fallan porque empiezan a hacer cálculos sin haber leído con atención lo que se pide.</p>\n<div class=\"box def\"><b>Concepto clave: Comprender el problema</b><p>Analizar la situación para saber qué datos tienes, qué resultado te piden obtener y qué condiciones o restricciones debes respetar.</p></div>\n<h3>Preguntas que te ayudan a comprender</h3>\n<ul>\n<li>¿Qué me piden obtener? (la <b>incógnita</b> o resultado)</li>\n<li>¿Qué datos tengo? ¿Me falta alguno?</li>\n<li>¿Hay condiciones o límites? (por ejemplo, “solo si”, “como máximo”, “antes de”)</li>\n<li>¿Puedo explicarlo con mis propias palabras?</li>\n<li>¿Puedo hacer un dibujo, una tabla o un ejemplo con números?</li>\n</ul>\n<h3>El modelo Entrada – Proceso – Salida</h3>\n<p>En informática, casi cualquier problema se puede comprender con tres partes:</p>\n<table><tr><th>Parte</th><th>¿Qué es?</th><th>Ejemplo: área de un rectángulo</th></tr>\n<tr><td><b>Entrada</b></td><td>Los datos que se necesitan para resolver el problema.</td><td>La base y la altura.</td></tr>\n<tr><td><b>Proceso</b></td><td>Las operaciones, cálculos o decisiones que se aplican a los datos.</td><td>Multiplicar base × altura.</td></tr>\n<tr><td><b>Salida</b></td><td>El resultado que se obtiene y se muestra.</td><td>Mostrar el área.</td></tr>\n</table>\n<h3>Variables y constantes</h3>\n<p>Los datos que pueden cambiar cada vez que resuelves el problema se guardan en <b>variables</b> (por ejemplo,\n<code>base</code> o <code>altura</code>). Los valores que no cambian se llaman <b>constantes</b>, como el valor de π\n(3.1416) o el porcentaje del IVA en México (16 %).</p>\n<div class=\"box tip\"><b>¿Sabías que...?</b><p>Una buena prueba para saber si comprendiste un problema es <b>explicárselo a un compañero</b>. Si no puedes explicarlo con tus palabras, todavía no lo has comprendido del todo.</p></div>\n"}, {"titulo": "Analizar alternativas de solución", "min": 7, "html": "\n<p>Casi nunca existe una sola forma de resolver un problema. Antes de lanzarte con la primera idea que se te ocurre,\nconviene <b>generar varias alternativas</b> y compararlas.</p>\n<div class=\"box def\"><b>Concepto clave: Alternativa de solución</b><p>Cada una de las distintas formas posibles de resolver un problema. Analizarlas significa compararlas con base en criterios para conocer sus ventajas y desventajas.</p></div>\n<h3>1. Generar ideas: la lluvia de ideas</h3>\n<p>La <b>lluvia de ideas</b> (en inglés, <i>brainstorming</i>) es una técnica para producir muchas ideas en poco tiempo.\nSus reglas son: <b>no criticar ninguna idea en ese momento</b>, buscar <b>cantidad</b> antes que calidad, permitir\nideas creativas o “locas”, combinar y mejorar las ideas de otros y <b>anotarlas todas</b>.</p>\n<h3>2. Definir criterios</h3>\n<p>Los <b>criterios</b> son los aspectos que usarás para comparar las alternativas. Los más comunes son:</p>\n<ul>\n<li><b>Costo:</b> cuánto dinero se necesita.</li>\n<li><b>Tiempo:</b> cuánto tarda en aplicarse o en dar resultados.</li>\n<li><b>Recursos:</b> qué materiales, equipos, conexión a internet o personas se requieren.</li>\n<li><b>Facilidad:</b> qué tan sencillo es llevarla a cabo.</li>\n<li><b>Eficacia:</b> qué tan bien resuelve el problema.</li>\n<li><b>Riesgos e impacto:</b> qué podría salir mal y qué efectos tiene en las personas o en el medio ambiente.</li>\n</ul>\n<h3>3. Comparar en una tabla</h3>\n<p>Una <b>tabla comparativa</b> permite ver las alternativas lado a lado. Ejemplo: <i>¿cómo pasar lista en un taller?</i></p>\n<table><tr><th>Alternativa</th><th>Costo</th><th>Tiempo por clase</th><th>Requiere internet</th><th>Desventaja</th></tr>\n<tr><td>Lista en papel</td><td>Bajo</td><td>5 minutos</td><td>No</td><td>Se puede perder o mojar.</td></tr>\n<tr><td>Hoja de cálculo</td><td>Ninguno</td><td>3 minutos</td><td>No</td><td>Se necesita una computadora.</td></tr>\n<tr><td>Formulario en línea</td><td>Ninguno</td><td>2 minutos</td><td>Sí</td><td>Sin señal no funciona.</td></tr>\n</table>\n<div class=\"box tip\"><b>¿Sabías que...?</b><p>Escribir las <b>ventajas y desventajas</b> de cada alternativa (también llamadas <i>pros y contras</i>) es una forma rápida de analizarlas cuando no tienes mucho tiempo.</p></div>\n"}, {"titulo": "Seleccionar la mejor alternativa de solución", "min": 8, "html": "\n<p>Después de analizar las alternativas, hay que <b>decidir</b>. Una buena decisión no se basa en el gusto o en lo\nprimero que se nos ocurre, sino en los <b>criterios</b> que definimos antes.</p>\n<div class=\"box def\"><b>Concepto clave: Seleccionar la mejor alternativa</b><p>Elegir, con base en criterios objetivos, la opción que resuelve mejor el problema considerando los recursos y las condiciones disponibles.</p></div>\n<h3>La matriz de decisión ponderada</h3>\n<p>Es una herramienta que convierte la comparación en números. Se hace así:</p>\n<ol>\n<li>Escribe los <b>criterios</b> y asigna a cada uno un <b>peso</b> según su importancia. Los pesos deben sumar <b>100 %</b>.</li>\n<li>Califica cada alternativa en cada criterio del <b>1 al 10</b> (10 es lo mejor).</li>\n<li>Multiplica cada calificación por el peso del criterio (expresado en decimal: 40 % = 0.40).</li>\n<li>Suma los resultados de cada alternativa. <b>La de mayor puntaje total es la mejor opción.</b></li>\n</ol>\n<p><b>Ejemplo:</b> elegir el lugar para el convivio de fin de semestre.</p>\n<table><tr><th>Alternativa</th><th>Costo (50 %)</th><th>Distancia (30 %)</th><th>Espacio (20 %)</th><th>Total</th></tr>\n<tr><td>Salón de clases</td><td>10</td><td>10</td><td>4</td><td>5.0 + 3.0 + 0.8 = <b>8.8</b></td></tr>\n<tr><td>Parque municipal</td><td>8</td><td>6</td><td>9</td><td>4.0 + 1.8 + 1.8 = <b>7.6</b></td></tr>\n<tr><td>Salón de fiestas</td><td>3</td><td>5</td><td>10</td><td>1.5 + 1.5 + 2.0 = <b>5.0</b></td></tr>\n</table>\n<p>La mejor alternativa es el <b>salón de clases</b>, con 8.8 puntos. Observa que, aunque el salón de fiestas\ntiene más espacio, el costo pesa más en esta decisión.</p>\n<div class=\"box alert\"><b>¡Importante!</b><p>Elegir la alternativa no es el final. Después hay que <b>aplicarla y comprobar</b> si resolvió el problema. Si no funcionó, regresa a tus alternativas: quizá la segunda opción era mejor de lo que parecía.</p></div>\n"}, {"titulo": "Utilizar métodos, técnicas o diagramas de flujo para resolver problemas", "min": 12, "html": "\n<p>Ya sabes qué solución vas a aplicar. Ahora necesitas <b>describirla paso a paso</b> con un método que cualquier\npersona, o una computadora, pueda seguir sin equivocarse. Aquí es donde aparecen los algoritmos y los diagramas de flujo.</p>\n<h3>Características de un buen algoritmo</h3>\n<ul>\n<li><b>Preciso:</b> indica el orden exacto de los pasos, sin ambigüedades.</li>\n<li><b>Definido:</b> si se sigue con los mismos datos, siempre da el mismo resultado.</li>\n<li><b>Finito:</b> tiene un inicio y un fin; termina en algún momento.</li>\n</ul>\n<h3>Formas de representar un algoritmo</h3>\n<table><tr><th>Técnica</th><th>Descripción</th></tr>\n<tr><td><b>Lenguaje natural</b></td><td>Los pasos se escriben en español común, como una lista numerada.</td></tr>\n<tr><td><b>Pseudocódigo</b></td><td>Los pasos se escriben con palabras parecidas a un lenguaje de programación (Leer, Escribir, Si, Entonces...). Es un “casi código”.</td></tr>\n<tr><td><b>Diagrama de flujo</b></td><td>Los pasos se representan con símbolos gráficos unidos por flechas.</td></tr>\n</table>\n<p><b>Ejemplo en pseudocódigo:</b> saber si una persona puede votar en 2026.</p>\n<pre class=\"pseudo\">Algoritmo PuedeVotar\n    Escribir \"¿En qué año naciste?\"\n    Leer nacimiento\n    edad ← 2026 - nacimiento\n    Si edad &gt;= 18 Entonces\n        Escribir \"Puedes votar\"\n    SiNo\n        Escribir \"Aún no puedes votar\"\n    FinSi\nFinAlgoritmo</pre>\n<div class=\"box def\"><b>Concepto clave: Diagrama de flujo</b><p>Representación gráfica de un algoritmo que usa símbolos estandarizados (norma ANSI / ISO 5807) unidos por líneas de flujo que indican el orden en que se realizan los pasos.</p></div>\n<h3>Simbología básica</h3>\n<div id=\"simbologia\"></div>\n<h3>Reglas para construir un diagrama de flujo</h3>\n<ul>\n<li>Debe tener <b>un solo inicio y un solo fin</b>.</li>\n<li>Las flechas van de <b>arriba hacia abajo</b> y de <b>izquierda a derecha</b>, y no deben cruzarse.</li>\n<li>El símbolo de <b>decisión</b> siempre tiene dos salidas: <b>Sí</b> y <b>No</b> (verdadero o falso).</li>\n<li>Dentro de cada símbolo se escribe un texto breve y claro.</li>\n</ul>\n<p>Este es el diagrama de flujo del ejemplo “¿Puede votar?”:</p>\n<div id=\"diagrama-ejemplo\"></div>\n<h3>La prueba de escritorio</h3>\n<p>Antes de dar por buena una solución, se hace una <b>prueba de escritorio</b>: seguir el algoritmo “a mano” con\ndatos de ejemplo y anotar en una tabla qué valor toma cada variable y qué resultado se obtiene.</p>\n<table><tr><th>nacimiento (entrada)</th><th>edad</th><th>¿edad &gt;= 18?</th><th>Salida</th></tr>\n<tr><td>2011</td><td>15</td><td>No</td><td>Aún no puedes votar</td></tr>\n<tr><td>2008</td><td>18</td><td>Sí</td><td>Puedes votar</td></tr>\n<tr><td>1986</td><td>40</td><td>Sí</td><td>Puedes votar</td></tr>\n</table>\n<div class=\"box tip\"><b>¿Sabías que...?</b><p><b>PSeInt</b> es un programa libre y gratuito, muy usado en los bachilleratos tecnológicos, que permite escribir algoritmos en pseudocódigo en español, ejecutarlos y <b>generar automáticamente su diagrama de flujo</b>.</p></div>\n"}];
const SIMB=[["terminal", "Inicio / Fin (terminal)", "Indica dónde comienza y dónde termina el algoritmo"], ["proceso", "Proceso", "Representa una operación o cálculo, como una asignación"], ["decision", "Decisión", "Plantea una condición con dos salidas: Sí o No"], ["es", "Entrada / Salida de datos", "Representa leer datos o mostrar resultados"], ["conector", "Conector", "Une partes del diagrama que están separadas"], ["flujo", "Línea de flujo", "Indica el orden y la dirección en que se ejecutan los pasos"], ["documento", "Documento (salida impresa)", "Representa un resultado que se imprime en papel"]];
const _P=window._P;
const D=JSON.parse(decodeURIComponent(escape(atob(_P.split("").reverse().join("")))));
const MAXI=3, KEY="act18_"+GRUPO;
const ACTS=["a1","a2","a3","a4","a5","a6","a7","a8"];
const ANAMES={a1:"Ordena los pasos",a2:"Detective del problema",a3:"Entrada, proceso y salida",a4:"Analiza las alternativas",
 a5:"Matriz de decisión",a6:"Simbología del diagrama de flujo",a7:"Completa el diagrama de flujo",a8:"Prueba de escritorio"};
// lectura -> actividades
const PLAN=[["a1"],["a2"],["a3"],["a4"],["a5"],["a6","a7","a8"]];
const $=(s,r=document)=>r.querySelector(s), $$=(s,r=document)=>[...r.querySelectorAll(s)];
const esc=s=>String(s).replace(/[&<>"]/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"}[c]));

// ---------- estado
let S=load();
function blank(){const a={};ACTS.forEach(k=>a[k]={int:0,best:0,done:false,closed:false,ans:null,hist:[]});return{nombre:"",lista:"",inicio:false,acts:a,enviado:false,fecha:null};}
function load(){try{const r=localStorage.getItem(KEY);if(r){const o=JSON.parse(r);if(o&&o.acts)return o;}}catch(e){}return blank();}
function save(){try{localStorage.setItem(KEY,JSON.stringify(S));}catch(e){}}
if(/[?&]reiniciar=1/.test(location.search)){S=blank();save();history.replaceState(null,"",location.pathname);}

// ---------- utilidades
function rng(seed){let s=seed>>>0;return()=>{s=(s*1664525+1013904223)>>>0;return s/4294967296;};}
function shuffle(arr,seed){const a=arr.slice(),r=rng(seed);for(let i=a.length-1;i>0;i--){const j=Math.floor(r()*(i+1));[a[i],a[j]]=[a[j],a[i]];}return a;}
function toast(m){const t=$("#toast");t.textContent=m;t.classList.add("on");clearTimeout(t._h);t._h=setTimeout(()=>t.classList.remove("on"),2600);}
function fnv(s){let h=0x811c9dc5;for(let i=0;i<s.length;i++){h^=s.charCodeAt(i);h=Math.imul(h,16777619)>>>0;}return h.toString(36).toUpperCase().padStart(7,"0").slice(-7);}
const r1=x=>Math.round(x*10)/10;

// ---------- figuras SVG
function shape(k,w=74,h=46,txt=""){
 const st='fill="#fff" stroke="#691C32" stroke-width="2.5"';let s="";
 const cx=w/2,cy=h/2;
 if(k==="terminal")s=`<rect x="3" y="${h*.18}" width="${w-6}" height="${h*.64}" rx="${h*.32}" ${st}/>`;
 if(k==="proceso")s=`<rect x="4" y="${h*.16}" width="${w-8}" height="${h*.68}" ${st}/>`;
 if(k==="decision")s=`<polygon points="${cx},3 ${w-3},${cy} ${cx},${h-3} 3,${cy}" ${st}/>`;
 if(k==="es")s=`<polygon points="${w*.2},${h*.16} ${w-3},${h*.16} ${w*.8},${h*.84} 3,${h*.84}" ${st}/>`;
 if(k==="conector")s=`<circle cx="${cx}" cy="${cy}" r="${h*.36}" ${st}/>`;
 if(k==="flujo")s=`<line x1="8" y1="${cy}" x2="${w-14}" y2="${cy}" stroke="#691C32" stroke-width="3"/><polygon points="${w-16},${cy-7} ${w-4},${cy} ${w-16},${cy+7}" fill="#691C32"/>`;
 if(k==="documento")s=`<path d="M4 ${h*.12} H${w-4} V${h*.72} Q${w*.75} ${h*.55} ${cx} ${h*.74} T4 ${h*.78} Z" ${st}/>`;
 return `<svg viewBox="0 0 ${w} ${h}" width="${w}" height="${h}" aria-hidden="true">${s}${txt}</svg>`;
}
function wrapTxt(t,x,y,max,size){ // texto centrado con salto simple
 const words=String(t).split(" ");const lines=[];let cur="";
 words.forEach(w=>{if((cur+" "+w).trim().length>max){if(cur)lines.push(cur);cur=w;}else cur=(cur+" "+w).trim();});if(cur)lines.push(cur);
 const lh=size*1.2,y0=y-(lines.length-1)*lh/2;
 return lines.map((l,i)=>`<text x="${x}" y="${y0+i*lh}" text-anchor="middle" dominant-baseline="middle" font-family="Lato,Arial" font-size="${size}" font-weight="700" fill="#262626">${esc(l)}</text>`).join("");
}
function flowSVG(T){ // T: {A..E: texto o letra}, terminal textos
 const W=340, cx=170, col="#691C32";
 const box=(k,x,y,w,h,t,fill)=>{const f=fill||"#fff",st=`fill="${f}" stroke="${col}" stroke-width="2.5"`;let s="";
  if(k==="terminal")s=`<rect x="${x-w/2}" y="${y-h/2}" width="${w}" height="${h}" rx="${h/2}" ${st}/>`;
  if(k==="es")s=`<polygon points="${x-w/2+16},${y-h/2} ${x+w/2},${y-h/2} ${x+w/2-16},${y+h/2} ${x-w/2},${y+h/2}" ${st}/>`;
  if(k==="proceso")s=`<rect x="${x-w/2}" y="${y-h/2}" width="${w}" height="${h}" ${st}/>`;
  if(k==="decision")s=`<polygon points="${x},${y-h/2} ${x+w/2},${y} ${x},${y+h/2} ${x-w/2},${y}" ${st}/>`;
  return s+t;};
 const arr=(x1,y1,x2,y2)=>`<line x1="${x1}" y1="${y1}" x2="${x2}" y2="${y2}" stroke="${col}" stroke-width="2"/><polygon points="${x2-5},${y2-8} ${x2+5},${y2-8} ${x2},${y2}" fill="${col}"/>`;
 const lab=(v,x,y,mx)=>v.length===1?`<text x="${x}" y="${y}" text-anchor="middle" dominant-baseline="middle" font-family="Poppins,Arial" font-size="22" font-weight="700" fill="#BC955C">${v}</text>`:wrapTxt(v,x,y,mx,12.5);
 const fl=v=>v.length===1?"#FBF8F3":"#fff";
 let s="";
 s+=box("terminal",cx,30,120,36,wrapTxt(T.ini||"Inicio",cx,30,20,14));
 s+=arr(cx,48,cx,74);
 s+=box("es",cx,100,210,50,lab(T.A,cx,100,26),fl(T.A));
 s+=arr(cx,125,cx,152);
 s+=box("proceso",cx,178,220,50,lab(T.B,cx,178,28),fl(T.B));
 s+=arr(cx,203,cx,228);
 s+=box("decision",cx,278,190,96,lab(T.C,cx,278,16),fl(T.C));
 // Sí izquierda, No derecha
 s+=`<line x1="${cx-95}" y1="278" x2="80" y2="278" stroke="${col}" stroke-width="2"/>`+arr(80,278,80,346);
 s+=`<line x1="${cx+95}" y1="278" x2="260" y2="278" stroke="${col}" stroke-width="2"/>`+arr(260,278,260,346);
 s+=`<text x="${cx-105}" y="268" text-anchor="end" font-family="Poppins" font-size="13" font-weight="700" fill="#235B4E">Sí</text>`;
 s+=`<text x="${cx+105}" y="268" font-family="Poppins" font-size="13" font-weight="700" fill="#B3142A">No</text>`;
 s+=box("es",80,372,150,52,lab(T.D,80,372,17),fl(T.D));
 s+=box("es",260,372,150,52,lab(T.E,260,372,17),fl(T.E));
 s+=`<line x1="80" y1="398" x2="80" y2="430" stroke="${col}" stroke-width="2"/><line x1="260" y1="398" x2="260" y2="430" stroke="${col}" stroke-width="2"/><line x1="80" y1="430" x2="260" y2="430" stroke="${col}" stroke-width="2"/>`+arr(cx,430,cx,452);
 s+=box("terminal",cx,472,120,36,wrapTxt("Fin",cx,472,20,14));
 return `<svg viewBox="0 0 ${W} 500" role="img" aria-label="Diagrama de flujo">${s}</svg>`;
}

// ---------- definición de actividades (cada una: html(), read(), check(), restore(), lock())
const A={};
function selHTML(id,opts,ph="-- Selecciona --"){return `<select id="${id}"><option value="">${ph}</option>${opts.map((o,i)=>`<option value="${i}">${esc(o)}</option>`).join("")}</select>`;}

// A1 ordenar
A.a1={inst:"Ordena los cinco pasos para solucionar un problema. Arrástralos o usa las flechas ▲▼ para moverlos al lugar correcto (1 = primer paso).",
 html(){const ord=S.acts.a1.ans||shuffle([0,1,2,3,4],D.seed*7+1);
  return `<ul class="sort" id="a1l">${ord.map((k,i)=>`<li draggable="true" data-k="${k}"><span class="pos">${i+1}</span><span class="lbl">${esc(D.pasos[k])}</span><span class="mv"><button type="button" data-d="-1" aria-label="Subir">▲</button><button type="button" data-d="1" aria-label="Bajar">▼</button></span></li>`).join("")}</ul>`;},
 bind(){const ul=$("#a1l");let dragEl=null;
  ul.addEventListener("click",e=>{const b=e.target.closest("button");if(!b||ul.classList.contains("lock"))return;const li=b.closest("li");
   if(b.dataset.d==="-1"&&li.previousElementSibling)ul.insertBefore(li,li.previousElementSibling);
   if(b.dataset.d==="1"&&li.nextElementSibling)ul.insertBefore(li.nextElementSibling,li);renum();});
  ul.addEventListener("dragstart",e=>{if(ul.classList.contains("lock"))return e.preventDefault();dragEl=e.target.closest("li");dragEl.classList.add("drag");});
  ul.addEventListener("dragend",()=>{if(dragEl)dragEl.classList.remove("drag");dragEl=null;renum();});
  ul.addEventListener("dragover",e=>{e.preventDefault();if(!dragEl)return;const t=e.target.closest("li");if(!t||t===dragEl)return;
   const r=t.getBoundingClientRect();ul.insertBefore(dragEl,(e.clientY-r.top)>r.height/2?t.nextSibling:t);});
  function renum(){$$("li",ul).forEach((li,i)=>{li.querySelector(".pos").textContent=i+1;li.classList.remove("ok","bad");});S.acts.a1.ans=A.a1.read();save();}},
 read(){return $$("#a1l li").map(li=>+li.dataset.k);},
 complete(){return true;},
 check(v){return v.map((k,i)=>k===i);},
 mark(res){$$("#a1l li").forEach((li,i)=>{li.classList.toggle("ok",res[i]);li.classList.toggle("bad",!res[i]);});},
 lock(){$("#a1l").classList.add("lock");$$("#a1l li").forEach(li=>li.draggable=false);}
};
// genérico de preguntas con select
function quizAct(id,qs,inst,introHTML){
 return {inst,
  html(){return (introHTML||"")+qs.map((q,i)=>{const op=shuffle(q[1].map((t,j)=>j),D.seed*31+i*7+id.charCodeAt(1));
   return `<div class="q" id="${id}q${i}"><span class="n">${i+1}</span><span class="txt">${esc(q[0])}</span><div class="ctl"><select id="${id}s${i}"><option value="">-- Selecciona una respuesta --</option>${op.map(j=>`<option value="${j}">${esc(q[1][j])}</option>`).join("")}</select><span class="mark"></span></div></div>`;}).join("");},
  bind(){qs.forEach((q,i)=>$(`#${id}s${i}`).addEventListener("change",()=>{S.acts[id].ans=this.read();save();$(`#${id}q${i}`).classList.remove("ok","bad");$(`#${id}q${i} .mark`).textContent="";}));},
  read(){return qs.map((q,i)=>$(`#${id}s${i}`).value);},
  complete(v){return v.every(x=>x!=="");},
  check(v){return v.map((x,i)=>+x===qs[i][2]);},
  mark(res){res.forEach((ok,i)=>{const e=$(`#${id}q${i}`);e.classList.toggle("ok",ok);e.classList.toggle("bad",!ok);$(".mark",e).textContent=ok?"✔ Correcta":"✘ Revisa esta respuesta";});},
  restore(v){v.forEach((x,i)=>{$(`#${id}s${i}`).value=x;});},
  lock(){qs.forEach((q,i)=>$(`#${id}s${i}`).disabled=true);}
 };
}
A.a2=quizAct("a2",D.a2,"Lee cada situación y elige la respuesta correcta.");
A.a4=quizAct("a4",D.a4.preguntas,"Lee la situación, analiza la tabla y responde.",
 `<div class="caso"><b>SITUACIÓN</b><br>${esc(D.a4.intro)}</div><div class="tw"><table><tr>${D.a4.tabla[0].map(h=>`<th>${esc(h)}</th>`).join("")}</tr>${D.a4.tabla.slice(1).map(r=>`<tr>${r.map(c=>`<td>${esc(c)}</td>`).join("")}</tr>`).join("")}</table></div>`);
// A3 clasificar
const CATS=["Entrada","Proceso","Salida"];
A.a3={inst:"Lee el caso y clasifica cada elemento como Entrada, Proceso o Salida.",
 html(){const it=shuffle(D.a3.items.map((x,i)=>i),D.seed*13+3);
  return `<div class="caso"><b>CASO</b><br>${esc(D.a3.caso)}</div>`+it.map(i=>`<div class="cl" id="a3r${i}"><span class="it">${esc(D.a3.items[i][0])}<span class="mark"></span></span>${selHTML("a3s"+i,CATS)}</div>`).join("");},
 bind(){D.a3.items.forEach((x,i)=>$("#a3s"+i).addEventListener("change",()=>{S.acts.a3.ans=A.a3.read();save();$("#a3r"+i).classList.remove("ok","bad");$(`#a3r${i} .mark`).textContent="";}));},
 read(){return D.a3.items.map((x,i)=>$("#a3s"+i).value);},
 complete(v){return v.every(x=>x!=="");},
 check(v){return v.map((x,i)=>+x===D.a3.items[i][1]);},
 mark(res){res.forEach((ok,i)=>{const e=$("#a3r"+i);e.classList.toggle("ok",ok);e.classList.toggle("bad",!ok);$(".mark",e).textContent=ok?" ✔":" ✘ Revisa";});},
 restore(v){v.forEach((x,i)=>$("#a3s"+i).value=x);},
 lock(){D.a3.items.forEach((x,i)=>$("#a3s"+i).disabled=true);}
};
// A5 matriz
function mxTotals(){return D.a5.alts.map(a=>a[1].reduce((s,v,j)=>s+v*D.a5.criterios[j][1]/100,0));}
A.a5={inst:(()=>{const c=D.a5.criterios,e=[5,7,4],p=c.map(x=>x[1]/100);const parts=e.map((v,j)=>v+" × "+p[j].toFixed(2));const vals=e.map((v,j)=>+(v*p[j]).toFixed(2));const tot=+vals.reduce((a,b)=>a+b,0).toFixed(2);return "<b>Cómo se calcula:</b> en cada fila, multiplica cada calificación por el peso de su criterio escrito en decimal ("+c.map(x=>x[1]+" % = "+(x[1]/100).toFixed(2)).join(", ")+") y suma los resultados.<br><b>Ejemplo con otros números:</b> si una alternativa tuviera "+e.join(", ")+" → "+parts.join(" + ")+" = "+vals.join(" + ")+" = <b>"+tot+"</b>.<br>Escribe el total de cada alternativa en la columna <b>Total</b> (con uno o dos decimales) y al final elige la alternativa con el total más alto.";})(),
 html(){const c=D.a5.criterios;return `<div class="caso"><b>DECISIÓN</b><br>${esc(D.a5.caso)}</div><div class="tw"><table class="mx"><tr><th>Alternativa</th>${c.map(x=>`<th>${esc(x[0])} (${x[1]} %)</th>`).join("")}<th>Total</th></tr>`+
  D.a5.alts.map((a,i)=>`<tr id="a5r${i}"><td><b>${esc(a[0])}</b></td>${a[1].map(v=>`<td>${v}</td>`).join("")}<td><input type="number" step="0.01" inputmode="decimal" id="a5t${i}" placeholder="0.0"><span class="mark"></span></td></tr>`).join("")+
  `</table></div><div class="q" id="a5qb"><span class="n">★</span><span class="txt">¿Cuál es la mejor alternativa?</span><div class="ctl">${selHTML("a5b",D.a5.alts.map(a=>a[0]))}<span class="mark"></span></div></div>`;},
 bind(){D.a5.alts.forEach((a,i)=>$("#a5t"+i).addEventListener("input",()=>{S.acts.a5.ans=A.a5.read();save();$("#a5r"+i).classList.remove("ok","bad");}));
  $("#a5b").addEventListener("change",()=>{S.acts.a5.ans=A.a5.read();save();$("#a5qb").classList.remove("ok","bad");});},
 read(){return D.a5.alts.map((a,i)=>$("#a5t"+i).value).concat([$("#a5b").value]);},
 complete(v){return v.every(x=>x!=="");},
 check(v){const t=mxTotals();const best=t.indexOf(Math.max(...t));
  return t.map((x,i)=>Math.abs(parseFloat(String(v[i]).replace(",","."))-x)<=0.051).concat([+v[t.length]===best]);},
 mark(res){const n=D.a5.alts.length;res.slice(0,n).forEach((ok,i)=>{const e=$("#a5r"+i);e.classList.toggle("ok",ok);e.classList.toggle("bad",!ok);$(".mark",e).textContent=ok?" ✔":" ✘ Revisa";});
  const e=$("#a5qb"),ok=res[n];e.classList.toggle("ok",ok);e.classList.toggle("bad",!ok);$(".mark",e).textContent=ok?"✔ Correcta":"✘ Revisa esta respuesta";},
 restore(v){D.a5.alts.forEach((a,i)=>$("#a5t"+i).value=v[i]);$("#a5b").value=v[D.a5.alts.length];},
 lock(){$$("#a5 input,#a5 select").forEach(x=>x.disabled=true);}
};
// A6 simbología
A.a6={inst:D.a6.modo==="funcion"?"Observa cada símbolo y elige para qué sirve.":"Observa cada símbolo y elige su nombre.",
 html(){const ord=shuffle(SIMB.map((x,i)=>i),D.seed*17+5);const col=D.a6.modo==="funcion"?2:1;const ops=shuffle(SIMB.map((x,i)=>i),D.seed*19+2);
  return ord.map((i,n)=>`<div class="symq" id="a6r${i}">${shape(SIMB[i][0],100,60)}<div><b class="pop" style="color:var(--g)">Símbolo ${n+1}</b>
   <select id="a6s${i}"><option value="">-- Selecciona --</option>${ops.map(j=>`<option value="${j}">${esc(SIMB[j][col])}</option>`).join("")}</select><span class="mark"></span></div></div>`).join("");},
 bind(){SIMB.forEach((x,i)=>$("#a6s"+i).addEventListener("change",()=>{S.acts.a6.ans=A.a6.read();save();$("#a6r"+i).classList.remove("ok","bad");$(`#a6r${i} .mark`).textContent="";}));},
 read(){return SIMB.map((x,i)=>$("#a6s"+i).value);},
 complete(v){return v.every(x=>x!=="");},
 check(v){return v.map((x,i)=>+x===i);},
 mark(res){res.forEach((ok,i)=>{const e=$("#a6r"+i);e.classList.toggle("ok",ok);e.classList.toggle("bad",!ok);$(".mark",e).textContent=ok?"✔ Correcta":"✘ Revisa";});},
 restore(v){v.forEach((x,i)=>$("#a6s"+i).value=x);},
 lock(){SIMB.forEach((x,i)=>$("#a6s"+i).disabled=true);}
};
// A7 completar diagrama
const BL=["A","B","C","D","E"];
function a7pool(){return shuffle(BL.map(b=>D.a7[b]).concat(D.a7.distr),D.seed*23+9);}
A.a7={inst:"Completa el diagrama de flujo: elige qué va en cada casilla (A, B, C, D y E). El diagrama se actualizará con tus respuestas.",
 html(){const pool=a7pool();return `<div class="caso"><b>PROBLEMA</b><br>${esc(D.a7.titulo)}</div><div class="flow"><div id="a7svg"></div><div>`+
  BL.map(b=>`<div class="blk" id="a7r${b}"><span class="L">${b}</span><div>${selHTML("a7s"+b,pool)}<span class="mark"></span></div></div>`).join("")+`</div></div>`;},
 draw(){const pool=a7pool(),T={};BL.forEach(b=>{const v=$("#a7s"+b).value;T[b]=v===""?b:pool[+v];});$("#a7svg").innerHTML=flowSVG(T);},
 bind(){BL.forEach(b=>$("#a7s"+b).addEventListener("change",()=>{S.acts.a7.ans=A.a7.read();save();A.a7.draw();$("#a7r"+b).classList.remove("ok","bad");$(`#a7r${b} .mark`).textContent="";}));this.draw();},
 read(){return BL.map(b=>$("#a7s"+b).value);},
 complete(v){return v.every(x=>x!=="");},
 check(v){const pool=a7pool();return BL.map((b,i)=>v[i]!==""&&pool[+v[i]]===D.a7[b]);},
 mark(res){BL.forEach((b,i)=>{const e=$("#a7r"+b),ok=res[i];e.classList.toggle("ok",ok);e.classList.toggle("bad",!ok);$(".mark",e).textContent=ok?"✔":"✘ Revisa";});},
 restore(v){BL.forEach((b,i)=>$("#a7s"+b).value=v[i]);this.draw();},
 lock(){BL.forEach(b=>$("#a7s"+b).disabled=true);}
};
// A8 prueba de escritorio
A.a8={inst:"Sigue el algoritmo “a mano” con cada dato de entrada y completa la tabla de la prueba de escritorio.",
 html(){const d=D.a8;return `<div class="caso"><b>ALGORITMO: ${esc(d.titulo).toUpperCase()}</b></div><pre class="pseudo">${esc(d.pseudo)}</pre>
  <div class="tw"><table><tr><th>${esc(d.entrada)}</th><th>${esc(d.num)}</th><th>${esc(d.sel)}</th></tr>`+
  d.filas.map((f,i)=>`<tr><td><b>${esc(f[0])}</b></td><td id="a8n${i}c"><input type="number" step="0.1" inputmode="decimal" id="a8n${i}"><span class="mark"></span></td><td id="a8m${i}c">${selHTML("a8m"+i,d.selops,"-- Elige --")}<span class="mark"></span></td></tr>`).join("")+`</table></div>`;},
 bind(){D.a8.filas.forEach((f,i)=>{["n","m"].forEach(t=>$(`#a8${t}${i}`).addEventListener(t==="n"?"input":"change",()=>{S.acts.a8.ans=A.a8.read();save();$(`#a8${t}${i}c`).classList.remove("ok","bad");$(`#a8${t}${i}c .mark`).textContent="";}));});},
 read(){const v=[];D.a8.filas.forEach((f,i)=>{v.push($("#a8n"+i).value);v.push($("#a8m"+i).value);});return v;},
 complete(v){return v.every(x=>x!=="");},
 check(v){const r=[];D.a8.filas.forEach((f,i)=>{r.push(Math.abs(parseFloat(String(v[2*i]).replace(",","."))-f[1])<0.051);r.push(v[2*i+1]!==""&&D.a8.selops[+v[2*i+1]]===f[2]);});return r;},
 mark(res){D.a8.filas.forEach((f,i)=>{[["n",res[2*i]],["m",res[2*i+1]]].forEach(([t,ok])=>{const e=$(`#a8${t}${i}c`);e.classList.toggle("ok",ok);e.classList.toggle("bad",!ok);$(".mark",e).textContent=ok?"✔":"✘ Revisa";});});},
 restore(v){D.a8.filas.forEach((f,i)=>{$("#a8n"+i).value=v[2*i];$("#a8m"+i).value=v[2*i+1];});},
 lock(){$$("#a8 input,#a8 select").forEach(x=>x.disabled=true);}
};

// ---------- render
function actHTML(id,num){const st=S.acts[id];
 return `<section class="act" id="${id}"><div class="acth"><div><div class="s">ACTIVIDAD ${num} DE 8</div><div class="t">${ANAMES[id]}</div></div>
  <div class="dots" title="Intentos usados">Intentos: ${[0,1,2].map(i=>`<i class="${i<st.int?"used":""}"></i>`).join("")}</div></div>
  <p class="inst">${A[id].inst}</p><div class="body">${A[id].html()}</div>
  <div class="foot"><button class="btn" id="${id}v">VERIFICAR RESPUESTAS</button><span class="meta" id="${id}i"></span></div>
  <div class="res" id="${id}m"></div></section>`;}

function closedAll(ids){return ids.every(k=>S.acts[k].closed);}
function render(){
 const app=$("#app");let h="";
 h+=`<section class="hero"><svg viewBox="0 0 200 200"><g fill="none" stroke="#fff" stroke-width="2"><rect x="70" y="10" width="60" height="26" rx="13"/><line x1="100" y1="36" x2="100" y2="56"/><rect x="65" y="56" width="70" height="30"/><line x1="100" y1="86" x2="100" y2="104"/><polygon points="100,104 136,130 100,156 64,130"/><line x1="64" y1="130" x2="30" y2="130"/><line x1="136" y1="130" x2="170" y2="130"/><line x1="30" y1="130" x2="30" y2="170"/><line x1="170" y1="130" x2="170" y2="170"/></g></svg>
  <div class="k">CBTis No. 187 · CULTURA DIGITAL 1</div><h1>Actividad 18<br>Cuadernillo interactivo del Propósito 7</h1>
  <p>${esc(D.proposito)}</p><span class="pill">GRUPO ${GRUPO} · COMPONENTE BÁSICO</span></section>`;
 // inicio
 if(!S.inicio){
  h+=`<section class="card"><div class="kicker">Antes de comenzar</div><h2>Bienvenida y bienvenido</h2>
  <p>En esta actividad leerás <b>6 contenidos formativos</b> y resolverás <b>8 actividades interactivas</b>. Cada actividad se desbloquea cuando terminas la anterior.</p>
  <div class="box alert"><b>Reglas</b><p>• Cada actividad tiene <b>3 intentos</b> y tu calificación es la de tu <b>mejor intento</b>.<br>• Al verificar verás qué respuestas debes revisar, pero <b>no se te dirá la respuesta correcta</b>.<br>• Tu avance se guarda en este dispositivo y navegador. Usa siempre el mismo.<br>• Al final obtendrás tu <b>promedio</b> y enviarás tus resultados a tu docente.</p></div>
  <div class="form"><div><label for="fnom">Nombre completo (empezando por apellidos)</label><input type="text" id="fnom" maxlength="80" placeholder="Ej. Hernández Cruz María Fernanda"></div>
  <div><label for="flis">Número de lista</label><input type="number" id="flis" min="1" max="60"></div></div>
  <button class="btn" id="fgo">COMENZAR ACTIVIDAD</button></section>`;
  app.innerHTML=h;
  $("#fgo").onclick=()=>{const n=$("#fnom").value.trim().replace(/\s+/g," "),l=$("#flis").value.trim();
   if(n.split(" ").length<3){toast("Escribe tu nombre completo (apellidos y nombre).");return;}
   if(!l){toast("Escribe tu número de lista.");return;}
   S.nombre=n;S.lista=l;S.inicio=true;S.fecha=new Date().toISOString();save();render();window.scrollTo(0,0);};
  updTop();return;}
 h+=`<section class="card"><div class="kicker">Alumno</div><p style="margin:0"><b>${esc(S.nombre)}</b> · Grupo ${GRUPO} · No. de lista ${esc(S.lista)}</p></section>`;
 let open=true,num=0;const toBind=[];
 PLAN.forEach((ids,li)=>{const L=LECT[li];
  if(!open){h+=`<section class="card locked"><div class="lk">🔒</div><div class="pop"><b>Lectura ${li+1}. ${L.titulo}</b></div><p>Termina la actividad anterior para desbloquear esta lectura.</p></section>`;num+=ids.length;return;}
  h+=`<section class="card" id="lec${li+1}"><div class="kicker">Propósito 7 · Contenido formativo ${li+1} de 6</div><h2>${L.titulo}</h2>
   <div class="meta">Lectura ${li+1} de 6 · Tiempo estimado: ${L.min} minutos</div><div class="rbar">${[0,1,2,3,4,5].map(i=>`<i class="${i<=li?"on":""}"></i>`).join("")}</div>${L.html}`;
  ids.forEach(id=>{num++;if(open){h+=actHTML(id,num);toBind.push(id);if(!S.acts[id].closed)open=false;}
   else h+=`<section class="act" style="border-style:dashed;text-align:center;color:var(--gris)">🔒 <b>Actividad ${num}. ${ANAMES[id]}</b><br>Se desbloquea al terminar la actividad anterior.</section>`;});
  h+=`</section>`;
 });
 h+=open?resultsHTML():`<section class="card locked"><div class="lk">🏁</div><div class="pop"><b>Resultados finales</b></div><p>Aparecerán cuando termines las 8 actividades.</p></section>`;
 app.innerHTML=h;
 const sg=$("#simbologia");if(sg)sg.innerHTML=`<div class="symgrid">${SIMB.map(s=>`<div class="sym">${shape(s[0])}<div><b>${esc(s[1])}</b><span>${esc(s[2])}</span></div></div>`).join("")}</div>`;
 const de=$("#diagrama-ejemplo");if(de)de.innerHTML=`<div style="max-width:340px">${flowSVG({ini:"Inicio",A:"Leer nacimiento",B:"edad ← 2026 - nacimiento",C:"¿edad >= 18?",D:"Escribir \"Puedes votar\"",E:"Escribir \"Aún no puedes votar\""})}</div>`;
 toBind.forEach(bindAct);
 if(open)bindResults();
 updTop();
}
function bindAct(id){const st=S.acts[id],a=A[id];
 a.bind&&a.bind.call(a);
 if(st.ans&&a.restore)a.restore.call(a,st.ans);
 const btn=$("#"+id+"v");
 if(st.hist.length){a.mark(a.check(a.read()));}
 showState(id);
 btn.onclick=()=>verify(id);
}
function showState(id){const st=S.acts[id],m=$("#"+id+"m"),a=A[id],btn=$("#"+id+"v"),info=$("#"+id+"i");
 info.textContent=st.int?`Mejor calificación: ${st.best.toFixed(1)}`:"";
 if(st.closed){a.lock.call(a);btn.disabled=true;btn.textContent=st.done?"COMPLETADA ✔":"INTENTOS AGOTADOS";
  m.className="res show "+(st.done?"ok":"warn");
  m.innerHTML=st.done?`¡Excelente! Actividad completada. Calificación: ${st.best.toFixed(1)}<small>Continúa con la siguiente lectura.</small>`
   :`Usaste tus 3 intentos. Calificación de esta actividad: ${st.best.toFixed(1)}<small>Se desbloqueó la siguiente lectura. Repasa este tema antes de tu examen.</small>`;}
 else if(st.int){const last=st.hist[st.hist.length-1];m.className="res show bad";
  m.innerHTML=`Intento ${st.int} de ${MAXI}: ${last.c} de ${last.t} correctas (${last.s.toFixed(1)}).<small>Vuelve a leer la lectura, corrige las respuestas marcadas en rojo y verifica de nuevo. Te quedan ${MAXI-st.int} intento(s).</small>`;}
}
function verify(id){const st=S.acts[id],a=A[id];if(st.closed)return;
 const v=a.read();if(!a.complete(v)){toast("Responde todo antes de verificar. No se gastó ningún intento.");return;}
 const res=a.check(v),c=res.filter(Boolean).length,t=res.length,s=r1(c/t*10);
 st.int++;st.best=Math.max(st.best,s);st.ans=v;st.hist.push({c,t,s,f:Date.now()});
 if(c===t){st.done=true;st.closed=true;}else if(st.int>=MAXI)st.closed=true;
 save();a.mark(res);
 $$("#"+id+" .dots i").forEach((d,i)=>d.classList.toggle("used",i<st.int));
 if(st.closed){render();setTimeout(()=>{const e=$("#"+id);if(e)e.scrollIntoView({block:"start"});window.scrollBy(0,-70);},30);toast(st.done?"¡Actividad completada!":"Actividad cerrada. Se desbloqueó lo siguiente.");}
 else showState(id);
 updTop();
}
function promedio(){return r1(ACTS.reduce((s,k)=>s+S.acts[k].best,0)/ACTS.length);}
function updTop(){const n=ACTS.filter(k=>S.acts[k].closed).length;$("#plbl").textContent=`Actividades: ${n} de 8`;$("#pbar").style.width=(n/8*100)+"%";
 const cl=ACTS.filter(k=>S.acts[k].closed);$("#ppro").textContent=cl.length?`Promedio: ${r1(cl.reduce((s,k)=>s+S.acts[k].best,0)/cl.length).toFixed(1)}`:"Promedio: —";}
function folio(){return fnv([GRUPO,S.nombre,S.lista,ACTS.map(k=>S.acts[k].best+"/"+S.acts[k].int).join(","),"cbtis187"].join("|"));}
function resultsHTML(){const p=promedio();
 return `<section class="card" id="resultados"><div class="kicker">Cierre</div><h2>Mis resultados</h2>
 <div class="prom"><div class="big">${p.toFixed(1)}</div><div><b class="pop">Promedio final de la Actividad 18</b><br>Promedio de tus 8 actividades (mejor intento de cada una).</div></div>
 <div class="tw"><table class="rtab"><tr><th>#</th><th>Actividad</th><th>Intentos</th><th>Calificación</th></tr>${ACTS.map((k,i)=>`<tr><td>${i+1}</td><td>${ANAMES[k]}</td><td>${S.acts[k].int} de 3</td><td><b>${S.acts[k].best.toFixed(1)}</b></td></tr>`).join("")}</table></div>
 <p class="meta">Folio de verificación: <b>${folio()}</b></p>
 <div class="foot"><button class="btn verde" id="env">${S.enviado?"RESULTADOS ENVIADOS ✔ (reenviar)":"ENVIAR MIS RESULTADOS AL DOCENTE"}</button><button class="btn sec" id="imp">DESCARGAR CONSTANCIA (PDF)</button></div>
 <div class="res" id="envm"></div>
 ${S.enviado?`<div class="foot"><button class="btn" id="nuevo" style="background:#5F6366;box-shadow:none">DEJAR EL EQUIPO LISTO PARA OTRO ALUMNO</button></div>`:""}</section>`;}
function payload(){const o={grupo:GRUPO,nombre:S.nombre,lista:S.lista,promedio:promedio(),folio:folio(),inicio:S.fecha,fin:new Date().toISOString(),agente:navigator.userAgent.slice(0,120)};
 ACTS.forEach((k,i)=>{o["a"+(i+1)]=S.acts[k].best;o["i"+(i+1)]=S.acts[k].int;});return o;}
function bindResults(){
 $("#env").onclick=async()=>{const m=$("#envm"),url=(window.CONFIG&&CONFIG.URL_HOJA||"").trim();
  if(!url||url.indexOf("script.google.com")<0){m.className="res show warn";m.innerHTML="El envío automático aún no está configurado.<small>Descarga tu constancia en PDF y súbela a Google Classroom.</small>";return;}
  $("#env").disabled=true;m.className="res show warn";m.textContent="Enviando...";
  try{await fetch(url,{method:"POST",mode:"no-cors",headers:{"Content-Type":"text/plain;charset=utf-8"},body:JSON.stringify(payload())});
   S.enviado=true;save();m.className="res show ok";m.innerHTML="¡Resultados enviados a tu docente!<small>Por seguridad, descarga también tu constancia en PDF.</small>";
   setTimeout(()=>{render();$("#resultados").scrollIntoView();},1800);}
  catch(e){m.className="res show bad";m.innerHTML="No se pudo enviar. Revisa tu conexión a internet e inténtalo de nuevo.<small>Si el problema sigue, descarga tu constancia y súbela a Classroom.</small>";$("#env").disabled=false;}};
 $("#imp").onclick=()=>{buildConst();window.print();};
 const nv=$("#nuevo");if(nv)nv.onclick=()=>{if(confirm("Se borrará el avance de "+S.nombre+" en este equipo. ¿Ya descargaste tu constancia?")){S=blank();save();render();window.scrollTo(0,0);}};
}
function buildConst(){const p=promedio();
 $("#constancia").innerHTML=`<div style="border-bottom:4px solid #BC955C;padding-bottom:8px;margin-bottom:12px"><div style="color:#8F6F36;font-weight:700;font-family:Poppins">CBTis No. 187 · CULTURA DIGITAL 1</div>
 <h1>Constancia de resultados · Actividad 18 (Propósito 7)</h1></div>
 <p><b>Alumno:</b> ${esc(S.nombre)} &nbsp; <b>Grupo:</b> ${GRUPO} &nbsp; <b>No. de lista:</b> ${esc(S.lista)}<br><b>Docente:</b> M.T.I. Félix Tolentino Cruz &nbsp; <b>Fecha:</b> ${new Date().toLocaleString("es-MX")}</p>
 <table><tr><th>#</th><th>Actividad</th><th>Intentos</th><th>Calificación</th></tr>${ACTS.map((k,i)=>`<tr><td>${i+1}</td><td>${ANAMES[k]}</td><td>${S.acts[k].int} de 3</td><td>${S.acts[k].best.toFixed(1)}</td></tr>`).join("")}
 <tr><td></td><td><b>PROMEDIO FINAL</b></td><td></td><td><b>${p.toFixed(1)}</b></td></tr></table>
 <p><b>Folio de verificación:</b> ${folio()}</p>`;}
render();
