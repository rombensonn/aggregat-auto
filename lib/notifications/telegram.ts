export type NotificationResult = {
  skipped: boolean;
  provider: string;
};

export async function sendTelegramNotification(
  text: string,
): Promise<NotificationResult> {
  const token = process.env.TELEGRAM_BOT_TOKEN;
  const chatId = process.env.TELEGRAM_CHAT_ID;

  if (!token || !chatId) {
    return { skipped: true, provider: "telegram" };
  }

  const response = await fetch(
    `https://api.telegram.org/bot${token}/sendMessage`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        chat_id: chatId,
        text,
        disable_web_page_preview: true,
      }),
    },
  );

  if (!response.ok) {
    throw new Error("Не удалось отправить заявку в Telegram");
  }

  return { skipped: false, provider: "telegram" };
}

