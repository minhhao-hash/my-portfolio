document.addEventListener('DOMContentLoaded', () => {
    console.log('Portfolio của Nguyễn Minh Hào đã load xong!');

    // 🌙 DARK MODE
    const darkModeBtn = document.getElementById('darkModeBtn');
    darkModeBtn.addEventListener('click', () => {
        document.body.classList.toggle('dark');
        darkModeBtn.textContent = 
            document.body.classList.contains('dark') ? "☀️" : "🌙";
    });
});
