import mysql.connector

# Configuración de la conexión a la base de datos
db_config = {
    'host': 'localhost',
    'user': 'root',
    'password': '',
    'database': 'smash_renders'
}

try:
    mydb = mysql.connector.connect(**db_config)
    print("¡Conexión a la base de datos exitosa!")
    mydb.close()
    print("Conexión a la base de datos cerrada.")

except mysql.connector.Error as err:
    print(f"Error al conectar a la base de datos: {err}")