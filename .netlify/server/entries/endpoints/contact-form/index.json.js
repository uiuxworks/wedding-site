const post = async ({ request }) => {
  const fd = await request.formData();
  const name = fd.get("name");
  const extra = fd.get("extra");
  const status = fd.get("status");
  const AIRTABLE_BASE_ID = "appJd8TRw3TQrx3IS";
  const AIRTABLE_TOKEN = "keyEGzhrExYBBcK76";
  const AIRTABLE_URL = `https://api.airtable.com/v0/${AIRTABLE_BASE_ID}/submissions`;
  let data = {
    records: [
      {
        fields: {
          name,
          extra,
          status
        }
      }
    ]
  };
  const res = await fetch(AIRTABLE_URL, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${AIRTABLE_TOKEN}`,
      "Content-Type": "application/json"
    },
    body: JSON.stringify(data)
  });
  if (res.ok) {
    return {
      status: 200,
      body: {
        message: "success"
      }
    };
  } else {
    return {
      status: 404,
      body: {
        message: "failed"
      }
    };
  }
};
export { post };
