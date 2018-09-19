'use strict';

var WIZARD_NUM = 4;
var ENTER_KEYCODE = 13;
var ESC_KEYCODE = 27;

var names = [
  'Иван',
  'Хуан Себастьян',
  'Мария',
  'Кристоф',
  'Виктор',
  'Юлия',
  'Люпита',
  'Вашингтон'
];

var surnames = [
  'да Марья',
  'Верон',
  'Мирабелла',
  'Вальц',
  'Онопко',
  'Топольницкая',
  'Нионго',
  'Ирвинг'
];

var coatColors = [
  'rgb(101, 137, 164)',
  'rgb(241, 43, 107)',
  'rgb(146, 100, 161)',
  'rgb(56, 159, 117)',
  'rgb(215, 210, 55)',
  'rgb(0, 0, 0)'
];

var eyeColors = [
  'black',
  'red',
  'blue',
  'yellow',
  'green'
];

var fireballColors = [
  '#ee4830',
  '#30a8ee',
  '#5ce6c0',
  '#e848d5',
  '#e6e848'
];

var setupDialog = document.querySelector('.setup');
var userPic = document.querySelector('.setup-open');
var setupCloseBtn = setupDialog.querySelector('.setup-close');
var userNameField = setupDialog.querySelector('.setup-user-name');

var wizardCoat = document.querySelector('.setup-wizard .wizard-coat');
var wizardEyes = document.querySelector('.setup-wizard .wizard-eyes');
var fireball = document.querySelector('.setup-fireball-wrap');
var fireballInput = fireball.querySelector('input');

var wizardsBlock = setupDialog.querySelector('.setup-similar');
var wizardsList = setupDialog.querySelector('.setup-similar-list');
var wizardTemplate = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item');

var getRandomValue = function (arr) {
  return arr[Math.floor(Math.random() * arr.length)];
};

var getWizards = function () {
  var wizards = [];

  for (var i = 0; i < WIZARD_NUM; i++) {
    var wizard = {
      name: getRandomValue(names) + ' ' + getRandomValue(surnames),
      coatColor: getRandomValue(coatColors),
      eyeColor: getRandomValue(eyeColors)
    };

    wizards.push(wizard);
  }

  return wizards;
};

var createWizard = function (wizardData) {
  var wizard = wizardTemplate.cloneNode(true);

  wizard.querySelector('.setup-similar-label').textContent = wizardData.name;
  wizard.querySelector('.wizard-coat').style.fill = wizardData.coatColor;
  wizard.querySelector('.wizard-eyes').style.fill = wizardData.eyeColor;

  return wizard;
};

var renderWizards = function () {
  var wizards = getWizards();
  var fragment = document.createDocumentFragment();

  for (var i = 0; i < wizards.length; i++) {
    var el = createWizard(wizards[i]);

    fragment.appendChild(el);
  }

  return fragment;
};

// Вставляю сгенерированных персонажей на страницу
wizardsList.appendChild(renderWizards());

// Показываю блок с созданными персонажами
wizardsBlock.classList.remove('hidden');

// Настройка персонажа игры
wizardCoat.addEventListener('click', function () {
  wizardCoat.style.fill = getRandomValue(coatColors);
});

wizardEyes.addEventListener('click', function () {
  wizardEyes.style.fill = getRandomValue(eyeColors);
});

fireball.addEventListener('click', function () {
  var newfireballColor = getRandomValue(fireballColors);
  fireball.style.backgroundColor = newfireballColor;
  fireballInput.setAttribute('value', newfireballColor);
});

// Управление окном настройки персонажа
var onSetupDialogEscPress = function (evt) {
  if (evt.keyCode === ESC_KEYCODE && evt.target !== userNameField) {
    setupDialog.classList.add('hidden');
  }
};

var openSetupDialog = function () {
  setupDialog.classList.remove('hidden');
  document.addEventListener('keydown', onSetupDialogEscPress);
};

var closeSetupDialog = function () {
  setupDialog.classList.add('hidden');
  document.removeEventListener('keydown', onSetupDialogEscPress);
};

userPic.addEventListener('click', function () {
  openSetupDialog();
});

userPic.addEventListener('keydown', function (evt) {
  if (evt.keyCode === ENTER_KEYCODE) {
    openSetupDialog();
  }
});

setupCloseBtn.addEventListener('click', function () {
  closeSetupDialog();
});

setupCloseBtn.addEventListener('keydown', function (evt) {
  if (evt.keyCode === ENTER_KEYCODE) {
    closeSetupDialog();
  }
});
