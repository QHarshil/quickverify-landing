import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  CheckCircle,
  Code,
  Download,
  FileText,
  Github,
  Layers,
  Smartphone,
  Shield,
  Zap,
} from "lucide-react";

const features = [
  {
    icon: Shield,
    title: "Secure Biometrics",
    description: "Face ID on iOS and BiometricPrompt on Android with a shared TypeScript API.",
    bullets: ["Face ID & Touch ID", "BiometricPrompt fallback", "Graceful error handling"],
  },
  {
    icon: Smartphone,
    title: "Document Capture",
    description: "Vision-powered edge detection on iOS plus high-resolution camera capture on Android.",
    bullets: ["Vision rectangle detection", "Native overlays", "File persistence"],
  },
  {
    icon: Layers,
    title: "Multi-screen Example",
    description: "React Native demo with home, action, and results screens showcasing every SDK call.",
    bullets: ["Stateful flow", "Real event logging", "Retry-friendly UI"],
  },
  {
    icon: Code,
    title: "Typed SDK",
    description: "Singleton wrapper, config helpers, and React hook utilities written in TypeScript.",
    bullets: ["Full type coverage", "Event helpers", "Composer-friendly API"],
  },
  {
    icon: Zap,
    title: "Ready for Portfolios",
    description: "Jest tests, package metadata, and build outputs included for quick verification.",
    bullets: ["ts-jest unit tests", "npm prepare build", "Package-locks committed"],
  },
];

const codeExamples = [
  {
    title: "Full Verification",
    description: "Biometric + document capture",
    code: `const sdk = QuickVerifySDK.getInstance({
  enableFaceID: true,
});

const result = await sdk.performVerification();
if (result.success) {
  console.log('Document:', result.documentImageUri);
}`,
  },
  {
    title: "Biometric Only",
    description: "Platform-specific prompts",
    code: `const result = await authenticateWithBiometric('Continue');
if (!result.success) {
  Alert.alert(result.error ?? 'Try again');
}`,
  },
  {
    title: "Document Capture",
    description: "Direct camera invocation",
    code: `const result = await captureDocument();
if (result.success) {
  console.log('Saved to', result.imageUri);
}`,
  },
];

