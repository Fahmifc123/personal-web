import { NextResponse } from "next/server";

// Python Backend URL
const PYTHON_BACKEND_URL = process.env.PYTHON_BACKEND_URL || "http://43.134.70.75:8101";

export async function POST(req: Request) {
  try {
    const { messages } = await req.json();

    // Forward request to Python backend
    const response = await fetch(`${PYTHON_BACKEND_URL}/chat`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ messages }),
    });

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));
      throw new Error(errorData.error || `Backend error: ${response.status}`);
    }

    const data = await response.json();
    return NextResponse.json({ content: data.content });
  } catch (error: any) {
    console.error("Proxy Error:", error);
    return NextResponse.json(
      { 
        error: "Failed to get response from AI", 
        details: error.message || "Unknown error"
      },
      { status: 500 }
    );
  }
}
