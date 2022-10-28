function capturar(){

    function persona(nombre, apellido, correo, telefono){
        this.nombre=nombre;
        this.apellido=apellido;
        this.correo=correo;
        this.telefono=telefono;
       
    }

    let NombreRegistrar = document.getElementById("nombre").value;
    
    let ApellidoRegistrar = document.getElementById("apellido").value;

    let CorreoRegistrar = document.getElementById("correo").value;

    let TelefonoRegistrar = document.getElementById("telefono").value;



    NuevaPersona = new persona (NombreRegistrar, ApellidoRegistrar, CorreoRegistrar, TelefonoRegistrar);
    console.log(NuevaPersona);
    agregar();
}
    
     let BaseDatos=[];
    function agregar(){
        BaseDatos.push(NuevaPersona);
        console.log(BaseDatos);
      }
    
