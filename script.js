const BODY = document.querySelector('body');
const WRAPPER = document.createElement('div');
const TEXTAREA = document.createElement('textarea');
const KEYBOARD = document.createElement('div');


//TEXTAREA.setAttribute('autofocus', true);
WRAPPER.classList.add('wrapper');
TEXTAREA.classList.add('text-area');
KEYBOARD.classList.add('keyboard');

WRAPPER.appendChild(TEXTAREA);
WRAPPER.appendChild(KEYBOARD);
BODY.appendChild(WRAPPER);

KEYBOARD.style.backgroundColor = '';


const CODES = ['Backquote', 'Digit1', 'Digit2', 'Digit3', 'Digit4', 'Digit5', 'Digit6', 'Digit7', 'Digit8', 'Digit9', 'Digit0', 'Minus', 'Equal', 'Backspace',
    'Tab', 'KeyQ', 'KeyW', 'KeyE', 'KeyR', 'KeyT', 'KeyY', 'KeyU', 'KeyI', 'KeyO', 'KeyP', 'BracketLeft', 'BracketRight', 'Backslash', 'Delete',
    'CapsLock', 'KeyA', 'KeyS', 'KeyD', 'KeyF', 'KeyG', 'KeyH', 'KeyJ', 'KeyK', 'KeyL', 'Semicolon', 'Quote', 'Enter',
    'ShiftLeft', 'KeyZ', 'KeyX', 'KeyC', 'KeyV', 'KeyB', 'KeyN', 'KeyM', 'Comma', 'Period', 'Slash', 'ArrowUp', 'ShiftRight',
    'ControlLeft', 'MetaLeft', 'AltLeft', 'Space', 'AltRight', 'ArrowLeft', 'ArrowDown', 'ArrowRight', 'ControlRight'];

const KEY_KODES = [96, 49, 50, 51, 52, 53, 54, 55, 56, 57, 48, 45, 61, 8,
    9, 113, 119, 101, 114, 116, 121, 117, 105, 111, 112, 91, 93, 46,
    20, 97, 115, 100, 102, 103, 104, 106, 107, 108, 59, 39, 92, 13,
    16, 122, 120, 99, 118, 98, 110, 109, 44, 46, 47, 38, 16,
    17, 91, 18, 32, 18, 37, 40, 39, 17]

const WIEW_ENG_KEYS = ['`', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'BackSpace',
    'Tab', 'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', '[', ']', "\\", 'Del',
    'CapsLock', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', ';', "'", 'Enter',
    'Shift', 'z', 'x', 'c', 'v', 'b', 'n', 'm', ',', '.', '/', '↑', 'Shift',
    'Ctrl', 'Win', 'Alt', '', 'Alt', '←', '↓', '→', 'Ctrl']

const WIEW_ENG_SHIFT_KEYS = ['~', '!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '_', '+', 'BackSpace',
    'Tab', 'Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P', '{', '}', "|", 'Del',
    'CapsLock', 'A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', ':', '"', 'Enter',
    'Shift', 'Z', 'X', 'C', 'V', 'B', 'N', 'M', '<', '>', '?', '↑', 'Shift',
    'Ctrl', 'Win', 'Alt', '', 'Alt', '←', '↓', '→', 'Ctrl']

const WIEW_ENG_CAPS_KEYS = ['`', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'BackSpace',
    'Tab', 'Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P', '[', ']', "\\", 'Del',
    'CapsLock', 'A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', ';', "'", 'Enter',
    'Shift', 'Z', 'X', 'C', 'V', 'B', 'N', 'M', ',', '.', '/', '↑', 'Shift',
    'Ctrl', 'Win', 'Alt', '', 'Alt', '←', '↓', '→', 'Ctrl']

const WIEW_RU_KEYS = ['ё', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'BackSpace',
    'Tab', 'й', 'ц', 'у', 'к', 'е', 'н', 'г', 'ш', 'щ', 'з', 'х', 'ъ', "\\", 'Del',
    'CapsLock', 'ф', 'ы', 'в', 'а', 'п', 'р', 'о', 'л', 'д', 'ж', "э", 'Enter',
    'Shift', 'я', 'ч', 'с', 'м', 'и', 'т', 'ь', 'б', 'ю', '.', '↑', 'Shift',
    'Ctrl', 'Win', 'Alt', '', 'Alt', '←', '↓', '→', 'Ctrl']

