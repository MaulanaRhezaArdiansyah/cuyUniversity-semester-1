const nama = "Maulana Rheza";
let usia = 22;

let biodata = document.getElementById("biodata");

function generateBiodata() {
  let generasi;

  if (usia >= 10 && usia < 18) {
    generasi = "generasi remaja";
  } else if (usia >= 18 && usia < 30) {
    generasi = "generasi dewasa";
  } else if (usia >= 30) {
    generasi = "generasi tua";
  } else if (usia < 10 && usia > 2) {
    generasi = "generasi anak anak";
  } else {
    generasi = "generasi bayi";
  }

  return biodata.innerHTML = generasi;
}

console.log(nama);
console.log(usia);

generateBiodata();
