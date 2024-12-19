// ตัวอย่างข้อมูลหนังสือ
const books = [
    {
        title: "หนังสือเล่มที่ 1",
        author: "นามปากกา 1",
        description: "นี่คือคำอธิบายหนังสือเล่มที่ 1",
        cover: "https://via.placeholder.com/150",
    },
    {
        title: "หนังสือเล่มที่ 2",
        author: "นามปากกา 2",
        description: "นี่คือคำอธิบายหนังสือเล่มที่ 2",
        cover: "https://via.placeholder.com/150",
    },
    {
        title: "หนังสือเล่มที่ 3",
        author: "นามปากกา 3",
        description: "นี่คือคำอธิบายหนังสือเล่มที่ 2",
        cover: "https://via.placeholder.com/150",
    },
    {
        title: "หนังสือเล่มที่ 3",
        author: "นามปากกา 3",
        description: "นี่คือคำอธิบายหนังสือเล่มที่ 2",
        cover: "https://via.placeholder.com/150",
    },
];

// แสดงการ์ดหนังสือ
const bookGrid = document.getElementById("book-grid");
books.forEach((book, index) => {
    const bookCard = document.createElement("div");
    bookCard.className = "book-card";
    bookCard.innerHTML = `
        <img src="${book.cover}" alt="${book.title}">
        <div class="book-info">
            <h2>${book.title}</h2>
            <p>ผู้เขียน: ${book.author}</p>
            <button class="btn-download">ฟรี</button>
        </div>
    `;
    bookCard.addEventListener("click", () => {
        // ส่งข้อมูลไปยังหน้ารายละเอียดหนังสือ
        localStorage.setItem("selectedBook", JSON.stringify(book));
        window.location.href = "book.html";
    });
    bookGrid.appendChild(bookCard);
});

// แสดงรายละเอียดหนังสือ (ใน book.html)
if (window.location.pathname.includes("book.html")) {
    const selectedBook = JSON.parse(localStorage.getItem("selectedBook"));
    if (selectedBook) {
        document.getElementById("book-cover").src = selectedBook.cover;
        document.getElementById("book-title").textContent = selectedBook.title;
        document.getElementById("book-author").textContent = `ผู้เขียน: ${selectedBook.author}`;
        document.getElementById("book-description").textContent = selectedBook.description;
    }
}
