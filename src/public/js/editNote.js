const update = document.getElementById('update');

//Obtenemos los parámetros enviados por la url ****************************
const values = window.location.search;
//Creamos la instancia
const urlParams = new URLSearchParams(values);
//Accedemos a los valores
var id = urlParams.get('id');



var categoriaParam = urlParams.get('curso'),
imagenParam = urlParams.get('imagenuno'),
imagendosParam = urlParams.get('imagendos'),
imagenejemploParam = urlParams.get('imagenejemplo'),
contenidoParam = urlParams.get('contenido'),
materialapoyoParam = urlParams.get('materialapoyo');

var titleParam = urlParams.get('title');
var descriptionParam = urlParams.get('description');

//Elemento del DOM *********************************************************




const curso = document.getElementById('curso');
const imagenuno = document.getElementById('imagenuno');
const imagendos = document.getElementById('imagendos');
const imagenejemplo = document.getElementById('imagenejemplo');
const contenido = document.getElementById('contenido');

const materialapoyo = document.getElementById('materialapoyo');

const title = document.getElementById('title');
const description = document.getElementById('description');

//Asignamos los valores ****************************************************




curso.value = categoriaParam;
imagenuno.value = imagenParam;
imagendos.value = imagendosParam;
imagenejemplo.value = imagenejemploParam;
contenido.textContent = contenidoParam;

materialapoyo.value = materialapoyoParam;

title.value = titleParam;
description.textContent = descriptionParam;

$(document).ready(function() {
    $("#alert-edit").hide();
});

$("#btn-alert-edit").click(function() {
    $("#alert-edit").hide();
});

update.onclick = () => {

    
    const categoriaValue = curso.value,
     imagenValue = imagenuno.value,
     imagendosValue = imagendos.value,
     imagenejemploValue = imagenejemplo.value,
     contenidoValue = contenido.value,
     
     materialapoyoValue = materialapoyo.value;

    const titleValue = title.value;
    const descriptionValue = description.value;

    if ( categoriaValue == '' || imagenValue == '' || imagendosValue == '' || imagenejemploValue == '' || contenidoValue == '' ||  materialapoyoValue == '' ||titleValue == '' || descriptionValue == '') {
        $("#alert-edit").show();
    } else {
        updateData(id , categoriaValue, imagenValue, imagendosValue, imagenejemploValue, contenidoValue, materialapoyoValue, titleValue, descriptionValue);
        window.location.href = '/';
    }

}

//Función para actualizar una nota

async function updateData(id, curso, imagenuno, imagendos, imagenejemplo , contenido  ,materialapoyo, title, description) {
    const response = await fetch('/api/update/' + id, {
        method: 'PUT',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            
            
            
            'curso': curso,
            'imagenuno': imagenuno,
            'imagendos': imagendos,
            'imagenejemplo': imagenejemplo,
            'contenido': contenido,
            
            'materialapoyo': materialapoyo,
            'title': title,
            'description': description
        })

    });

    const data = await response.json();
    console.log(data);
}