const WIEW_RU_SHIFT_KEYS = ['Ё', '!', '"', '№', ';', '%', ':', '?', '*', '(', ')', '_', '+', 'BackSpace',
    'Tab', 'Й', 'Ц', 'У', 'К', 'Е', 'Н', 'Г', 'Ш', 'Щ', 'З', 'Х', 'Ъ', "/", 'Del',
    'CapsLock', 'Ф', 'Ы', 'В', 'А', 'П', 'Р', 'О', 'Л', 'Д', 'Ж', "Э", 'Enter',
    'Shift', 'Я', 'Ч', 'С', 'М', 'И', 'Т', 'Ь', 'Б', 'Ю', ',', '↑', 'Shift',
    'Ctrl', 'Win', 'Alt', '', 'Alt', '←', '↓', '→', 'Ctrl']

const WIEW_RU_CAPS_KEYS = ['Ё', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'BackSpace',
    'Tab', 'Й', 'Ц', 'У', 'К', 'Е', 'Н', 'Г', 'Ш', 'Щ', 'З', 'Х', 'Ъ', "\\", 'Del',
    'CapsLock', 'Ф', 'Ы', 'В', 'А', 'П', 'Р', 'О', 'Л', 'Д', 'Ж', "Э", 'Enter',
    'Shift', 'Я', 'Ч', 'С', 'М', 'И', 'Т', 'Ь', 'Б', 'Ю', '.', '↑', 'Shift',
    'Ctrl', 'Win', 'Alt', '', 'Alt', '←', '↓', '→', 'Ctrl']


let code = [];

class Key {
    constructor(parametrs) {
        this.code = parametrs.code
        this.keyCode = parametrs.keyCode
        this.wiewRuKey = parametrs.wiewRuKey
        this.wiewEngKey = parametrs.wiewEngKey
        this.wiewShiftRuKey = parametrs.wiewShiftRuKey
        this.wiewShiftEngKey = parametrs.wiewShiftEngKey
        this.wiewCapsRuKey = parametrs.wiewCapsRuKey
        this.wiewCapsEngKey = parametrs.wiewCapsEngKey
    }
}

var keys = []
CODES.map((elem, i) => {
    keys[CODES[i]] = new Key({
        code: CODES[i],
        keyCode: KEY_KODES[i],
        wiewRuKey: WIEW_RU_KEYS[i],
        wiewEngKey: WIEW_ENG_KEYS[i],
        wiewShiftRuKey: WIEW_RU_SHIFT_KEYS[i],
        wiewShiftEngKey: WIEW_ENG_SHIFT_KEYS[i],
        wiewCapsRuKey: WIEW_RU_CAPS_KEYS[i],
        wiewCapsEngKey: WIEW_ENG_CAPS_KEYS[i]
    })
})



function init(langKeys) {
    let out = '';
    for (let i = 0; i < CODES.length; i++) {
        if (i === 14 || i === 29 || i === 42 || i === 55) {
            out += '<div class="clearfix" ></div>'
        }
        out += `<div class="key ${keys[CODES[i]].code}" data="` + keys[CODES[i]].code + '" > ' + langKeys[i] + '</div>'
    }
    out += '<div class="clearfix" ></div>'
    KEYBOARD.innerHTML = out;
}
init(WIEW_RU_KEYS)


let isAltPressed = false;
let isShiftPressed = false;
let eng = false;
let isCapsPressed = false;

function upperCaseKey(code, pos) {
    if (keys[code].wiewEngKey.length === 1 || keys[code].wiewRuKey === 1) {
        if (isCapsPressed) {
            if (eng) {
                TEXTAREA.textContent = TEXTAREA.textContent.substring(0, getCaretPosition(textArea).start) + keys[code].wiewCapsEngKey + TEXTAREA.textContent.substring(getCaretPosition(textArea).start, TEXTAREA.textContent.length);
            } else {
                TEXTAREA.textContent = TEXTAREA.textContent.substring(0, getCaretPosition(textArea).start) + keys[code].wiewCapsRuKey + TEXTAREA.textContent.substring(getCaretPosition(textArea).start, TEXTAREA.textContent.length);
            }
        } else if (isShiftPressed) {
            if (eng) {
                TEXTAREA.textContent = TEXTAREA.textContent.substring(0, getCaretPosition(textArea).start) + keys[code].wiewShiftEngKey + TEXTAREA.textContent.substring(getCaretPosition(textArea).start, TEXTAREA.textContent.length);
            } else {
                TEXTAREA.textContent = TEXTAREA.textContent.substring(0, getCaretPosition(textArea).start) + keys[code].wiewShiftRuKey + TEXTAREA.textContent.substring(getCaretPosition(textArea).start, TEXTAREA.textContent.length);
            }
        } else {
            if (eng) {
                TEXTAREA.textContent = TEXTAREA.textContent.substring(0, getCaretPosition(textArea).start) + keys[code].wiewEngKey + TEXTAREA.textContent.substring(getCaretPosition(textArea).start, TEXTAREA.textContent.length);
            } else {
                TEXTAREA.textContent = TEXTAREA.textContent.substring(0, getCaretPosition(textArea).start) + keys[code].wiewRuKey + TEXTAREA.textContent.substring(getCaretPosition(textArea).start, TEXTAREA.textContent.length);
            }
        }
        textArea.selectionStart = pos + 1;
    }

}
function switchCaseKeyboard(code) {

    if (eng) {
        init(WIEW_ENG_SHIFT_KEYS);
        var active = document.querySelector('.keyboard .key[data="' + code + '"]');
        active.classList.add('active');
    } else {
        init(WIEW_RU_SHIFT_KEYS);
        var active = document.querySelector('.keyboard .key[data="' + code + '"]');
        active.classList.add('active');
    }
}


