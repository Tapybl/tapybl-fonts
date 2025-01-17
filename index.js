// Incluye el CSS para que se aplique automáticamente al importar el módulo
import './styles.css';

// Exporta rutas de las fuentes (opcional, por si se quieren usar directamente en JS)
module.exports = {
  fonts: {
    eot: require('./fonts/retapybl.eot'),
    svg: require('./fonts/retapybl.svg'),
    ttf: require('./fonts/retapybl.ttf'),
    woff: require('./fonts/retapybl.woff'),
  },
};