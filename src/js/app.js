import './css/style.css'
import PopoverWidget from "./popover";

document.addEventListener('DOMContentLoaded', () => {
    const widget = new PopoverWidget();
    const btn = document.querySelector('.btn');

    let currentPopoverId = null;

    btn.addEventListener('click', (e) => {
        e.preventDefault();

        if (currentPopoverId) {
            widget.removePopover(currentPopoverId);
            currentPopoverId = null;
        } else {
            const title = btn.dataset.title;
            const content = btn.dataset.content;
            currentPopoverId = widget.showPopover(title, content, btn);
        }
    });
});