document.addEventListener('keydown', function (event) {
    event.preventDefault();
    let textArea = document.querySelector('.text-area');
    let pos = getCaretPosition(textArea).start;

    var active = document.querySelector('.keyboard .key[data="' + event.code + '"]');
    active.classList.add('active');
    upperCaseKey(event.code, pos);

    if (event.code === 'AltLeft') {
        isAltPressed = true;
        var active = document.querySelector('.keyboard .key[data="' + event.code + '"]');
        active.classList.add('active');
    }
    if (event.code === 'ShiftLeft' || event.code === 'ShiftRight') {
        isShiftPressed = true;
        if (isAltPressed) {
            if (eng) {
                init(WIEW_RU_KEYS);
                eng = false;
            } else {
                init(WIEW_ENG_KEYS);
                eng = true;
            }
            var active = document.querySelector('.keyboard .key[data="' + event.code + '"]');
            active.classList.add('active');
            var activeAlt = document.querySelector('.keyboard .key[data="' + 'AltLeft' + '"]');
            activeAlt.classList.add('active');

        } else {
            switchCaseKeyboard(event.code);
        }
    }

    if (event.code === 'CapsLock') {
        if (isCapsPressed) {
            isCapsPressed = false;
            if (eng) {
                init(WIEW_ENG_KEYS);
            } else { init(WIEW_RU_KEYS) }
        } else {
            isCapsPressed = true;
            if (eng) {
                init(WIEW_ENG_CAPS_KEYS);
                var active = document.querySelector('.keyboard .key[data="' + event.code + '"]');
                active.classList.add('active');
            } else {
                init(WIEW_RU_CAPS_KEYS);
                var active = document.querySelector('.keyboard .key[data="' + event.code + '"]');
                active.classList.add('active');
            }
        }


    }

    if (event.code === 'Backspace') {

        TEXTAREA.textContent = TEXTAREA.textContent.substring(0, getCaretPosition(textArea).start - 1) + TEXTAREA.textContent.substring(getCaretPosition(textArea).start, TEXTAREA.textContent.length);
        textArea.selectionStart = pos - 1;
    }
    if (event.code === 'Delete') {

        TEXTAREA.textContent = TEXTAREA.textContent.substring(0, getCaretPosition(textArea).start) + TEXTAREA.textContent.substring(getCaretPosition(textArea).start + 1, TEXTAREA.textContent.length);
        textArea.selectionStart = pos;
    }
    if (event.code === 'Space') {

        TEXTAREA.textContent = TEXTAREA.textContent.substring(0, getCaretPosition(textArea).start) + ' ' + TEXTAREA.textContent.substring(getCaretPosition(textArea).start, TEXTAREA.textContent.length);
        textArea.selectionStart = pos + 1;
    }
    if (event.code === 'Enter') {

        TEXTAREA.textContent = TEXTAREA.textContent.substring(0, getCaretPosition(textArea).start) + '\r\n' + TEXTAREA.textContent.substring(getCaretPosition(textArea).start, TEXTAREA.textContent.length);
        textArea.selectionStart = pos + 1;
    }

})

document.addEventListener('keyup', function (event) {
    event.preventDefault();
    var active = document.querySelector('.keyboard .key[data="' + event.code + '"]');
    active.classList.remove('active');
    if (event.code === 'AltLeft') {
        isAltPressed = false;
    }
    if (event.code === 'ShiftLeft' || event.code === 'ShiftRight') {
        isShiftPressed = false;
        if (isCapsPressed) {
            if (eng) {
                init(WIEW_ENG_CAPS_KEYS);
            } else { init(WIEW_RU_CAPS_KEYS) }
        } else if (isAltPressed) {
        } else {
            if (eng) {
                init(WIEW_ENG_KEYS);
            } else { init(WIEW_RU_KEYS) }
        }

    }
})

