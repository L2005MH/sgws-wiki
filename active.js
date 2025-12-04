// 获取当前页面的文件名
const currentPage = window.location.pathname.split("/").pop();

// 获取所有 sidebar 链接
const links = document.querySelectorAll(".sidebar a");

links.forEach(link => {
    const linkPage = link.getAttribute("href");
    if (linkPage === currentPage) {
        link.classList.add("active"); // 给当前页面链接加 active 类
    } else {
        link.classList.remove("active");
    }
});
