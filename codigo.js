window.onload = function() {
        cargarContenido('inicio.html');
    };
    function cargarContenido(url) {
        fetch(url)
        .then(function(response) {
            return response.text();
        })
        .then(function(content) {
            document.getElementById("miContenido").innerHTML = content;
            if (url === 'fixture.html') {
                hacerRequest();
            }	

        })
        .catch(function(error) {
            console.log('Error al cargar el contenido: ', error);
        });
    }
    async function hacerRequest() {
        const url = 'https://cricket-live-data.p.rapidapi.com/fixtures';
        const options = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': 'f71e71e01cmshe87be353164325dp117ca6jsn0331ca586917',
                'X-RapidAPI-Host': 'cricket-live-data.p.rapidapi.com'
            }
        };
        try {
            const response = await fetch(url, options);
            const result = await response.text();
            const partidos = JSON.parse(result);
            console.log(partidos.results);
            const primerosCincoElementos = partidos.results.slice(0, 20);

            // Obtener el contenedor de la lista
            const contenedorPartidos = document.getElementById('partidos');
            primerosCincoElementos.forEach(elemento => {
            const parrafo = document.createElement('p');
            parrafo.textContent = elemento.match_title + " el día " + elemento.date;;
            contenedorPartidos.appendChild(parrafo);
            });

            
        } catch (error) {
            console.error(error);
        }
    }
        function validateForm(event) {
            event.preventDefault(); // Prevent form submission

            // Get form input values
            const name = document.getElementById("name").value;
            const email = document.getElementById("email").value;
            const message = document.getElementById("message").value;

            // Email format validation using a regular expression
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(email)) {
                alert("Please enter a valid email address.");
                return false; // Prevent form reset
            }

            // Perform further processing or submit the form
            // ...

            // Clear the form inputs
            document.getElementById("myForm").reset();

            // Display a success message
            alert("Form submitted successfully!");
        }