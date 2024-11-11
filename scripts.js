
onload = () => {
    const c = setTimeout(() => {
      document.body.classList.remove("not-loaded");
      clearTimeout(c);
    }, 3000);
  };

  const hello = document.querySelector('.hello');

  hello.style.opacity="1";
  hello.style.transition="opacity 30s ease";