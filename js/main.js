const templateCard = document.querySelector('#templateCard');
const templateTask = document.querySelector('#templateTask');

const cards = document.querySelector('.cards');

const navCollection = document.querySelectorAll('.nav__item');
const sectionCollection = document.querySelectorAll('.section');

const instructionBox = document.querySelector('.instruction');

for (let i = 1; i <= variantCollection; i++) {
    let newCard = templateCard.content.cloneNode(true); //Создаю клон шаблона карточк
    const cardCounter = newCard.querySelector('.card__title--counter'); //Заголовок
    cardCounter.textContent = i;
    loadTasks(i, arrTaskCollection, newCard);
    cards.append(newCard);
}

function loadTasks(i, arrTaskCollection, newCard) {
    const card__items = newCard.querySelector('.card__items'); //В новой карточке нахожу место куда буду пихать строки


    arrTaskCollection.forEach((newData) => {
        if (newData.variant == i) {
            const newCardRow = templateTask.content.cloneNode(true); //Создаю клон шаблона строки
            newCardRow.querySelector('.card__item--type').textContent = newData.mathType;
            newCardRow.querySelector('.card__item__value1').textContent = newData.value1;
            newCardRow.querySelector('.card__item-action').textContent = newData.action;
            newCardRow.querySelector('.card__item__value2').textContent = newData.value2;
            card__items.append(newCardRow);
        }
    });
}

navCollection.forEach(element => {
    element.addEventListener('click', function () {
        showSection(sectionCollection, this.dataset.type)
    })
});

function showSection(sectionCollection, currentdataType) {
    sectionCollection.forEach(element => {
        if (element.dataset.type == currentdataType) {
            hideSection(sectionCollection);
            element.classList.toggle('visible');
        }
    });
}

function hideSection(sectionCollection) {
    sectionCollection.forEach(element => {
        element.classList.add('visible');
    });
}
