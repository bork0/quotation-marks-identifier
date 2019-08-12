const result = document.getElementById('result');
const mark = document.getElementById('mark');
const submit = document.getElementById('submit');
const hiddenmessage = document.getElementById('hiddenmessage');
const title = document.getElementById('title');

submit.addEventListener('click', function() {
    switch (mark.value) {
        case '.':
            result.innerHTML = `This is a Period`;
            break;
        case '?':
            result.innerHTML = `This is a Question Mark`;
            break;
        case '!':
            result.innerHTML = `This is an Exclamation Point`;
            break;
        case ',':
            result.innerHTML = `This is a Comma`;
            break;
        case ';':
            result.innerHTML = `This is a Semicolon`;
            break;
        case ':':
            result.innerHTML = `This is a Colon`;
            break;
        case '-':
            result.innerHTML = `This is a Dash or Hyphen`;
            break;
        case '[]':
            result.innerHTML = `These are Brackets`;
            break;
        case '[':
            result.innerHTML = `This is a Bracket`;
        case ']':
            result.innerHTML = `This is a Bracket`;
            break;
        case '{}':
            result.innerHTML = `These are Braces`;
            break;
        case '{':
            result.innerHTML = `This is a Brace`;
        case '}':
            result.innerHTML = `This is a Brace`;
            break;
        case '()':
            result.innerHTML = `These are parentheses`;
            break;
        case ')':
            result.innerHTML = `This is a parenthesis`;
        case '(':
            result.innerHTML = `This is a parenthesis`;
            break;
        case '\'':
            result.innerHTML = `This is an Apostrophe, but can also be a Single Quote`;
            break;
        case '""':
            result.innerHTML = `These are Quotation Marks`;
            break;
        case '"':
            result.innerHTML = `This is a Quotation Mark`;
            break;
        case '``':
            result.innerHTML = `These are Backticks`;
            break;
        case '`':
            result.innerHTML = `This is a Backtick`;
            break;
        case `''`:
            result.innerHTML = `These are Single Quotes`;
            break;
        case '...':
            result.innerHTML = `This is an Ellipsis`;
            break;
        case '/':
            result.innerHTML = `This is a Slash`;
            break;
        case '\\':
            result.innerHTML = `This is a Backslash`;
            break;
        case '|':
            result.innerHTML = `This is a Vertical Bar`;
            break;
        case '_':
            result.innerHTML = `This is an Underscore or Low Dash`;
            break;
        default:
            hiddenmessage.classList.add('show');
            title.style.color = 'red';
            result.innerHTML = '';
            mark.style.border = '1px solid red';
    }
    let punctuationMarks = ['.', ',', '?', '!', ';', ':', '-', '[]', '[', ']', '{}', '{', '}', '...', `\\`, `/`, `|`, `_`, '`', '``', '"', '""', '()', '(', ')', `'`, `''`];
    if (punctuationMarks.indexOf(mark.value) > -1) {
        hiddenmessage.classList.remove('show');
        title.style.color = 'black';
        mark.style.border = '1px solid #ced4da'
    }
});