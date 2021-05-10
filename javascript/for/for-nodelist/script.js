// Nodelist
const liNama = document.querySelectorAll('.nama');

liNama.forEach(value => console.log(value.textContent));


for (const iterator of liNama) {
    console.log(iterator.innerHTML);
}