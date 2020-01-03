declare module "@capacitor/core" {
  interface PluginRegistry {
    wxchat: wxchatPlugin;
  }
}

export interface wxchatPlugin {
  echo(options: { value: string }): Promise<{value: string}>;
}
