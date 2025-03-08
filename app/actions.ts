"use server";

import { DiscordClient } from "@/lib/discord";

export const sendDiscordNotification = async <T extends object>(
  description: string,
  fields: T,
  emoji: string,
): Promise<void> => {
  const discord = new DiscordClient(process.env.DISCORD_BOT_TOKEN);
  await discord.sendEmbed(process.env.CHANNEL_ID!, description, fields, emoji);
};
