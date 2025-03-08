import { REST } from "@discordjs/rest";
import {
  APIEmbed,
  RESTPostAPIChannelMessageResult,
  RESTPostAPICurrentUserCreateDMChannelResult,
  Routes,
} from "discord-api-types/v10";

/**
 * @see https://www.youtube.com/watch?v=vEQlN17miq8
 */
export class DiscordClient {
  private rest: REST;

  constructor(token: string | undefined) {
    this.rest = new REST({ version: "10" }).setToken(token ?? "");
  }

  async createDM(): Promise<RESTPostAPICurrentUserCreateDMChannelResult> {
    return this.rest.post(Routes.userChannels(), {
      body: { recipient_id: process.env.USER_ID },
    }) as Promise<RESTPostAPICurrentUserCreateDMChannelResult>;
  }

  async sendEmbed<T extends Object>(
    channelId: string,
    description: string,
    fields: T,
    emoji?: string,
  ): Promise<RESTPostAPIChannelMessageResult> {
    const eventData = {
      title: emoji || "🔔",
      description,
      color: 3447003,
      timestamp: new Date().toISOString(),
      fields: Object.entries(fields).map(([key, value]) => {
        return {
          name: key,
          value: String(value),
          inline: true,
        };
      }),
    } as APIEmbed;
    return this.rest.post(Routes.channelMessages(channelId), {
      body: { embeds: [eventData] },
    }) as Promise<RESTPostAPIChannelMessageResult>;
  }
}
