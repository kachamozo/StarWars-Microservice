# Microservicios con Docker Compose

Este proyecto es una práctica realizada como parte del Bootcamp de Henry, que consiste en la creación y despliegue de microservicios utilizando Docker Compose. Los microservicios incluidos en este proyecto son: Characters, Films, Planet y Database, aparte del Gateway. A continuación, se proporciona una breve descripción de cada uno de ellos:

## Characters

El servicio de `characters` se encarga de gestionar la información de los personajes de un universo ficticio. Proporciona una API REST que permite realizar operaciones CRUD (Crear, Leer, Actualizar y Eliminar) sobre los personajes. Este microservicio está diseñado para ser escalable y permite acceder a información detallada de cada personaje.

## Films

El servicio de `films` administra la información relacionada con las películas de este universo ficticio. Ofrece una API REST que permite acceder a detalles de las películas, como el título, la fecha de lanzamiento y la sinopsis. Además permite realizar operaciones CRUD (Crear, Leer, Actualizar y Eliminar) sobre las películas, este servicio se integra con el servicio de `characters` para mostrar los personajes que aparecen en cada película.

## Planet

El microservicio `planet` se encarga de gestionar la información de los planetas dentro del universo ficticio. Proporciona una API REST para acceder a detalles sobre los planetas, como su nombre, ubicación y características especiales. Además permite realizar operaciones CRUD (Crear, Leer, Actualizar y Eliminar) sobre los planetas, este servicio se integra con el servicio de `characters` para mostrar qué personajes están relacionados con cada planeta.

## Database

El servicio `Database` es esencial para el funcionamiento de los otros microservicios, ya que proporciona una base de datos centralizada donde se almacena toda la información. Utiliza una base de datos Dockerizada, como PostgreSQL o MySQL, para almacenar los datos de los personajes, películas y planetas. Los otros microservicios se conectan a esta base de datos para realizar operaciones de lectura y escritura.

## Docker Compose

El archivo `docker-compose.yml` en este repositorio define la configuración de Docker Compose para orquestar estos microservicios. Utiliza contenedores Docker para ejecutar cada microservicio de manera aislada, y establece conexiones entre ellos según sea necesario. Esto facilita la creación y el despliegue de todos los servicios en conjunto con una sola configuración.

Claro, aquí tienes los pasos a seguir para clonar el repositorio y ejecutar los microservicios utilizando Docker Compose:

### Paso 1: Clonar el Repositorio

1. Abre tu terminal o línea de comandos.

2. Navega a la ubicación donde deseas clonar el repositorio. Por ejemplo, puedes usar el siguiente comando para ir al directorio de tu elección:

   ```bash
   cd /ruta/del/directorio
   ```

3. Clona el repositorio desde GitHub usando el siguiente comando.

   ```bash
   git clone <https://github.com/kachamozo/StarWars-Microservice.git>
   ```

### Paso 2: Iniciar Docker Compose

4. Asegúrate de tener Docker y Docker Compose instalados en tu sistema. Puedes verificar la instalación de Docker ejecutando:

   ```bash
   docker --version
   ```

   Y puedes verificar la instalación de Docker Compose ejecutando:

   ```bash
   docker-compose --version
   ```

   Si no están instalados, sigue las instrucciones de instalación proporcionadas en la documentación oficial de Docker.

5. Una vez que tengas Docker y Docker Compose instalados, navega al directorio donde clonaste el repositorio:

   ```bash
   cd nombre-del-repo
   ```

6. Ejecuta el siguiente comando para iniciar los microservicios utilizando Docker Compose. Esto utilizará el archivo `docker-compose.yml` que se encuentra en el repositorio:

   ```bash
   docker-compose up -d
   ```

   El flag `-d` permite ejecutar los contenedores en segundo plano.

### Paso 3: Acceder a los Microservicios

7. Una vez que los microservicios estén en funcionamiento, podrás acceder a ellos a través de las rutas definidas en cada microservicio. Por ejemplo:

   - El servicio `characters` podría estar disponible en `http://localhost:8000/characters`.
   - El servicio `films` podría estar disponible en `http://localhost:8000/films`.
   - El servicio `planet` podría estar disponible en `http://localhost:8000/planet`.

**Characters (Personajes):**

- GET /characters: Obtiene una lista de todos los personajes.
- GET /characters/{id}: Obtiene información sobre un personaje específico por su ID.
- POST /characters: Crea un nuevo personaje proporcionando los datos necesarios en un json.
  ```
   {
   "id": "200",
    "name": "Lord Dack",
    "height": "177",
    "mass": "84",
    "homeworld": "22",
    "films": ["1", "3"]
  }
  ```
- PUT /characters/{id}: Actualiza la información sobre un personaje específico por su ID, y un json con los datos a actualizar.
- DELETE /characters/{id}: Elimina un personaje de la base de datos proporcionando su recpectivo ID.

**Films (Películas):**

- GET /films: Obtiene una lista de todas las películas de Star Wars.
- GET /films/{id}: Obtiene información sobre una película específica por su ID.
- POST /films: Crea una nueva película proporcionando los datos necesarios en un json.
  ```
   {
      "id": "200",
      "title": "Starwars la Guerra Final",
      "director": "Lord Smith",
      "producer": "Fox",
      "characters": ["1","2","3","4","5","10","18","20","80"],
      "planets": ["1", "3", "5", "9"]
  }
  ```
- PUT /films/{id}: Actualiza la información sobre una película específica por su ID, y un json con los datos a actualizar.
- DELETE /films/{id}: Elimina un película de la base de datos proporcionando su recpectivo ID.

**Planets (Planetas):**

- GET /planets: Obtiene una lista de todos los planetas de Star Wars.
- GET /planets/{id}: Obtiene información sobre un planeta específico por su ID.
- POST /planets: Crea un nuevo planeta proporcionando los datos necesarios en un json.

  ```
  {
      "id": "200",
      "name": "Ercolubus",
      "diameter": "9500",
      "climate": "temperate",
      "residents": ["19"],
      "films": ["1", "3", "5"]
  }

  ```

- PUT /planets/{id}: Actualiza la información sobre un planeta específico por su ID, y un json con los datos a actualizar.
- DELETE /planets/{id}: Elimina un planeta de la base de datos proporcionando su recpectivo ID.

¡Eso es todo! Ahora deberías tener los microservicios en funcionamiento en tu máquina local. Asegúrate de que Docker Compose se esté ejecutando y de que los servicios se estén ejecutando correctamente. Puedes detener los servicios en cualquier momento ejecutando `docker-compose down` desde el directorio del repositorio clonado.
