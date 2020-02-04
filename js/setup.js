var userDialog = document.querySelector('.setup').classList.remove('hidden');
document.querySelector('.setup-similar').classList.remove('hidden');
var similarListElement = document.querySelector('.setup-similar-list');
var similarWizardTemplate = document.querySelector('#similar-wizard-template')
    .content
    .querySelector('.setup-similar-item');


var wizards = [
  {
    name: 'name ',
    coatColor: 'coat',
    eyesColor: 'eyes'
  },

  {
    name: 'name ',
    coatColor: 'coat',
    eyesColor: 'eyes'
  },

  {
    name: 'name ',
    coatColor: 'coat',
    eyesColor: 'eyes'
  },

  {
    name: 'name ',
    coatColor: 'coat',
    eyesColor: 'eyes'
  }
];

var WIZARD_NAMES = ["Иван", "Хуан Себастьян", "Мария", "Кристоф", "Виктор", "Юлия", "Люпита", "Вашингтон"
];
var WIZARD_SURNAMES = ["да Марья", "Верон", "Мирабелла", "Вальц", "Онопко", "Топольницкая", "Нионго", "Ирвинг"
];
var WIZARD_COATS = ["rgb (101, 137, 164)", "rgb (241, 43, 107)", "rgb (146, 100, 161)", "rgb (56, 159, 117)", "rgb (215, 210, 55)", "rgb (0, 0, 0)"
];
var WIZARD_EYES = ["black", "red", "blue", "yellow", "green"
];

for (var i = 0; i < wizards.length; i++) {
  var wizardElement = similarWizardTemplate.cloneNode(true);
  
  
  similarListElement.appendChild(wizardElement);
};