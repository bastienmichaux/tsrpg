interface TemplateP {
  txt: string;
}

interface TemplateButton {
  txt: string;
  click: () => any;
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
    const title = Dom.p({ txt: 'InventoryView' });
    app.appendChild(NavComponent.render());
    app.appendChild(title);
  }
}

class CharacterView {
  static render(): void {
    App.clear();
    const app = document.getElementById('app');
    app.appendChild(NavComponent.render());
    app.appendChild(Dom.p({ txt: 'CharacterView' }));
  }
}

class TravelView {
  static render(): void {
    App.clear();
    const app = document.getElementById('app');
    app.appendChild(NavComponent.render());
    app.appendChild(Dom.p({ txt: 'TravelView' }));
  }
}

class DiaryView {
  static render(): void {
    App.clear();
    const app = document.getElementById('app');
    app.appendChild(NavComponent.render());
    app.appendChild(Dom.p({ txt: 'DiaryView' }));
  }
}

class SettingsView {
  static render(): void {
    App.clear();
    const app = document.getElementById('app');
    app.appendChild(NavComponent.render());
    app.appendChild(Dom.p({ txt: 'SettingsView' }));
  }
}

class AdventureView {
  static render(): void {
    App.clear();
    const app = document.getElementById('app');
    app.appendChild(NavComponent.render());
    app.appendChild(Dom.p({ txt: 'AdventureView' }));
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
