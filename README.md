# BACKEND

0. Ubicarse en la carpeta fulfioBack

1. Ejecutar ```npm install``` para reconstruir los módulos de Node.

2. Tener instalado docker para instalar la bd mongo y Ejecutar 
```
docker compose up -d

(Si tiene instalado mongo, No hace falta ejecutar el paso 2)
```
3. Ejecutar ```npm start``` para comenzar la aplicacion.  


# FrontEnd

0. Ubicarse en la carpeta fulfioFront


2. Ejecutar ```npm install```

4. Ejecutar la app  ```ng serve -o```
5. Ir a la url ```http://localhost:4200/auth/login```
6. Se pide correo y password. Para entrar coloque cualquier correo y password,
si no existe, el sistema automaticamente lo crea.
7. Para entrar como admin, se necesita que el correo tenga la palabra admin
8. ejemplo: admin@Fulfio.com
