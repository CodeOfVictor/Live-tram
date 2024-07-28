# Live-tram

**Language: English**

Desktop application created with Electron, as it is a framework for creating applications quickly and across platforms.

Note that this application has been created for non-commercial use.

![Screenshot](https://raw.githubusercontent.com/CodeOfVictor/Live-tram/main/img/Screenshot.png?token=GHSAT0AAAAAACURBWHVKJBU3CRVBXTA3MVCZVGWHEA)

## Development
The openstreetmap (https://www.openstreetmap.org) was used for this project.

### Route
Map obtained with Overpass Turbo (http://overpass-turbo.eu/), which allows you to query and save routes (in .geojson format), in this case, the tram route of Zaragoza (Spain).

Query performed:
```bash
[out:json];
    area[name="Zaragoza"]->.searchArea;
    (
    relation["route"="tram"](area.searchArea);
    );
    out body;
    >;
    out skel qt;
```
### Stops and Information
The stops and their respective information, such as the remaining time for the next two trams (in .geojson format), are provided by the API from the Zaragoza City Council. (https://www.zaragoza.es/docs-api_sede/). For any information about legal notices and conditions, consult (https://www.zaragoza.es/sede/portal/aviso-legal#condiciones)

## Run

Ensure dependencies like Electron and Node are installed, clone the project, and run it with the following command.

```bash
npm install
npm start
```

---

# Live-tram

**Idioma: Español**

Aplicación de escritorio creada con Electron, ya que es un framework para crear aplicaciones de forma rápida y multiplataforma.

Aclarar que esta aplicación ha sido creada sin fines lucrativos.

![Captura de ventana](https://raw.githubusercontent.com/CodeOfVictor/Live-tram/main/img/Screenshot.png?token=GHSAT0AAAAAACURBWHVKJBU3CRVBXTA3MVCZVGWHEA)

## Desarrollo
Se uso el mapa de openstreetmap (https://www.openstreetmap.org) para este proyecto.

### Ruta
Mapa obtenido con Overpass Turbo (http://overpass-turbo.eu/), el cual permite realizar consultas y guardar rutas (en formato .geojson), en este caso, la del tranvía de Zaragoza (España).

Consulta realizada:
```bash
[out:json];
    area[name="Zaragoza"]->.searchArea;
    (
    relation["route"="tram"](area.searchArea);
    );
    out body;
    >;
    out skel qt;
```
### Paradas e Información
Las paradas y su respectiva información, como el tiempo restante para la llegada de los dos próximos tranvías (en formato .geojson), son proporcionadas por la API del Ayuntamiento de Zaragoza. (https://www.zaragoza.es/docs-api_sede/). Para cualquier información sobre aviso legal y condiciones, consúltalas en (https://www.zaragoza.es/sede/portal/aviso-legal#condiciones)

## Ejecutar

Asegúrate de tener instaladas las dependencias como Electron y Node, clona el proyecto y ejecútalo con el siguiente comando.

```bash
npm install
npm start
```