const architectureColumns = [
  {
    title: "Native Modules",
    description: "Bridges implemented once per platform.",
    code: `ios/QuickVerifySDK/
├─ Core/
│  ├─ QuickVerifyBiometricManager.swift
│  └─ QuickVerifyDocumentCapture.swift
├─ Bridge/QuickVerifySDK.m
└─ Models/VerificationResult.swift

android/src/main/java/com/quickverify/
├─ QuickverifySdkModule.kt
├─ QuickverifyBiometricActivity.kt
└─ QuickverifySdkPackage.kt`,
  },
  {
    title: "TypeScript SDK",
    description: "Shared API surface consumed by React Native.",
    code: `src/
├─ index.ts            # SDK + events
├─ hooks/useVerification.ts
└─ types/index.d.ts

example/
├─ App.tsx             # router + state
└─ screens/            # Home, Flow, Results`,
  },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="sticky top-0 z-50 border-b border-border/60 bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <Shield className="h-6 w-6 text-primary" />
            <span className="text-xl font-bold">QuickVerify SDK</span>
          </div>
          <nav className="flex items-center gap-6 text-sm font-medium text-muted-foreground">
            <a href="#features" className="transition-colors hover:text-foreground">
              Features
            </a>
            <a href="#docs" className="transition-colors hover:text-foreground">
              Documentation
            </a>
            <a href="#examples" className="transition-colors hover:text-foreground">
              Examples
            </a>
            <a href="#architecture" className="transition-colors hover:text-foreground">
              Architecture
            </a>
            <Button asChild size="sm">
              <a href="https://github.com/QHarshil/quickverify-sdk" target="_blank" rel="noreferrer">
                <Github className="mr-2 h-4 w-4" /> GitHub
              </a>
            </Button>
          </nav>
        </div>
      </header>

      <main>
        <section className="container grid gap-12 py-20 md:grid-cols-2 md:py-28">
          <div className="space-y-8">
            <div className="space-y-4">
              <Badge variant="secondary">v1.0.0 • iOS + Android</Badge>
              <h1 className="text-4xl font-bold leading-tight md:text-5xl">
                Native identity verification <span className="text-primary">in one SDK</span>
              </h1>
              <p className="text-lg text-muted-foreground">
                A portfolio-ready project that ships Swift + Kotlin bridges, TypeScript helpers, and a
                React Native sample that proves the flow works end to end.
              </p>
            </div>
            <div className="flex flex-wrap gap-4">
              <Button size="lg" asChild>
                <a href="#docs">
                  <Download className="mr-2 h-5 w-5" /> Get Started
                </a>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <a href="https://github.com/QHarshil/quickverify-sdk" target="_blank" rel="noreferrer">
                  <Github className="mr-2 h-5 w-5" /> View Repository
                </a>
              </Button>
            </div>
            <div className="flex flex-wrap gap-8 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-green-500" /> iOS 13+ / Android 13+
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-green-500" /> TypeScript SDK
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-green-500" /> MIT License
              </div>
            </div>
          </div>
          <Card className="border-2">
            <CardHeader>
              <CardTitle>Quick Example</CardTitle>
              <CardDescription>Same API on both platforms</CardDescription>
            </CardHeader>
            <CardContent>
              <pre className="rounded-xl bg-muted p-5 text-sm">
{`import { QuickVerifySDK } from '@quickverify/react-native-sdk';

const sdk = QuickVerifySDK.getInstance({ enableFaceID: true });

const result = await sdk.performVerification();
if (result.success) {
  console.log('Document saved at', result.documentImageUri);
}`}
              </pre>
            </CardContent>
          </Card>
        </section>

        <section id="features" className="bg-muted/30 py-20">
          <div className="container space-y-16">
            <div className="text-center space-y-4">
              <h2 className="text-3xl font-bold">What the project actually ships</h2>
              <p className="text-muted-foreground">
                Every feature below exists in the repository—no filler, no AI fluff.
              </p>
            </div>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {features.map(feature => (
                <Card key={feature.title}>
                  <CardHeader>
                    <feature.icon className="mb-4 h-12 w-12 text-primary" />
                    <CardTitle>{feature.title}</CardTitle>
                    <CardDescription>{feature.description}</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-2 text-sm">
                    {feature.bullets.map(item => (
                      <div key={item} className="flex items-center gap-2 text-muted-foreground">
                        <CheckCircle className="h-4 w-4 text-green-500" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section id="docs" className="container space-y-10 py-20">
          <div className="text-center space-y-4">
            <h2 className="text-3xl font-bold">Installation</h2>
            <p className="text-muted-foreground">
              Published as an npm package with native code bundled for iOS and Android.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            <Card>
              <CardHeader>
                <CardTitle>1. Install SDK</CardTitle>
              </CardHeader>
              <CardContent>
                <pre className="rounded-lg bg-muted p-4 text-sm">
{`npm install @quickverify/react-native-sdk
cd ios && pod install`}
                </pre>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>2. iOS Setup</CardTitle>
                <CardDescription>Add usage strings for biometrics + camera.</CardDescription>
              </CardHeader>
              <CardContent>
                <pre className="rounded-lg bg-muted p-4 text-sm">
{`NSCameraUsageDescription
NSFaceIDUsageDescription`}
                </pre>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>3. Android Setup</CardTitle>
                <CardDescription>Grant camera permission in your manifest.</CardDescription>
              </CardHeader>
              <CardContent>
                <pre className="rounded-lg bg-muted p-4 text-sm">
{`<uses-permission
  android:name="android.permission.CAMERA" />`}
                </pre>
              </CardContent>
            </Card>
          </div>
        </section>

        <section id="examples" className="bg-muted/30 py-20">
          <div className="container space-y-10">
            <div className="text-center space-y-4">
              <h2 className="text-3xl font-bold">Code Examples</h2>
              <p className="text-muted-foreground">Copy/paste snippets lifted from the repo.</p>
            </div>
            <div className="grid gap-8 md:grid-cols-3">
              {codeExamples.map(example => (
                <Card key={example.title}>
                  <CardHeader>
                    <CardTitle>{example.title}</CardTitle>
                    <CardDescription>{example.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <pre className="rounded-lg bg-background/80 p-4 text-sm shadow-inner">
{example.code}
                    </pre>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section id="architecture" className="container space-y-10 py-20">
          <div className="text-center space-y-4">
            <h2 className="text-3xl font-bold">Architecture Overview</h2>
            <p className="text-muted-foreground">
              Cleanly separated native layers plus a typed JavaScript surface.
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-2">
            {architectureColumns.map(column => (
              <Card key={column.title} className="border-2">
                <CardHeader>
                  <CardTitle>{column.title}</CardTitle>
                  <CardDescription>{column.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <pre className="rounded-lg bg-muted p-4 text-xs leading-relaxed">
{column.code}
                  </pre>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <section className="container py-20">
          <Card className="border-primary/30 bg-gradient-to-br from-primary/5 to-purple-500/10">
            <CardContent className="flex flex-col items-center gap-6 py-12 text-center">
              <h2 className="text-3xl font-bold">Ready to dive deeper?</h2>
              <p className="max-w-3xl text-muted-foreground">
                Clone the repo, run the example app, and inspect the Swift/Kotlin bridges. Everything in
                this landing page maps directly to a file you can open.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Button size="lg" asChild>
                  <a href="https://github.com/QHarshil/quickverify-sdk" target="_blank" rel="noreferrer">
                    <Github className="mr-2 h-5 w-5" /> GitHub
                  </a>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <a href="https://github.com/QHarshil/quickverify-sdk/tree/main/docs" target="_blank" rel="noreferrer">
                    <FileText className="mr-2 h-5 w-5" /> Read Docs
                  </a>
                </Button>
              </div>
            </CardContent>
          </Card>
        </section>
      </main>

      <footer className="border-t border-border/60 py-10 text-center text-sm text-muted-foreground">
        <p>© {new Date().getFullYear()} QuickVerify. Built for real mobile portfolios.</p>
      </footer>
    </div>
  );
}
