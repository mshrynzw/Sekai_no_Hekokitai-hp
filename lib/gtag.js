// Google Analyticsの設定
export const GA_TRACKING_ID = process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID

// PVを測定する
export const pageview = (path) => {
  window.gtag('config', GA_TRACKING_ID, {
    page_path: path,
  })
}

// GAイベントを発生させる
export const event = ({ action, category, label, value }) => {
  window.gtag('event', action, {
    event_category: category,
    event_label: label,
    value: value
  })
}
