(async () => {
    const { value: email } = await Swal.fire({
        html: '<h1>Registre su email para recibir un 15% de descuento en su primera compra</h1>',
        confirmButtonText: "<h1>Registrar</h1>",
        width: "60%",
        padding: "1rem",
        background:"black",
        input: 'email',
        imageWidth: '450px'
      })
      
      if (email) {
        Swal.fire(`Email registrado: ${email}`)
      }
    }) ()