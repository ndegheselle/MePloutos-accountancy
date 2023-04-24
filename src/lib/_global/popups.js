// Functions to show and close
const targets = [
    {
        selector: '.modal-background, .modal-card-head .delete[aria-label="close"], .modal .button[data-dismiss="modal"]',
        callback: function (element) {
            const $target = element.closest('.modal');
            close($target);
        }
    },
    {
        selector: '.dropdown-trigger [aria-haspopup="true"]',
        callback: function (element) {
            const $target = element.closest('.dropdown');
            show($target);
        }
    }
];

function sendClosing($el)
{
    if (!$el.classList.contains('is-active')) return;
    $el.dispatchEvent(new Event("closing"));
}

function show($el) {
    $el.classList.add('is-active');
}
function close($el) {
    sendClosing($el);
    // Most popups will handle removing 'is-active' on their own (not dropdowns)
    $el.classList.remove('is-active');
}

function closeAll(selector) {
    (document.querySelectorAll(selector) || []).forEach(($element) => {
        close($element);
    });
}

export function init() {

    document.addEventListener("click", function (e) {
        for (const target of targets) {
            let element = e.target.closest(target.selector);
            if (element) return target.callback(element);
        }

        // Close all opened dropdown (including context menu)
        closeAll('.dropdown.is-active');
    });

    // Add a keyboard event to close all modals
    document.addEventListener('keydown', (event) => {
        const e = event || window.event;

        // Escape key
        if (e.code === 'Escape') {
            closeAll('.dropdown.is-active');
            sendClosingAll('.context-menu.is-active, .modal.is-active');
        }
    });
}