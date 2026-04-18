import './css/style.css';
import initPopoverWidget from './js/app';

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', () => initPopoverWidget());
} else {
  initPopoverWidget();
}
