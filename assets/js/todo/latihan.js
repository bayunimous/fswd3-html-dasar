// URI: alamat web/ alamat lokasi file
// base url -> alamat web
// endpoint -> alamat lokasi file/ resource/ data

const baseUrl = "https://crudcrud.com/api/";

// api key silahkan diganti sendiri
const apiKey = "14bddc9680c94546ba17d1acfae4abf7";
const url = baseUrl + apiKey;
const endpointMahasiswa = `${url}/mahasiswa`;
const endpointDosen = `${url}/dosen`;

const handleError = (error) => console.log(error);
const handleSuccess = (result) => console.log(result);

// GET semua data
const getMahasiswa = () => {
  fetch(endpointMahasiswa).then(handleSuccess).catch(handleError);
};

// GET detail data
const detailMahasiswa = (id) => {
  fetch(`${endpointMahasiswa}/${id}`).then(handleSuccess).catch(handleError);
};

// POST data/ menambah data
const postMahasiswa = (mahasiswa) => {
  fetch(endpointMahasiswa, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(mahasiswa),
  })
    .then(handleSuccess)
    .catch(handleError);
};

// DELETE data
const deleteMahasiswa = (id) => {
  fetch(`${endpointMahasiswa}/${id}`, {
    method: "DELETE",
  })
    .then(handleSuccess)
    .catch(handleError);
};

// PUT data/ update data
const updateMahasiswa = (id, mahasiswa) => {
  fetch(`${endpointMahasiswa}/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(mahasiswa),
  })
    .then(handleSuccess)
    .catch(handleError);
};

// async
getMahasiswa();
deleteMahasiswa("6418143b22534003e8c8ea63");
getMahasiswa();

// const mahasiswa = {
//   nim: "1234567890",
//   nama: "Ari",
//   alamat: "Jl. Jalan",
// };

// const mahasiswa2 = {
//   nim: "23424234",
//   nama: "Putra",
//   alamat: "Jl. Bareng",
// };

// postMahasiswa(mahasiswa);
// postMahasiswa(mahasiswa2);

// const mahasiswaEdit = {
//   nim: "252525",
//   nama: "Rizqi",
//   alamat: "Jl. Kenangan",
// };
// updateMahasiswa("6418143b22534003e8c8ea62", mahasiswaEdit);
detailMahasiswa("6418143b22534003e8c8ea62");
