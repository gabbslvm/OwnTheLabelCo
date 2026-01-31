document.addEventListener('DOMContentLoaded', () => {
    const receiptData = JSON.parse(localStorage.getItem('latestReceipt'));

    if (!receiptData) {
        alert("No recent receipt found!");
        window.location.href = 'shop.html';
        return;
    }

    document.getElementById('receiptId').textContent = receiptData.receiptId;
    document.getElementById('receiptDate').textContent = receiptData.date;
    document.getElementById('customerName').textContent = receiptData.name;
    document.getElementById('customerEmail').textContent = receiptData.email;
    document.getElementById('customerAddress').textContent = receiptData.address;
    document.getElementById('receiptTotal').textContent = receiptData.total;

    const tbody = document.querySelector('#itemsTable tbody');
    tbody.innerHTML = '';

    receiptData.items.forEach(item => {
        const row = document.createElement('tr');
        row.innerHTML = `
      <td>${item.name}</td>
      <td>${item.quantity}</td>
      <td>${Number(item.price).toFixed(2)}</td>
      <td>${(item.price * item.quantity).toFixed(2)}</td>
    `;
        tbody.appendChild(row);
    });

    document.getElementById('printBtn').addEventListener('click', () => {
        window.print();
    });

    document.getElementById('backBtn').addEventListener('click', () => {
        window.location.href = 'shop.html';
    });
});