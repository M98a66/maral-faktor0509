# فاکتور مارال

اپ اندروید (Capacitor). ساخت APK/AAB به‌صورت خودکار با GitHub Actions انجام می‌شود.

## ساخت
1. پروژه را در یک مخزن گیت‌هاب push کنید (شاخه main).
2. تب Actions ← «Android build» ← خروجی `maral-android`.
   - بدون کلید امضا: فقط `maral-debug.apk` (قابل نصب برای تست).
   - برای مارکت‌ها، در Settings ← Secrets این‌ها را بسازید: `KEYSTORE_BASE64`, `KEYSTORE_PASSWORD`, `KEY_ALIAS`, `KEY_PASSWORD`. آن‌وقت `maral-release.apk` (بازار، مایکت، …) و `maral-release.aab` (گوگل پلی) هم ساخته می‌شود.
   - ساخت کلید: `keytool -genkey -v -keystore ks.jks -alias maral -keyalg RSA -keysize 2048 -validity 10000` و سپس `base64 -w0 ks.jks`. کلید را نگه دارید؛ گم‌شدنش یعنی عدم امکان به‌روزرسانی اپ.

## رایگان / حرفه‌ای
رایگان: ۱۰ فاکتور و نشان «نسخه رایگان» روی خروجی. حرفه‌ای: نامحدود. کدهای فعال‌سازی: `node tools/gen-code.js 10`.
این کدگذاری آفلاین ساده است و قابل دور زدن؛ برای فروش جدی از پرداخت درون‌برنامه‌ای مارکت (Google Play Billing، پولاکی بازار، مایکت) استفاده کنید و `window.MaralBuy` را به آن وصل کنید.
