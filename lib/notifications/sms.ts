import type { NotificationResult } from "./telegram";

export async function sendSmsNotification(
  text: string,
): Promise<NotificationResult> {
  const apiKey = process.env.SMS_PROVIDER_API_KEY;
  const to = process.env.SMS_TO_PHONE;

  if (!apiKey || !to) {
    return { skipped: true, provider: "sms" };
  }

  // Provider adapter point: connect SMS.ru, SMS Aero or another SMS provider
  // here. Keep the function signature stable so the API route does not depend
  // on a concrete vendor.
  console.info("SMS notification adapter is not configured for a provider", {
    to,
    length: text.length,
  });

  return { skipped: true, provider: "sms" };
}

