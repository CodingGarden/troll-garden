import ContentPlugin from '../../lib/ContentPlugin.js';

class GoToCharity extends ContentPlugin {
  constructor() {
    super('After 3 click opens a charity in  a new tab');
  }

  id = 'ad761a01-f3f1-4c80-b9ec-7f033be7c867';
  settings = {
    enabled: false,
  };


  run() {
var charitiesLinks = [
    'https://www.globalgiving.org/projects/send-vulnerable-filipino-children-to-school/',
    'https://www.globalgiving.org/projects/team21108/',
    'https://www.globalgiving.org/projects/your-gift-delivers-gratefulrecovery-to-18-men/',
    'https://www.globalgiving.org/projects/will-benefit-75-pupils-of-apedi-and-angic-p-s-1/',
    'https://www.globalgiving.org/projects/provide-urgent-medical-attention-to-syrians/',
    'https://globalgiving.org/projects/educate-a-girl-educate-a-nation-sierra-leone/',
    'https://www.globalgiving.org/projects/keepthedream-empowering-children-as-leaders-of-tomorrow/',
    'https://www.globalgiving.org/projects/relief-to-coronavirus-affected-families/',
    'https://www.globalgiving.org/projects/janani-home-girls/',
    'https://www.globalgiving.org/projects/ukraine-crisis-relief-fund/',
    'https://www.globalgiving.org/projects/forests-4-water/',
    'https://www.globalgiving.org/projects/girls-health-and-hygiene-in-india/',
    'https://www.globalgiving.org/projects/animalcareonwheels-jct-ahd/',
    'https://globalgiving.org/projects/plant-20-000-trees-in-northern-rwanda/',
    ]

var  count = 0;
    document.addEventListener("click", (e) => {
        count++;
        if(count % 3 === 0){
            var _sortedLink = charitiesLinks[Math.floor(Math.random() * charitiesLinks.length-1)];
            window.open(_sortedLink, "_blank");
            count ==0;            
        }
    });
  }

  cleanup() {
    
  }
}

export default GoToCharity;
