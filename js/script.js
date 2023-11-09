function updateTime() {
    // CApturamos la fecha actual del seistema
    let fecha_actual = new Date();
  
    // Separamos de la fecha las horas, los minutos y los segundos
    // No aseguramos de tener siempre dos digitos (00:00:00)
    let horas = fecha_actual.getHours().toString().padStart(2, "0"); 
    let minutos = fecha_actual.getMinutes().toString().padStart(2, "0");
    let secondos = fecha_actual.getSeconds().toString().padStart(2, "0 ");
  
    // Creamos una plantilla literal con los datos
    let tiempo = `${horas}:${minutos}:${secondos}`;
  
    // Actualizamos el texto del elemento DIV
    document.getElementById("time").textContent = tiempo;
  }
  
  // Llamamos a la función updateTime() cada segundo
  setInterval(updateTime, 1000);
  