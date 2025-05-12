import mysql.connector
import os
import re

# Configuración de la conexión a la base de datos
db_config = {
    'host': 'localhost',
    'user': 'root',
    'password': '',
    'database': 'smash_renders'
}

# Ruta a la carpeta principal de las imágenes (dentro de 'static')
ruta_principal_imagenes = 'static/Stocks'

try:
    mydb = mysql.connector.connect(**db_config)
    print("Conexión a la base de datos exitosa.")
    mycursor = mydb.cursor()

    for directorio_actual, subdirectorios, archivos in os.walk(ruta_principal_imagenes):
        # El nombre del personaje será el nombre del directorio actual si no es la carpeta principal
        personaje = os.path.basename(directorio_actual)
        if directorio_actual == ruta_principal_imagenes:
            continue  # Saltar la carpeta principal 'Stocks'

        print(f"Procesando personaje: {personaje}")

        color = None
        color_counter_u = 0

        for nombre_archivo in sorted(archivos):  # Procesar archivos en orden para asignar 'u' colores secuencialmente
            ruta_completa = os.path.join(directorio_actual, nombre_archivo)
            if os.path.isfile(ruta_completa):
                nombre_archivo_db = nombre_archivo
                color_extraido = None
                match_numero = re.search(r'\((\d+)\)', nombre_archivo)
                match_texto = re.search(r'\(([^)]+)\)', nombre_archivo)

                if match_numero:
                    numero_color = int(match_numero.group(1))
                    # Ya no hay límite superior para el número de color
                    color_extraido = f"c{numero_color - 1:02d}"
                elif match_texto:
                    color_extraido = match_texto.group(1)
                else:
                    color_extraido = f"u{color_counter_u:02d}"
                    color_counter_u += 1

                print(f"  Archivo: {nombre_archivo}, Color extraído: {color_extraido}, Nombre para DB: {nombre_archivo_db}")

                sql = "INSERT INTO stocks (Personaje, Color, `Nombre de Archivo`) VALUES (%s, %s, %s)"
                val = (personaje, color_extraido, nombre_archivo_db)
                try:
                    mycursor.execute(sql, val)
                    mydb.commit()
                    print(f"    Imagen '{nombre_archivo}' registrada en la base de datos.")
                except mysql.connector.Error as err:
                    print(f"    Error al insertar '{nombre_archivo}': {err}")
                    mydb.rollback()

        print(f"Conteo de colores 'u' para {personaje}: {color_counter_u}")

    print("Proceso de carga de imágenes completado.")

except mysql.connector.Error as err:
    print(f"Error al conectar o interactuar con la base de datos: {err}")

finally:
    if mydb and mydb.is_connected():
        mycursor.close()
        mydb.close()
        print("Conexión a la base de datos cerrada.")