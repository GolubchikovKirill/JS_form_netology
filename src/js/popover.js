export default class PopoverWidget {
    constructor() {
        this._popovers = []; // Список активных поповеров
    }

    showPopover(title, message, element) {
        const popoverElement = document.createElement('div');
        popoverElement.classList.add('popover');

        popoverElement.innerHTML = `
            <h3 class="popover-title">${title}</h3>
            <div class="popover-content">${message}</div>
            <div class="arrow"></div>
        `;

        document.body.append(popoverElement);

        const { left, top } = element.getBoundingClientRect();

        popoverElement.style.left = `${left + window.scrollX + element.offsetWidth / 2 - popoverElement.offsetWidth / 2}px`;
        popoverElement.style.top = `${top + window.scrollY + element.offsetHeight / 10}px`;

        const id = performance.now();
        this._popovers.push({ id, element: popoverElement });

        return id
    }

    removePopover(id) {
        const popover = this._popovers.find((p) => p.id === id);
        if (popover) {
            popover.element.remove();
            this._popovers = this._popovers.filter((p) => p.id !== id);
        }
    }
}
