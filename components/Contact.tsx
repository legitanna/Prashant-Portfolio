'use client';

import { Mail, Linkedin, Github, Send, MapPin, ArrowRight } from 'lucide-react';
import { useState } from 'react';

export default function Contact() {
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();

  const response = await fetch(
    "https://formspree.io/f/mgobgvld",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        name: formState.name,
        email: formState.email,
        message: formState.message,
      }),
    }
  );

  if (response.ok) {
    setSubmitted(true);

    setFormState({
      name: "",
      email: "",
      message: "",
    });
  }
};

  const socials = [
    {
      icon: Linkedin,
      label: 'LinkedIn',
      sub: 'Connect professionally',
      href: "https://www.linkedin.com/in/prashantkarna/",
      color: 'hover:border-blue-500/40 hover:bg-blue-500/5',
      iconColor: 'text-blue-400',
    },
    {
      icon: Github,
      label: 'GitHub',
      sub: 'View my repositories',
      href: 'https://github.com/legitanna',
      color: 'hover:border-slate-400/40 hover:bg-slate-400/5',
      iconColor: 'text-slate-300',
    },
    {
      icon: Mail,
      label: 'Email',
      sub: 'Drop me a message',
      href: 'mailto:prashantkarna6@gmail.com',
      color: 'hover:border-cyan-500/40 hover:bg-cyan-500/5',
      iconColor: 'text-cyan-400',
    },
  ];

  return (
    <section id="contact" className="section-padding">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-xs font-medium text-blue-400 tracking-widest uppercase mb-3">Get In Touch</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Let&apos;s Work Together</h2>
          <p className="text-slate-400 max-w-xl mx-auto">
            Open to Data Analyst, Power BI Developer and Business Intelligence roles where I can help teams turn data into clear, decision-ready reporting.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-10">
          {/* Left — socials + info */}
          <div className="space-y-6">
            <div className="glass rounded-2xl p-6 border border-white/5">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                <span className="text-sm text-green-400 font-medium">Available for Opportunities</span>
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Prashant Karna</h3>
              <p className="text-slate-400 text-sm mb-4">Data Analyst · Power BI Developer · 7+ Years Experience</p>
              <div className="flex items-center gap-2 text-xs text-slate-500">
                <MapPin className="w-3.5 h-3.5" />
                <span>Ahmedabad, India · Open to Remote, Hybrid & Onsite</span>
              </div>
            </div>

            <div className="space-y-3">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex items-center gap-4 p-4 glass rounded-xl border border-white/5 ${s.color} transition-all duration-200 group`}
                >
                  <div className={`w-9 h-9 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center`}>
                    <s.icon className={`w-4.5 h-4.5 ${s.iconColor}`} />
                  </div>
                  <div className="flex-1">
                    <div className="text-sm font-medium text-white">{s.label}</div>
                    <div className="text-xs text-slate-500">{s.sub}</div>
                  </div>
                  <ArrowRight className="w-4 h-4 text-slate-600 group-hover:text-slate-400 group-hover:translate-x-1 transition-all" />
                </a>
              ))}
            </div>
          </div>

          {/* Right — form */}
          <div className="glass rounded-2xl p-6 border border-white/5">
            {submitted ? (
              <div className="flex flex-col items-center justify-center h-full text-center py-8">
                <div className="w-14 h-14 rounded-full bg-green-500/15 border border-green-500/30 flex items-center justify-center mb-4">
                  <Send className="w-6 h-6 text-green-400" />
                </div>
                <h3 className="text-lg font-bold text-white mb-2">Message Sent Successfully!</h3>
<p className="text-sm text-slate-400">
  Thank you for reaching out. I&apos;ll get back to you as soon as possible.
</p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-4 text-sm text-blue-400 hover:underline"
                >
                  Send another
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <h3 className="text-base font-semibold text-white mb-5">Send a Message</h3>

                <div>
                  <label className="block text-xs font-medium text-slate-400 mb-1.5">Name</label>
                  <input
                    type="text"
                    required
                    value={formState.name}
                    onChange={(e) => setFormState((p) => ({ ...p, name: e.target.value }))}
                    placeholder="Your name"
                    className="w-full px-4 py-3 text-sm bg-white/5 border border-white/10 rounded-xl text-white placeholder-slate-600 focus:outline-none focus:border-blue-500/50 focus:bg-blue-500/5 transition-all"
                  />
                </div>

                <div>
                  <label className="block text-xs font-medium text-slate-400 mb-1.5">Email</label>
                  <input
                    type="email"
                    required
                    value={formState.email}
                    onChange={(e) => setFormState((p) => ({ ...p, email: e.target.value }))}
                    placeholder="your@email.com"
                    className="w-full px-4 py-3 text-sm bg-white/5 border border-white/10 rounded-xl text-white placeholder-slate-600 focus:outline-none focus:border-blue-500/50 focus:bg-blue-500/5 transition-all"
                  />
                </div>

                <div>
                  <label className="block text-xs font-medium text-slate-400 mb-1.5">Message</label>
                  <textarea
                    required
                    rows={5}
                    value={formState.message}
                    onChange={(e) => setFormState((p) => ({ ...p, message: e.target.value }))}
                    placeholder="Tell me about the opportunity or project..."
                    className="w-full px-4 py-3 text-sm bg-white/5 border border-white/10 rounded-xl text-white placeholder-slate-600 focus:outline-none focus:border-blue-500/50 focus:bg-blue-500/5 transition-all resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-500 text-white font-medium rounded-xl transition-all duration-200 hover:shadow-lg hover:shadow-blue-600/25"
                >
                  Send Message <Send className="w-4 h-4" />
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
