import { NextRequest, NextResponse } from "next/server";

export const POST = async (req: NextRequest) => {
  const formData = await req.json();
  // const data = await formData?.json();
  console.log(formData);
  try {
    const response = await fetch(
      "https://hooks.airtable.com/workflows/v1/genericWebhook/appdm3xTVIsSxPXX2/wflbGLDjJ0bYLypMc/wtr9P66VKB1D6PumF",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      }
    );
    if (response.status === 200) {
      return new NextResponse(null, {
        status: 200,
      });
    }
  } catch (error) {
    console.log("error submitting formdata to airtable", error);
  }
};
