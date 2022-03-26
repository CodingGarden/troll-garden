import ContentPlugin from '../../lib/ContentPlugin.js';

class AcceptOurPies extends ContentPlugin {
  constructor() {
    super('Add an "Accept our pies" dialog to every page');
  }

  id = 59;

  settings = {
    enabled: false,
  };

  run() {
    let dialog = document.createElement('dialog')
    let styles = document.createElement('style')

    styles.innerHTML = `
    dialog {
      font-family: sans-serif;
      position: fixed;
      bottom: 0;
      width: 100%;
      border: none;
      outline: 2px solid;
    }
    dialog article {
      max-width: 400px;
      margin: 0 auto;
      display: flex;
      flex-direction: column;
    }
    
    dialog h1 {
      margin: 0;
    }
    
    dialog footer {
      align-self: end;
    }
    
    dialog button {
        border: none;
        outline: 1px solid #aaa;
        padding: .5rem 1rem;
        margin-inline-start: 1rem;
        border-radius: 4px;
    }
    
    button:active {
        background: #ddd;
    }
    `
    dialog.innerHTML = `
      <article>
        <h1>Pies</h1>
        <p>This website uses pies in order to offer you the most relevant information. Please accept pies for optimal performance</p>
        <footer>
            <button class="secondary" onClick="this.closest('dialog')?.close()">Accept minimum</button>
            <button onClick="this.closest('dialog')?.close()">Yes, I accept</button>
        </footer>
      </article>
    `
    dialog.open = true
    document.body.appendChild(styles)
    document.body.appendChild(dialog)
  }

  cleanup() {
    
  }
}

export default AcceptOurPies;
