'use strict';


document.querySelector('.setup-similar').classList.remove('hidden');

var arrayNames = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var arraySurnames = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var arrayCoatColor = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var arrayEyesColor = ['black', 'red', 'blue', 'yellow', 'green'];
var arrayfireballColor = ['#ee4830', '#30a8ee', '#5ce6c0', '#e848d5', '#e6e848'];

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


var openHandler = function () {
  document.querySelector('.setup').classList.remove('hidden');
  document.addEventListener('keydown', popupEscHandler);
};
var popupEscHandler = function (evt) {
  if (evt.keyCode === 27) {
    closeHandler();
  }
};
var closeHandler = function () {
  document.querySelector('.setup').classList.add('hidden');
  document.removeEventListener('keydown', popupEscHandler);
};
var coatHandler = function () {
  var coatColor = generateColor(arrayCoatColor);
  document.querySelector('.setup-wizard .wizard-coat').style.fill = coatColor;
  document.querySelector('input[name="coat-color"]').value = coatColor;
};
var eyesHandler = function () {
  var eyesColor = generateColor(arrayEyesColor);
  document.querySelector('.setup-wizard .wizard-eyes').style.fill = eyesColor;
  document.querySelector('input[name="eyes-color"]').value = eyesColor;
};
var fireballHandler = function () {
  var fireballColor = generateColor(arrayfireballColor);
  document.querySelector('.setup-fireball-wrap').style.background = fireballColor;
  document.querySelector('input[name="fireball-color"]').value = fireballColor;
};

document.querySelector('.setup-open').addEventListener('click', openHandler);
document.querySelector('.setup-open').addEventListener('keydown', function (evt) {
  if (evt.keyCode === 13) {
    openHandler();
  }
});
document.querySelector('.setup-close').addEventListener('click', closeHandler);
document.querySelector('.setup-close').addEventListener('keydown', function (evt) {
  if (evt.keyCode === 13) {
    closeHandler();
  }
});
document.querySelector('.setup-user-name').addEventListener('focus', function () {
  document.removeEventListener('keydown', popupEscHandler);
});
document.querySelector('.setup-user-name').addEventListener('blur', function () {
  document.addEventListener('keydown', popupEscHandler);
});
document.querySelector('.setup-user-name').addEventListener('input', function () {
  document.querySelector('.setup-user-name').setCustomValidity(''); // нужно для того чтобы сбросить ошибку
});
document.querySelector('.setup-user-name').addEventListener('invalid', function () {
  if (document.querySelector('.setup-user-name').validity.tooShort) {
    document.querySelector('.setup-user-name').setCustomValidity('Больше 1 символа надо');
  }
  if (document.querySelector('.setup-user-name').validity.valueMissing) {
    document.querySelector('.setup-user-name').setCustomValidity('Нужно что-то раписать');
  }
});
document.querySelector('.setup-wizard .wizard-coat').addEventListener('click', coatHandler);
document.querySelector('.setup-wizard .wizard-eyes').addEventListener('click', eyesHandler);
document.querySelector('.setup-fireball-wrap').addEventListener('click', fireballHandler);
