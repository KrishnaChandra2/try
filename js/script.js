const notifications = document.querySelector(".notifications");
buttons = document.querySelectorAll(".buttons .btn");

const toastDetails = {
    timer: 5000,
    success: {
        icon: 'fa-solid fa-circle-check',
        text: 'success: This is an success toast.',
    },

    error: {
        icon: 'fa-solid fa-circle-xmark',
        text: 'Error: This is an error toast.',
    },

    warning: {
        icon: 'fa-solid fa-triangle-exclamation',
        text: 'warning: This is an warning toast.',
    },

    info: {
        icon: 'fa-solid fa-circle-info',
        text: 'info: This is an informaition toast.',
    }
}

const removeToast = (toast) => {
    toast.classList.add("hide");
    if (toast.timeoutId) clearTimeout(toast.timeoutId); 
    setTimeout(() => toast.remove(), 500);
}

const createToast = (id) => {
    const { icon, text } = toastDetails[id];
    const toast = document.createElement("li");
    toast.className = `toast ${id}`;

    toast.innerHTML = `<div class="column">
                            <i class="fa-solid ${icon}"></i>
                            <span>${text}.</span>
                        </div>
                        <i class="fa-solid fa-xmark" onclick="removeToast(this.parentElement)"></i>`;
    notifications.appendChild(toast);
    toast.timeoutId = setTimeout(() => removeToast(toast), toastDetails.timer);
}

buttons.forEach(btn => {
    btn.addEventListener("click", () => createToast(btn.id))
});