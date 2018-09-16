'use strict';

var WIZARD_NUM = 4;

var NAMES = [
  'Иван',
  'Хуан Себастьян',
  'Мария',
  'Кристоф',
  'Виктор',
  'Юлия',
  'Люпита',
  'Вашингтон'
];

var SURNAMES = [
  'да Марья',
  'Верон',
  'Мирабелла',
  'Вальц',
  'Онопко',
  'Топольницкая',
  'Нионго',
  'Ирвинг'
];

var COAT_COLORS = [
  'rgb(101, 137, 164)',
  'rgb(241, 43, 107)',
  'rgb(146, 100, 161)',
  'rgb(56, 159, 117)',
  'rgb(215, 210, 55)',
  'rgb(0, 0, 0)'
];

var EYE_COLORS = [
  'black',
  'red',
  'blue',
  'yellow',
  'green'];

var wizardsSetupDialog = document.querySelector('.setup');
var wizardsBlock = wizardsSetupDialog.querySelector('.setup-similar');
var wizardsList = wizardsSetupDialog.querySelector('.setup-similar-list');
var wizardTemplate = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item');

var getRandom = function (arr) {
  return arr[Math.floor(Math.random() * arr.length)];
};

var getWizards = function () {
  var wizards = [];

  for (var i = 0; i < WIZARD_NUM; i++) {
    var wizard = {
      name: getRandom(NAMES) + ' ' + getRandom(SURNAMES),
      coatColor: getRandom(COAT_COLORS),
      eyeColor: getRandom(EYE_COLORS)
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
}

// Вставляю сгенерированных волшебников на страницу
wizardsList.appendChild(renderWizards());

// Показываю окно настройки с созданными волшебниками
wizardsSetupDialog.classList.remove('hidden');
wizardsBlock.classList.remove('hidden');
