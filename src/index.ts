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
    StartScreen.render();
  }
}

class Dom {
  static button(tpl: TemplateButton): HTMLElement {
    const button = document.createElement('button');
    button.textContent = tpl.txt;
    button.addEventListener('click', function() {
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

class StartScreen {
  private static newGame(): void {
    console.log('lol');
  }
  static render(): void {
    App.clear();
    const app = document.getElementById('app');
    const title = Dom.p({txt: 'Rpg'});
    const newGameBtn = Dom.button({
      txt: 'New game',
      click: StartScreen.newGame
    });
    app.appendChild(title);
    app.appendChild(newGameBtn);
  }
}

App.main();
