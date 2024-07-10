let customers = [];

function showPage(pageId) {
    var pages = document.querySelectorAll('.content');
    pages.forEach(page => page.classList.add('hidden'));
    document.getElementById(pageId).classList.remove('hidden');
}

function login(event) {
    event.preventDefault();
    alert('Đăng nhập thành công!');
    showPage('trang-chu');
}

function submitBooking(event) {
    event.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const tour = document.getElementById('tour').value;
    const dilai = document.getElementById('dilai').value;
    const luutru = document.getElementById('luutru').value;
    const giatien = document.getElementById('giatien').value;

    customers.push({ name, email, tour, dilai, luutru, giatien, status: 'Đang chờ duyệt' });
    alert('Đặt vé thành công! Đang chờ duyệt.');
    showPage('trang-chu');
    updateCustomerTable();
    updateCustomerFeedback();
}

function updateCustomerTable() {
    const table = document.getElementById('customer-table');
    table.innerHTML = '';
    customers.forEach((customer, index) => {
        const customerInfo = `
            <div><strong>Họ và tên:</strong> ${customer.name}</div>
            <div><strong>Email:</strong> ${customer.email}</div>
            <div><strong>Tour đã đặt:</strong> ${customer.tour}</div>
            <div><strong>Phương tiện di chuyển:</strong> ${customer.dilai}</div>
            <div><strong>Địa Điểm Lưu Trú:</strong> ${customer.luutru}</div>
            <div><strong>Giá Tiền:</strong> ${customer.giatien}</div>
            <div><strong>Trạng thái:</strong> ${customer.status}</div>
            <button onclick="approveBooking(${index})">Duyệt</button>
            <button onclick="cancelBooking(${index})">Hủy</button>
            <hr>
        `;
        table.innerHTML += customerInfo;
    });
}

function updateCustomerFeedback() {
    const feedback = document.getElementById('customer-feedback');
    feedback.innerHTML = '';
    customers.forEach(customer => {
        const customerFeedback = `
            <div><strong>Họ và tên:</strong> ${customer.name}</div>
            <div><strong>Email:</strong> ${customer.email}</div>
            <div><strong>Tour đã đặt:</strong> ${customer.tour}</div>
            <div><strong>Phương tiện di chuyển:</strong> ${customer.dilai}</div>
            <div><strong>Địa Điểm Lưu Trú:</strong> ${customer.luutru}</div>
            <div><strong>Giá Tiền:</strong> ${customer.giatien}</div>
            <div><strong>Trạng thái:</strong> ${customer.status}</div>
            <hr>
        `;
        feedback.innerHTML += customerFeedback;
    });
}

function approveBooking(index) {
    customers[index].status = 'Đã duyệt';
    updateCustomerTable();
    updateCustomerFeedback();
}

function cancelBooking(index) {
    customers[index].status = 'Không thành công';
    updateCustomerTable();
    updateCustomerFeedback();
}
