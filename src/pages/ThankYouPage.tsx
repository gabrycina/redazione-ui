import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CheckCircle } from 'lucide-react';

const ThankYouPage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 p-4">
      <Card className="w-full max-w-md">
        <CardHeader className="text-center">
          <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-green-100">
            <CheckCircle className="h-6 w-6 text-green-600" />
          </div>
          <CardTitle className="text-2xl font-bold">Thank You for Signing Up!</CardTitle>
          <CardDescription>Your account has been successfully set up.</CardDescription>
        </CardHeader>
        <CardContent className="text-center">
          <p className="text-lg mb-4">
            We're excited to have you on board. Your first personalized newsletter will be delivered to your inbox the next morning.
          </p>
          <p className="text-sm text-gray-600">
            Keep an eye on your email for the latest updates tailored just for you.
          </p>
        </CardContent>
        <CardFooter className="flex justify-center">
          <Button onClick={() => window.location.href = '/'}>
            Return to Homepage
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
};

export default ThankYouPage;
