const formWrapper = document.querySelector('.form__wrapper');

class FormElement {
    constructor({ name, type, value }) {
        this.name = name;
        this.type = type;
        this.value = value;
    }
    showName() {
        console.log(`Name: ${this.name}`);
    }
    getValue() {
        return this.value;
    }
}

class TextElement extends FormElement {
    constructor({ name, type, placeholder }) {
        super({ name, type });
        this.placeholder = placeholder;
        this.type = type;
        this.name = name;
    }

    createInput() {
        this.input = document.createElement('input');
        this.input.setAttribute('placeholder', this.placeholder);
        this.input.setAttribute('type', this.type);
        this.input.setAttribute('name', this.name);
    }
}

const inputName = new TextElement({
    name: 'userName',
    type: 'text',
    placeholder: 'Your Name',
});

const inputEmail = new TextElement({
    name: 'userEmail',
    type: 'email',
    placeholder: 'Your Email',
});

const inputPass = new TextElement({
    name: 'userPass',
    type: 'password',
    placeholder: 'Password',
});

inputName.createInput();
formWrapper.insertAdjacentElement('beforeend', inputName.input);

inputEmail.createInput();
formWrapper.insertAdjacentElement('beforeend', inputEmail.input);

inputPass.createInput();
formWrapper.insertAdjacentElement('beforeend', inputPass.input);

class CheckboxElement extends FormElement {
    constructor({ name, type, checked, agreement }) {
        super({ name, type });
        this.checked = checked;
        this.agreement = agreement;
    }

    createCheckbox() {
        this.wrapper = document.createElement('div');
        this.input = document.createElement('input');
        this.input.setAttribute('type', this.type);
        this.input.setAttribute('name', this.name);
        this.input.checked = this.checked;
        this.agree = document.createElement('span');
        this.agree.textContent = 'I agree all statements in Terms of service';
        this.wrapper.appendChild(this.input);
        this.wrapper.appendChild(this.agree);
    }
}

const checkbox = new CheckboxElement({
    name: 'checkbox',
    type: 'checkbox',
    checked: false,
});

checkbox.createCheckbox();
formWrapper.insertAdjacentElement('beforeend', checkbox.wrapper);

class ButtonElement extends FormElement {
    constructor({ text }) {
        super({});
        this.text = text;
    }

    createButton() {
        this.btn = document.createElement('button');
        this.btn.innerText = this.text;
    }
}

const button = new ButtonElement({
    text: 'Register',
});

button.createButton();
formWrapper.insertAdjacentElement('beforeend', button.btn);
