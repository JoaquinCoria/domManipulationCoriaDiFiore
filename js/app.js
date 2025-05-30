const app = document.getElementById('app');
        const cards = document.getElementById('cards');
        const botonAgregar = document.querySelector('.btnAgregar');
        const botonEliminar = document.querySelector('.btnEliminar');
        function agregarElemento()
        {
            // Crear el contenedor de la card
            const nuevaCard = document.createElement('div');
            nuevaCard.classList.add('card');
            // Crea el campo de la imagen en la cad
            const imagenCard = document.createElement('img');
            imagenCard.src = "#";
            // Crea el campo del titulo en la card
            const tituloCard = document.createElement('h2');
            tituloCard.textContent = "Titulo";
            // Crea el campo de la descripción en la card
            const descripcionCard = document.createElement('p');
            descripcionCard.textContent = "Descripción";
            nuevaCard.appendChild(imagenCard);
            nuevaCard.appendChild(tituloCard);
            nuevaCard.appendChild(descripcionCard);
            cards.appendChild(nuevaCard);
            
        }
        function eliminarElemento()
        {
            const eliminarCard = document.querySelector('.card:last-of-type');
            eliminarCard.parentNode.removeChild(eliminarCard);
        }

        botonAgregar.addEventListener('click',agregarElemento);
        botonEliminar.addEventListener('click',eliminarElemento);
