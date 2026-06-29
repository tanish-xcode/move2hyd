import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { Resend } from "https://esm.sh/resend@2.0.0";

const resend = new Resend(Deno.env.get("RESEND_API_KEY"));

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type",
};

interface MoveGuideRequest {
  name: string;
  email: string;
}

const handler = async (req: Request): Promise<Response> => {
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { name, email }: MoveGuideRequest = await req.json();

    console.log(`Sending Move Guide email to: ${email}, name: ${name || 'Not provided'}`);

    const displayName = name || "Future Hyderabadi";

    const emailResponse = await resend.emails.send({
      from: "Move2Hyderabad <onboarding@resend.dev>",
      to: [email],
      subject: "Your Complete Hyderabad Relocation Guide is Here! 📋",
      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <meta charset="utf-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
        </head>
        <body style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; padding: 20px;">
          <div style="text-align: center; margin-bottom: 30px;">
            <h1 style="color: #393765; margin-bottom: 10px;">Welcome, ${displayName}!</h1>
            <p style="font-size: 18px; color: #666;">Your journey to Hyderabad starts here</p>
          </div>
          
          <div style="background: linear-gradient(135deg, #393765 0%, #5a5490 100%); color: white; padding: 30px; border-radius: 12px; margin-bottom: 30px;">
            <h2 style="margin-top: 0;">Your Complete Hyderabad Relocation Guide</h2>
            <p>Thank you for your interest in relocating to Hyderabad! We've attached your comprehensive guide to help make this transition as smooth as possible.</p>
          </div>

          <div style="background: #e8f4f8; padding: 25px; border-radius: 12px; margin-bottom: 30px; text-align: center;">
            <h3 style="color: #393765; margin-top: 0;">📎 Your Guide is Attached!</h3>
            <p style="margin-bottom: 0;">Check the attachment below for your complete PDF guide covering everything you need to know about moving to Hyderabad.</p>
          </div>
          
          <div style="background: #f8f9fa; padding: 25px; border-radius: 12px; margin-bottom: 30px;">
            <h3 style="color: #393765; margin-top: 0;">What's Inside Your Guide:</h3>
            <ul style="padding-left: 20px;">
              <li style="margin-bottom: 10px;"><strong>Career Opportunities</strong> - Top employers, in-demand roles & salary benchmarks</li>
              <li style="margin-bottom: 10px;"><strong>Budget Planning</strong> - Cost of living breakdown for all lifestyles</li>
              <li style="margin-bottom: 10px;"><strong>Housing Guide</strong> - Neighborhoods, rent prices & property options</li>
              <li style="margin-bottom: 10px;"><strong>Education Directory</strong> - Schools, colleges & admission timelines</li>
              <li style="margin-bottom: 10px;"><strong>Healthcare & Safety</strong> - Top hospitals & emergency contacts</li>
              <li style="margin-bottom: 10px;"><strong>Transportation</strong> - Metro, buses, roads & commute tips</li>
              <li style="margin-bottom: 10px;"><strong>Lifestyle & Culture</strong> - Food, entertainment & local experiences</li>
            </ul>
          </div>
          
          <div style="text-align: center; margin-bottom: 30px;">
            <a href="https://move2hyderabad.lovable.app" style="display: inline-block; background: #393765; color: white; padding: 15px 30px; text-decoration: none; border-radius: 8px; font-weight: bold;">Explore More on Our Website</a>
          </div>
          
          <div style="background: #fff3cd; padding: 20px; border-radius: 12px; margin-bottom: 30px; border-left: 4px solid #ffc107;">
            <h4 style="margin-top: 0; color: #856404;">Pro Tip</h4>
            <p style="margin-bottom: 0; color: #856404;">Use our interactive "Compare & Explore" tool on the website to find the perfect neighborhood based on your budget, commute preferences, and lifestyle needs!</p>
          </div>
          
          <div style="text-align: center; padding-top: 20px; border-top: 1px solid #eee; color: #888; font-size: 14px;">
            <p>This email was sent by Move2Hyderabad, an ASBL initiative.</p>
            <p>Questions? Just reply to this email - we're here to help!</p>
          </div>
        </body>
        </html>
      `,
      attachments: [
        {
          filename: "Your_Complete_Guide_to_Moving_to_Hyderabad.pdf",
          path: "https://move2hyderabad.lovable.app/documents/hyderabad-move-guide.pdf",
        },
      ],
    });

    console.log("Email sent successfully:", emailResponse);

    return new Response(JSON.stringify({ success: true, data: emailResponse }), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
        ...corsHeaders,
      },
    });
  } catch (error: any) {
    console.error("Error in send-move-guide function:", error);
    return new Response(
      JSON.stringify({ error: error.message }),
      {
        status: 500,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );
  }
};

serve(handler);
