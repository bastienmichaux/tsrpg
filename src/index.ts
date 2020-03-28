interface TemplateP {
  txt: string;
}

interface TemplateButton {
  txt: string;
  click: () => any;
}

interface Character {
  name: string;
  age: number;
  class: string;
  strength: number;
  dexterity: number;
  intelligence: number;
  willpower: number;
}

class App {
  static clear(): void {
    const app = document.getElementById('app');
    while (app.firstChild) app.removeChild(app.firstChild);
  }
  static main(): void {
    App.clear();
    AdventureView.render();
  }
}

class Dom {
  static button(tpl: TemplateButton): HTMLElement {
    const button = document.createElement('button');
    button.textContent = tpl.txt;
    button.addEventListener('click', function () {
      tpl.click();
    });
    return button;
  }
  static p(tpl: TemplateP): HTMLElement {
    const p = document.createElement('p');
    p.textContent = tpl.txt;
    return p;
  }
}

class NavComponent {
  private static toggleInventoryView(): void {
    InventoryView.render();
  }
  private static toggleCharacterView(): void {
    CharacterView.render();
  }
  private static toggleDiaryView(): void {
    DiaryView.render();
  }
  private static toggleTravelView(): void {
    TravelView.render();
  }
  private static toggleAdventureView(): void {
    AdventureView.render();
  }
  private static toggleSettingsView(): void {
    SettingsView.render();
  }
  static render(): HTMLElement {
    const component = document.createElement('div');
    component.appendChild(Dom.button({ txt: 'Adventure', click: NavComponent.toggleAdventureView }));
    component.appendChild(Dom.button({ txt: 'Inventory', click: NavComponent.toggleInventoryView }));
    component.appendChild(Dom.button({ txt: 'Character', click: NavComponent.toggleCharacterView }));
    component.appendChild(Dom.button({ txt: 'Diary', click: NavComponent.toggleDiaryView }));
    component.appendChild(Dom.button({ txt: 'Travel', click: NavComponent.toggleTravelView }));
    component.appendChild(Dom.button({ txt: 'Settings', click: NavComponent.toggleSettingsView }));
    return component;
  }
}

class InventoryView {
  static render(): void {
    App.clear();
    const app = document.getElementById('app');
    app.appendChild(NavComponent.render());
    app.appendChild(Dom.p({ txt: 'InventoryView' }));
    app.appendChild(Dom.p({ txt: 'Add party component here' }));
    app.appendChild(Dom.p({ txt: 'Add basic stats here' }));
    app.appendChild(Dom.p({ txt: 'Display equipped items (choose slots)' }));
    app.appendChild(Dom.p({ txt: 'log component' }));
    app.appendChild(Dom.p({ txt: 'Quick items/weapons' }));
    app.appendChild(Dom.p({ txt: 'Display items in backpack (do this realistically?)' }));
    app.appendChild(Dom.p({ txt: 'Display thrown items / ground' }));
  }
}

class CharacterView {
  private static pc: Character = {
    name: 'The Dude',
    age: 21,
    class: 'Carpet hoarder',
    strength: 10,
    dexterity: 10,
    intelligence: 10,
    willpower: 10
  };
  static render(): void {
    App.clear();
    const app = document.getElementById('app');
    app.appendChild(NavComponent.render());
    app.appendChild(Dom.p({
      txt: `${this.pc.name}, ${this.pc.age}, ${this.pc.class}`
    }));
    app.appendChild(Dom.p({ txt: `Strength: ${this.pc.strength}` }));
    app.appendChild(Dom.p({ txt: `Dexterity: ${this.pc.dexterity}` }));
    app.appendChild(Dom.p({ txt: `Intelligence: ${this.pc.intelligence}` }));
    app.appendChild(Dom.p({ txt: `Willpower: ${this.pc.willpower}` }));
    app.appendChild(Dom.p({ txt: 'experience' }));
    app.appendChild(Dom.p({ txt: 'health' }));
    app.appendChild(Dom.p({ txt: 'damage/defenses' }));
    app.appendChild(Dom.p({ txt: 'todo: effects of attributes' }));
    app.appendChild(Dom.p({ txt: 'other effects' }));
  }
}

class TravelView {
  static render(): void {
    App.clear();
    const app = document.getElementById('app');
    app.appendChild(NavComponent.render());
    app.appendChild(Dom.p({ txt: 'TravelView' }));
    app.appendChild(Dom.p({ txt: 'Display a list of travel locations here: name, apprx travel duration' }));
    app.appendChild(Dom.p({ txt: 'Obviously, check the character can travel before' }));
    app.appendChild(Dom.p({ txt: 'And clicking a destination will open a TravelOptions view' }));
  }
}

class DiaryView {
  static render(): void {
    App.clear();
    const app = document.getElementById('app');
    app.appendChild(NavComponent.render());
    app.appendChild(Dom.p({ txt: 'DiaryView' }));
    app.appendChild(Dom.p({ txt: 'List of quests/jobs' }));
    app.appendChild(Dom.p({ txt: 'Known locations/monsters' }));
    app.appendChild(Dom.p({ txt: 'personal notes?' }));
  }
}

class SettingsView {
  static render(): void {
    App.clear();
    const app = document.getElementById('app');
    app.appendChild(NavComponent.render());
    app.appendChild(Dom.p({ txt: 'SettingsView' }));
    app.appendChild(Dom.p({ txt: 'Stats' }));
    app.appendChild(Dom.p({ txt: 'Restore saved game?' }));
    app.appendChild(Dom.p({ txt: 'Modify some settings' }));
  }
}

class AdventureView {
  static render(): void {
    App.clear();
    const app = document.getElementById('app');
    app.appendChild(NavComponent.render());
    app.appendChild(Dom.p({ txt: 'AdventureView' }));
    app.appendChild(Dom.p({ txt: 'Party component' }));
    app.appendChild(Dom.p({ txt: 'date, time, weather' }));
    app.appendChild(Dom.p({ txt: 'location' }));
    app.appendChild(Dom.p({ txt: 'log component' }));
    app.appendChild(Dom.p({ txt: 'location content (interactibles)' }));
  }
}

class StartView {
  private static newGame(): void {
    console.log('lol');
  }
  static render(): void {
    App.clear();
    const app = document.getElementById('app');
    const title = Dom.p({ txt: 'Rpg' });
    const newGameBtn = Dom.button({
      txt: 'New game',
      click: StartView.newGame
    });
    app.appendChild(title);
    app.appendChild(newGameBtn);
  }
}

App.main();
