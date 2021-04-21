const nama = 'Moh. Ilham Burhanuddin';
const umur = 33;
const email = 'ilham.76c@gmail.com';


function highlight(strings, ...values) {
    return strings.reduce((result, str, i) => /*html*/`${result}${str} <span class="hl">${values[i] || ''}</span>`, '');
}

const str = highlight`Halo, nama saya ${nama}, saya ${umur} tahun dan email saya adalah : ${email}.`;


document.body.innerHTML = str;
