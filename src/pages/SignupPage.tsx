import { useState } from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { cn } from "@/lib/utils";
import { PlusCircle, MinusCircle } from 'lucide-react';
import axios from "axios"
import { toast, Toaster } from "sonner"
import { useNavigate, useParams } from 'react-router-dom';

const presetSetups = [
  {
    id: "tech-ai",
    title: "Tech & AI",
    emoji: "🧑🏻‍💻",
    websites: [
      "news.ycombinator.com",
      "dev.to",
      "blog.google/technology/ai/",
      "huyenchip.com/blog/",
      "discord.com/category/engineering",
      "magazine.sebastianraschka.com/archive",
      "techcrunch.com"
    ],
    prompt: "I'm interested in: software engineering, problem solving at scale, algorithms, hacking, system design, AI, deep learning, machine learning, new architectures or models, applications of AI, pragmatic AI research"
  },
  {
    id: "finance",
    title: "Finance",
    emoji: "💰",
    websites: [
      "marketwatch.com",
      "investopedia.com",
      "seekingalpha.com",
      "morningstar.com",
      "finance.yahoo.com",
      "cnbc.com/markets/",
      "fool.com"
    ],
    prompt: "I'm interested in: Market trends and analysis, Investment strategies, Stock market insights, Financial technology (FinTech), Economic policies and their impact on markets, Personal finance and wealth management, Cryptocurrency and blockchain technologies"
  },
  {
    id: "science",
    title: "Science",
    emoji: "🧬",
    websites: [
      "nationalgeographic.com/science/",
      "newscientist.com",
      "popsci.com",
      "livescience.com",
      "sciencenews.org",
      "discovermagazine.com"
    ],
    prompt: "I'm interested in: Breakthrough scientific discoveries, Space exploration and astrophysics, Environmental science and sustainability, Biotechnology and genetic research, Neuroscience and cognitive science, Physics and quantum mechanics, Medical advancements and health science"
  }
];

const SignupPage = () => {
  const { subscription_code } = useParams();

  if (subscription_code === undefined || subscription_code === null) {
    return (
      <h1>Wrong or expired link. Please request support at: redazionelofi@gmail.com</h1>
    )
  }

  const [selectedSetup, setSelectedSetup] = useState<string | null>(null);
  const [customWebsites, setCustomWebsites] = useState(['']);
  const [customPrompt, setCustomPrompt] = useState('');
  const [activeTab, setActiveTab] = useState('preset');
  const navigate = useNavigate()

  const handleAddWebsite = () => {
    setCustomWebsites([...customWebsites, '']);
  };

  const handleRemoveWebsite = (index: number) => {
    const newWebsites = customWebsites.filter((_, i) => i !== index);
    setCustomWebsites(newWebsites);
  };

  const handleWebsiteChange = (index: number, value: any) => {
    const newWebsites = [...customWebsites];
    newWebsites[index] = value;
    setCustomWebsites(newWebsites);
  };

  const isFormValid = () => {
    if (activeTab === 'preset') {
      return selectedSetup !== null;
    } else {
      return customWebsites.every(website => website.trim() !== '') && customPrompt.trim() !== '';
    }
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    try {
      if (!isFormValid()) {
        console.log("Please fill in all required fields.");
        return;
      }

      let payload;
      if (activeTab === 'preset') {
        const setup = presetSetups.find(s => s.id === selectedSetup);

        if (!setup) return

        payload = {
          drafter_prompt: setup.prompt,
          sources: setup.websites.join('|')
        };
      } else {
        payload = {
          drafter_prompt: customPrompt,
          sources: customWebsites.join('|')
        };
      }

      console.log("Sending payload to backend:", payload);
      await axios.post(
        `${import.meta.env.VITE_API_URL}/users/${subscription_code}`,
        payload,
        {
          headers: {
            'Content-Type': 'application/json',
          },
        });
      toast.success("Sign up completed! 🚀")
      navigate("/thank-you")
    }

    catch (e) {
      toast.error("Mh..you got an error, try again")
      console.log(e)
    }

  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 p-4">
      <Toaster position="bottom-right" richColors />
      <div className="w-full max-w-2xl">
        <h1 className="text-3xl font-bold mb-6 text-center">Start using Redact ✨</h1>
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="preset">Preset Setups</TabsTrigger>
            <TabsTrigger value="custom">Custom Setup</TabsTrigger>
          </TabsList>

          <TabsContent value="preset">
            <form onSubmit={handleSubmit}>
              <div className="space-y-4">
                {presetSetups.map((setup) => (
                  <Card
                    key={setup.id}
                    className={cn(
                      "cursor-pointer transition-all relative",
                      selectedSetup === setup.id
                        ? "ring-2 ring-primary shadow-lg"
                        : "hover:ring-2 hover:ring-primary"
                    )}
                    onClick={() => setSelectedSetup(setup.id)}
                  >
                    <div className="absolute top-5 right-5 text-2xl">{setup.emoji}</div>
                    <CardHeader>
                      <CardTitle>{setup.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <CardDescription>
                        <strong>Websites:</strong> {setup.websites.join(', ')}
                      </CardDescription>
                      <CardDescription className="mt-2">
                        <strong>Prompt:</strong> {setup.prompt}
                      </CardDescription>
                    </CardContent>
                  </Card>
                ))}
              </div>
              <Button type="submit" className="w-full mt-4" disabled={!isFormValid()}>Sign Up</Button>
            </form>
          </TabsContent>

          <TabsContent value="custom">
            <form onSubmit={handleSubmit}>
              <Card>
                <CardHeader>
                  <CardTitle>
                    Custom setup 🧪
                  </CardTitle>
                  <CardDescription>Create your personalized Redact experience</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <Label>Websites</Label>
                    {customWebsites.map((website, index) => (
                      <div key={index} className="flex items-center mt-2">
                        <Input
                          placeholder="Enter website URL"
                          value={website}
                          onChange={(e) => handleWebsiteChange(index, e.target.value)}
                          className="flex-grow"
                        />
                        {index === customWebsites.length - 1 ? (
                          <Button type="button" variant="ghost" onClick={handleAddWebsite} className="ml-2">
                            <PlusCircle className="h-4 w-4" />
                          </Button>
                        ) : (
                          <Button type="button" variant="ghost" onClick={() => handleRemoveWebsite(index)} className="ml-2">
                            <MinusCircle className="h-4 w-4" />
                          </Button>
                        )}
                      </div>
                    ))}
                  </div>
                  <div>
                    <Label htmlFor="prompt">Preference Prompt</Label>
                    <Textarea
                      id="prompt"
                      placeholder="Enter your preference prompt..."
                      value={customPrompt}
                      onChange={(e) => setCustomPrompt(e.target.value)}
                      className="mt-1"
                    />
                  </div>
                </CardContent>
                <CardFooter>
                  <Button type="submit" className="w-full" disabled={!isFormValid()}>Sign Up</Button>
                </CardFooter>
              </Card>
            </form>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default SignupPage;
