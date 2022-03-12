import { fetch } from "undici";
import Client from "./Client";
import { RESTPostAPIApplicationCommandsJSONBody } from "discord-api-types";
interface ApplicationCommandManager {
  client: Client;
}
/**
 * This class is used to manage and register new application commands(slash commands)
 * @param client: Client
 * **/
class ApplicationCommandManager {
  constructor(client: Client) {
    this.client = client;
  }
  /**
  *Register slash commands globally
  *@param commands: APIApplicationCommand[]
  @returns Promise<void>
  * **/
  async register(commands: RESTPostAPIApplicationCommandsJSONBody[]) {
    Promise.all(
      commands.map(async (command) => {
        const res = await fetch(
          `https://discord.com/api/v10/applications/${this.client.user.id}/commands`,
          {
            body: JSON.stringify(command),
            headers: {
              "User-Agent": "undici/tej.js",
              Authorization: `Bot ${this.client.token}`,
              "Content-Type": "application/json",
            },
            method: "POST",
          }
        );
        console.log(res);
        const resp = (await res.json()) as any;
        // console.log(resp);
        if (res.status !== 200) {
          throw new Error(resp.status + " " + resp.message);
        }
      })
    );
  }
}
export default ApplicationCommandManager;
