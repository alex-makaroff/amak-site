"use strict";

module.exports = {
  async send(ctx) {
    const { name, phone, projectType } = ctx.request.body;

    if (!name || !phone || !projectType) {
      return ctx.badRequest("Missing required fields");
    }

    const token = process.env.TELEGRAM_BOT_TOKEN;
    const chatId = process.env.TELEGRAM_CHAT_ID;

    if (!token || !chatId) {
      strapi.log.error("Telegram credentials not configured");
      return ctx.internalServerError("Service unavailable");
    }

    const typeLabel = projectType === "web" ? "Сайт под ключ" : "Дизайн";

    const message = [
      `📩 *Новая заявка с сайта*`,
      ``,
      `👤 *Имя:* ${name}`,
      `📱 *Телефон:* ${phone}`,
      `📋 *Тип проекта:* ${typeLabel}`,
    ].join("\n");

    try {
      const response = await fetch(
        `https://api.telegram.org/bot${token}/sendMessage`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            chat_id: chatId,
            text: message,
            parse_mode: "Markdown",
          }),
        }
      );

      const result = await response.json();

      if (!result.ok) {
        strapi.log.error("Telegram API error:", result);
        return ctx.internalServerError("Failed to send message");
      }

      return ctx.send({ success: true });
    } catch (error) {
      strapi.log.error("Telegram send error:", error);
      return ctx.internalServerError("Failed to send message");
    }
  },
};
