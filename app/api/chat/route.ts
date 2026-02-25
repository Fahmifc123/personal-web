import { NextResponse } from "next/server";

// Force dynamic rendering for this route
export const dynamic = 'force-dynamic';
export const runtime = 'nodejs';

// Python Backend URL
const PYTHON_BACKEND_URL = process.env.PYTHON_BACKEND_URL || "http://43.134.70.75:8101";

export async function POST(req: Request) {
  try {
    const { messages } = await req.json();
    console.log("Received messages:", messages);
    console.log("Connecting to Python backend:", PYTHON_BACKEND_URL);

    // Forward request to Python backend with timeout
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 8000); // 8s timeout

    const response = await fetch(`${PYTHON_BACKEND_URL}/chat`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ messages }),
      signal: controller.signal,
    });

    clearTimeout(timeoutId);
    console.log("Python backend response status:", response.status);

    if (!response.ok) {
      const errorText = await response.text();
      console.error("Backend error response:", errorText);
      throw new Error(`Backend error: ${response.status} - ${errorText}`);
    }

    const data = await response.json();
    console.log("Python backend response:", data);
    return NextResponse.json({ content: data.content });
  } catch (error: any) {
    console.error("Proxy Error:", error);
    return NextResponse.json(
      { 
        error: "Failed to get response from AI", 
        details: error.message || "Unknown error",
        backend_url: PYTHON_BACKEND_URL
      },
      { status: 500 }
    );
  }
}
