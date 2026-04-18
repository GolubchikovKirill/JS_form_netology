import initPopoverWidget from '../app';

describe('Popover widget', () => {
  beforeAll(() => {
    Object.defineProperty(HTMLElement.prototype, 'offsetWidth', {
      configurable: true,
      get() {
        if (this.classList.contains('popover')) {
          return 240;
        }

        if (this.classList.contains('btn')) {
          return 120;
        }

        return 0;
      },
    });

    Object.defineProperty(HTMLElement.prototype, 'offsetHeight', {
      configurable: true,
      get() {
        if (this.classList.contains('popover')) {
          return 110;
        }

        if (this.classList.contains('btn')) {
          return 40;
        }

        return 0;
      },
    });
  });

  beforeEach(() => {
    document.body.innerHTML = `
      <div class="container">
        <button
          type="button"
          class="btn"
          data-title="Popover title"
          data-content="And here's some amazing content. It's very engaging. Right?"
        >
          Click to toggle popover
        </button>
      </div>
    `;

    const button = document.querySelector('.btn');
    button.getBoundingClientRect = jest.fn(() => ({
      left: 100,
      top: 200,
      width: 120,
      height: 40,
      right: 220,
      bottom: 240,
    }));
  });

  test('shows popover with title and content', () => {
    initPopoverWidget();

    document.querySelector('.btn').click();

    const popover = document.querySelector('.popover');

    expect(popover).not.toBeNull();
    expect(popover.querySelector('.popover-title').textContent).toBe('Popover title');
    expect(popover.querySelector('.popover-content').textContent).toBe("And here's some amazing content. It's very engaging. Right?");
    expect(popover.style.left).toBe('40px');
    expect(popover.style.top).toBe('78px');
  });

  test('removes popover on second click', () => {
    initPopoverWidget();

    const button = document.querySelector('.btn');

    button.click();
    button.click();

    expect(document.querySelector('.popover')).toBeNull();
  });
});
