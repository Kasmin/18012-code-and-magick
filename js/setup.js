'use strict';

document.querySelector('.overlay').classList.remove('hidden');
document.querySelector('.setup-similar').classList.remove('hidden');

var arrayNames = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var arraySurnames = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var arrayCoatColor = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var arrayEyesColor = ['black', 'red', 'blue', 'yellow', 'green'];

var generateRandom = function (randomCount) {
  var tRandom = Math.floor((Math.random() * randomCount));
  if (tRandom === randomCount) {
    tRandom--;
  }
  return tRandom;
};

var generateName = function (arrNames, arrSurnames) {
  var randomName = arrNames[generateRandom(8)];
  var randomSurname = arrSurnames[generateRandom(8)];
  return randomName + ' ' + randomSurname;
};

var generateColor = function (arrayColor) {
  return arrayColor[generateRandom(arrayColor.length)];
};

var wizards = [
  {
    name: generateName(arrayNames, arraySurnames),
    coatColor: generateColor(arrayCoatColor),
    eyesColor: generateColor(arrayEyesColor)
  },
  {
    name: generateName(arrayNames, arraySurnames),
    coatColor: generateColor(arrayCoatColor),
    eyesColor: generateColor(arrayEyesColor)
  },
  {
    name: generateName(arrayNames, arraySurnames),
    coatColor: generateColor(arrayCoatColor),
    eyesColor: generateColor(arrayEyesColor)
  },
  {
    name: generateName(arrayNames, arraySurnames),
    coatColor: generateColor(arrayCoatColor),
    eyesColor: generateColor(arrayEyesColor)
  }
];

var similarList = document.querySelector('.setup-similar-list');
var templateWizard = document.querySelector('#similar-wizard-template').content;
var fragment = document.createDocumentFragment();

var renderWizard = function (wizard) {
  var tempWizard = templateWizard.cloneNode(true);
  tempWizard.querySelector('.setup-similar-label').textContent = wizard.name;
  tempWizard.querySelector('.wizard-coat').setAttribute('fill', wizard.coatColor);
  tempWizard.querySelector('.wizard-eyes').setAttribute('fill', wizard.eyesColor);

  return tempWizard;
};

for (var i = 0; i < wizards.length; i++) {
  fragment.appendChild(renderWizard(wizards[i]));
}
similarList.appendChild(fragment);