document.addEventListener('mousedown', function (event) {
    let  = document.querySelector('.text-area');
    let pos = getCaretPosition(textArea).start;

    if (event.target.matches('.key')) {
        let code = event.target.getAttribute('data');
        upperCaseKey(code, pos);
        event.target.classList.add('active');
        if (code === 'AltLeft') {
            isAltPressed = true;
            var active = document.querySelector('.keyboard .key[data="' + code + '"]');
            active.classList.add('active');
        }
        if (code === 'ShiftLeft') {
            isShiftPressed = true;
            if (isAltPressed) {
                if (eng) {
                    init(WIEW_RU_KEYS);
                    eng = false;
                } else {
                    init(WIEW_ENG_KEYS);
                    eng = true;
                }
                var active = document.querySelector('.keyboard .key[data="' + code + '"]');
                active.classList.add('active');
                var activeAlt = document.querySelector('.keyboard .key[data="' + 'AltLeft' + '"]');
                activeAlt.classList.add('active');

            } else {
                switchCaseKeyboard(code);
            }
        }

        if (code === 'CapsLock') {
            if (isCapsPressed) {
                isCapsPressed = false;
                if (eng) {
                    init(WIEW_ENG_KEYS);
                } else { init(WIEW_RU_KEYS) }
            } else {
                isCapsPressed = true;
                if (eng) {
                    init(WIEW_ENG_CAPS_KEYS);
                    var active = document.querySelector('.keyboard .key[data="' + code + '"]');
                    active.classList.add('active');
                } else {
                    init(WIEW_RU_CAPS_KEYS);
                    var active = document.querySelector('.keyboard .key[data="' + code + '"]');
                    active.classList.add('active');
                }
            }


        }

        if (code === 'Backspace') {

            TEXTAREA.textContent = TEXTAREA.textContent.substring(0, getCaretPosition(textArea).start - 1) + TEXTAREA.textContent.substring(getCaretPosition(textArea).start, TEXTAREA.textContent.length);
            textArea.selectionStart = pos - 1;
        }
        if (code === 'Delete') {

            TEXTAREA.textContent = TEXTAREA.textContent.substring(0, getCaretPosition(textArea).start) + TEXTAREA.textContent.substring(getCaretPosition(textArea).start + 1, TEXTAREA.textContent.length);
            textArea.selectionStart = pos;
        }
        if (code === 'Space') {

            TEXTAREA.textContent = TEXTAREA.textContent.substring(0, getCaretPosition(textArea).start) + ' ' + TEXTAREA.textContent.substring(getCaretPosition(textArea).start, TEXTAREA.textContent.length);
            textArea.selectionStart = pos + 1;
        }
        if (code === 'Enter') {

            TEXTAREA.textContent = TEXTAREA.textContent.substring(0, getCaretPosition(textArea).start) + '\r\n' + TEXTAREA.textContent.substring(getCaretPosition(textArea).start, TEXTAREA.textContent.length);
            textArea.selectionStart = pos + 1;
        }
    }



})

document.addEventListener('mouseup', function (event) {

    document.querySelectorAll('.keyboard .key').forEach(element => {
        element.classList.remove('active');
    });
    let code = event.target.getAttribute('data');
    if (code === 'AltLeft') {
        isAltPressed = false;
    }
    if (code === 'ShiftLeft') {
        isShiftPressed = false;
        if (isCapsPressed) {
            if (eng) {
                init(WIEW_ENG_CAPS_KEYS);
            } else { init(WIEW_RU_CAPS_KEYS) }
        } else if (isAltPressed) {
        } else {
            if (eng) {
                init(WIEW_ENG_KEYS);
            } else { init(WIEW_RU_KEYS) }
        }

    }
})


let textArea = document.querySelector('.text-area');


function getCaretPosition(ctrl) {
    if (ctrl.selectionStart || ctrl.selectionStart == '0') {
        return {
            'start': ctrl.selectionStart,
            'end': ctrl.selectionEnd
        };
    } else {
        return {
            'start': ctrl.selectionStart,
            'end': ctrl.selectionEnd
        };
    }
}

function setCaretPosition(ctrl, start, end) {
    if (ctrl.setSelectionRange) {
        ctrl.focus();
        ctrl.setSelectionRange(start, end);
    }
    else if (ctrl.createTextRange) {
        var range = ctrl.createTextRange();
        range.collapse(true);
        range.moveEnd('character', end);
        range.moveStart('character', start);
        range.select();
    }
}

