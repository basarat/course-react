import { useRef, useState } from 'react';
import { EmailForm, EmailFormHandle } from './EmailForm';

export default function App() {
  const [subject, setSubject] = useState('');
  const [body, setBody] = useState('');

  const emailFormRef = useRef<EmailFormHandle>(null);

  return (
    <>
      <EmailForm
        subject={subject}
        setSubject={setSubject}
        body={body}
        setBody={setBody}
        ref={emailFormRef}
      />

      <button onClick={() => emailFormRef.current?.focusSubject()}>Focus Subject</button>
      <button onClick={() => emailFormRef.current?.focusBody()}>Focus Body</button>
    </>
  );
}