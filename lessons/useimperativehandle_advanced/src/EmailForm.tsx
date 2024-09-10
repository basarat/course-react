import { forwardRef, useImperativeHandle, useRef } from 'react';

export type EmailFormProps = {
  subject: string,
  setSubject: (value: string) => void,
  body: string,
  setBody: (value: string) => void,
};

export type EmailFormHandle = {
  focusSubject: () => void,
  focusBody: () => void,
};

export const EmailForm = forwardRef(
  function EmailForm(props: EmailFormProps, ref: React.Ref<EmailFormHandle>) {
    const subjectRef = useRef<HTMLInputElement>(null);
    const bodyRef = useRef<HTMLTextAreaElement>(null);

    useImperativeHandle(ref, () => ({
      focusSubject: () => subjectRef.current?.focus(),
      focusBody: () => bodyRef.current?.focus(),
    }));

    return (
      <>
        <label htmlFor="subject">Subject</label>
        <input id="subject" ref={subjectRef}
          value={props.subject}
          onChange={(e) => props.setSubject(e.target.value)}
        />
        <label htmlFor="body">Body</label>
        <textarea id="body" ref={bodyRef}
          value={props.body}
          onChange={(e) => props.setBody(e.target.value)}
        />
      </>
    );
  }
);