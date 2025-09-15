const QRCode = require("qrcode");

/**
 * @param {string} text - unique identifier (user ID, provider ID)
 * @returns {Promise<string>} - QR code as base64 image URL
 */
const generateQRCode = async (text) => {
  try {
    const qrDataUrl = await QRCode.toDataURL(text);
    return qrDataUrl;
  } catch (err) {
    console.error("Error generating QR code:", err);
    throw err;
  }
};

module.exports = { generateQRCode };
