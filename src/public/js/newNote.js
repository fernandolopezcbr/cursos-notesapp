const btn = document.getElementById('btn');

$(document).ready(function() {
    $("#alert").hide();
});

$("#btn-alert").click(function() {
    $("#alert").hide();
});

btn.onclick = () => {


    const curso = document.getElementById('curso').value,
    imagenuno = document.getElementById('imagenuno').value,
    imagendos = document.getElementById('imagendos').value,
    imagenejemplo = document.getElementById('imagenejemplo').value,
    contenido = document.getElementById('contenido').value,
    materialapoyo = document.getElementById('materialapoyo').value;


    const title = document.getElementById('title').value;
    const description = document.getElementById('description').value;

    if ( curso == ''|| title == '' || description == '') {
        $("#alert").show();
    } else {
        postData(  curso , imagenuno , imagendos, imagenejemplo, contenido, materialapoyo, title, description);
    }

}

async function postData( curso, imagenuno, imagendos, imagenejemplo, contenido,  materialapoyo, title, description) {
    const response = await fetch('/api/save', {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            
       
            'curso': curso,
            'title': title,
            'description': description,
            'imagenuno': imagenuno,
            'imagendos': imagendos,
            'imagenejemplo': imagenejemplo,
            'contenido': contenido,
            'materialapoyo': materialapoyo
        })

    });

    const data = await response.json();
    console.log(data);
}