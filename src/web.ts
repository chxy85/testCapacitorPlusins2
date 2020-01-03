import { WebPlugin } from '@capacitor/core';
import { wxchatPlugin } from './definitions';

export class wxchatWeb extends WebPlugin implements wxchatPlugin {
  constructor() {
    super({
      name: 'wxchat',
      platforms: ['web']
    });
  }

  async echo(options: { value: string }): Promise<{value: string}> {
    console.log('ECHO', options);
    return options;
  }
}

const wxchat = new wxchatWeb();

export { wxchat };

import { registerWebPlugin } from '@capacitor/core';
registerWebPlugin(wxchat);
