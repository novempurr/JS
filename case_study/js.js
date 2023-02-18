

let dsHocVien = [];

const HOC_VIEN_KEY = "hocVien";
localStorage.setItem(HOC_VIEN_KEY, JSON.stringify(dsHocVien));

function hienThiDanhSach() {
    let dsHocVien = JSON.parse(localStorage.getItem(HOC_VIEN_KEY));

    let noiDungBang = document.getElementById('result');
    noiDungBang.innerHTML = "";

    for(let idx in dsHocVien) {
        let tr = document.createElement('tr');
        let td1 = document.createElement('td');
        td1.innerHTML = dsHocVien[idx].maHocVien;
        let td2 = document.createElement('td');
        td1.innerHTML = dsHocVien[idx].tenHocVien;
        let td3 = document.createElement('td');
        td1.innerHTML = dsHocVien[idx].diaChi;
        let td4 = document.createElement('td');
        td1.innerHTML = dsHocVien[idx].soDienThoai;
        tr.appendChild(td1);
        tr.appendChild(td2);
        tr.appendChild(td3);
        tr.appendChild(td4);

        noiDungBang.appendChild(tr);
    }
}