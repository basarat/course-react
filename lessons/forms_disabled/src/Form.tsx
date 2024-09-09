export type FormProps = {
  /** Automatically prevents the default browser reload behavior */
  onSubmit: () => void,
  children?: React.ReactNode,
}

export const Form: React.FC<FormProps> = ({ onSubmit, children }) => (
  <form
    onSubmit={
      (e) => {
        /** Prevent submit from reloading the page */
        e.preventDefault();
        onSubmit();
      }
    }>
    {children}
  </form>
);