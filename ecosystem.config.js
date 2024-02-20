module.exports = {
    apps: [
      {
        name: 'todo-fierro',
        script: './src/app.js', // Ruta al archivo principal
        watch: true, // Observa cambios en el directorio y reinicia automáticamente
        env: {
          NODE_ENV: 'development', // Configuración de entorno para desarrollo
          LINK_MONGO: 'mongodb://usuario:contrasena@localhost:27017/nombre_de_la_base_de_datos', // Reemplaza con tu conexión MongoDB local
        },
        env_production: {
          NODE_ENV: 'production', // Configuración de entorno para producción
          LINK_MONGO: 'mongodb+srv://manu:onita0102@cluster0.fgglgec.mongodb.net/TodoFierro', // Configuración de entorno para producción con tu conexión MongoDB en la nube
        },
      },
    ],
    // Resto de la configuración...
  };