/**
 * Brochure Download Modal with Email Gateway
 * Captures lead information before allowing brochure download
 * Works client-side (no backend required for static deployment)
 */

import { useState } from "react";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Download, Loader2 } from "lucide-react";

const BROCHURE_URL = "/docs/ALFA-NERO-Brochure.pdf";

interface BrochureDownloadModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export default function BrochureDownloadModal({ open, onOpenChange }: BrochureDownloadModalProps) {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !name) return;

    setIsSubmitting(true);

    // Track brochure download event in Google Analytics
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', 'brochure_download', {
        event_category: 'engagement',
        event_label: 'ALFA NERO Brochure',
        user_email: email,
        user_name: name,
      });
    }

    // Open brochure PDF directly
    window.open(BROCHURE_URL, '_blank');

    setSubmitted(true);
    setIsSubmitting(false);

    // Reset form after 3 seconds and close modal
    setTimeout(() => {
      setEmail("");
      setName("");
      setSubmitted(false);
      onOpenChange(false);
    }, 3000);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="text-2xl font-serif">Download ALFA NERO Brochure</DialogTitle>
          <DialogDescription>
            Please provide your details to receive the comprehensive yacht brochure.
          </DialogDescription>
        </DialogHeader>

        {!submitted ? (
          <form onSubmit={handleSubmit} className="space-y-4 mt-4">
            <div className="space-y-2">
              <Label htmlFor="name">Full Name *</Label>
              <Input
                id="name"
                type="text"
                placeholder="Your full name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                disabled={isSubmitting}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="email">Email Address *</Label>
              <Input
                id="email"
                type="email"
                placeholder="your.email@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                disabled={isSubmitting}
              />
            </div>

            <Button
              type="submit"
              className="w-full"
              disabled={isSubmitting || !email || !name}
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Processing...
                </>
              ) : (
                <>
                  <Download className="mr-2 h-4 w-4" />
                  Download Brochure
                </>
              )}
            </Button>

            <p className="text-xs text-muted-foreground text-center">
              By downloading, you agree to receive information about ALFA NERO.
              Your information will be kept confidential.
            </p>
          </form>
        ) : (
          <div className="py-8 text-center space-y-4">
            <div className="mx-auto w-12 h-12 rounded-full bg-green-100 dark:bg-green-900 flex items-center justify-center">
              <Download className="h-6 w-6 text-green-600 dark:text-green-400" />
            </div>
            <div>
              <h3 className="font-semibold text-lg">Thank you!</h3>
              <p className="text-sm text-muted-foreground mt-1">
                Your brochure download has started. Check your downloads folder.
              </p>
            </div>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
}
