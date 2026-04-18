export default class PopoverWidget {
  constructor() {
    this.currentPopover = null;
  }

  createPopover(title, content) {
    const popover = document.createElement('div');
    popover.className = 'popover';
    popover.innerHTML = `
      <h3 class="popover-title">${title}</h3>
      <div class="popover-content">${content}</div>
      <div class="popover-arrow"></div>
    `;

    return popover;
  }

  positionPopover(popover, element) {
    const { left, top, width } = element.getBoundingClientRect();
    const popoverLeft = left + window.scrollX + width / 2 - popover.offsetWidth / 2;
    const popoverTop = top + window.scrollY - popover.offsetHeight - 12;

    popover.style.left = `${popoverLeft}px`;
    popover.style.top = `${popoverTop}px`;
  }

  showPopover(title, content, element) {
    this.removePopover();

    const popover = this.createPopover(title, content);
    document.body.append(popover);
    this.positionPopover(popover, element);
    this.currentPopover = popover;

    return popover;
  }

  removePopover() {
    if (!this.currentPopover) {
      return;
    }

    this.currentPopover.remove();
    this.currentPopover = null;
  }

  togglePopover(title, content, element) {
    if (this.currentPopover) {
      this.removePopover();
      return null;
    }

    return this.showPopover(title, content, element);
  }
}
