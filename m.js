
let myView = document.querySelector('.view');
myView.style.backgroundColor=localStorage.color
window.onload = () => {
  document.addEventListener("click", (e) => {
    if (e.target.classList.contains("red")) {
        localStorage.color=e.target.className
      myView.style.backgroundColor='red'
    }
    else if (e.target.classList.contains("blue")) {
      localStorage.color=e.target.className
      myView.style.backgroundColor='blue'
    }
    else if (e.target.classList.contains("green")) {
      localStorage.color=e.target.className
      myView.style.backgroundColor='green'
    }
    else if (e.target.classList.contains("gray")) {
      localStorage.color=e.target.className
      myView.style.backgroundColor='gray'
    }
  });
};
