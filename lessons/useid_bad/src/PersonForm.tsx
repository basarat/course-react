
export function PersonForm() {
  return (
    <div>
      <label htmlFor={'firstName'}>First Name</label>
      <div>
        <input id={'firstName'} type="text" />
      </div>
      <label htmlFor={'lastName'}>Last Name</label>
      <div>
        <input id={'lastName'} type="text" />
      </div>
    </div>
  );
}