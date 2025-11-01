# Meta Pixel + Make.com Integration (Full Tracking Version)

This project sends marketing events (PageView, AddToCart, Purchase, etc.)
from the frontend to Make.com via webhook, then into Google Sheets.

## Deployment target
- Vercel (Static + Serverless Hybrid)

## Data sent per click
- event_name        (ex: "Purchase")
- event_time        (epoch seconds)
- url               (current page URL)
- product_name      (ex: "Sony WF-1000XM5")
- value             (ex: 8990)
- currency          ("THB")
- source            ("Website")
- platform          ("Meta Pixel + Make")

## Mapping to Google Sheets
Use these columns in your sheet (in this order):
1. วันที่        -> in Make, use {formatDate(addHours(now;7); "YYYY-MM-DD HH:mm:ss")}
2. Event         -> event_name
3. URL           -> url
4. สินค้า        -> product_name
5. มูลค่า        -> value
6. สกุลเงิน      -> currency
7. ช่องทาง       -> source
8. แพลตฟอร์ม     -> platform

## How to Deploy on Vercel
1. Upload this folder to GitHub as-is.
2. Go to vercel.com/new
3. Import the repo.
4. Click Deploy.

Generated at 2025-11-01 09:45:58
