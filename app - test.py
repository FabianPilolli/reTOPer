from flask import Flask, render_template, request, jsonify
import mysql.connector
import os

app = Flask(__name__)

# Configuración de la base de datos
db_config = {
    'host': 'localhost',
    'user': 'root',
    'password': '',
    'database': 'smash_renders'
}

def obtener_conexion():
    try:
        mydb = mysql.connector.connect(**db_config)
        return mydb
    except mysql.connector.Error as err:
        print(f"Error al conectar a la base de datos: {err}")
        return None

@app.route('/')
def index():
    conexion = obtener_conexion()
    if not conexion:
        return "Error al conectar a la base de datos."

    cursor = conexion.cursor()
    cursor.execute("SELECT DISTINCT Personaje FROM renders ORDER BY Personaje")
    personajes_renders = [row[0] for row in cursor.fetchall()]

    cursor.execute("SELECT DISTINCT Personaje FROM stocks ORDER BY Personaje")
    personajes_stocks = [row[0] for row in cursor.fetchall()]

    cursor.close()
    conexion.close()

    selected_personajes = {}
    selected_colores = {}
    selected_stocks_personajes = {}
    selected_stocks_colores = {}
    for i in range(1, 9):
        personaje_key = f'personaje{i}'
        color_key = f'color{i}'
        stock_personaje_key = f'secundario_personaje{i}'
        stock_color_key = f'secundario_color{i}'
        selected_personajes[f'selected_personaje{i}'] = request.args.get(personaje_key)
        selected_colores[f'selected_color{i}'] = request.args.get(color_key)
        selected_stocks_personajes[f'selected_stock_personaje{i}'] = request.args.get(stock_personaje_key)
        selected_stocks_colores[f'selected_stock_color{i}'] = request.args.get(stock_color_key)

    selected_tertiary_personajes = {}
    selected_tertiary_colores = {}
    for i in range(1, 9):
        tertiary_personaje_key = f'terciario_personaje{i}'
        tertiary_color_key = f'terciario_color{i}'
        selected_tertiary_personajes[f'selected_tertiary_personaje{i}'] = request.args.get(tertiary_personaje_key)
        selected_tertiary_colores[f'selected_tertiary_color{i}'] = request.args.get(tertiary_color_key)

    personajes_con_colores_renders = {}
    personajes_con_colores_stocks = {}
    conexion = obtener_conexion()
    if conexion:
        cursor = conexion.cursor()
        for personaje in personajes_renders:
            cursor.execute("SELECT DISTINCT Color FROM renders WHERE Personaje = %s ORDER BY Color", (personaje,))
            colores = [row[0] for row in cursor.fetchall()]
            personajes_con_colores_renders[personaje] = colores
        for personaje in personajes_stocks:
            cursor.execute("SELECT DISTINCT Color FROM stocks WHERE Personaje = %s ORDER BY Color", (personaje,))
            colores = [row[0] for row in cursor.fetchall()]
            personajes_con_colores_stocks[personaje] = colores
        cursor.close()
        conexion.close()

    return render_template('index.html',
                           personajes_renders=personajes_renders,
                           personajes_stocks=personajes_stocks,
                           personajes_con_colores_renders=personajes_con_colores_renders,
                           personajes_con_colores_stocks=personajes_con_colores_stocks,
                           selected_personajes=selected_personajes,
                           selected_colores=selected_colores,
                           selected_stocks_personajes=selected_stocks_personajes,
                           selected_stocks_colores=selected_stocks_colores,
                           selected_tertiary_personajes=selected_tertiary_personajes,
                           selected_tertiary_colores=selected_tertiary_colores)

@app.route('/get_colores/<personaje>')
def get_colores(personaje):
    conexion = obtener_conexion()
    if not conexion:
        return jsonify([])
    cursor = conexion.cursor()
    cursor.execute("SELECT DISTINCT Color FROM renders WHERE Personaje = %s ORDER BY Color", (personaje,))
    colores = [row[0] for row in cursor.fetchall()]
    cursor.close()
    conexion.close()
    return jsonify(colores)

@app.route('/get_colores_stock/<personaje>')
def get_colores_stock(personaje):
    conexion = obtener_conexion()
    if not conexion:
        return jsonify([])
    cursor = conexion.cursor()
    cursor.execute("SELECT DISTINCT Color FROM stocks WHERE Personaje = %s ORDER BY Color", (personaje,))
    colores = [row[0] for row in cursor.fetchall()]
    cursor.close()
    conexion.close()
    return jsonify(colores)

@app.route('/get_render/<personaje>/<color>')
def get_render(personaje, color):
    conexion = obtener_conexion()
    render_path = None
    if conexion:
        cursor = conexion.cursor()
        cursor.execute("SELECT `Nombre de Archivo` FROM renders WHERE Personaje = %s AND Color = %s", (personaje, color))
        result = cursor.fetchone()
        if result:
            render_path = os.path.join("static/renders", personaje, result[0])
        cursor.close()
        conexion.close()
    return jsonify({'render_path': render_path})

@app.route('/get_stock/<personaje>/<color>')
def get_stock(personaje, color):
    conexion = obtener_conexion()
    stock_path = None
    if conexion:
        cursor = conexion.cursor()
        cursor.execute("SELECT `Nombre de Archivo` FROM stocks WHERE Personaje = %s AND Color = %s", (personaje, color))
        result = cursor.fetchone()
        if result:
            stock_path = os.path.join("static/stocks", personaje, result[0])
        cursor.close()
        conexion.close()
    return jsonify({'stock_path': stock_path})

if __name__ == '__main__':
    app.run(debug=True)