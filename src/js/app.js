import PopoverWidget from './popover';

export default function initPopoverWidget(doc = document) {
  const button = doc.querySelector('.btn');

  if (!button) {
    return null;
  }

  const widget = new PopoverWidget();

  button.addEventListener('click', (event) => {
    event.preventDefault();
    widget.togglePopover(button.dataset.title, button.dataset.content, button);
  });

  return widget;
}
