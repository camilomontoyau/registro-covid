
# Covid registro diario auutomático en SURA

## Este script sirve solamente para cuando no tienes síntomas, si tienes síntomas es mejor que lo hagas manualmente


### Pasos para su uso

1. Debes tener instalado nodejs versión mayor a la 10 https://nodejs.org/en/

2. Clona este repo 

https

``git clone https://github.com/camilomontoyau/registro-covid.git``


ssh

``git clone git@github.com:camilomontoyau/registro-covid.git``

3. Instala los paquetes de npm

``npm install``

4. Renombra el archivo env-sample a .env

``mv env-sample .env``

5. En el archivo .env pon tus datos y la url de tu empresa

**URL** la url que tu empresa te dió para que hagas el registro diario

ejemplo `https://www.segurossura.com.co/covid-19/encuestas/paginas/sintomas.aspx?sector={{{{sector empresa}}}}&idEmpresa={{{{id empresa}}}}==&nitEmpresa={{{{nit empresa}}}}&mail={{{{mail autorizado}}}}`

**IDENTIFICACION** es tu número de cédula sin puntos

**NOMBRE** es tu nombre completo

6. Ejecuta el script

``npm start``

7. Verás cómo se abre una ventana de chromium que hace el registro por ti

![ejemplo](registro.gif)

