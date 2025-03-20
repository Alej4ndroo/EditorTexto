document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('editor').focus();
    updateCounts();
});

function formatText(command) {
    document.execCommand(command, false, null);
    document.getElementById('editor').focus();
}

function changeFontSize() {
    const size = document.getElementById('fontSize').value;
    document.execCommand('fontSize', false, size);
    document.getElementById('editor').focus();
}

function changeFont() {
    const font = document.getElementById('fontName').value;
    document.execCommand('fontName', false, font);
    document.getElementById('editor').focus();
}

function changeColor() {
    const color = document.getElementById('textColor').value;
    document.execCommand('foreColor', false, color);
    document.getElementById('editor').focus();
}

function clearText() {
    if (confirm('¿Estás seguro que deseas borrar todo el contenido?')) {
        document.getElementById('editor').innerHTML = '';
        updateCounts();
    }
    document.getElementById('editor').focus();
}

function updateCounts() {
    const text = document.getElementById('editor').innerText;
    const charCount = text.length;
    const wordCount = text.trim() === '' ? 0 : text.trim().split(/\s+/).length;
    
    document.getElementById('charCount').innerText = `Caracteres: ${charCount}`;
    document.getElementById('wordCount').innerText = `Palabras: ${wordCount}`;
}

document.getElementById('editor').addEventListener('input', updateCounts);

function saveText() {
    const content = document.getElementById('editor').innerHTML;
    const blob = new Blob([content], {type: 'text/html'});
    const url = URL.createObjectURL(blob);
    
    const a = document.createElement('a');
    a.href = url;
    a.download = 'mi_documento.html';
    document.body.appendChild(a);
    a.click();
    
    setTimeout(() => {
        document.body.removeChild(a);
        URL.revokeObjectURL(url);
    }, 0);
}

// Función de búsqueda
function searchText() {
    const search = document.getElementById('searchText').value;
    alert(`Buscando: "${search}"`);
}

// Función de reemplazo
function replaceText() {
    const search = document.getElementById('searchText').value;
    const replace = document.getElementById('replaceText').value;
    document.getElementById('editor').innerHTML = document.getElementById('editor').innerHTML.replace(new RegExp(search, 'g'), replace);
}

