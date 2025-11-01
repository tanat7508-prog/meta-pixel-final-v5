export default function handler(req, res) {
  res.status(200).json({
    status: "ok",
    message: "Proxy endpoint active and working properly.",
    timestamp: Date.now()
  });
}
