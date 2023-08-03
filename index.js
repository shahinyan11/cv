window.getDeveloperInfo =(code)=> {
  if (code === 1111) {
    const content = `
        <p style="color: black">name: Shahe</p>
        <p style="color: black">surname: Shahinyan</p>
        <p style="color: black">
            Facebook:
            <a href="https://www.facebook.com" target="_blank">
                Some Link
            </a>
        </p>
        <p style="color: black">
            Instagram:
            <a href="https://www.facebook.com" target="_blank">
                Some Link
            </a>
        </p>
        <p style="color: black">
            Linkedin:
            <a href="https://www.facebook.com" target="_blank">
                Some Link
            </a>
        </p>
        <p style="color: black">
            Upwork:
            <a href="https://www.facebook.com" target="_blank">
                Some Link
            </a>
        </p >
        <p style="color: black">
            Telegram:
            <a href="https://www.facebook.com" target="_blank">
                Some Link
            </a>
        </p>
    `;

    const divModal = document.createElement('div');
    divModal.innerHTML = content;
    divModal.style.padding = '20px';
    divModal.style.boxShadow = 'rgba(99, 99, 99, 0.2) 0px 2px 8px 0px';
    divModal.style.backgroundColor = 'rgba(255, 255, 255)';
    divModal.style.position = 'absolute';
    divModal.style.top = '50%';
    divModal.style.left = '50%';
    divModal.style.transform = 'translate(-50%, -50%)';
    divModal.style.zIndex = '99999999999999999999999999999999999999';

    divModal.addEventListener('click', function (event) {
      event.stopPropagation();
    });

    const divContainer = document.createElement('div');
    divContainer.style.position = 'absolute';
    divContainer.style.width = '100vw';
    divContainer.style.height = '100vh';
    divContainer.style.top = '0';
    divContainer.style.left = '0';
    divContainer.style.zIndex = '99999999999999999999999999999999999999';

    divContainer.appendChild(divModal);
    document.body.appendChild(divContainer);

    divContainer.addEventListener('click', function () {
      document.body.removeChild(divContainer);
    });
  }
}
