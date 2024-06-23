import { useState } from 'react';
import axios from 'axios';
import { EmailResponse, User, ErrorResponse } from '../types';
import { PlusIcon, MinusIcon } from "@heroicons/react/20/solid";
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import { Alert } from "@/components/ui/alert"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

const AdminPage = () => {
  const [emailId, setEmailId] = useState('');
  const [userId, setUserId] = useState('');
  const [drafterPrompt, setDrafterPrompt] = useState('');
  const [sources, setSources] = useState<string[]>(['']);
  const [registerEmail, setRegisterEmail] = useState('');
  const [response, setResponse] = useState<EmailResponse | User[] | ErrorResponse | null>(null);

  const handleSendEmail = async () => {
    try {
      const res = await axios.get<EmailResponse>(`http://127.0.0.1:8000/send_email/${emailId}`);
      setResponse(res.data);
    } catch (error) {
      console.error('Error sending email:', error);
      setResponse({ error: 'Error sending email' });
    }
  };

  const handleGetUsers = async () => {
    try {
      const res = await axios.get<User[]>('http://127.0.0.1:8000/users');
      setResponse(res.data);
    } catch (error) {
      console.error('Error fetching users:', error);
      setResponse({ error: 'Error fetching users' });
    }
  };

  const handleRegisterUser = async () => {
    try {
      const res = await axios.post<EmailResponse>('http://127.0.0.1:8000/register', { email: registerEmail });
      setResponse(res.data);
    } catch (error) {
      console.error('Error registering user:', error);
      setResponse({ error: 'Error registering user' });
    }
  };

  const handleUpdateUser = async () => {
    const nonEmptySources = sources.filter(source => source.trim() !== '');
    try {
      const res = await axios.put<EmailResponse>(`http://127.0.0.1:8000/users/${userId}`, {
        drafter_prompt: drafterPrompt,
        sources: nonEmptySources.join('|')
      });
      setResponse(res.data);
    } catch (error) {
      console.error('Error updating user:', error);
      setResponse({ error: 'Error updating user' });
    }
  };

  const handleSourceChange = (index: number, value: string) => {
    const newSources = [...sources];
    newSources[index] = value;
    setSources(newSources);
  };

  const handleAddSource = () => {
    setSources([...sources, '']);
  };

  const handleRemoveSource = (index: number) => {
    setSources(sources.filter((_, i) => i !== index));
  };

  return (
    <div className="min-h-screen p-8 text-left">
      <Card className='border-0 shadow-transparent max-w-lg'>
        <CardHeader className='text-left'>
          <CardTitle>Admin Page</CardTitle>
          <CardDescription>Manage the application</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="mb-4">
            <Button onClick={handleGetUsers}>Get All Users</Button>
          </div>

          <Label>Send email:</Label>
          <div className="mb-4 flex">
            <Input
              value={emailId}
              onChange={(e) => setEmailId(e.target.value)}
              className="mt-1"
              placeholder='ID'
            />
            <Button onClick={handleSendEmail} className="ml-4 mt-1">Send Email</Button>
          </div>
          
          <Label>Register Email:</Label>
          <div className="mb-10 flex">
            <Input
              value={registerEmail}
              onChange={(e) => setRegisterEmail(e.target.value)}
              className="mt-1"
              placeholder='example@email.com'
            />
            <Button onClick={handleRegisterUser} className="mt-1 ml-4">Register New User</Button>
          </div>

          <CardTitle className='mb-4'>Edit User</CardTitle>
          <div className="mb-4">
            <Label>User ID:</Label>
            <Input
              value={userId}
              onChange={(e) => setUserId(e.target.value)}
              className="mt-3"
            />
            
            <Label>Drafter Prompt:</Label>
            <Input
              value={drafterPrompt}
              onChange={(e) => setDrafterPrompt(e.target.value)}
              className="mt-3"
            />

            <div className='flex justify-between mt-3'>
              <Label>Sources:</Label>
              <PlusIcon className="h-5 w-5" aria-hidden="true" onClick={handleAddSource} />
            </div>
            {sources.map((source, index) => (
              <div key={index} className="flex items-center mt-1">
                <Input
                  value={source}
                  onChange={(e) => handleSourceChange(index, e.target.value)}
                  className="flex-1"
                />
                <MinusIcon onClick={() => handleRemoveSource(index)} className="h-5 w-5 text-red-500 ml-4" />
              </div>
            ))}
            <Button onClick={handleUpdateUser} className="mt-4 bg-green-500 text-white">
              Update User
            </Button>
          </div>
        </CardContent>
        <CardFooter>
          {response && (
            <Alert variant="default" className="mt-4">
              <pre>{JSON.stringify(response, null, 2)}</pre>
            </Alert>
          )}
        </CardFooter>
      </Card>
    </div>
  );
};

export default AdminPage;
