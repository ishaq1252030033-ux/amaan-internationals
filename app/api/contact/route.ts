import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { name, email, phone, company, country, productInterest, otherProduct, quantity, message } = body

    // Validate required fields
    if (!name || !email || !phone || !message) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      )
    }

    // Format the email content
    const emailSubject = `New Inquiry from ${name} - Amaan Agro International`
    const emailBody = `
New Contact Form Submission

Contact Information:
- Name: ${name}
- Email: ${email}
- Phone: ${phone}
${company ? `- Company: ${company}` : ''}
${country ? `- Country/Location: ${country}` : ''}

Product Interest: ${productInterest || 'Not specified'}
${otherProduct ? `Other Product: ${otherProduct}` : ''}
${quantity ? `Quantity Required: ${quantity}` : ''}

Message:
${message}

---
This email was sent from the Amaan Agro International website contact form.
    `.trim()

    // Send email to contact@amaanagroint.com
    let emailSent = false

    // Option 1: Using EmailJS (if configured via environment variables)
    if (process.env.EMAILJS_SERVICE_ID && process.env.EMAILJS_TEMPLATE_ID && process.env.EMAILJS_PUBLIC_KEY) {
      try {
        // Try to import EmailJS (package needs to be installed: npm install @emailjs/nodejs)
        const emailjsModule = await import('@emailjs/nodejs').catch(() => null)
        
        if (emailjsModule && emailjsModule.default) {
          await emailjsModule.default.send(
            process.env.EMAILJS_SERVICE_ID,
            process.env.EMAILJS_TEMPLATE_ID,
            {
              to_email: 'contact@amaanagroint.com',
              to_name: 'Amaan Agro International',
              from_name: name,
              from_email: email,
              phone: phone,
              company: company || 'N/A',
              country: country || 'N/A',
              product_interest: productInterest || 'Not specified',
              other_product: otherProduct || 'N/A',
              quantity: quantity || 'N/A',
              message: message,
              subject: emailSubject,
            },
            {
              publicKey: process.env.EMAILJS_PUBLIC_KEY,
            }
          )
          emailSent = true
          console.log('✅ Email sent successfully to contact@amaanagroint.com via EmailJS')
        }
      } catch (emailError: any) {
        // If EmailJS package is not installed, this is expected
        if (emailError?.code !== 'MODULE_NOT_FOUND') {
          console.error('❌ EmailJS error:', emailError)
        }
      }
    }

    // Log email details (for development/debugging)
    // In production, ensure EmailJS or another email service is configured
    if (!emailSent) {
      console.log('📧 === NEW INQUIRY (Email service not configured) ===')
      console.log('To: contact@amaanagroint.com')
      console.log('Subject:', emailSubject)
      console.log('Body:', emailBody)
      console.log('==================================================')
      console.log('⚠️  Configure EmailJS or another email service to send emails.')
      console.log('    See SETUP.md for instructions.')
    }
    
    // Note: For production, configure one of these email services:
    // - EmailJS (recommended, see SETUP.md)
    // - SendGrid (requires API key)
    // - Nodemailer with SMTP
    // - AWS SES
    // - Resend API

    return NextResponse.json(
      { 
        success: true, 
        message: 'Your inquiry has been submitted successfully. We will get back to you soon.' 
      },
      { status: 200 }
    )
  } catch (error) {
    console.error('Contact form error:', error)
    return NextResponse.json(
      { error: 'Failed to submit inquiry. Please try again later.' },
      { status: 500 }
    )
  }
}

