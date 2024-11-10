const SSL_COMMERZ_VERIFY_URL =
  "https://sandbox.sslcommerz.com/gwprocess/v4/verify.php";

export async function verifyPayment(tran_id) {
  const store_id = process.env.SSLCOMMERZ_STORE_ID;
  const store_passwd = process.env.SSLCOMMERZ_STORE_PASSWORD;

  const payload = {
    store_id: store_id,
    store_passwd: store_passwd,

    tran_id: tran_id,
  };

  try {
    const res = await fetch(SSL_COMMERZ_VERIFY_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });
    const data = await res.json();
    if (data.status === "VALID") {
      return { status: "VALID", ...data };
    } else {
      return { status: "INVALID", message: data.failedreason };
    }
  } catch (error) {
    console.error("Error verifying payment:", error);
    return { status: "ERROR", message: "Failed to verify payment" };
  }
}
