'use strict';

var WIZARD_NAMES = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'
];
var WIZARD_SURNAMES = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'
];
var WIZARD_COATS = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'
];
var WIZARD_EYES = ['black', 'red', 'blue', 'yellow', 'green'
];
var wizards = [];
var userDialog = document.querySelector('.setup');
userDialog.classList.remove('hidden');
var similarListElement = userDialog.querySelector('.setup-similar-list');
var similarWizardTemplate = document.querySelector('#similar-wizard-template')
  .content
  .querySelector('.setup-similar-item');

var getRandom = function (wizardArr) {
  return Math.floor(Math.random() * wizardArr.length);

};

var getColorWizard = function () {
  for (var i = 0; i < 4; i++) {
    wizards [i] =
      {
        name: WIZARD_NAMES[getRandom(WIZARD_NAMES)] + ' ' + WIZARD_SURNAMES[getRandom(WIZARD_SURNAMES)],
        coatColor: WIZARD_COATS[getRandom(WIZARD_COATS)],
        eyesColor: WIZARD_EYES[getRandom(WIZARD_EYES)]
      };
  }
  return wizards [i];
};

getColorWizard();

var renderWizard = function (wizard) {
  var wizardElement = similarWizardTemplate.cloneNode(true);

  wizardElement.querySelector('.setup-similar-label').textContent = wizard.name;
  wizardElement.querySelector('.wizard-coat').style.fill = wizard.coatColor;
  wizardElement.querySelector('.wizard-eyes').style.fill = wizard.eyesColor;

  return wizardElement;
};

var getFragment = function () {
  var fragment = document.createDocumentFragment();
  for (var j = 0; j < wizards.length; j++) {
    fragment.appendChild(renderWizard(wizards[j]));
  }
  similarListElement.appendChild(fragment);
  return similarListElement;
};

getFragment();

userDialog.querySelector('.setup-similar').classList.remove('hidden');
